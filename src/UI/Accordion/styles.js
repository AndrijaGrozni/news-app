import styled, { css } from 'styled-components';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';

export const Headline = styled(Heading)`
	background-color: ${({ theme }) => theme.brandLight};
	color: ${({ theme }) => theme.textPrimary};
	margin: 0;
	padding: 20px 20px 20px 20px;
	text-align: left;
	text-transform: capitalize;
`;

export const Span = styled.Text`
	text-transform: uppercase;
`;

export const AccordionOutter = styled.View`
	padding: 5px 0 5px 0;
	border-bottom-width: 1px;
	border-bottom-color: rgba(0, 0, 0, 0.1);
	overflow: hidden;
	position: relative;
	z-index: 2;
	flex-grow: 1;
`;

export const AccordionTouch = styled.TouchableOpacity`
	width: 50px;
	height: 60px;
	margin-left: auto;
	justify-content: center;
	align-items: center;
`;

export const AccordionHeader = styled.View`
	background-color: ${({ theme }) => theme.brandLight};
	padding: 10px;
	flex-direction: row;
	position: relative;
	z-index: 3;
	flex-grow: 1;
`;

export const AccordionContent = styled.View`
	padding: 1px 0;
	flex-grow: 1;
`;

export const ArrowIcon = styled(Icon)`
	transform: rotate(90deg);

	${({ isOpen }) =>
		isOpen &&
		css`
			transform: rotate(-90deg);
		`};
`;
