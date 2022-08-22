import React from 'react'

const ProfileUser = () => {
    return (
        <div className='bg-gray-200'>
            <div className="container mx-auto bg-gray-200 h-screen">
                <div class="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div class="card-body">

                        <h2 class="card-title">Hadi</h2>
                        <p> Developer </p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Edit Profile</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser