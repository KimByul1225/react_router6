import { useOutletContext } from "react-router-dom"

interface IFollowersContext {
    nameOfMyuser: string;
}

function Followers() {
    const {nameOfMyuser} = useOutletContext<IFollowersContext>();

    return (
        <div>
            <h1>여기는 {nameOfMyuser}의 Followers</h1>
        </div>
    )
}

export default Followers