import {gql} from '@apollo/client';


export const CREATE_TODO = gql`
        mutation createTodo($title: String!) {
            createTodo(title: $title){
                id,
                title,
                isComplete,
            }
        }
        
   `

export const DELETE_TODO = gql`
    mutation removeTodo($id: String!) {
        removeTodo(id: $id){
            id,
        }
    }

`

export const SET_COMPLETE_TODO = gql`
    mutation setTodoComplete($id: String!) {
        setTodoComplete(id: $id){
            id,
        }
    }

`