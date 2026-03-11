import { Link } from "react-router-dom"

export default function Login(){
    return(
        <div>
            <h2>Login Page</h2>
            <p><input type="text" placeholder="Email" /></p>
            <p><input type="text" placeholder="Password" /></p>
            <p><button>Login</button></p>
            <p>
                <Link to='/register'>New User. Register here.</Link>
            </p>
        </div>
    )
}