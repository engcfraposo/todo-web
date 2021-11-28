import * as S from '../styles/TaskList'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import { useTask } from '../hooks/TaskProvider';
import { useEffect } from 'react';


export function TaskList() {
  const {
    loading,
    tasks, 
    newTaskTitle, 
    setNewTaskTitle,
    handleCreateNewTask,
    handleToggleTaskCompletion,
    handleRemoveTask,
  } = useTask()


  if (loading) return 'Loading...';
  return (
    <S.TaskListContainer>
      <S.TaskListHeader>
        <S.TaskListTitle>Minhas tasks</S.TaskListTitle>

        <S.TaskInputGroup>
          <S.TaskInput 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <S.AddTaskButton type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </S.AddTaskButton>
        </S.TaskInputGroup>
      </S.TaskListHeader>

      <S.TaskMain>
        <S.TasksList>
          {tasks.map(task => (
            <S.TaskLine key={task.id}>
              <S.Task className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <S.CheckboxContainer>
                  <S.CheckboxInput 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </S.CheckboxContainer>
                <p data-testid="task">{task.title}</p>
              </S.Task>
              <S.ButtonContainer>
                <S.AddTaskButton type="button" data-testid="complete-task-button" onClick={() => handleToggleTaskCompletion(task.id)}>
                  <FiCheckSquare size={16} color="#fff"/>
                </S.AddTaskButton>
                <S.RemoveTaskButton type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                  <FiTrash size={16}/>
                </S.RemoveTaskButton>
              </S.ButtonContainer>
            </S.TaskLine>
          ))}
          
        </S.TasksList>
      </S.TaskMain>
    </S.TaskListContainer>
  )
}