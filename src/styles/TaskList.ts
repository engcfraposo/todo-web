import styled from "styled-components"

export const TaskListContainer = styled.section`
  background: var(--shapes);
  border-radius: 1rem;
  border: 1px solid #ccc;
  margin-top: -10rem;
  padding: 70px 60px;

  filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));
`

export const TaskListHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TaskListTitle = styled.h2`
  color: var(--text-title);
  font-size: 2.25rem;
`

export const TaskInputGroup = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  background: #fff;
  font-size: 16px;
`

export const TaskInput = styled.input`
  flex: 1;
  background: var(--background);
  border: 0;
  color: var(--text);
  padding: 12px 24px;

  border-radius: 8px;
  border: 0;
  &::placeholder {
    color: var(--text-light)
  }
`

export const AddTaskButton = styled.button`
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: var(--green);
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 14px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`

export const ButtonContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
`
export const RemoveTaskButton = styled.button`
          background: transparent;
          border: 1px solid #ccc;
          border-radius: 8px;
          width: 45px;

          svg {
            color: var(--red);
          }

          &:hover {
            filter: brightness(0.95);
            svg {
              filter: brightness(0.5)
            }
          }
        
`

export const TaskMain = styled.main`
  margin-top: 3rem;
`

export const TasksList = styled.ul`
  list-style: none;
`

export const TaskLine = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EBEBEB;
  padding: 1rem 0;
`

export const Task = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  outline: 0;

  p {
    font-size: 1rem;
    color: var(--text);
  }

  &.completed {
    p {
      text-decoration:line-through;
      opacity: 0.6;
    }
  }
`

export const CheckboxContainer = styled.div`
  display: block;
  position: relative;
  padding-left: 14px;
  margin-bottom: 18px;
`
export const CheckboxInput = styled.input`
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;

              &:checked {
                & ~ .checkmark {
                  background-color: var(--blue);
                }

                & ~ .checkmark:after {
                  display: block;
                }
              } 
            }
          
            .checkmark {
              position: absolute;
              top: 0;
              left: 0;
              width: 16px;
              height: 16px;
              background-color: var(--background);
              border-radius: 2px;
          
              &:after {
                content: "";
                position: absolute;
                display: none;
                left: 6px;
                top: 3px;
                width: 3px;
                height: 6px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
              }
            }
          }
        }
`