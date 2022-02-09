import axios from 'axios';
import { root } from './config';

export const tasks = Object.freeze({
  createTask: (taskInfo) => axios.post(`${root}/tasks`, { task: taskInfo }),
  getTaskInfo: (id) => axios.get(`${root}/tasks/${id}`),
  getTasks: () => axios.get(`${root}/tasks`),
  updateTask: (taskId, taskText) => axios.put(`${root}/tasks/${taskId}`, { task: taskText }),
  deleteTask: (taskId) => axios.delete(`${root}/tasks/${taskId}`),
});
