import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// React Bootstrap
import { Container, Form, InputGroup, Row, Col, Table, Stack, Button } from 'react-bootstrap';
import { 
    get_all_items, 
    delete_item
} from '../../redux/ducks/items_d';

//Componnets 
import ConfirmDialog from '../../components/common/ConfirmDialog';
import { findUserAction, getItemType} from '../../utils/helpers';

//Constants
import itemsSelector from "../../utils/constants/itemsJSONs/itemsSelector.json"

const Search = () => {
	const dispatch = useDispatch();

	const { n_items , items } = useSelector(state => state.items);

	const [itemToSearch, setItemToSearch] = useState('');
	const [searchBy, setSearchBy] = useState('');
	const [searchString, setSearchString] = useState('');
	const [showDialog, setShowDialog] = useState(false);
	const [selectedItem, setSelectedItem] = useState({ id: '', type: '' });

	const searchByOptions = [{ label: 'Título', value: 'title'}, { label: 'Autor', value: 'author'}, { label: 'Edición', value: 'edition'}, { label: 'ISBN', value: 'isbn'}]
    
    // REDUX DATA
    const user_actions = useSelector(state => state.user.role.actions)

    //USEEFFECT
	useEffect(() => {
		dispatch(get_all_items({}));
	}, []); //eslint-disable-line

	useEffect(() => {
		searchItems(itemToSearch);
	}, [itemToSearch]); //eslint-disable-line


    //HELPERS
	const goToItem = (e, itemId) => {
		e.preventDefault();
		window.location.href = `/item/${itemId}/info`;
	}

	const handleDialogFunctions = (itemId, itemType) => {
		setSelectedItem({ id: itemId, type: itemType });
		setShowDialog(true);
	}

	const searchItems = (itemToSearch = '') => {
		let query = {
			...(itemToSearch !== '' && { itemType: itemToSearch }),
			...((searchBy !== '' && searchString !== '' ) && { [`${searchBy}`]: searchString })
		}
		
		dispatch(get_all_items(query));
	}

	return (
		<Container className='p-3 mb-4'>
			<ConfirmDialog 
				show={showDialog}
				onHide={() => setShowDialog(false)}
				confirmFunction={() => dispatch(delete_item(selectedItem.id, { itemType: selectedItem.type }, setShowDialog))}
			/>

			<h1 className='text-center'>Búsqueda</h1>

			<Form>
				<Row>
					<Col className='pe-0' xs={4}>
						<InputGroup className='mb-3'>
							<InputGroup.Text id='search'>Buscar por:</InputGroup.Text>
							<Form.Select defaultValue='Elegir...' value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
								<option value=''>Elegir...</option>
								{searchByOptions.map((option) => (
									<option key={option.value} value={option.value}>{option.label}</option>
								))}
							</Form.Select>
							<Form.Text className='text-muted'>
								Selecciona una opción para comenzar a buscar.
							</Form.Text>
						</InputGroup>
					</Col>
					<Col xs={8}>
						<InputGroup className='mb-3'>
							<Form.Control value={searchString} disabled={searchBy === ''} onChange={(e) => setSearchString(e.target.value)} />
							<Button onClick={(e) => { e.preventDefault(); searchItems() }}>Buscar</Button>
						</InputGroup>
					</Col>
				</Row>
				<Form.Group as={Col} controlId='formGridState'>
					<div className='text-center'>
						<Form.Label><i className='bi bi-filter me-2'></i> Tipo de Artículo</Form.Label>
					</div>
					<Form.Select defaultValue='Elegir...' value={itemToSearch} onChange={(e) => setItemToSearch(e.target.value)}>
						<option value=''>Elegir...</option>
						{itemsSelector.map((item) => (
							<option key={item.itemType} value={item.itemType}>{item.label}</option>
						))}
					</Form.Select>
				</Form.Group>
			</Form>

			<p className='mt-5 mb-3'>Artículos encontrados: {n_items}</p>

			<Table striped>
				<tbody>
					{n_items > 0
						? items.map((item) => (
								<tr key={item._id}>
									<td style={{ width: '150px' }}>Imagen del Artículo</td>
									<td>
										<div>
											<h5 className='mb-1' style={{ cursor: 'pointer' }} onClick={(e) => goToItem(e, item._id)}>{item.title}</h5>
											<p className='mb-3'>por {item.author}</p>
											<p className='mb-0'>Tipo de material: {getItemType(item.itemType)}</p>
											{item.edition !== '' && <p className='mb-0'>Edición: {item.edition}</p>}
											{item.isbn !== '' && <p className='mb-0'>ISBN: {item.isbn}</p>}

											<Stack className='mt-4' direction='horizontal' gap={3}>
												{/* <div className='vr' /> */}
												{(findUserAction(user_actions, 'items_get_admin_info')) &&
													<Fragment>
														<Link className='btn-item-action' to={`/item/${item._id}/update`}>
															<i className='bi bi-arrow-clockwise me-2'></i>Actualizar
														</Link>
														<Button className='btn-item-action' onClick={() => handleDialogFunctions(item._id, item.itemType)}>
															<i className='bi bi-trash3 me-2'></i>Eliminar
														</Button>
													</Fragment>
												}
											</Stack>
										</div>
									</td>
								</tr>
							))
						: <tr>
								<td className='text-center' colSpan={2}>No hay items</td>
							</tr>
					}
				</tbody>
			</Table>
		</Container>
	)
}

export default Search;
