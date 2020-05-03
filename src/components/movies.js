import React, {useContext, useEffect} from 'react';
import MyContext from '../context';
import ajax from '../api';

function Movies() {

  const {state, dispatch} = useContext(MyContext);
  useEffect(() => {
    ajax('/movies').then(res => {
      dispatch({type: 'setMovies', movies: res});
    });
  }, []); // 依赖为[] 旨在首次渲染时才调用 ajax
  return (
    <div>
      <h1>我的电影</h1>
      <ol>
        {
          state.movies ?
            state.movies.map(movie => {return <li key={movie.id}>{movie.name}</li>;}) :
            '加载中'
        }
      </ol>
    </div>
  );
}

export default Movies