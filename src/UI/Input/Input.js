import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Input = ({
	textarea,
	name,
	onChangeText,
	placeholder,
	disabled,
	password,
	value,
	...props
}) => {
	const [focus, setFocus] = useState();

	return (
		<S.InputWrapper>
			<S.Input
				name={name}
				defaultValue={value}
				onChangeText={onChangeText}
				focus={focus}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(null)}
				placeholder={placeholder}
				placeholderTextColor="#8e8e93"
				{...props}
			/>
		</S.InputWrapper>
	);
};

Input.propTypes = {
	textarea: PropTypes.bool,
	name: PropTypes.string,
	onChangeText: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string
};

Input.defaultProps = {
	textarea: null,
	name: 'text',
	placeholder: 'search',
	value: ''
};

export default Input;
