import axios from '../../../node_modules/axios/index';

const client = axios.create();

/*
    글로벌 설정 예시;

    // API 주소를 다른 곳으로 사용함
    client.defaults.baseURL = 'https://external-api-server.com/'

    ...

*/

export default client;
