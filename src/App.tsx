import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { decrement, increment } from './redux/slices/counter'
import MyComp from './MyComp'
import { fetchTodos } from './redux/slices/todos/todo';

function App() {
  const count = useAppSelector(state => state.counter);
  const state = useAppSelector(state => state); 
  const dispatch = useAppDispatch();


  if(state.todo.isLoading){
    return <h1>Loading...</h1>
  };

  console.log(state.todo);

  return (
    <>
      <h1>Todos</h1>
      <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data && state.todo.data.map((result) =>
        <li key={result.id}>{result.title}</li>
        )
      }


      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <MyComp />
    </>
  )
}

export default App
