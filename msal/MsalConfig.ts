const MsalConfig = {
    config: {
        // b2c configuration
        auth: {
            clientId: "65da946f-2005-41e2-834e-ecf0e8dfd9c5", // TODO: Replace with your client id
            authority: "https://login.microsoftonline.com/common",
            redirectUri: "http://localhost:19006/Auth",
            navigateToLoginRequestUrl: false,
            validateAuthority: false
        },
        cache: {
            cacheLocation: "sessionStorage" // session storage is more secure, but prevents single-sign-on from working. other option is 'localStorage'
        } as const
    },
    // this is marked as the default, as the scopes for individual pages may be different
    // TODO: Replace these scopes with the scopes for your API.
    defaultRequestConfiguration: {
        scopes: ["api://65da946f-2005-41e2-834e-ecf0e8dfd9c5/contacts/contacts.Delete",
            "api://65da946f-2005-41e2-834e-ecf0e8dfd9c5/contacts/contacts.List",
            "api://65da946f-2005-41e2-834e-ecf0e8dfd9c5/contacts/contacts.Save",
            "api://65da946f-2005-41e2-834e-ecf0e8dfd9c5/contacts/contacts.Search",
            "api://65da946f-2005-41e2-834e-ecf0e8dfd9c5/contacts/contacts.View"]
    }
}
export default MsalConfig;