import styled from 'styled-components/native';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import Image from '../Image/Image';

export const Card = styled.View`
	width: ${(props) => (!props.fullWidth ? 47 : 100)}%;
	height: auto;
	min-height: ${(props) => (!props.fullWidth ? 2 : 280)}px;
	background-color: ${({ theme }) => theme.brandDark};
	border-radius: 10px;
	padding: 0;
	margin: 0;
	border: none;
	box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.3);
	margin-bottom: ${(props) => (!props.fullWidth ? 20 : 30)}px;
`;

export const CardInner = styled.View`
	border-radius: 10px;
	overflow: hidden;
`;

export const CardTitle = styled(Heading)`
	padding: ${(props) => (!props.fullWidth ? 10 : 15)}px;
	color: ${({ theme }) => theme.textSecondary};
	background-color: ${({ theme }) => theme.brandDark};
	text-align: ${(props) => (!props.fullWidth ? 'left' : 'center')};
	border-radius: 10px;
`;

export const CardDescription = styled(Paragraph)`
	margin: 0 auto;
	padding: 0 10px 0 10px;
	text-align: ${(props) => (!props.fullWidth ? 'left' : 'center')};
	color: ${({ theme }) => theme.brandLight};
`;

export const Thumbnail = styled(Image)`
	width: 100%;
	background-color: #eff1f3;
	height: ${(props) => (!props.fullWidth ? 150 : 100)}px;
`;

export const CardButton = styled(Button)`
	width: auto;
	padding: ${(props) => (!props.fullWidth ? 10 : 12)}px;
	margin-bottom: 5px;
	margin-top: 5px;
`;
