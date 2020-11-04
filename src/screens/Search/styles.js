import styled from 'styled-components';
import Heading from '../../UI/Heading/Heading';

export const SearchHeader = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.brandLight};
	z-index: 3;
	padding: 20px 20px 30px 20px;
	box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.3);
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Headline = styled(Heading)`
	color: ${({ theme }) => theme.textPrimary};
	margin-bottom: 15px;
	width: 100%;
	text-align: center;
`;

export const Span = styled.Text`
	text-transform: uppercase;
`;

export const EmptySearch = styled.Text`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.brandLight};
	padding-top: 30px;
	min-height: 100px;
	text-align: center;
`;
