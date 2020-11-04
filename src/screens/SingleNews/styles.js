import styled from 'styled-components';
import Heading from '../../UI/Heading/Heading';
import Image from '../../UI/Image/Image';

export const Headline = styled(Heading)`
	background-color: ${({ theme }) => theme.brandDark};
	color: ${({ theme }) => theme.textSecondary};
	margin: 0;
	padding: 20px 25px;
	box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.3);
	width: 100%;
	z-index: 2;
	text-align: left;
`;

export const Cover = styled(Image)`
	width: 100%;
	height: 35%;
`;

export const ContentInner = styled.View`
	padding: 20px 25px;
`;
