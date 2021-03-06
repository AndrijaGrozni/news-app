import styled from 'styled-components';
import Heading from '../../UI/Heading/Heading';

export const Headline = styled(Heading)`
	background-color: ${({ theme }) => theme.brandLight};
	color: ${({ theme }) => theme.textPrimary};
	margin: 0;
	padding: 20px 20px 35px 20px;
	width: 100%;
	z-index: 2;
	text-align: left;
	text-transform: capitalize;
`;

export const Span = styled.Text`
	text-transform: uppercase;
`;

export const SlidderOutter = styled.View`
	padding: 5px 0 0 0;
	border-bottom-width: 1px;
	border-bottom-color: rgba(0, 0, 0, 0.1);
`;
