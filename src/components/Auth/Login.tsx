import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import AppHeader from "../Header/AppHeader";
import { createUser, findUser } from "../User/UserType";
import { User } from "../User/UserType";

interface LoginProps {
    user?: User;
}

const Login: React.FC<LoginProps> = ({ user }) => {
    const [email, setEmail] = useState(user?.email ?? "");
    const [password, setPassword] = useState(user?.password ?? "");

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };


    const auth = useSelector((state: any) => state);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(findUser(email));
        const { users } = auth.userReducer
        const User = users.filter((user: any) => user.email == email)
        if (User.length != 0) {
            if (User[0].password === password) {
                navigate(`/`, {
                    state: {
                        email: email,
                        user: User[0]
                    }
                })
            } else {
                alert('Incorrect Email or password!!')
            }
        } else {
            alert('User Not found!!Try again')
        }


    };

    return (
        <div>
            <AppHeader title="Header" />
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-white-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <form onSubmit={handleSubmit} className="inline-block align-bottom bg-white border border-gray-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="w-full">
                                    <div className="mt-3 sm:mt-0 sm:ml-2 sm:text-left">
                                        <h1 className="text-2xl text-center mb-8 leading-6 font-medium text-gray-900">Login</h1>
                                        <div className="mt-2">
                                            <div className="mb-4">
                                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                                    Email:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="example@gmail.com"
                                                    id="name"
                                                    required
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Password:</label>
                                                <input
                                                    type="password"
                                                    placeholder="password"
                                                    id="price"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                />
                                            </div>
                                            <div className="w-full py-6 flex justify-center">
                                                <button className="mx-auto bg-lime-600 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="absolute border-t-4 inset-x-0  bottom-0 h-16">
                <Footer />
            </div>
        </div>
    );
};

export default Login;
