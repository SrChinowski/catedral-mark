import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// React Bootstrap
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Packages
import Avatar from 'react-avatar';

// Components
import CustomAlert from '../utils/CustomAlert';
import { isEmpty } from '../../../utils/helpers';
import { updateUserService } from '../../../redux/services/user_d';
import { UpdateUser } from '../../../redux/ducks/app_d';

// Actions

// Utils


const UserInfo = () => {
	const { user_id } = useParams();

	const dispatch = useDispatch();

	const user_info = useSelector(state => state.user);

	const [updateUserInfo, setUpdateUserInfo] = useState({ name: '', username: '', email: '' });
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');

	const alertInitialState = { display: false, type: '', msg: '' };
	const [alert, setAlert] = useState(alertInitialState);


	useEffect(() => {
		if (!isEmpty(user_info)) {
			setUpdateUserInfo({ ...updateUserInfo, name: user_info.name, username: user_info.username, email: user_info.email });
		}
	}, [user_info]);

	const avatarColor = { god: '#6f42c1', admin: '#0d6efd' };

	const validateUserInfo = updateUserInfo.name === '' || updateUserInfo.username === '' || updateUserInfo.email === '';

	const updateUser = (e) => {
		e.preventDefault();

		let userInfo = { ...updateUserInfo };

		if (validateUserInfo) {
			setAlert({ display: true, type: 'danger', msg: 'Campos faltantes!' });
			return;
		}
		setAlert(alertInitialState);

		if (password !== '' || confirm !== '') {
			if (password === '' || confirm === '') {
				setAlert({ display: true, type: 'danger', msg: 'Campos faltantes de password!' });
				return;
			}
			userInfo = { ...userInfo, password, confirm };
		}
		
		dispatch(UpdateUser(user_id, userInfo));
	}

	return (
		<Container className='p-3 mb-4'>
			<Row className='mt-4' direction='horizontal' gap={3}>
				<Col className='text-center' lg={3}>
					<Avatar name={user_info.name} color={avatarColor[user_info.role]} size='100' round={true} />
					<h4 className='mt-4'>{user_info.name}</h4>
					<h5 className='text-muted'>{user_info.username}</h5>
				</Col>
				<Col>
					<h1>Información de Usuario</h1>
					{alert.display &&
						<CustomAlert type={alert.type} msg={alert.msg} />
					}

					<Form className='mb-4'>
						<Form.Group className='mb-3' controlId='formBasicName'>
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingresa tu nombre'
								value={updateUserInfo.name}
								onChange={(e) => setUpdateUserInfo({ ...updateUserInfo, name: e.target.value})}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicUsername'>
							<Form.Label>Nombre de Usuario</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingresa nombre de usuario'
								value={updateUserInfo.username}
								onChange={(e) => setUpdateUserInfo({ ...updateUserInfo, username: e.target.value})}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control
								type='email'
								placeholder='Ingresa correo electrónico'
								value={updateUserInfo.email}
								onChange={(e) => setUpdateUserInfo({ ...updateUserInfo, email: e.target.value})}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type='password'
								placeholder='Ingresa contraseña'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicConfirm'>
							<Form.Label>Confirmar Contraseña</Form.Label>
							<Form.Control
								type='password'
								placeholder='Confirma tu contraseña'
								value={confirm}
								onChange={(e) => setConfirm(e.target.value)}
							/>
						</Form.Group>
					</Form>
					<Button variant='primary' onClick={(e) => updateUser(e)}>Actualizar datos</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default UserInfo;
