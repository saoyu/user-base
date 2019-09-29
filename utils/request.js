import fetch from 'dva/fetch';

//请求
export default function request(url, options = {}) {
  if (options.method === 'POST' || options.method === 'PUT') {
    options.headers = {
      Accept: 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/json; charset=utf-8',
      ...options.headers,
    };
    // options.body = JSON.stringify(options.body);
  }
  return fetch(url, options).then(response => {
    const ret = response.json();
    console.log(ret);
    return ret;
  }).catch(e => {
    console.log(e);
  });

}
