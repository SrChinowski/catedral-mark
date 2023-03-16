import React from 'react';

// Packages
import PropTypes from 'prop-types';

// React Bootstrap
import { Form, FloatingLabel } from 'react-bootstrap';

const TextForm = (props) => {
	const { label, name, value, onChange } = props;

	return (
		<FloatingLabel controlId={`${value}Id`} label={label}>
			<Form.Control name={name} value={value || ''} onChange={(e) => onChange(e)} />
		</FloatingLabel>
	)
}

TextForm.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

export default TextForm;
