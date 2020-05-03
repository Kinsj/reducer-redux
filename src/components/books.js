import React, {useContext, useEffect} from 'react';
import ajax from '../api';
import MyContext from '../context';

function Books() {
  const {state, dispatch} = useContext(MyContext);
  useEffect(() => {
    ajax('/books').then(res => {
      dispatch({type: 'setBooks', books: res});
    });
  }, []);

  return (
    <div>
      <h1>我热爱的书籍</h1>
      <ol>
        {
          state.books ?
            state.books.map(book => {return <li key={book.id}>{book.name}</li>;}) :
            '加载中'
        }
      </ol>
    </div>
  );
}

export default Books