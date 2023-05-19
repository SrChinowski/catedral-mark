import { Fragment } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { findUserAction } from "../../../utils/helpers";

const UserDropdown = () => {

    // REDUX DATA
    const user_actions = useSelector(state => state.user.role.actions)
    const user_info = useSelector(state => state.user)

    const handleLogOut = () => {
        localStorage.removeItem('catedralToken')
        window.location.href = '/login';
    }

    return ( 
        <NavDropdown 
            title={<i className='bi bi-person-circle fs-5 me-2'></i>}
            id='userDropdown' 
            align='end'
            active
        >
            <Fragment>
                <NavDropdown.Item href={`/user/${user_info.id}/info`}>
                    Registrado como<br/><b>{user_info.username}</b>
                </NavDropdown.Item>
                {findUserAction(user_actions, 'items_create') &&
                    <Fragment>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/items/create'>
                            <i className='bi bi-plus-circle me-2'></i>Crear Item 
                        </NavDropdown.Item>
                    </Fragment>
                }
                {findUserAction(user_actions, 'users_get_all') &&
                    <Fragment>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/users'>
                            <i className='bi bi-person-circle me-2'></i>Usuarios
                        </NavDropdown.Item>
                    </Fragment>
                } 
                <NavDropdown.Divider />
                 <NavDropdown.Item onClick={(e) => handleLogOut(e)}>
                    <i className='bi bi-box-arrow-right me-2'></i>Cerar Sesión
                </NavDropdown.Item>
            </Fragment>
		</NavDropdown>
     );
}
 
export default UserDropdown;