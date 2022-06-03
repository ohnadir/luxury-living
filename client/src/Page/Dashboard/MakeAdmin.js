import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import RemoveUserModal from './RemoveUserModal';

const MakeAdmin = () => {
    const [removeUser, setRemoveUser] = useState(null);
    const {data:users , isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading/>  
    }
    return (
        <div>
            <div className='bg-white p-6  rounded-lg'>
                <div class="overflow-x-auto">
                    <table class="table border border- w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Criteria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    
                                    <th>{index+1}</th>
                                    <td>{user.email}</td>
                                    <td><button className='bg-[#251D58] rounded-lg text-white px-3 py-[5px]'>Make Admin</button></td>
                                    <td>
                                        <label
                                            htmlFor="userRemoveModal"
                                            onClick={()=>setRemoveUser(user)} className='bg-[#251D58] rounded-lg text-white px-3 py-[5px]'
                                        >Remove</label>
                                    </td>
                                </tr>)
                            }

                            {
                                removeUser && <RemoveUserModal
                                    setRemoveUser={setRemoveUser}
                                    removeUser={removeUser}
                                    refetch={refetch}
                                >
                                </RemoveUserModal>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;