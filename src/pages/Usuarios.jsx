import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { usersRequest } from "../api/auth";
import UserItem from "./UserItem";
import UserForm from "./UserForm";

const Usuarios = () => {
    const logout = useAuthStore(state => state.logout)
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [isActive, setIsActive] = useState(false)


    const ObtenerUsuarios = async () => {
        try {
            const getUsuarios = await usersRequest()
            setUsers(getUsuarios.data)
        } catch (error) {
            console.error("Error al obtener los usuarios: ", error)
        }
    }

    useEffect(() => {
        ObtenerUsuarios()
    }, [])

    return (
        <div className="h-screen mx-4 mt-2">
            <p className="text-center p-4 uppercase font-bold text-xl">
                Usuarios
            </p>
            <button
                onClick={() => setIsActive(!isActive)}
                className="hover:cursor-pointer bg-[#141419] text-white p-2 rounded-lg"
            >
                {isActive ? <i className="bi bi-x px-2"></i> : <i className="bi bi-plus px-2"></i>}
            </button>
            {isActive && <div>
                <UserForm setIsActive={setIsActive} ObtenerUsuarios={ObtenerUsuarios} />
            </div>}
            <ul className="flex">
                {
                    users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))
                }
            </ul>
            <button
                className="hover:cursor-pointer inline-block fixed bottom-5 bg-[#141419] text-white p-2 rounded-lg"
                onClick={() => {
                    logout()
                    navigate('/login')
                }}>
                <i className="bi bi-box-arrow-left px-2"></i>
            </button>
        </div>

    )
}
export default Usuarios