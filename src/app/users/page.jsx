import React from 'react';
import { getUsers } from '../lib/data';

const UsersPage = async () => {
    const users = await getUsers();
    return (
        <div>
            <h1>This is User Management:{users.length}</h1>
        </div>
    );
};

export default UsersPage;