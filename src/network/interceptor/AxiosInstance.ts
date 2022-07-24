import axios from 'axios';

const getTokenFromRedux = (): string => {
  // return selectToken(store.getState())?.access_token;
  return ""
};

let AxiosInstance = axios.create({
  baseURL: "https://api-gameaccountpanel.darkube.app",
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use(
  async request => {
    try {
      const token = getTokenFromRedux();
      if (request.headers && request.url !== "/api/Auth") {
        request.headers.Authorization = token ? `Bearer ${token}` : '';
      }
      // console.log('request catched in interceptor', request);
      return request;
    } catch (err) {
      return err;
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default AxiosInstance;
