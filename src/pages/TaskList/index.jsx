import React from 'react';
import { TodoList, AddTodoForm } from '../../components';
import {
  StyledPage,
  StyledToDoContainer,
  StyledTopContainer,
  StyledToDoListContainer,
} from './elements';

export const TaskList = () => (
  <StyledPage>
    <StyledToDoContainer>
      <StyledTopContainer>
        <span>Your todo list</span>
      </StyledTopContainer>
      <StyledToDoListContainer>
        <AddTodoForm />
        <TodoList />
      </StyledToDoListContainer>
    </StyledToDoContainer>
  </StyledPage>
);
