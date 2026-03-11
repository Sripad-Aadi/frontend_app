import { Link } from "react-router-dom"

export default function Register(){
    return (
        <div>
            <h1>Register</h1>
            <p><input type="text" placeholder="Name" /></p>
            <p><input type="text" placeholder="Email" /></p>
            <p><input type="text" placeholder="Password" /></p>
            <p><button>Register</button></p>
            <p>
                <Link to='/login'>Already a customer? Login here.</Link>
            </p>
        </div>
    )
}
    
