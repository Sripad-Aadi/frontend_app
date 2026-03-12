import { Link, useNavigate } from "react-router-dom"
import { useState} from "react"
import axios from "axios"

export default function Register(){
    const [user, setUser] = useState({})
    const API_URL = import.meta.env.VITE_API_URL
    const Navigate = useNavigate()

    const handleSubmit = async ()=>{
        const url = API_URL+'/auth/signup'
        const response = await axios.post(url,user)
        Navigate('/login')
    }
    return (
        <div>
            <h1>Register</h1>
            <p><input type="text" onChange={(e)=>setUser({...user,name:e.target.value})} placeholder="Name" /></p>
            <p><input type="text" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Email" /></p>
            <p><input type="text" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password" /></p>
            <p><button onClick={handleSubmit}>Register</button></p>
            <p>
                <Link to='/login'>Already a customer? Login here.</Link>
            </p>
        </div>
    )
}
    
