import { tasksTypes } from '../types';
import { api } from '../../../api';

export const tasksActions = Object.freeze({
  createTask: (taskInfo) => ({
    type: tasksTypes.CREATE_TASK,
    payload: taskInfo,
  }),
  updateTask: (taskInfo) => ({
    type: tasksTypes.UPDATE_TASK,
    payload: taskInfo,
  }),
  toggleTask: (taskInfo) => ({
    type: tasksTypes.TOGGLE_TASK,
    payload: taskInfo,
  }),
  fetchTasks: (tasks) => ({
    type: tasksTypes.FETCH_TASKS,
    payload: tasks,
  }),
  toggleTaskAsync: (taskInfo) => async (dispatch) => {
    try {
      console.log(taskInfo);
      dispatch(tasksActions.toggleTask(taskInfo));
    } catch (err) {
      console.log(err);
    }
  },
  // deleteTask: (taskInfo) => ({
  //   type: tasksTypes.DELETE_TASK,
  //   payload: taskInfo,
  // }),
  setFetchingError: (error) => ({
    type: tasksTypes.SET_TASKS_ERROR,
    payload: error,
  }),
  createTaskAsync: (taskInfo) => async (dispatch) => {
    try {
      const response = await api.tasks.createTask(taskInfo);
      dispatch(tasksActions.createTask(response.data));
    } catch (err) {
      dispatch(tasksActions.setFetchingError(err.response));
    }
  },
  updateTaskAsync: (taskId, taskText) => async (dispatch) => {
    try {
      const response = await api.tasks.updateTask(taskId, taskText);
      console.log(response.data);
      dispatch(tasksActions.updateTask(response.data));
    } catch (err) {
      dispatch(tasksActions.setFetchingError(err.response));
    }
  },
  getTasksAsync: () => async (dispatch) => {
    try {
      const response = await api.tasks.getTasks();
      console.log(response.data);
      dispatch(tasksActions.fetchTasks(response.data));
    } catch (err) {
      console.log(err.response);
    }
  },
});
