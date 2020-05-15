import CacheableLookup from 'cacheable-lookup';
import {Headers, Method} from 'got';
import {Delays} from 'got/dist/source/core/utils/timed-out';
import {URL, URLSearchParams} from 'url';
import CacheableRequest = require('cacheable-request');

export interface ProxyOptionsInterface {
    allowGetBody: boolean;
    context: object;
    decompress: boolean;
    followRedirect: boolean;
    http2: boolean;
    ignoreInvalidCookies: boolean;
    maxRedirects: number;
    method: Method;
    methodRewriting: boolean;
    password: string;
    prefixUrl: string;
    rejectUnauthorized: boolean;
    throwHttpErrors: boolean;
    timeout: Delays;
    username: string;
    cache?: string | CacheableRequest.StorageAdapter;
    dnsCache?: CacheableLookup;
    headers?: Headers;
    searchParams?: URLSearchParams;
}