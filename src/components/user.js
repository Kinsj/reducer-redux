import React, {useContext, useEffect} from 'react';
import ajax from '../api';
import MyContext from '../context'

function User() {
  const {state, dispatch} = useContext(MyContext); // 把MyContext里的全局变量（value）取出来
  useEffect(() => {
    ajax('/user').then(res => {
      dispatch({type: 'setUser', user: res});
    });
  }, []);

  return (
    <div>
      <h1>个人信息</h1>
      <div>name: {state.user ? state.user.name : ''}</div>
    </div>
  );
}

export default User