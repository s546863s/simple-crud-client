import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../Components/UsersTable';

const UsersPage = async () => {
    const users = await getUsers();
    return (
        <div>
            <h1>This is User Management:{users.length}</h1>
            <UsersTable users={users} />
        </div>
    );
};

export default UsersPage;