import React from 'react';

// React Bootstrap
import { Container, Row, Col, Form, Accordion } from 'react-bootstrap';

// Packages
import PropTypes from 'prop-types';

// Components
import TextForm from '../utils/TextForm';

// Utils
import leaderData from '../../../utils/constants/itemsJSONs/leaderData.json';

const Leader = (props) => {
	const { itemInfo, leaderTag, setItemInfo } = props;

	return (
		<Container fluid>
			<Accordion defaultActiveKey='0' flush>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>
						<h4 className='my-0'>Etiqueta Líder</h4>
					</Accordion.Header>
					<Accordion.Body className='pb-0'>
						<Form>
							<Row>
								{leaderData.map((leaderTagData) => (
									<Col className='pb-3' xs={3} key={leaderTagData.value}>
										<TextForm
											label={leaderTagData.label}
											name={leaderTagData.value}
											value={leaderTag[leaderTagData.value]}
											onChange={(e) => setItemInfo({ ...itemInfo, leader: { ...leaderTag, [leaderTagData.value]: e.target.value }})}
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

Leader.propTypes = {
	itemInfo: PropTypes.object.isRequired,
	leaderTag: PropTypes.object.isRequired,
	setItemInfo: PropTypes.func.isRequired
}

export default Leader;
