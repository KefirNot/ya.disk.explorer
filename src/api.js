import axios from 'axios';

export default (token) => {
    const instance = axios.create({
        baseURL: 'https://cloud-api.yandex.net/v1/disk/',
        headers: { 'Authorization': `OAuth ${token}` },
    });

    return {
        getDiskInfo: () => instance.get('/'),
        getDiskDir: path => instance.get('/resources', { params: { path } }),
    };
}