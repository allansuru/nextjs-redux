import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:3001';

export const get = async <T>(endpoint: string): Promise<T> => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        toast.error(`Error: ${error.message}`);
        throw error;
    }
};

export const post = async <T>(endpoint: string, data: T): Promise<T> => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
        toast.success('Successfully added');
        return response.data;
    } catch (error) {
        toast.error(`Error: ${error.message}`);
        throw error;
    }
};

export const put = async <T>(endpoint: string, data: T): Promise<T> => {
    try {
        const response = await axios.put(`${BASE_URL}/${endpoint}`, data);
        toast.info('Successfully updated');
        return response.data;
    } catch (error) {
        toast.error(`Error: ${error.message}`);
        throw error;
    }
};

export const del = async (endpoint: string): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/${endpoint}`);
        toast.success('Successfully deleted');
    } catch (error) {
        toast.error(`Error: ${error.message}`);
        throw error;
    }
};
