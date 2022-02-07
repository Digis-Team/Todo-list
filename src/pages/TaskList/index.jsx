import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import edit from '../../theme/assets/edit.png';
import destroy from '../../theme/assets/destroy.png';
import done from '../../theme/assets/done.png';
import {
  StyledPage,
  StyledAddTodo,
  StyledButton,
  StyledDestroyTodo,
  StyledEditTodo,
  StyledInput,
  StyledTask,
  StyledToDoListContainer,
  StyledTodo,
  StyledTopContainer,
  StyledToDoContainer,
  StyledCheckBox,
} from './elements';
import { tasksActions } from '../../lib/redux/actions';
import { selectTasks } from '../../lib/redux/selectors';
// import { api } from '../../api';

export const TaskList = () => {
  // const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const [taskInfo, setTaskInfo] = useState({
    task: '',
  });
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [changingTask, setChangingTask] = useState('');

  useEffect(() => {
    console.log('useeffect');
    dispatch(tasksActions.getTasksAsync());
  }, []);
  // useEffect(() => {
  //   if (profile) {
  //     api.tasks.getTasks();
  //   }
  // }, [profile]);

  const onChange = (event) => {
    const newTask = event.target.value;
    setTaskInfo({ ...taskInfo, task: newTask });
  };
  const toggleTask = (info) => {
    console.log(info);
    dispatch(tasksActions.toggleTaskAsync(info));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(tasksActions.createTaskAsync(taskInfo));
    setTaskInfo({
      task: '',
    });
  };
  const onEdit = (taskText, taskId) => {
    setEditingTaskId((value) => (value === taskId ? null : taskId));
    setChangingTask(taskText);
  };
  const onTaskChange = (event) => {
    setChangingTask(event.target.value);
  };
  const saveTask = (taskid) => {
    console.log(taskid);
    console.log(changingTask);
    dispatch(tasksActions.updateTaskAsync(taskid, changingTask));
    setEditingTaskId(null);
  };
  return (
    <StyledPage>
      <StyledToDoContainer>
        <StyledTopContainer>
          <span>Your todo list</span>
        </StyledTopContainer>
        <StyledToDoListContainer>
          <StyledAddTodo>
            <StyledInput type="text" name="text" value={taskInfo.task} onChange={onChange} placeholder="Write todo" />
            <StyledButton type="button" onClick={onSubmit}>Add todo</StyledButton>
          </StyledAddTodo>
          {
            tasks.map((task) => (
              <StyledTodo key={task.id}>
                <StyledCheckBox onClick={() => toggleTask(task)} />
                <StyledTask
                  disabled={editingTaskId !== task.id}
                  value={editingTaskId === task.id ? changingTask : task.task}
                  onChange={onTaskChange}
                  border={editingTaskId === task.id ? 'solid 2px black' : 'none'}
                  textDecoration={task.isFinished ? 'line-through' : 'none'}
                  // onBlur={editingTaskId === task.id ? saveTask(task.id) : null}
                />
                <StyledEditTodo src={editingTaskId === task.id ? done : edit} onClick={() => (editingTaskId === task.id ? saveTask(task.id) : onEdit(task.task, task.id))} alt="edit" />
                <StyledDestroyTodo src={destroy} alt="edit" />
              </StyledTodo>
            ))
          }
        </StyledToDoListContainer>
      </StyledToDoContainer>
    </StyledPage>
  );
};
