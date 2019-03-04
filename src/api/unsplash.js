import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 1ff5e57274b3f145e191ed34ede7b1dac3810800013b4bddea3da949d575c2b5'
    }
});