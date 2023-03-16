import React, { useEffect } from 'react';

// React Bootstrap
import { Container, Row, Col, Form, Accordion } from 'react-bootstrap';

// Packages
import PropTypes from 'prop-types';

// Components
import TextForm from '../utils/TextForm';

const ItemTag = (props) => {
	const { title, tagKey, itemFields, itemInfo, setItemInfo } = props;

	return (
		<Container fluid>
			<Accordion flush>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>
						<h4 className='my-0'>{title}</h4>
					</Accordion.Header>
					<Accordion.Body className='pb-0'>
						<Form>
							<Row>
								{itemFields.map((itemField) => (
									<Col className='pb-3' xs={3} key={itemField.value}>
										<TextForm
											label={itemField.label}
											name={itemField.value}
											value={itemInfo[tagKey][itemField.value]}
											onChange={(e) => setItemInfo({ ...itemInfo, [`${tagKey}`]: { ...itemInfo[tagKey], [itemField.value]: e.target.value }})}
										/>
									</Col>
								))}
							</Row>
						</Form>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	)
}

ItemTag.propTypes = {
	title: PropTypes.string.isRequired,
	tagKey: PropTypes.string.isRequired,
	itemFields: PropTypes.array.isRequired,
	itemInfo: PropTypes.object.isRequired,
	setItemInfo: PropTypes.func.isRequired
}

export default ItemTag;