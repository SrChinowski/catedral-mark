import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// React Bootstrap
import { Container, Button } from 'react-bootstrap';

// Components
import Leader from '../tags/Leader';
import Tags from '../tags/Tags';
import ItemTag from '../tags/ItemTag';

// Actions

// Utils
import itemsSelector from '../../../utils/constants/itemsJSONs/itemsSelector.json';
import { get_item_info, update_item } from '../../../redux/ducks/items_d';
import { isEmpty } from '../../../utils/helpers';

const ItemUpdate = () => {
	const { item_id } = useParams();

	const dispatch = useDispatch();

	const user_info = useSelector(state => state.user)
	const { item_info } = useSelector(state => state.items);

	const [itemInfo, setItemInfo] = useState({});
	const [itemFields, setItemFields] = useState({});

	useEffect(() => {
		dispatch(get_item_info(user_info.role.actions, item_id));
	}, []); //eslint-disable-line

	useEffect(() => {
        console.log(item_info)
		if (!isEmpty(item_info)) {
			setItemInfo(item_info?.marcData);
	
			const itemFound = itemsSelector.find(item => item.itemType === item_info?.itemType);
			console.log(itemFound)
            setItemFields(itemFound);
		}
	}, [item_info]);

	const saveItem = (e) => {
		e.preventDefault();
		dispatch(update_item(item_id, itemInfo._id, { item_type: item_info?.itemType }, itemInfo));
	}

	return (
		<Container className='p-3' fluid>
			<h1 className='text-center'>Actualizar Item</h1>
			
			<Leader
				itemInfo={itemInfo}
				leaderTag={itemInfo?.leader !== undefined ? itemInfo?.leader : {}}
				setItemInfo={setItemInfo}
			/>
			<hr className='mx-3 my-2'/>
			{itemInfo?.physicalDesc !== undefined &&
				<Fragment>
					<ItemTag
						title='Campo de Descripción Física'
						tagKey='physicalDesc'
						itemFields={itemFields.data.physicalDesc}
						itemInfo={itemInfo}
						setItemInfo={setItemInfo}
					/>
					<hr className='mx-3 my-2'/>
				</Fragment>
			}
			{itemInfo?.itemTags !== undefined &&
				<Fragment>
					<ItemTag
						title={itemFields.label}
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
				tags={itemInfo?.tags !== undefined ? itemInfo?.tags : {}}
				setItemInfo={setItemInfo}
				create={true}
			/>

			<div className='d-grid gap-2 mx-2 my-4'>
				<Button variant='success' onClick={(e) => saveItem(e)}>
					Actualizar Item
				</Button>
			</div>
		</Container>
	);
}

export default ItemUpdate;
 