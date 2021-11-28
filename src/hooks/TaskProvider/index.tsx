import React, {
    createContext,
    useState,
    useContext,
    useEffect,
} from 'react';
import { useQuery, useMutation, gql } from "@apollo/client";
import { TODOS } from "../../graphql/queries"
import { CREATE_TODO, DELETE_TODO, SET_COMPLETE_TODO } from "../../graphql/mutations"

export interface TaskContextData {
    newTaskTitle: string;
    setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>
    tasks: Task[];
    loading: boolean;
    handleCreateNewTask: () => void;
    handleToggleTaskCompletion: (id: string) => void;
    handleRemoveTask: (id: string) => void;
}

interface Task {
    id: string;
    title: string;
    isComplete: boolean;
}

export const TaskContext = createContext<TaskContextData>(
    {} as TaskContextData,
);

const TaskProvider: React.FC = ({children}) => {
    const [tasks, setTasks] = useState<Task[]>([] as Task[]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const {loading: getTasksLoading, error: getTasksError, data: queryTasks} = useQuery(TODOS,{pollInterval: 60000,})
    const [addTaskTitle, senttingsAddTaskTitle] = useMutation(CREATE_TODO);
    const [removeTask, senttingsRemoveTask] = useMutation(DELETE_TODO);
    const [setCompleteTask] = useMutation(SET_COMPLETE_TODO);

    const handleCreateNewTask = () => {
        if(!newTaskTitle) return;
        addTaskTitle({
          variables:{title: newTaskTitle}, 
          onCompleted:(data: any) => {
            setTasks(pState => [...pState, data.createTodo])
          }
        })
        setNewTaskTitle("")
    }
    
      const handleToggleTaskCompletion = (id: string) => {
        setCompleteTask({
          variables:{id},
          onCompleted:(data: any) => {
            const newTasks = tasks.map( 
              task => task.id === data.setTodoComplete.id
              ?{
                ...task,
                isComplete: !task.isComplete
              }
              :task
              );
        
              setTasks(newTasks)
          }
        })
      }
    
      const handleRemoveTask = (id: string) => {
        if (!id) return null
        removeTask({
          variables:{id},
          onCompleted:(data: any) => {
            const filteredTasks = tasks.filter( task => task.id !== data.removeTodo.id);
            if(!filteredTasks) return;
            setTasks(filteredTasks);
          }
        })
      }


      useEffect(()=>{
        if(!getTasksLoading){
          setTasks(queryTasks.todos)
        }
      },[getTasksLoading, queryTasks?.todos])

      useEffect(()=>{
        if (senttingsAddTaskTitle.loading)  {
          setLoading(senttingsAddTaskTitle.loading)
          return
        }
        if (senttingsRemoveTask.loading)  {
          setLoading(senttingsRemoveTask.loading)
          return
        }
        if (getTasksLoading)  {
          setLoading(getTasksLoading)
          return
        }
        setLoading(false)
      },[senttingsAddTaskTitle.loading, senttingsRemoveTask.loading, getTasksLoading])

  return (
        <TaskContext.Provider
          value={{
              loading,
              newTaskTitle,
              setNewTaskTitle,
              tasks,
              handleCreateNewTask,
              handleToggleTaskCompletion,
              handleRemoveTask,
          }}
        >
            {children}
        </TaskContext.Provider>
  );
};

function useTask(): TaskContextData {
    const context = useContext(TaskContext);
  
    return context;
}
  
export { TaskProvider, useTask };

