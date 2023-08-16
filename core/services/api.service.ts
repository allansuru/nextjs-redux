import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Altere para a URL da sua API

export const get = async <T>(endpoint: string): Promise<T> => {

    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
};

export const post = async <T>(endpoint: string, data: T): Promise<T> => {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
};

export const put = async <T>(endpoint: string, data: T): Promise<T> => {
    const response = await axios.put(`${BASE_URL}/${endpoint}`, data);
    return response.data;
};

export const del = async (endpoint: string): Promise<void> => {
    await axios.delete(`${BASE_URL}/${endpoint}`);
};
