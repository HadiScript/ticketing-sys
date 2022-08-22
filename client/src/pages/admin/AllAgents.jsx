import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, listAgents } from '../../actions/userAction'
import { FiEdit3, FiDelete } from 'react-icons/fi'

const AllAgents = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch()

    const agentsList = useSelector((state) => state.agentsList)
    const { loading, error, agents } = agentsList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listAgents())
        } else {
            navigate('/login')
        }
    }, [dispatch, navigate, userInfo, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure ?')) {
            dispatch(deleteUser(id))
        }
    }




    // const list = UserData.filter(x => x.isAdmin === true)

    return (
        <motion.div
            exit={{
                x: '-100vw',
                transition: { ease: 'easeInOut' }
            }}
            className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
            <div className="card-body">
                <h2 className="card-title">All Agents <div className="bg-darkFrom text-gray-100 p-1 rounded-md">Admin</div> </h2>
                <hr />
                {/* table */}

                {loading ? (
                    <p> Loading... </p>
                ) : error ? (
                    <p className='text-red-700'>{error}</p>
                ) : (
                    <table className="min-w-full text-sm border border-gray-100 divide-y-2 divide-gray-200">
                        <thead >
                            <tr className="divide-x divide-gray-100">
                                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Name</th>
                                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Email</th>
                                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Profession</th>
                                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Is Admin</th>
                                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"> Edit </th>
                                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"> Delete </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {
                                agents.map((item, index) => <tr key={index} className="divide-x divide-gray-100 hover:shadow-md">
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{item.name}</td>
                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{item.email}</td>
                                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.profession}</td>
                                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.isAdmin ? "Yes" : "No"}</td>
                                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap"> <Link to={`/edit/user/${item._id}`}  >
                                        <FiEdit3 className='text-xl text-darkTo' />
                                    </Link> </td>
                                    <td className="px-4 py-2 text-gray-700 whitespace-nowrap"> <FiDelete
                                        // onClick={deleteHandler(item._id)}
                                        className='text-xl text-red-700' /> </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                )
                }




                {/*  */}
            </div>
        </motion.div>
    )
}

export default AllAgents