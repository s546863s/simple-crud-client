export const deleteUser = async (userID) =>{
`use server`;
const res = await fetch(`http://localhost:8000/users/${userID}`,{
    method: `DELETE`
});
const data = await res.json();
// Todo Revalidate Cache
return data;
}