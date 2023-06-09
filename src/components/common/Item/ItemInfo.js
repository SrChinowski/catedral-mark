import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// React Bootstrap
import { Container, Row, Col, Tabs, Tab, ButtonGroup, ToggleButton, Button } from 'react-bootstrap';

// Components
import ConfirmDialog from '../utils/ConfirmDialog';
import SimpleView from '../Marc/SimpleView';
import TagView from '../Marc/TagView';

// Utils
import { delete_item, get_item_info } from '../../../redux/ducks/items_d';
import { findUserAction, getItemType } from '../../../utils/helpers';

const ItemInfo = () => {
	const { item_id } = useParams();

	const dispatch = useDispatch();

    const user_actions = useSelector(state => state.user.role.actions)

	const { item_info } = useSelector(state => state.items);
	
	const [view, setView] = useState('marc');
	const [viewValue, setViewValue] = useState('simple-view-marc');
	const [showDialog, setShowDialog] = useState(false);

	useEffect(() => {
		dispatch(get_item_info(user_actions,  item_id));
	}, []); //eslint-disable-line

	return (
		<Container className='p-3 mb-4'>
			<ConfirmDialog 
				show={showDialog}
				onHide={() => setShowDialog(false)}
				confirmFunction={() => dispatch(delete_item(item_info?._id, { itemType: item_info?.itemType }, setShowDialog, true))}
			/>

			<Row>
				<Col>
					Imagen del Artículo
				</Col>
				<Col xs={10}>
					<Row>
						<Col xs={( findUserAction(user_actions, 'items_get_admin_info')) ? 10 : 12}>
							<h5 className='text-break mb-3'>{item_info?.title}</h5>
							<p className='mb-0'>Tipo de material: <span className='text-muted'>{getItemType(item_info?.itemType)}</span></p>
							<p className='mb-0'>por <span className='text-muted'>{item_info?.author}</span></p>
							{item_info?.edition !== '' && <p className='mb-0'>Edición: <span className='text-muted'>{item_info?.edition}</span></p>}
							{item_info?.isbn !== '' && <p className='mb-0'>ISBN: <span className='text-muted'>{item_info?.isbn}</span></p>}

							{(findUserAction(user_actions, 'items_get_admin_info')) &&
								<div className='mt-4'>
									<Row>
										<Col className='mb-0' xs={6}>
											<b>Creado por: </b> {item_info?.createdBy?.name}
										</Col>
										<Col className='mb-0' xs={6}>
											<b>Fecha: </b> <span>{new Date(item_info?.createdAt).toLocaleString('es-MX')}</span>
										</Col>
									</Row>
									<Row>
										<Col className='mb-0' xs={6}>
											<b>Actualizado por: </b> {item_info?.updatedBy?.name}
										</Col>
										<Col className='mb-0' xs={6}>
											<b>Fecha: </b> <span>{new Date(item_info?.updatedAt).toLocaleString('es-MX')}</span>
										</Col>
									</Row>
								</div>
							}
						</Col>
						{(findUserAction(user_actions, 'items_get_admin_info')) &&
							<Col className='text-start' xs={2}>
								<Fragment>
									<Link className='btn-item-action' to={`/item/${item_info?._id}/update`}>
										<i className='bi bi-arrow-clockwise me-2'></i>Actualizar
									</Link>
									<Button className='btn-item-action ps-0' onClick={() => setShowDialog(true)}>
										<i className='bi bi-trash3 me-2'></i>Eliminar
									</Button>
								</Fragment>
							</Col>
						}
					</Row>
				</Col>
			</Row>

			<Tabs
				id='marc-view'
				activeKey={view}
				onSelect={(v) => setView(v)}
				className='my-4'
			>
				<Tab eventKey='marc' title='Vista MARC'>
					<ButtonGroup>
						<ToggleButton
							id='simple-view-marc'
							type='radio'
							variant='outline-primary'
							name='radio'
							value='simple-view-marc'
							checked={viewValue === 'simple-view-marc'}
							onChange={(e) => setViewValue(e.currentTarget.value)}
						>
							Vista Simple
						</ToggleButton>
						<ToggleButton
							id='tags-view-marc'
							type='radio'
							variant='outline-primary'
							name='radio'
							value='tags-view-marc'
							checked={viewValue === 'tags-view-marc'}
							onChange={(e) => setViewValue(e.currentTarget.value)}
						>
							Vista Etiquetada
						</ToggleButton>
					</ButtonGroup>

					{viewValue === 'simple-view-marc'
						?	<SimpleView marcData={item_info?.marcData} />
						:	<TagView marcData={item_info?.marcData} />
					}
				</Tab>
			</Tabs>
		</Container>
	)
}

export default ItemInfo;
