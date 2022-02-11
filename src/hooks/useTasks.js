import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from '../lib/redux/selectors';
import { tasksActions } from '../lib/redux/actions';

export const useTasks = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [changingTask, setChangingTask] = useState('');
  const FILTER_STATUSES = { ALL: 'All', ACTIVE: 'Active', FINISHED: 'Finished' };
  const [filter, setFilter] = useState(FILTER_STATUSES.ALL);

  useEffect(() => {
    dispatch(tasksActions.getTasksAsync());
  }, []);

  const toggleTask = (task) => {
    dispatch(tasksActions.updateTaskAsync(task.id, { ...task, isFinished: !task.isFinished }));
  };

  const onTaskChange = (event) => {
    setChangingTask(event.target.value);
  };

  const updateTask = (task) => {
    dispatch(tasksActions.updateTaskAsync(task.id, { ...task, task: changingTask }));
    setEditingTaskId(null);
  };

  const onEdit = (taskText, taskId) => {
    setEditingTaskId(taskId);
    setChangingTask(taskText);
  };

  const deleteTask = (taskId) => {
    dispatch(tasksActions.deleteTaskAsync(taskId));
  };

  const filterTasks = () => tasks.filter((task) => {
    switch (filter) {
      case FILTER_STATUSES.ACTIVE:
        return !task.isFinished;
      case FILTER_STATUSES.FINISHED:
        return task.isFinished;
      default:
        return task;
    }
  });

  return {
    editingTaskId,
    changingTask,
    FILTER_STATUSES,
    setFilter,
    toggleTask,
    onTaskChange,
    updateTask,
    onEdit,
    deleteTask,
    filterTasks,
  };
};
