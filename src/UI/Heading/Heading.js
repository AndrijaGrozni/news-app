import styled, { css } from 'styled-components/native';
import PropTypes from 'prop-types';

const fontSizes = {
	1: 22,
	2: 16,
	3: 12
};

const Heading = styled.Text`
	color: ${({ theme }) => theme.textSecondary};
	font-size: ${({ size }) => `${fontSizes[size]}px`};
	text-align: ${({ textAlign }) => textAlign};
	font-weight: bold;

	${({ size }) =>
		size === 1 &&
		css`
			margin-bottom: 10px;
			}
		`};

	${({ isSubheading }) =>
		isSubheading &&
		css`
			text-transform: uppercase;
			letter-spacing: 1.33px;
			}
		`};
`;

Heading.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOf([1, 2, 3]).isRequired,
	textAlign: PropTypes.oneOf(['left', 'center', 'right']),
	isSubheading: PropTypes.bool
};

Heading.defaultProps = {
	color: 'white',
	textAlign: 'left',
	isSubheading: false
};

export default Heading;
