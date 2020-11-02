import styled, { css } from 'styled-components/native';
import PropTypes from 'prop-types';

const Paragraph = styled.Text`
	font-size: 14px;
	text-align: ${({ textAlign }) => textAlign};
	color: ${({ theme }) => theme.textPrimary};

	${({ small }) => small && css`font-size: 10px;}`};
	${({ medium }) => medium && css`font-size: 12px;}`};
`;

Paragraph.propTypes = {
	textAlign: PropTypes.oneOf(['left', 'center', 'right']),
	small: PropTypes.bool,
	medium: PropTypes.bool
};

Paragraph.defaultProps = {
	textAlign: 'left',
	color: 'white',
	small: false,
	medium: false
};

export default Paragraph;
