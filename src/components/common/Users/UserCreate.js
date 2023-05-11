import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// React Bootstrap
import { Modal, Form, Col, Button } from 'react-bootstrap';

// Packages
import PropTypes from 'prop-types';

// Components
import CustomAlert from '../utils/CustomAlert';

// Utils
import { get_all_roles, post_user_signup } from '../../../redux/ducks/app_d';

const UserCreate = (props) => {
	const { show, onHide } = props;

	const dispatch = useDispatch();

	const all_roles = useSelector(state => state.app.roles);

	const userInfoInitialState = { name: '', username: '', email: '', role: '' };
	const [userInfo, setUserInfo] = useState(userInfoInitialState);

	const alertInitialState = { display: false, type: '', msg: '' };
	const [alert, setAlert] = useState(alertInitialState);

	useEffect(() => {
		dispatch(get_all_roles());
	}, []);

	const validateUserInfo = userInfo.name === '' || userInfo.username === '' || userInfo.email === '' || userInfo.role === '';

	const resetForm = () => {
		onHide();
		setUserInfo(userInfoInitialState);
		setAlert(alertInitialState);
	}

	const createUser = (e) => {
		e.preventDefault();

		if (validateUserInfo) {
			setAlert({ display: true, type: 'danger', msg: 'Campos faltantes!' });
			return;
		}
		setAlert(alertInitialState);

		dispatch(post_user_signup(userInfo, true, resetForm));
	}

	return (
		<Modal
			show={show}
			onHide={resetForm}
			backdrop='static'
			keyboard={false}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title>Registrar Usuario</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{alert.display &&
					<CustomAlert type={alert.type} msg={alert.msg} />
				}

				{/* {errorExists(users_errors, 'user_signup') &&
					<CustomAlert type='danger' msg={users_errors['user_signup'].msg} />
				} */}

				<Form className='mb-3'>
					<Form.Group className='mb-3' controlId='formBasicName'>
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type='text'
							placeholder='Ingresa nombre'
							value={userInfo.name}
							onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value})}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicUsername'>
						<Form.Label>Nombre de Usuario</Form.Label>
						<Form.Control
							type='text'
							placeholder='Ingresa nombre de usuario'
							value={userInfo.username}
							onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value})}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Correo Electrónico</Form.Label>
						<Form.Control
							type='email'
							placeholder='Ingresa correo electrónico'
							value={userInfo.email}
							onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value})}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Selecciona un Rol</Form.Label>
						<Form.Select defaultValue='Elegir...' onChange={(e) => setUserInfo({ ...userInfo, role: e.target.value})}>
							<option value=''>Elegir...</option>
							{all_roles.map((role) => (
								<option key={role._id} value={role.name}>{role.name}</option>
							))}
						</Form.Select>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-secondary' onClick={resetForm}>Cancelar</Button>
				<Button variant='primary' onClick={(e) => createUser(e)}>
					Registrar
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

UserCreate.propTypes = {
	show: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired
}

export default UserCreate;
