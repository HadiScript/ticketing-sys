import React from 'react'

import { FiEdit3, FiDelete } from 'react-icons/fi'

import { Link } from 'react-router-dom'

const TableUsers = ({ list, isAdmin, }) => {
    return (
        <table className="min-w-full text-sm border border-gray-100 divide-y-2 divide-gray-200">
            <thead >
                <tr className="divide-x divide-gray-100">
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Name</th>
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Profession</th>
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Is Admin</th>
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"> Edit </th>
                    <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"> Delete </th>
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                {
                    list.map((item, index) => <tr key={index} className="divide-x divide-gray-100 hover:shadow-md">
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{item.name}</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.profession}</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{isAdmin ? "Yes" : "No"}</td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap"> <Link to={`/edit/user/${item.id}`}  >
                            <FiEdit3 className='text-xl text-darkTo' />
                        </Link> </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-nowrap"> <FiDelete className='text-xl text-red-700' /> </td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

export default TableUsers