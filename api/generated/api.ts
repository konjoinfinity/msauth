/* tslint:disable */
/* eslint-disable */
/**
 * Coding with JoeG Contact API
 * The API for the Contacts Application on Coding with JoeG
 *
 * The version of the OpenAPI document: v1
 * Contact: jguadagno@hotmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {number}
     * @memberof Address
     */
    addressId?: number;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    streetAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    secondaryAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    unit?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    state?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    postalCode?: string | null;
    /**
     * 
     * @type {AddressType}
     * @memberof Address
     */
    addressType?: AddressType;
}
/**
 * 
 * @export
 * @interface AddressType
 */
export interface AddressType {
    /**
     * 
     * @type {number}
     * @memberof AddressType
     */
    addressTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof AddressType
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressType
     */
    description?: string | null;
}
/**
 * 
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     * 
     * @type {number}
     * @memberof Contact
     */
    contactId?: number;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    middleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    birthday: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    anniversary?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {Array<Address>}
     * @memberof Contact
     */
    addresses?: Array<Address> | null;
    /**
     * 
     * @type {Array<Phone>}
     * @memberof Contact
     */
    phones?: Array<Phone> | null;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    fullName?: string | null;
}
/**
 * 
 * @export
 * @interface Phone
 */
export interface Phone {
    /**
     * 
     * @type {number}
     * @memberof Phone
     */
    phoneId?: number;
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    extension?: string | null;
    /**
     * 
     * @type {PhoneType}
     * @memberof Phone
     */
    phoneType?: PhoneType;
}
/**
 * 
 * @export
 * @interface PhoneType
 */
export interface PhoneType {
    /**
     * 
     * @type {number}
     * @memberof PhoneType
     */
    phoneTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof PhoneType
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PhoneType
     */
    description?: string | null;
}
/**
 * 
 * @export
 * @interface ProblemDetails
 */
export interface ProblemDetails {
    [key: string]: any | any;

    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    title?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProblemDetails
     */
    status?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    detail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    instance?: string | null;
}

/**
 * ContactsApi - axios parameter creator
 * @export
 */
