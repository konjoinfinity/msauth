import { UserAgentApplication, AuthResponse, AuthError } from 'msal';
import MsalConfig from './MsalConfig';
import IRequestConfiguration from "./IRequestConfiguration";

class UserInfo {
    accountAvailable: boolean;
    displayName: string;
    constructor() {
        this.displayName = "";
        this.accountAvailable = false;
    }
}

export default class MsalHandler {
    msalObj: UserAgentApplication;
    redirect: boolean;
    useStackLogging: boolean;

    // for handling a single instance of the handler, use getInstance() elsewhere
    static instance: MsalHandler;
    private static createInstance() {
        var a = new MsalHandler();
        return a;
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = this.createInstance();
        }
        return this.instance;
    }

    // default scopes from configuration
    private requestConfiguration: IRequestConfiguration = MsalConfig.defaultRequestConfiguration;

    // we want this private to prevent any external callers from directly instantiating, instead rely on getInstance()
    private constructor() {
        this.redirect = true;
        this.useStackLogging = false;
        const a = new UserAgentApplication(MsalConfig.config);

        a.handleRedirectCallback((error, response) => {
            if (response) {
                this.processLogin(response);
            }
            if (error) {
                console.error(error);
            }
        });
        this.msalObj = a;
    }

    public async login(redirect?: boolean, state?: string, scopes?: string[]) {
        if (state) {
            this.requestConfiguration.state = JSON.stringify({ appState: true, state });
        }
        if (redirect || this.redirect) {
            this.msalObj.loginRedirect(this.requestConfiguration);
        } else {
            try {
                var response = await this.msalObj.loginPopup(this.requestConfiguration);
                this.processLogin(response);
            } catch (e) {
                console.error(e);
            }
        }
    }

    public async acquireAccessToken(state?: string, redirect?: boolean, scopes?: string[]): Promise<String | null> {
        if (scopes) {
            this.requestConfiguration.scopes = scopes;
        }
        if (state) {
            this.requestConfiguration.state = JSON.stringify({ appState: true, state });
        }
        try {
            var token = await this.msalObj.acquireTokenSilent(this.requestConfiguration);
            return token.accessToken;
        } catch (e) {
            if (e instanceof AuthError) {
                console.error("acquireAccessToken: error: " + JSON.stringify(e));
                if (e.errorCode === "user_login_error" || e.errorCode === "consent_required" || e.errorCode === "interaction_required") { // todo: check for other error codes
                    this.login(redirect, state, this.requestConfiguration.scopes);
                }
            }
            console.error(e);
        }
        return null;
    }

    public getUserData(): UserInfo {
        var account = this.msalObj.getAccount();
        var u = new UserInfo();
        if (account) {
            u.accountAvailable = true;
            u.displayName = account.name;
        }
        return u;
    }

    public processLogin(response: AuthResponse | undefined) {
        if (!response) return;

        if (response.accountState) {
            try {
                var state = JSON.parse(response.accountState);
                if (state.appState) { // we had a redirect from another place in the app before the authentication request
                    window.location.pathname = state.state;
                }
            } catch {
                console.log("couldn't parse state - maybe not ours");
            }
        }
    }
}