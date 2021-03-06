"use strict";
// type Data = FormData | string | null;
// type Method = 'POST' | 'GET' | 'PATCH' | 'DELETE';
// type HeadersCustom = {
//   [key: string]: string
// } | Headers;
//
//
// interface Settings {
//   method?: Method;
//   headers?: HeadersCustom;
//   body?: Data;
//   mode?: 'cors' | 'no-cors';
//   cache?: 'no-store' | 'no-cache';
//   redirect?: 'follow';
//   referrer?: 'no-referrer';
//   credentials?: 'include' | 'same-origin' | 'omit';
//   signal?: AbortSignal;
// }
//
// type Options<U extends 'blob' | 'text' | 'json' | undefined> = {
//   type?: U;
//   action: string;
//   data?: Data;
//   method?: Method;
//   headers?: HeadersCustom;
// }
//
//
// interface TypedResponseJson<T = any> extends Response {
//   json<P = T>(): Promise<P>
// }
// const jsonFetch = <B>(...args: any): Promise<TypedResponseJson<B>> => {
//   return fetch.apply(window, args);
// };
//
//
// export function http(options: Options<'blob'>): Promise<Blob>;
// export function http(options: Options<'text'>): Promise<string>;
// export function http<T>(options: Options<'json' | undefined>): Promise<T>;
//
// export function http <T>(options: Options<'blob' | 'text' | 'json' | undefined>) {
//   const controller = new AbortController();
//   const signal = controller.signal;
//
//   const settings: Settings = {
//     method: 'GET',
//     body: null,
//     mode: 'cors',
//     cache: 'no-cache',
//     headers: new Headers({
//       ...options.headers
//     }),
//     // redirect: 'follow',
//     // referrer: 'no-referrer',
//     signal
//   };
//
//   if (options.data) {
//     settings.method = 'POST';
//     settings.body = options.data;
//   }
//
//   if (options.method) settings.method = options.method;
//
//
//   let returned: Promise<Blob | string | T>;
//
//   if (options.type === 'blob') {
//     returned = fetch(options.action, settings)
//       .then(response => {
//         if (!response.ok) throw response;
//         return response.blob();
//       })
//   } else if (options.type === 'text') {
//     returned = fetch(options.action, settings)
//       .then(response => {
//         if (!response.ok) throw response;
//         return response.text();
//       })
//   } else {
//     returned = jsonFetch<T>(options.action, settings)
//       .then(response => {
//         if (!response.ok) throw response;
//         return response.json<T>();
//       })
//   }
//
//   return [returned, controller];
// }
const style = document.createElement('style');
document.head.appendChild(style);
let setted = false;
const _set = () => {
    if (setted)
        return;
    document.documentElement.classList.remove('keyboard');
    style.innerHTML = '* {outline:none}';
    setted = true;
};
const _remove = (e) => {
    if (!setted)
        return;
    if (e && e.keyCode !== 9)
        return;
    document.documentElement.classList.add('keyboard');
    style.innerHTML = '';
    setted = false;
};
document.addEventListener('mousedown', _set);
document.addEventListener('touchstart', _set);
document.addEventListener('keydown', _remove);
