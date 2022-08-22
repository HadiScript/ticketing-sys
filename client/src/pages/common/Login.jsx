import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../actions/authAction'

import { toast } from 'react-toastify'

const Login = () => {
    let navigate = useNavigate();

    const [see, setSee] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    // const redirect = '/'

    useEffect(() => {
        if (userInfo) {
            // history.push('/')
            return navigate("/")
        }
    }, [navigate, userInfo])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    // if (error) {
    //     return toast(error)
    // }


    return (
        <div className="max-w-screen-xl px-4 py-16 bg-gray-200  sm:w-full lg:px-8 ">
            <div className="max-w-lg mx-auto  hover:shadow-2xl bg-white">
                <h1 className="text-2xl font-bold text-center text-dark-purple sm:text-3xl">Sign In</h1>

                <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                    Login For Submit Your Ticket !
                </p>

                {error && <p className=''> {error} </p>}
                {loading && <p>Loading...</p>}

                <form onSubmit={submitHandler} className="  p-8 mt-6 mb-0 space-y-4 rounded-lg ">
                    <p className="text-lg font-medium">Sign in to your account</p>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Email</label>

                        <div className="relative mt-1">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium">Password</label>

                        <div className="relative mt-1">
                            <input
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={see && `password`}
                                id="password"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4 "
                                onClick={() => setSee(!see)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-dark-purple rounded-lg">
                        Sign in
                    </button>

                    <p className="text-sm text-center text-gray-500">
                        No account?
                        <Link to="/signup" className="underline" href="">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login