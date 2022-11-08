import axios, { AxiosInstance } from 'axios'
// 리소스 접근 허용
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
// 서로 다른 도메인간 쿠키 전달 허용
// axios.defaults.withCredentials = true;
const http: AxiosInstance = axios.create()

export default http
