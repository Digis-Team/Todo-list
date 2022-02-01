import React, { useState } from 'react';
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

export const ToDoList = () => {
  const [style, setStyle] = useState(null);
  const onClick = () => {
    if (style) {
      setStyle(null);
    } else {
      setStyle({ textDecoration: 'line-through' });
    }
  };

  return (
    <StyledPage>
      <StyledToDoContainer>
        <StyledTopContainer>
          <span>Your todo list</span>
        </StyledTopContainer>
        <StyledToDoListContainer>
          <StyledAddTodo>
            <StyledInput type="text" name="text" placeholder="Write todo" />
            <StyledButton type="button">Add todo</StyledButton>
          </StyledAddTodo>
          <StyledTodo>
            <StyledCheckBox aria-hidden="true" onKeyDown={() => onClick()} onClick={() => onClick()} />
            <StyledTask style={style}>Task1Task1Task1</StyledTask>
            <StyledEditTodo src={edit} alt="edit" />
            <StyledDestroyTodo src={destroy} alt="edit" />
          </StyledTodo>
          <StyledTodo>
            <StyledCheckBox aria-hidden="true" onKeyDown={() => onClick()} onClick={() => onClick()} />
            <StyledTask style={style}>Task2Task2Task2</StyledTask>
            <StyledEditTodo src={edit} alt="edit" />
            <StyledDestroyTodo src={destroy} alt="edit" />
          </StyledTodo>
          <StyledTodo>
            <StyledCheckBox aria-hidden="true" onKeyDown={() => onClick()} onClick={() => onClick()} />
            <StyledTask style={style}>Task3Task3Task3</StyledTask>
            <StyledEditTodo src={edit} alt="edit" />
            <StyledDestroyTodo src={destroy} alt="edit" />
          </StyledTodo>
          <StyledTodo>
            <StyledCheckBox aria-hidden="true" onKeyDown={() => onClick()} onClick={() => onClick()} />
            <StyledTask style={style}>Task1Task1Task1</StyledTask>
            <StyledEditTodo src={edit} alt="edit" />
            <StyledDestroyTodo src={destroy} alt="edit" />
          </StyledTodo>
        </StyledToDoListContainer>
      </StyledToDoContainer>
    </StyledPage>
  );
};
