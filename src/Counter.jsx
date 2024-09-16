import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  incrementByAmount,
  signIn,
  signOut,
} from './features/counterSlice';
import { FaUser } from 'react-icons/fa';

const Counter = () => {
  const { value, currentUser } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className=' flex flex-col justify-center items-center h-[100vh] gap-y-8'>
      {currentUser ? <FaUser /> : 'Signin'}
      <div>{value}</div>
      <div>
        {currentUser ? 'welcome to the website' : 'please login to continue'}
      </div>
      <button
        className=' bg-teal-400  p-3 rounded-md'
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        className=' bg-teal-400  p-3 rounded-md'
        onClick={() => dispatch(incrementByAmount(20))}
      >
        incrementByAmount
      </button>
      <button
        className=' bg-teal-400  p-3 rounded-md'
        onClick={() =>
          dispatch(
            signIn({
              name: 'uzair',
              username: 'uzair123',
            })
          )
        }
      >
        Login
      </button>
      <button
        className=' bg-teal-400  p-3 rounded-md'
        onClick={() => dispatch(signOut())}
      >
        logout
      </button>
    </div>
  );
};

export default Counter;
// function name() {}
// const name1=()=>{}
// onClick={()=>}
// onClick={()=>{}}
