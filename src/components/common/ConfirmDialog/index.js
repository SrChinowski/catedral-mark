import React from 'react';

// React Bootstrap
import { Container, Col, Row, Button, Modal } from 'react-bootstrap';

// Packages
import PropTypes from 'prop-types';

const ConfirmDialog = (props) => {
	const { show, onHide, confirmFunction } = props;

	const imgStyles = {
		height: '30vh',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '1rem'
	};

	return (
		<Modal
			show={show}
			onHide={onHide}
			backdrop='static'
			keyboard={false}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Body>
				<img src={process.env.PUBLIC_URL + '/assets/question.png'} style={imgStyles} alt='Question' />

				<Container className='text-center mb-3'>
					<Modal.Title as='h2'>¿Estás seguro?</Modal.Title>
					<p className='py-3'>Esta acción no se puede deshacer.</p>

					<Row>
						<Col className='d-flex justify-content-evenly'>
							<Button variant='outline-danger' onClick={onHide}>Cancelar</Button>
							<Button variant='primary' onClick={confirmFunction}>Confirmar</Button>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
		</Modal>
	);
}

ConfirmDialog.propTypes = {
	show: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired,
	confirmFunction: PropTypes.any
}

export default ConfirmDialog;