export const ContactsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List all of the contacts currently available
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Contacts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a specific phone for a specific contact\\
         * @param {number} id The primary identifier of the contact
         * @param {number} addressId The primary identifier of the address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdAddressesAddressIdGet: async (id: number, addressId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('contactsIdAddressesAddressIdGet', 'id', id)
            // verify required parameter 'addressId' is not null or undefined
            assertParamExists('contactsIdAddressesAddressIdGet', 'addressId', addressId)
            const localVarPath = `/Contacts/{id}/addresses/{addressId}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"addressId"}}`, encodeURIComponent(String(addressId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets addresses for the contact
         * @param {number} id The primary identifier of the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdAddressesGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('contactsIdAddressesGet', 'id', id)
            const localVarPath = `/Contacts/{id}/addresses`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes the specified contact
         * @param {number} id The primary identifier for the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdDelete: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('contactsIdDelete', 'id', id)
            const localVarPath = `/Contacts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a specific contact from the contact manager
         * @param {number} id The primary identifier of the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('contactsIdGet', 'id', id)
            const localVarPath = `/Contacts/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets phone numbers for the contact
         * @param {number} id The primary identifier of the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdPhonesGet: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('contactsIdPhonesGet', 'id', id)
            const localVarPath = `/Contacts/{id}/phones`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a specific phone for the specified contact
         * @param {number} id The primary identifier of the contact
         * @param {number} phoneId The primary identifier of the phone number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdPhonesPhoneIdGet: async (id: number, phoneId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('contactsIdPhonesPhoneIdGet', 'id', id)
            // verify required parameter 'phoneId' is not null or undefined
            assertParamExists('contactsIdPhonesPhoneIdGet', 'phoneId', phoneId)
            const localVarPath = `/Contacts/{id}/phones/{phoneId}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"phoneId"}}`, encodeURIComponent(String(phoneId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Adds a contact to the contact manager
         * @param {Contact} [contact] A contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsPost: async (contact?: Contact, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Contacts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(contact, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Searches for a contact
         * @param {string} [firstname] The first name of the contact to search for
         * @param {string} [lastname] The last name of the contact to search for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsSearchGet: async (firstname?: string, lastname?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Contacts/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (firstname !== undefined) {
                localVarQueryParameter['firstname'] = firstname;
            }

            if (lastname !== undefined) {
                localVarQueryParameter['lastname'] = lastname;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContactsApi - functional programming interface
 * @export
 */
export const ContactsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContactsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary List all of the contacts currently available
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contactsGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Contact>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.contactsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a specific phone for a specific contact\\
         * @param {number} id The primary identifier of the contact
         * @param {number} addressId The primary identifier of the address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contactsIdAddressesAddressIdGet(id: number, addressId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Address>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.contactsIdAddressesAddressIdGet(id, addressId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets addresses for the contact
         * @param {number} id The primary identifier of the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contactsIdAddressesGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Address>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.contactsIdAddressesGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Deletes the specified contact
         * @param {number} id The primary identifier for the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contactsIdDelete(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.contactsIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a specific contact from the contact manager
         * @param {number} id The primary identifier of the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contactsIdGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contact>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.contactsIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets phone numbers for the contact
         * @param {number} id The primary identifier of the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contactsIdPhonesGet(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Phone>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.contactsIdPhonesGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a specific phone for the specified contact
         * @param {number} id The primary identifier of the contact
         * @param {number} phoneId The primary identifier of the phone number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contactsIdPhonesPhoneIdGet(id: number, phoneId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Phone>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.contactsIdPhonesPhoneIdGet(id, phoneId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Adds a contact to the contact manager
         * @param {Contact} [contact] A contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contactsPost(contact?: Contact, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contact>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.contactsPost(contact, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Searches for a contact
         * @param {string} [firstname] The first name of the contact to search for
         * @param {string} [lastname] The last name of the contact to search for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async contactsSearchGet(firstname?: string, lastname?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Contact>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.contactsSearchGet(firstname, lastname, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ContactsApi - factory interface
 * @export
 */
export const ContactsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContactsApiFp(configuration)
    return {
        /**
         * 
         * @summary List all of the contacts currently available
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsGet(options?: any): AxiosPromise<Array<Contact>> {
            return localVarFp.contactsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a specific phone for a specific contact\\
         * @param {number} id The primary identifier of the contact
         * @param {number} addressId The primary identifier of the address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdAddressesAddressIdGet(id: number, addressId: number, options?: any): AxiosPromise<Address> {
            return localVarFp.contactsIdAddressesAddressIdGet(id, addressId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets addresses for the contact
         * @param {number} id The primary identifier of the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdAddressesGet(id: number, options?: any): AxiosPromise<Array<Address>> {
            return localVarFp.contactsIdAddressesGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes the specified contact
         * @param {number} id The primary identifier for the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdDelete(id: number, options?: any): AxiosPromise<boolean> {
            return localVarFp.contactsIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a specific contact from the contact manager
         * @param {number} id The primary identifier of the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdGet(id: number, options?: any): AxiosPromise<Contact> {
            return localVarFp.contactsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets phone numbers for the contact
         * @param {number} id The primary identifier of the contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdPhonesGet(id: number, options?: any): AxiosPromise<Array<Phone>> {
            return localVarFp.contactsIdPhonesGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a specific phone for the specified contact
         * @param {number} id The primary identifier of the contact
         * @param {number} phoneId The primary identifier of the phone number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsIdPhonesPhoneIdGet(id: number, phoneId: number, options?: any): AxiosPromise<Phone> {
            return localVarFp.contactsIdPhonesPhoneIdGet(id, phoneId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Adds a contact to the contact manager
         * @param {Contact} [contact] A contact
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsPost(contact?: Contact, options?: any): AxiosPromise<Contact> {
            return localVarFp.contactsPost(contact, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Searches for a contact
         * @param {string} [firstname] The first name of the contact to search for
         * @param {string} [lastname] The last name of the contact to search for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contactsSearchGet(firstname?: string, lastname?: string, options?: any): AxiosPromise<Array<Contact>> {
            return localVarFp.contactsSearchGet(firstname, lastname, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ContactsApi - object-oriented interface
 * @export
 * @class ContactsApi
 * @extends {BaseAPI}
 */
export class ContactsApi extends BaseAPI {
    /**
     * 
     * @summary List all of the contacts currently available
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public contactsGet(options?: any) {
        return ContactsApiFp(this.configuration).contactsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a specific phone for a specific contact\\
     * @param {number} id The primary identifier of the contact
     * @param {number} addressId The primary identifier of the address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public contactsIdAddressesAddressIdGet(id: number, addressId: number, options?: any) {
        return ContactsApiFp(this.configuration).contactsIdAddressesAddressIdGet(id, addressId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets addresses for the contact
     * @param {number} id The primary identifier of the contact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public contactsIdAddressesGet(id: number, options?: any) {
        return ContactsApiFp(this.configuration).contactsIdAddressesGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes the specified contact
     * @param {number} id The primary identifier for the contact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public contactsIdDelete(id: number, options?: any) {
        return ContactsApiFp(this.configuration).contactsIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a specific contact from the contact manager
     * @param {number} id The primary identifier of the contact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public contactsIdGet(id: number, options?: any) {
        return ContactsApiFp(this.configuration).contactsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets phone numbers for the contact
     * @param {number} id The primary identifier of the contact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public contactsIdPhonesGet(id: number, options?: any) {
        return ContactsApiFp(this.configuration).contactsIdPhonesGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a specific phone for the specified contact
     * @param {number} id The primary identifier of the contact
     * @param {number} phoneId The primary identifier of the phone number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public contactsIdPhonesPhoneIdGet(id: number, phoneId: number, options?: any) {
        return ContactsApiFp(this.configuration).contactsIdPhonesPhoneIdGet(id, phoneId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Adds a contact to the contact manager
     * @param {Contact} [contact] A contact
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public contactsPost(contact?: Contact, options?: any) {
        return ContactsApiFp(this.configuration).contactsPost(contact, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Searches for a contact
     * @param {string} [firstname] The first name of the contact to search for
     * @param {string} [lastname] The last name of the contact to search for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsApi
     */
    public contactsSearchGet(firstname?: string, lastname?: string, options?: any) {
        return ContactsApiFp(this.configuration).contactsSearchGet(firstname, lastname, options).then((request) => request(this.axios, this.basePath));
    }
}


