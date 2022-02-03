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
  updateTaskAsync: (taskInfo) => async (dispatch) => {
    try {
      const response = await api.tasks.updateTask(taskInfo);
      dispatch(tasksActions.updateTask(response.data));
    } catch (err) {
      dispatch(tasksActions.setFetchingError(err.response));
    }
  },
  // getTasks: () => async () => {
  //   try {
  //     const response = await api.tasks.getTasks();
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err.response);
  //   }
  // },
});
