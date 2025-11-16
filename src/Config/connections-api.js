import axios from 'axios';

export const connectionsApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});
export const setToken = token => {
  connectionsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  connectionsApi.defaults.headers.common.Authorization = ``;
};
