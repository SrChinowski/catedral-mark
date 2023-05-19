import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// React Bootstrap
import { Container, Form, Col, Button } from 'react-bootstrap';

// Components
import Leader from '../tags/Leader';
import Tags from '../tags/Tags';
import ItemTag from '../tags/ItemTag';

// Actions

// Utils
import itemsSelector from '../../../utils/constants/itemsJSONs/itemsSelector.json';
import { item_create } from '../../../redux/ducks/items_d';

const ItemCreate = () => {
	const dispatch = useDispatch();

	const [itemType, setItemType] = useState('');
	const [itemFields, setItemFields] = useState({});
	const [itemInfo, setItemInfo] = useState({});

	useEffect(() => {
		if (itemType !== '') {
			localStorage.setItem('itemType', itemType);
			
			const itemFound = itemsSelector.find(item => item.itemType === itemType);
			setItemFields(itemFound);

			let itemObj = {};
			Object.keys(itemFound.data).map((key) => { //eslint-disable-line
				itemObj = { ...itemObj, [`${key}`]: {}}
			})
			setItemInfo(itemObj);
		}
	}, [itemType]);

	const saveItem = (e) => {
		e.preventDefault();
		dispatch(item_create({ itemType: itemType }, itemInfo));
	}

	return (
		<Container className='p-3' fluid>
			<Container className='p-0 mb-4'>
				<h1 className='text-center'>Crear Item</h1>

				<Form>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Selecciona un Item</Form.Label>
						<Form.Select defaultValue='Elegir...' onChange={(e) => setItemType(e.target.value)}>
							<option value=''>Elegir...</option>
							{itemsSelector.map((item) => (
								<option key={item.itemType} value={item.itemType}>{item.label}</option>
							))}
						</Form.Select>
					</Form.Group>
				</Form>
			</Container>

			{itemType !== ''
				?	<Fragment>
						<Leader
							itemInfo={itemInfo}
							leaderTag={itemInfo.leader !== undefined ? itemInfo.leader : {}}
							setItemInfo={setItemInfo}
						/>
						<hr className='mx-3 my-2'/>
						{itemInfo.physicalDesc !== undefined &&
							<Fragment>
								<ItemTag
									title='007 - Campo de Descripción Física'
									tagKey='physicalDesc'
									itemFields={itemFields.data.physicalDesc}
									itemInfo={itemInfo}
									setItemInfo={setItemInfo}
								/>
								<hr className='mx-3 my-2'/>
							</Fragment>
						}
						{itemInfo.itemTags !== undefined &&
							<Fragment>
								<ItemTag
									title={`008 - ${itemFields.label}`}
									tagKey='itemTags'
									itemFields={itemFields.data.itemTags}
									itemInfo={itemInfo}
									setItemInfo={setItemInfo}
								/>
								<hr className='mx-3 my-2'/>
							</Fragment>
						}
						<Tags
							itemInfo={itemInfo}
							tags={itemInfo.tags !== undefined ? itemInfo.tags : {}}
							setItemInfo={setItemInfo}
							create={true}
						/>
						<div className='d-grid gap-2 mx-2 my-4'>
							<Button variant='success' onClick={(e) => saveItem(e)}>
								Guardar Item
							</Button>
						</div>
					</Fragment>
				:	null
			}
		</Container>
	)
}

export default ItemCreate;
