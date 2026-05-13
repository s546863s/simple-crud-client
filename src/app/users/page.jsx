import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../Components/UsersTable';
import { deleteUser } from '../lib/actions';
import AddUserModal from '../Components/AddUserModal';

const UsersPage = async () => {
    const users = await getUsers();
    return (
        <div>
            <div className='flex justify-between items-center my-6'>
            <h1>This is User Management:{users.length}</h1>
            <AddUserModal />
            </div>
            <UsersTable users={users}  deleteUserAction ={deleteUser} />
        </div>
);
};

export default UsersPage;