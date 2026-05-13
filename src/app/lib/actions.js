import { revalidatePath } from "next/cache";

export const deleteUser = async (userID) =>{
        'use server';
        const res = await fetch(`http://localhost:8000/users/${userID}`,{
            method: `DELETE`
        });
        const data = await res.json();
        console.log('after delete data:' ,data)
       
        // Todo Revalidate Cache
        if(data.deletedCount > 0){
            revalidatePath('/users')
        }
        return data;
} 