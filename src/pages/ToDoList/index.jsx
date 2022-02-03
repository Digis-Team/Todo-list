import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import edit from '../../theme/assets/edit.png';
import destroy from '../../theme/assets/destroy.png';
import {
  StyledPage,
  StyledAddTodo,
  StyledButton,
  StyledCheckBox,
  StyledDestroyTodo,
  StyledEditTodo,
  StyledInput,
  StyledTask,
  StyledToDoListContainer,
  StyledTodo,
  StyledTopContainer,
  StyledToDoContainer,
} from './elements';
import { tasksActions } from '../../lib/redux/actions';
import { selectTasks } from '../../lib/redux/selectors';

export const ToDoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [taskInfo, setTaskInfo] = useState({
    task: '',
    isFinished: false,
  });
  const [style, setStyle] = useState(null);
  const onClick = () => {
    if (style) {
      setStyle(null);
    } else {
      setStyle({ textDecoration: 'line-through' });
    }
  };
  const onChange = (event) => {
    const newTask = event.target.value;
    setTaskInfo({ ...taskInfo, task: newTask });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(tasksActions.createTaskAsync(taskInfo));
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
              <StyledTodo key={task.task.id}>
                <StyledCheckBox aria-hidden="true" onKeyDown={onClick} onClick={onClick} />
                <StyledTask style={style}>{task.task.task}</StyledTask>
                <StyledEditTodo src={edit} alt="edit" />
                <StyledDestroyTodo src={destroy} alt="edit" />
              </StyledTodo>
            ))
          }
          {/* <StyledTodo>
            <StyledCheckBox aria-hidden="true" onKeyDown={onClick} onClick={onClick} />
            <StyledTask style={style}>Task2Task2Task2</StyledTask>
            <StyledEditTodo src={edit} alt="edit" />
            <StyledDestroyTodo src={destroy} alt="edit" />
          </StyledTodo>
          <StyledTodo>
            <StyledCheckBox aria-hidden="true" onKeyDown={onClick} onClick={onClick} />
            <StyledTask style={style}>Task3Task3Task3</StyledTask>
            <StyledEditTodo src={edit} alt="edit" />
            <StyledDestroyTodo src={destroy} alt="edit" />
          </StyledTodo>
          <StyledTodo>
            <StyledCheckBox aria-hidden="true" onKeyDown={onClick} onClick={onClick} />
            <StyledTask style={style}>Task1Task1Task1</StyledTask>
            <StyledEditTodo src={edit} alt="edit" />
            <StyledDestroyTodo src={destroy} alt="edit" />
          </StyledTodo> */}
        </StyledToDoListContainer>
      </StyledToDoContainer>
    </StyledPage>
  );
};
