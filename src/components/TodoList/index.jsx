import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import edit from '../../theme/assets/edit.png';
import destroy from '../../theme/assets/destroy.png';
import done from '../../theme/assets/done.png';
import {
  StyledDestroyTodo,
  StyledEditTodo,
  StyledTask,
  StyledTodo,
  StyledCheckBox,
  StyledFilter,
  StyledButton,
} from '../../pages/TaskList/elements';
import { tasksActions } from '../../lib/redux/actions';
import { selectTasks } from '../../lib/redux/selectors';

export const TodoList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [changingTask, setChangingTask] = useState('');
  const [selectedTasks, setSelectedTasks] = useState(tasks);

  useEffect(() => {
    dispatch(tasksActions.getTasksAsync());
  }, []);

  useEffect(() => {
    setSelectedTasks(tasks);
  }, [tasks]);

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
  const selectNotFinishedTasks = () => {
    setSelectedTasks(tasks.filter((task) => task.isFinished === false));
  };
  const selectFinishedTasks = () => {
    setSelectedTasks(tasks.filter((task) => task.isFinished === true));
  };
  const selectAllTasks = () => {
    setSelectedTasks(tasks);
  };

  return (
    <>
      {
        selectedTasks.map((task) => (
          <StyledTodo key={task.id}>
            <StyledCheckBox onClick={() => toggleTask(task)} />
            <StyledTask
              disabled={editingTaskId !== task.id}
              value={editingTaskId === task.id ? changingTask : task.task}
              onChange={onTaskChange}
              border={editingTaskId === task.id}
              textDecoration={task.isFinished ? 1 : 0}
            />
            <StyledEditTodo
              src={editingTaskId === task.id ? done : edit}
              onClick={editingTaskId === task.id ? () => updateTask(task)
                : () => onEdit(task.task, task.id)}
              alt="edit"
            />
            <StyledDestroyTodo src={destroy} onClick={() => deleteTask(task.id)} alt="edit" />
          </StyledTodo>
        ))
      }
      <StyledFilter>
        <StyledButton onClick={() => selectAllTasks()}>All</StyledButton>
        <StyledButton onClick={() => selectNotFinishedTasks()}>not Finished</StyledButton>
        <StyledButton onClick={() => selectFinishedTasks()}>Finished</StyledButton>
      </StyledFilter>
    </>
  );
};
