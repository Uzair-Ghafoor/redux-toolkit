import React from 'react';
import { FaCross } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { isModalOpen, isModalClose } from './features/modal';
const Modal = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  console.log(isOpen);
  return (
    <div className=' bg-[#000000d9] h-[100vh] w-[100vw] flex justify-center items-center '>
      <div className=' bg-white text-gray-700 rounded-xl max-w-[20vw] p-7 flex justify-center flex-col gap-7 relative'>
        <p>Are you sure?</p>
        <p>to close the modal,click the close button</p>
        <button
          className=' bg-teal-500 text-white p-3 rounded-md'
          onClick={() => dispatch(isModalClose())}
        >
          Close
        </button>

        <button
          className=' absolute right-3 top-3'
          onClick={() => dispatch(isModalClose())}
        >
          <div className=' flex flex-col'>
            <span className=' w-9 h-2 bg-red-950 rounded-xl rotate-45'></span>
            <span className=' w-9 h-2 bg-red-950 rounded-xl -rotate-45'></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Modal;

// const x = arr.map((state)=>{
//   return
// })

// const x = array.forEach((element) => element.id);
