import {gql} from '@apollo/client';


export const TODOS = gql`
        query Todos{
            todos{
                id,
                title,
                isComplete,
            }
        }
        
`
