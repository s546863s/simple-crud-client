export const getUsers = async () =>{
    const res = await fetch('http://localhost:8000/users')
    const data = await res.json();
    return data;
}


export const getUserById = async (userID) =>{
const res = await fetch(`http://localhost:8000/users/${userID}`)
const data = await res.json();
return data;
}