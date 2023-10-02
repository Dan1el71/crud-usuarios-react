import { useState } from "react";
import { loginRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const setToken = useAuthStore(state => state.setToken)
    const setProfile = useAuthStore(state => state.setProfile)
    const navigate = useNavigate()

    const restartForm = () => {
        setEmail('')
        setPass('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resLogin = await loginRequest(email, pass)
        setToken(resLogin.data.token)
        setProfile(resLogin.data.data)
        navigate('/usuarios')

        restartForm()
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-[#141419] text-white text-center p-5 rounded-lg">
                <p className="pb-5 font-bold uppercase">
                    Login
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Digite el email"
                        className="text-center m-2 py-1 text-black"
                    />
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => { setPass(e.target.value) }}
                        placeholder="Digite la contrasena"
                        className="text-center m-2 py-1 text-black"
                    />
                    <button type="submit" className="pt-2 hover:cursor-default" title="Login">
                        <i className="bi bi-arrow-right-short text-2xl hover:cursor-pointer p-2"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
export default AdminLogin