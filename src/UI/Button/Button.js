import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({
	title,
	onPress,
	primary,
	secondary,
	disabled,
	group,
	danger,
	...props
}) => {
	return (
		<S.Button
			primary={primary}
			secondary={secondary}
			onPress={onPress}
			activeOpacity={0.8}
			disabled={disabled}
			group={group}
			danger={danger}
			{...props}
		>
			<S.Text primary={primary} secondary={secondary} danger={danger}>
				{title}
			</S.Text>
		</S.Button>
	);
};

Button.propTypes = {
	title: PropTypes.string,
	onPress: PropTypes.any,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	disabled: PropTypes.bool,
	group: PropTypes.bool,
	danger: PropTypes.bool
};

Button.defaultProps = {
	title: '',
	onPress: () => {},
	primary: true,
	secondary: false,
	disabled: false,
	group: false,
	danger: false
};

export default Button;
