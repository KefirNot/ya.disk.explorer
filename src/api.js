import axios from 'axios';

const CATCH = x => x.response;

export default (token) => {
    const instance = axios.create({
        baseURL: 'https://cloud-api.yandex.net/v1/disk/',
        headers: { 'Authorization': `OAuth ${token}` },
    });

    return {
        getDiskInfo: () => instance.get('/').catch(CATCH),
        getDiskDir: path => instance.get('/resources', { params: { path } },).catch(CATCH),
    };
}