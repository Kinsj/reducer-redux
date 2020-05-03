import React, {useReducer} from 'react';
import MyContext from './context';
import User from './components/user';
import Books from './components/books';
import Movies from './components/movies';
import UserReducer from  './reducers/user_reducer'
import booksReducer from  './reducers/books_reducer'
import MoviesReducer from './reducers/movies_reducer';

const store = {
  user: null,
  books: null,
  movies: null
};

const myReducers = {
  ...UserReducer,
  ...booksReducer,
  ...MoviesReducer
};

// 集中对数据的修改操作
const reducer = (state, action) => {
  console.log(action.type);
  const fn = myReducers[action.type];
  if (fn) {
    return fn(state, action);
  } else {
    throw new Error('未找到你想要的type');
  }
};

function App() {
  // 使用一个reducer，必须在组件里
  const [state, dispatch] = useReducer(reducer, store);

  return (
    // 由 Context.Provider 包裹的组件，可以共享 value参数里的东西：这里是state, dispatch
    // 所以state 和 dispatch 就是局部全局变量
    <MyContext.Provider value={{state, dispatch}}>
      <User/>
      <hr/>
      <Books/>
      <Movies/>
    </MyContext.Provider>
  );
}


export default App;
