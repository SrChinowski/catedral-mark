import React, { Fragment, useEffect, useState } from 'react';

// React Bootstrap
import { Container, Row, Col, Button } from 'react-bootstrap';

// Packages
import PropTypes from 'prop-types';

// Components
import TextForm from '../utils/TextForm';

const Tag = (props) => {
	const { tagData, itemInfo, tags, setItemInfo, create } = props;
	
	const [tagFields, setTagFields] = useState([]);

	const createFields = (create, tagItem) => {
		let data = {}, subfields = {};
	
		if (create) { // se crean tags de item
			tagData.indexes.forEach(index => {
				data = { ...data, [index.value]: '' };
			});
			
			tagData.subfields.forEach(subfield => {
				subfields = { ...subfields, [subfield.value]: '' };
			});
		}
		else { // se actualizan tags de item
			Object.keys(tagItem).map((tagItemKey) => { //eslint-disable-line
				if (typeof tagItem[tagItemKey] !== 'object') {
					data = { ...data, [tagItemKey]: tagItem[tagItemKey] };
				}
				else {
					Object.keys(tagItem[tagItemKey]).map((subfield) => { //eslint-disable-line
						subfields = { ...subfields, [subfield]: tagItem[tagItemKey][subfield] };
					})
				}
			})
		}
	
		return { ...data, subfields };
	}

	useEffect(() => {
		if (tags[tagData.value] === undefined) {
			setTagFields([ createFields(create) ]);
		}
		else {
			let customTagFields = [];

			tags[tagData.value].map((tagItem) => { //eslint-disable-line
				customTagFields.push(createFields(false, tagItem))
			});

			setTagFields(customTagFields);
		}
	}, [tagData]); //eslint-disable-line

	const getLabel = (array, field) => {
		const datFound = array.find(index => index.value === field);
		return datFound !== undefined ? datFound.label : '';
	}

	const onChange = (idx, e, subfields) => {
		const rest = [...tagFields];

		if (subfields) { // update subfields object
			rest[idx]['subfields'][e.target.name] = e.target.value;
		}
		else { // update indexes
			rest[idx][e.target.name] = e.target.value;
		}
		setTagFields(rest);
	}

	const saveTags = () => {
		setItemInfo({
			...itemInfo,
			tags: {
				...tags, 
				[tagData.value]: tagFields
			}
		});
	}

	return (
		<Container fluid>
			<Row className='align-items-center'>
				<Col sm={10}>
					<h5>{tagData.number} - {tagData.name}</h5>
				</Col>
				<Col sm={2} className='text-end'>
					<Button onClick={() => setTagFields([ ...tagFields, createFields(true) ])}>Agregar</Button>
				</Col>
			</Row>

			{tagFields.length > 0 &&
				<Row>
					{tagFields.map((fields, tagFieldIdx) => (
						<Fragment key={tagFieldIdx}>
							<hr className='mt-3 mb-4'/>
							<p>Índices</p>
							{Object.keys(fields).map((key, fieldIdx) => (
								<Fragment key={fieldIdx}>
									{typeof fields[key] !== 'object'
										?	<Col className='pb-3' xs={6}>
												<TextForm
													label={getLabel(tagData.indexes, key)}
													name={key}
													value={tagFields[tagFieldIdx][key]}
													onChange={(e) => onChange(tagFieldIdx, e, false)}
												/>
											</Col>
										:	<Fragment>
												<p>Subcampos</p>
												{Object.keys(fields[key]).map((subfield, idx) => (
													<Col className='pb-3' xs={4} key={idx}>
														<TextForm
															label={getLabel(tagData.subfields, subfield)}
															name={subfield}
															value={tagFields[tagFieldIdx][key][subfield]}
															onChange={(e) => onChange(tagFieldIdx, e, true)}
														/>
													</Col>
												))}
										</Fragment>
									}
								</Fragment>
							))}
						</Fragment>
					))}
				</Row>
			}

			<div className='d-grid gap-2'>
				<Button variant='primary' onClick={saveTags}>
					Guardar Tags
				</Button>
			</div>
		</Container>
	)
}

Tag.propTypes = {
	tagData: PropTypes.object.isRequired,
	itemInfo: PropTypes.object.isRequired,
	tags: PropTypes.object.isRequired,
	setItemInfo: PropTypes.func.isRequired,
	create: PropTypes.bool.isRequired
}

export default Tag;
