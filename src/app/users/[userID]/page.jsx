import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage =async ({params}) => {
    const {userID} = await params;

    const user = await getUserById(userID);

    console.log(user)

    return (
        <div>
            <h2>User Details: </h2>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.role}</h1>
        </div>
    );
};

export default UserDetailsPage;