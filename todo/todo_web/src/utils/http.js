import axios from 'axios';

if (process.env.NODE_ENV == 'development') {    
  axios.defaults.baseURL = 'http://127.0.0.1:3000';
} else if (process.env.NODE_ENV == 'production') {    
  axios.defaults.baseURL = 'https://www.production.com';
}

axios.defaults.timeout = 10000;

export function get(url,params) {
  let _url = url + params;
  return new Promise((resolve,reject)=>{
    axios
    .get(_url)
    .then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post(url,params={}) {
  return new Promise((resolve,reject)=>{
    axios
    .post(url,params)
    .then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
