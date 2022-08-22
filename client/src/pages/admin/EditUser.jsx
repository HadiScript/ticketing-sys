import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate, useParams } from 'react-router-dom'
import { getUserDetails, updateUser } from '../../actions/userAction'
import { USER_UPDATE_RESET } from '../../constants/userConstants'

const EditUser = () => {
    const { id } = useParams()
    console.log(id, "from id")
    let navigate = useNavigate()
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAgent, setIsAgent] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdate = useSelector((state) => state.userUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            navigate('/users')
        } else {
            if (!user || user.name === undefined || user._id !== id) {
                dispatch(getUserDetails(id))
            } else {
                setIsAdmin(user.isAdmin)
                setIsAgent(user.isAgent)
            }
        }
    }, [dispatch, navigate, id, user, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: id, isAdmin, isAgent }))
    }



    return (
        <div className="container mx-auto ">

            <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                <div className="card-body">
                    {loadingUpdate && <p>loading.. updating user</p>}
                    {errorUpdate && <p className='text-red-700'>{errorUpdate}</p>}

                    <h2 className="card-title">{user && user.name}</h2>
                    <p> {user && user.profession} </p>

                    {loading ? (
                        <p>loading.. </p>
                    ) : error ? (
                        <p className='text-red-700'>{errorUpdate}</p>
                    ) : (

                        <form onSubmit={submitHandler} action="" className="mt-5">
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <span className="mr-3">Status</span>
                                <div className="flex items-center">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text mr-2 ">Make him Admin</span>
                                            <input
                                                type="checkbox"
                                                checked={isAdmin}
                                                onChange={(e) => setIsAdmin(e.target.checked)}
                                                className="checkbox"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text mr-2 ">Make him Agent</span>
                                            <input
                                                type="checkbox"
                                                checked={isAgent}
                                                onChange={(e) => setIsAgent(e.target.checked)}
                                                className="checkbox"
                                            />
                                        </label>
                                    </div>
                                </div>


                            </div>
                            <button className=' p-2 rounded-md text-white w-20 bg-gray-900 hover:bg-gray-800' type="submit">save</button>
                        </form>
                    )
                    }
                </div>
            </div>
        </div>

    )
}

export default EditUser