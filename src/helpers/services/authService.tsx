import { editProfile, gBody, loginData, userData } from '../other/types';
import * as Func from '../other/functions';
import { basicHeader } from '../other/config';
const API_URL = 'http://localhost:7000/api/auth/';

// Register user
//  1. the body needs to be sent as a formDat bc img is a file
const register = async (userData: userData) => {
  const body = new FormData();
  body.append('username', userData.username);
  body.append('password', userData.password);
  body.append('email', userData.email);
  body.append('img', userData.img);
  const url = API_URL + 'register';
  const method = 'POST';
  let res = await Func.req(url, body, method);
  const data: userData = await res.json();
  return await Func.tokenFunc('set', data);
};

const externalRegister = async (userData: gBody) => {
  const body = new FormData();
  body.append('username', userData.username);
  body.append('email', userData.email);
  body.append('img', userData.img);
  const url = API_URL + 'external-register';
  const method = 'POST';
  let res = await Func.req(url, body, method);
  const data: userData = await res.json();
  return await Func.tokenFunc('set', data);
};
const externalLogin = async (email: string) => {
  const url = API_URL + 'external-login';
  const method = 'POST';
  const body = JSON.stringify({ email: email });
  const headers = basicHeader;
  let res = await Func.req(url, body, method, headers);
  const userData: userData = await res.json();
  return await Func.tokenFunc('set', userData);
};
// Login user
const login = async (loginData: loginData) => {
  const url = API_URL + 'login';
  const method = 'POST';
  const body = JSON.stringify(loginData);
  const headers = basicHeader;
  let res = await Func.req(url, body, method, headers);
  const userData: userData = await res.json();
  return await Func.tokenFunc('set', userData);
};

// Logout user
const logout = () => {
  localStorage.removeItem('Authorization');
  if (sessionStorage.getItem('Admin') != undefined)
    sessionStorage.removeItem('Admin');
  return 'SUCCESS';
};
// Validate User Session
const getCredentials = async () => {
  const url = API_URL + 'cred';
  const method = 'GET';
  const body = undefined;
  let headers = Func.tokenFunc('get');
  let res = await Func.req(url, body, method, headers);
  const data = await res.json();
  console.log(data);
  return data;
};
const editCredentials = async (userData: editProfile) => {
  const url = API_URL + 'edit';
  const method = 'PUT';
  const body = new FormData();
  body.append('username', userData.username);
  body.append('img', userData.img);
  let headers = Func.tokenFunc('get');
  let res = await Func.req(url, body, method, headers);
  return await res.json();
};
const authService = {
  externalRegister,
  register,
  logout,
  externalLogin,
  login,
  getCredentials,
  editCredentials,
};

export default authService;
