import React, { Fragment } from 'react';

// React Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Packages
import PropTypes from 'prop-types';
import { createControlField, createLeaderTag, findTag } from '../utils/CreateTagValues';


const SimpleView = (props) => {
	const { marcData } = props;

	if (marcData !== undefined) {
		return (
			<Container fluid>
				<Row className='mt-4'>
					<Col lg={2}><b>000</b></Col>
					<Col className='ps-1' lg={10}>{createLeaderTag(marcData.leader)}</Col>
				</Row>
				<hr className='my-1'/>
				<Row>
					<Col lg={2}><b>003</b></Col>
					<Col lg={10}></Col>
				</Row>
				<hr className='my-1'/>
				<Row>
					<Col lg={2}><b>005</b></Col>
					<Col lg={10}></Col>
				</Row>
				<hr className='my-1'/>
				<Row>
					<Col lg={2}><b>008</b></Col>
					<Col className='ps-1' lg={10}>{createControlField(marcData.itemTags)}</Col>
				</Row>
				<hr className='my-1'/>
				{Object.keys(marcData.tags).map((key) => (
					<Fragment key={key}>
						<Row>
							<Col lg={1}><b>{findTag(key)?.number}</b></Col>
							<Col lg={11}>
								{marcData.tags[key].map((itemTags, idx) => (
									<Row key={idx}>
										<Col lg={1}><b>{itemTags.ind1}</b> &ensp; <b>{itemTags.ind2}</b></Col>
										<Col lg={11}>
											{Object.keys(itemTags.subfields).map((subfieldKey) => (
												<p className='m-0' key={subfieldKey}><b>_{subfieldKey}</b> &ensp; {itemTags.subfields[subfieldKey]}</p>
											))}
										</Col>
									</Row>
								))}
							</Col>
						</Row>
						<hr className='my-1'/>
					</Fragment>
				))}
			</Container>
		)
	}
    else return ( <h1></h1>)
}

SimpleView.propTypes = {
	marcData: PropTypes.object
}

export default SimpleView;