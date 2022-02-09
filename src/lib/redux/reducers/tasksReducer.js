import { tasksTypes } from '../types';

const initialState = {
  data: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case tasksTypes.CREATE_TASK: {
      const newTask = { task: action.payload.task, id: action.payload.id, isFinished: false };
      return {
        ...state,
        data: [...state.data, newTask],
      };
    }
    case tasksTypes.UPDATE_TASK:
      return {
        ...state,
        data: state.data.map((task) => (task.id === action.payload.id
          ? { ...task, task: action.payload.task } : task)),
      };
    case tasksTypes.DELETE_TASK:
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload),
      };
    case tasksTypes.SET_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case tasksTypes.TOGGLE_TASK:
      return {
        ...state,
        data: state.data.map((task) => (task.id === action.payload
          ? { ...task, isFinished: !task.isFinished } : task)),
      };
    case tasksTypes.FETCH_TASKS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
