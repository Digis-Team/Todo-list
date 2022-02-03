import { tasksTypes } from '../types';

const initialState = {
  tasks: [],
  error: null,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case tasksTypes.CREATE_TASK: {
      return {
        ...state,
        tasks: state.tasks.concat({ task: action.payload, error: null }),
      };
    }
    case tasksTypes.UPDATE_TASK:
      return {
        ...state,
        task: action.payload,
        error: null,
      };
    case tasksTypes.DELETE_TASK:
      return {
        ...state,
        task: null,
        error: null,
      };
    case tasksTypes.SET_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
