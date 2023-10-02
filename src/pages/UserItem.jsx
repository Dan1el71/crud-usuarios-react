/* eslint-disable react/prop-types */
const UserItem = ({ user }) => {
    return (
        <li key={user.id} className="p-5 bg-[#141419] text-white m-3">
            <div>
                <p>{user.nombre}</p>
            </div>
            <div>
                <p>{user.correo}</p>
            </div>
            <div>
                <p>{user.telefono}</p>
            </div>
        </li>
    )
}
export default UserItem