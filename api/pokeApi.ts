import axios from 'axios';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    params: {
        limit: 151,
        offset: 0
    }
});

export default pokeApi;