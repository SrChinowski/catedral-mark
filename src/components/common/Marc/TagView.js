import React, { Fragment } from 'react';

// React Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Packages
import PropTypes from 'prop-types';

// Utils
import { createLeaderTag, createControlField, findTag, findSubfields } from '../utils/CreateTagValues';

const TagView = (props) => {
	const { marcData } = props;

	if (marcData !== undefined) {
		return (
			<Container fluid>
				<Row className='mt-4'>
					<Col lg={2}>
						<Row>
							<Col lg={6}><b>000</b></Col>
							<Col lg={6}>-</Col>
						</Row>
					</Col>
					<Col className='ps-1' lg={10}>
						<Row><p className='m-0'><b>LÍDER</b></p></Row>
						<Row>
							<Col>
								<p className='m-0'>Campo fijo de descripción fija</p>
							</Col>
							<Col>
								<p className='m-0'>{createLeaderTag(marcData.leader)}</p>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr className='my-3'/>
				<Row>
					<Col lg={2}>
						<Row>
							<Col lg={6}><b>003</b></Col>
							<Col lg={6}>-</Col>
						</Row>
					</Col>
					<Col className='ps-1' lg={10}>
						<Row><p className='m-0'><b>IDENTIFICADOR DEL NÚMERO DE CONTROL</b></p></Row>
						<Row>
							<Col>
								<p className='m-0'>Campo de control</p>
							</Col>
							<Col>
								<p className='m-0'></p>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr className='my-3'/>
				<Row>
					<Col lg={2}>
						<Row>
							<Col lg={6}><b>005</b></Col>
							<Col lg={6}>-</Col>
						</Row>
					</Col>
					<Col className='ps-1' lg={10}>
						<Row><p className='m-0'><b>FECHA Y HORA DE LA ULTIMA TRANSACCIÓN</b></p></Row>
						<Row>
							<Col>
								<p className='m-0'>Campo de control</p>
							</Col>
							<Col>
								<p className='m-0'></p>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr className='my-3'/>
				<Row>
					<Col lg={2}>
						<Row>
							<Col lg={6}><b>008</b></Col>
							<Col lg={6}>-</Col>
						</Row>
					</Col>
					<Col className='ps-1' lg={10}>
						<Row><p className='m-0'><b>ELEMENTOS DE LONGITUD FIJA -- INFORMACIÓN GENERAL</b></p></Row>
						<Row>
							<Col>
								<p className='m-0'>Campo fijo de descripción fija -- Información general</p>
							</Col>
							<Col>
								<p className='m-0'>{createControlField(marcData.itemTags)}</p>
							</Col>
						</Row>
					</Col>
				</Row>
				<hr className='my-3'/>
				{Object.keys(marcData.tags).map((key) => (
					<Fragment key={key}>
						<Row>
							<Col lg={1}><b>{findTag(key)?.number}</b></Col>
							<Col lg={1}>-</Col>
							<Col className='ps-0' lg={10}><b>{findTag(key)?.name.toUpperCase()}</b></Col>
						</Row>
						{marcData.tags[key].map((itemTags, tagIdx) => (
							<Row key={tagIdx}>
								<Col lg={1}></Col>
								<Col lg={1}>
									<p><b>{itemTags.ind1}</b> &ensp; <b>{itemTags.ind2}</b></p>
								</Col>
								<Col lg={10}>
									{Object.keys(itemTags.subfields).map((subfieldKey) => (
										<Row key={subfieldKey}>
											<Col>
												<p className='m-0'>{findSubfields(key, subfieldKey)?.label}</p>
											</Col>
											<Col>
												<p className='m-0'>{itemTags.subfields[subfieldKey]}</p>
											</Col>
										</Row>
									))}
								</Col>
							</Row>
						))}
						<hr className='my-3'/>
					</Fragment>
				))}
			</Container>
		)
	}
}

TagView.propTypes = {
	marcData: PropTypes.object
}

export default TagView;
