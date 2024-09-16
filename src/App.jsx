import React, { useState } from 'react';
import Counter from './Counter';
import { useSelector } from 'react-redux';
import Modal from './Modal';

const App = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const { currentUser } = useSelector((state) => state.counter);
  return (
    <>
      <div>{isOpen ? <Modal /> : <Counter />}</div>;
      <div>{currentUser ? 'this is an ad' : 'please login to continue'}</div>
    </>
  );
};

export default App;
