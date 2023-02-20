import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  isLogin : boolean
}

const AppHeader: React.FC<Props> = ({ title, isLogin }) => {
  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/login`, {
      replace: true
    })
  }
  const handleBackHomeClick = () => {
    navigate(`/`, {
      replace: true
    })
  }
  return (
    <header className="bg-lime-600 p-4 flex justify-between items-center top-0 left-0 right-0">
      <div className="text-white text-xl ml-6 font-bold cursor-pointer" onClick={handleBackHomeClick}>WINGI store</div>
      <div className="flex justify-end items-center">
        <button
          className="text-white rounded-md bg-blue-700 py-2 px-4 mr-4"
          onClick={handleOnClick}          
        >
          {
            isLogin ? "Logout" : "Login"
          }
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
