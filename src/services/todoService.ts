import axios from 'axios';
import type { Task } from '../types/task';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const getTasks = async (): Promise<Task[]> => {
    const response = await api.get('/Tasks');
    return response.data;
};

export const createTask = async (title: string, color?: string): Promise<Task> => {
    const response = await api.post('/Tasks', { title, color });
    return response.data;
};

export const updateTask = async (id: string, data: Partial<Task>): Promise<Task> => {
    const response = await api.put(`/Tasks/${id}`, data);
    return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
    await api.delete(`/Tasks/${id}`);
};