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
  StyledTopContiner,
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
        <StyledTopContiner>
          <span>Your todo list</span>
        </StyledTopContiner>
        <StyledToDoListContainer>
          <StyledAddTodo>
            <StyledInput type="text" name="text" placeholder="Write todo" />
            <StyledButton type="button" className="button">Add todo</StyledButton>
          </StyledAddTodo>
          <StyledTodo className="todo">
            <StyledCheckBox className="checkbox" aria-hidden="true" onKeyDown={() => onClick()} onClick={() => onClick()} />
            <StyledTask className="task" style={style}>Task1Task1Task1</StyledTask>
            <StyledEditTodo src={edit} alt="edit" className="edit" />
            <StyledDestroyTodo src={destroy} alt="edit" className="destroy" />
          </StyledTodo>
          <div className="todo">
            <div className="checkbox" />
            <div className="task" style={style}>Task2Task2Task2</div>
            <img src={edit} alt="edit" className="edit" />
            <img src={destroy} alt="edit" className="destroy" />
          </div>
          <div className="todo">
            <div className="checkbox" />
            <div className="task" style={style}>Task3Task3Task3</div>
            <img src={edit} alt="edit" className="edit" />
            <img src={destroy} alt="edit" className="destroy" />
          </div>
          <div className="todo">
            <div className="checkbox" />
            <div className="task" style={style}>Task4Task4Task4</div>
            <img src={edit} alt="edit" className="edit" />
            <img src={destroy} alt="edit" className="destroy" />
          </div>
        </StyledToDoListContainer>
      </StyledToDoContainer>
    </StyledPage>
  );
};
