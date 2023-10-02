/* eslint-disable react/prop-types */
import { useState } from "react";
import { createUsers } from "../api/auth";

const UserForm = ({ setIsActive, ObtenerUsuarios }) => {
    const [data, setData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            createUsers(data);
            ObtenerUsuarios();
        } catch (error) {
            console.error("Ha ocurrido un problema: ", error);
        } finally {
            setIsActive(false);
            console.log("Usuario creado correctamente.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    return (
        <div className="flex items-center justify-center">
            <form
                className="flex flex-col bg-[#141419] text-white text-center p-5 m-5 rounded-lg"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="text-center m-2 py-1 text-black rounded-md"
                    placeholder="Digite el nombre"
                    name="nombre"
                    value={data.nombre}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    className="text-center m-2 py-1 text-black rounded-md"
                    placeholder="Digite el email"
                    name="correo"
                    value={data.correo}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    className="text-center m-2 py-1 text-black rounded-md"
                    placeholder="Digite el telefono"
                    name="telefono"
                    value={data.telefono}
                    onChange={handleInputChange}
                />
                <button type="submit" className="pt-2 hover:cursor-default" title="Registrar Usuario">
                    <i className="bi bi-arrow-right-short text-2xl hover:cursor-pointer"></i>
                </button>
            </form>
        </div>
    );
};

export default UserForm;
