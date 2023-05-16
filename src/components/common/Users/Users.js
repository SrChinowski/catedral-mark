import React, { useEffect, useState } from 'react';

// React Bootstrap
import { Container, Col, Table, Button } from 'react-bootstrap';

// Pacakges
import Avatar from 'react-avatar';

// Components
import UserCreate from './UserCreate';
import ConfirmDialog from '../utils/ConfirmDialog';

// Actions
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, getAllUsers } from '../../../redux/ducks/app_d';

const Users = () => {
	const dispatch = useDispatch();

	const  all_users  = useSelector(state => state.app.users_list);

	const [showModal, setShowModal] = useState(false);
	const [showDialog, setShowDialog] = useState(false);
	const [selectedUser, setSelectedUser] = useState('');

	useEffect(() => {
		dispatch(getAllUsers());
	}, []); //eslint-disable-line

	const avatarColor = { god: '#6f42c1', admin: '#0d6efd' };

	const handleDialogFunctions = (userId) => {
		setSelectedUser(userId)
		setShowDialog(true);
	}

	return (
		<Container className='p-3 mb-4'>
			<UserCreate
				show={showModal}
				onHide={() => setShowModal(false)}
			/>

			<ConfirmDialog 
				show={showDialog}
				onHide={() => setShowDialog(false)}
				confirmFunction={() => dispatch(deleteUsers(selectedUser, setShowDialog))}
			/>

			<Container className='wrapper-container px-0' fluid>
				<Col className='title'>
					<h1 className='text-center'>Usuarios Registrados</h1>
				</Col>
				<Col className='icons-btns'>
					<Container className='d-flex align-items-center justify-content-end px-0'>
						<Button variant='primary' size='lg' onClick={() => setShowModal(true)}>
							<strong>Registrar</strong>
						</Button>
					</Container>
				</Col>
			</Container>

			<p className='mt-5 mb-3'>Total de usuarios: {all_users.n_users}</p>

			<Table striped>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Nombre de Usuario</th>
						<th>Correo Electrónico</th>
						<th>Rol</th>
						<th>Fecha de Creación</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{all_users.length > 0
						? all_users.map((user) => (
								<tr key={user._id}>
									<td>
										<div className='d-flex align-items-center'>
											<Avatar name={user.name} color={avatarColor[user.role]} size='40' round={true} />
											<p className='mb-0 ms-2'>{user.name}</p>
										</div>
									</td>
									<td className='align-middle'>{user.username}</td>
									<td className='align-middle'>{user.email}</td>
									<td className='align-middle'>{user.role}</td>
									<td className='align-middle'>{new Date(user.createdAt).toLocaleString('es-MX')}</td>
									<td className='align-middle'>
									<Button className='btn-item-action' onClick={() => window.location.href = `/user/${user._id}/info`}>
											<i className='bi bi-arrow-clockwise me-2 fs-5' style={{marginRight: "0px !important"}}></i>
										</Button>
										<Button className='btn-item-action' onClick={() => handleDialogFunctions(user._id)}>
											<i className='bi bi-trash3 me-2 fs-5' style={{marginRight: "0px !important"}}></i>
										</Button>
									</td>
								</tr>
							))
						: <tr>
								<td className='text-center' colSpan={6}>No hay usuarios</td>
							</tr>
					}
				</tbody>
			</Table>
		</Container>
	)
}

export default Users;
