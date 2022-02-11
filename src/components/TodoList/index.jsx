import React from 'react';
import { useTasks } from '../../hooks';
import edit from '../../theme/assets/edit.png';
import destroy from '../../theme/assets/destroy.png';
import done from '../../theme/assets/done.png';
import {
  StyledDestroyTodo,
  StyledEditTodo,
  StyledTask,
  StyledTodo,
  StyledCheckBox,
  StyledFilterContainer,
  StyledButton,
} from '../../pages/TaskList/elements';

export const TodoList = () => {
  const {
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
  } = useTasks();

  return (
    <>
      {
        filterTasks().map((task) => (
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
      <StyledFilterContainer>
        <StyledButton onClick={() => setFilter(FILTER_STATUSES.ALL)}>All</StyledButton>
        <StyledButton onClick={() => setFilter(FILTER_STATUSES.ACTIVE)}>Active</StyledButton>
        <StyledButton onClick={() => setFilter(FILTER_STATUSES.FINISHED)}>Finished</StyledButton>
      </StyledFilterContainer>
    </>
  );
};
