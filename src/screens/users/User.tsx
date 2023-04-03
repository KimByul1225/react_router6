import { useParams } from "react-router-dom"
import { users } from "../db";

function User() {
    const params = useParams();
    const {userId} = params;
    const userIndex = Number(userId) - 1;

    return (
        <>
            <div>User Id: {userId}</div>
            <div>{users[userIndex].name}</div>
        </>
        
    )
}

export default User