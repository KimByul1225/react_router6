import { users } from "./db";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>users</h1>
            <ul>
                {
                    users.map(item => (
                        <li key={item.id}>
                            <Link to={`/users/${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Home