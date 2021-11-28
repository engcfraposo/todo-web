import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import GlobalStyle from './styles/global';
import {TaskProvider} from "./hooks/TaskProvider";
import {
  ApolloProvider,
} from "@apollo/client";
import client from './graphql';
export function App() {
  return (
    <ApolloProvider client={client}>
      <TaskProvider>
        <Header />
        <TaskList />
        <GlobalStyle />
      </TaskProvider>
    </ApolloProvider>
  )
}