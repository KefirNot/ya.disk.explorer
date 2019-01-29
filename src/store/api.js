import axios from 'axios';

export default (token) => {
    const instance = axios.create({
        baseURL: 'https://cloud-api.yandex.net/v1/disk/',
        headers: { 'Authorization': `OAuth ${token}` },
    });

    return {
        getStorageInfo: instance.get('/resources/files'),
    };
}