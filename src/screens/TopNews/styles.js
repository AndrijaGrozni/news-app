import styled from 'styled-components';
import Heading from '../../UI/Heading/Heading';

export const Headline = styled(Heading)`
	background-color: ${({ theme }) => theme.brandLight};
	color: ${({ theme }) => theme.textPrimary};
	margin: 0;
	padding: 15px 20px;
	box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.3);
	width: 100%;
	z-index: 2;
	text-align: center;
`;
