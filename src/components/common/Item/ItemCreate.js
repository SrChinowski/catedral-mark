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
import { get_templates, item_create } from '../../../redux/ducks/items_d';
import { findTagByNumber } from '../utils/CreateTagValues';
import { useSelector } from 'react-redux';

const ItemCreate = () => {
	const dispatch = useDispatch();

	const [itemType, setItemType] = useState('');
	const [itemFields, setItemFields] = useState({});
	const [itemInfo, setItemInfo] = useState({});

	const template_tags = useSelector(state => state.items.tags)

	useEffect(() => {
		if (template_tags && template_tags?.length !== 0) {
            let _itemInfo = { ...itemInfo };

            template_tags.map(t_tag => { //eslint-disable-line
                const foundTag = findTagByNumber(t_tag?.number);
                _itemInfo['tags'][foundTag?.value] = [];

                let tagInfo = {};
                foundTag?.indexes.map(index => { //eslint-disable-line
                    tagInfo[index.value] = '';
                });

                tagInfo.subfields = {};
                t_tag?.subfields.map(subfield => { //eslint-disable-line
                    tagInfo.subfields[`${subfield.key}`] = subfield.value;
                });

                _itemInfo['tags'][foundTag?.value].push(tagInfo);
            });

            setItemInfo(_itemInfo);
        }
    }, [template_tags]); //eslint-disable-line
 
	useEffect(() => {
		if (itemType !== '') {
			dispatch(get_templates({"itemType": itemType}));
			localStorage.setItem('itemType', itemType);
			
			const itemFound = itemsSelector.find(item => item.itemType === itemType);
			setItemFields(itemFound);

			let itemObj = {};
			Object.keys(itemFound.data).map((key) => { //eslint-disable-line
				itemObj = { ...itemObj, [`${key}`]: {}}
			})
			setItemInfo(itemObj);
		}
	}, [itemType]); //eslint-disable-line

	const saveItem = (e) => {
		e.preventDefault();
		dispatch(item_create({ itemType: itemType }, itemInfo));
	}

	return (
		<Container className='p-3' fluid>
			<Container className='p-0 mb-4'>
				<h1 className='text-center'>Crear Artículo</h1>

				<Form>
					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>Selecciona un Artículo</Form.Label>
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
								Guardar Artículo
							</Button>
						</div>
					</Fragment>
				:	null
			}
		</Container>
	)
}

export default ItemCreate;
