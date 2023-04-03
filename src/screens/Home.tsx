import { users } from "./db";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
    const [readSearchParams, setSearchParams] = useSearchParams();
    console.log(readSearchParams);
    
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