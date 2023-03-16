import React, { useEffect, useState } from 'react';

// React Bootstrap
import { Container, Accordion, Form, Row, Col, Card, ListGroup } from 'react-bootstrap';

// Packages
import PropTypes from 'prop-types';

// Components
import Tag from './Tag';

// Utils
import tagsJSON from '../../../utils/constants/itemsJSONs/tags';
import { isEmpty } from '../../../utils/helpers';

const Tags = (props) => {
	const { itemInfo, tags, setItemInfo, create } = props;
	
	const [selectedTag, setSelectedTag] = useState({});
	const [allTags, setAllTags] = useState(tagsJSON);
	const [tagSearch, setTagSearch] = useState('');

	useEffect(() => {
		const tagsFound = tagsJSON.filter(tag => tag.number.includes(tagSearch));
		setAllTags(tagsFound);
	}, [tagSearch]);
	
	return (
		<Container className='mt-3' fluid>
			<Accordion flush>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>
						<h4 className='my-0'>Etiquetas</h4>
					</Accordion.Header>
					<Accordion.Body className='pb-0'>
						<Row>
							<Col xs={12} md={8}>
								{!isEmpty(selectedTag) &&
									<Card style={{ minHeight: '65vh' }}>
										<Card.Body>
											<Tag
												tagData={selectedTag}
												itemInfo={itemInfo}
												tags={tags}
												setItemInfo={setItemInfo}
												create={create}
											/>
										</Card.Body>
									</Card>
									
								}
							</Col>
							<Col xs={12} md={4}>
								<Card>
									<Card.Body>
										<Card.Title>Etiquetas</Card.Title>
										<Form.Control
											type='text'
											placeholder='Número de etiqueta'
											value={tagSearch}
											onChange={(e) => setTagSearch(e.target.value)}
										/>
										<ListGroup className='mt-3' variant='flush' style={{ height: '65vh', overflowY: 'scroll' }}>
											{allTags.map((tag, idx) => (
												<ListGroup.Item 
													key={idx}
													action
													variant={selectedTag.name === tag.name ? 'primary' : null}
													onClick={(e) => { e.preventDefault(); setSelectedTag(tag); }}
												>
													{tag.number} - {tag.name}
												</ListGroup.Item>
											))}
										</ListGroup>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	)
}

Tags.propTypes = {
	itemInfo: PropTypes.object.isRequired,
	tags: PropTypes.object.isRequired,
	setItemInfo: PropTypes.func.isRequired,
	create: PropTypes.bool.isRequired
}

export default Tags;
