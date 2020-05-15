import CacheableLookup from 'cacheable-lookup';
import got, {Headers, Method} from 'got';
import {Delays} from 'got/dist/source/core/utils/timed-out';
import {URL, URLSearchParams} from 'url';
import {ProxyOptionsInterface} from './proxyInterface';
import CacheableRequest = require('cacheable-request');

class Proxy {
  execute = (
    allowGetBody: boolean,
    context: object,
    decompress: boolean,
    followRedirect: boolean,
    http2: boolean,
    ignoreInvalidCookies: boolean,
    maxRedirects: number,
    method: Method,
    methodRewriting: boolean,
    password: string,
    prefixUrl: string,
    rejectUnauthorized: boolean,
    throwHttpErrors: boolean,
    timeout: Delays,
    url: URL,
    username: string,
    cache?: string | CacheableRequest.StorageAdapter,
    dnsCache?: CacheableLookup,
    headers?: Headers,
    searchParams?: URLSearchParams
  ) => {
    let options: ProxyOptionsInterface = {
      allowGetBody,
      context,
      decompress,
      followRedirect,
      http2,
      ignoreInvalidCookies,
      maxRedirects,
      method,
      methodRewriting,
      password,
      prefixUrl,
      rejectUnauthorized,
      throwHttpErrors,
      timeout,
      username,
    };
    if (cache) {
      options.cache = cache;
    }
    if (dnsCache) {
      options.dnsCache = dnsCache;
    }
    if (headers) {
      options.headers = headers;
    }
    if (searchParams) {
      options.searchParams = searchParams;
    }
    return new Promise(async (resolve, reject) => {
      try {
        const {statusCode: number, body: unknown} = await got(url, options);
      } catch (error) {
        reject(error);
      }
    });
  };
}
