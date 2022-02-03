import axios from 'axios';
import { root } from './config';

export const tasks = Object.freeze({
  createTask: (tasksInfo) => axios.post(`${root}/tasks`, tasksInfo),
  getTaskInfo: (id) => axios.get(`${root}/tasks/${id}`),
  getTasks: () => axios.get(`${root}/tasks`),
});
