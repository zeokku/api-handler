import axios from "axios";

//make TS typings ZeokkuAPI.d.ts

/*
params = { a: 1, b: 'b' };
path = 'C:/pathFolder'
console.log('get', (path, { params }));

//path is not printed for some reason

add hcaptcha for codes redeem
*/

const http = axios.create({
  baseURL: "https://api.zeokku.com/",
  responseType: "json",

  headers: {
    post: {
      "Content-Type": "application/json",
    },
    //Cookie: objToQuery(cookieContainer, "; ", "="),
  },

  withCredentials: true,
});

let baseHandler = {
  get(base, _interface, proxy) {
    //return Reflect.get(...arguments);
    let interfaceHandler = {
      get({ _interface }, _method) {
        return ({ version = 1, params = {}, ...body } = {}) => {
          let path = `/${_interface}/${_method}/v${version}`;

          if (_method.startsWith("get")) {
            Object.assign(params, body);

            return http.get(path, { params });
          } else {
            return http.post(path, body, { params });
          }
        };
      },
    };

    return new Proxy({ _interface }, interfaceHandler);
  },
};

export default ZeokkuAPI = new Proxy({}, baseHandler);

//usage:
//ZeokkuAPI.IPlayerService.login({ username, password })
