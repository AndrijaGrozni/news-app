import styled from 'styled-components/native';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';

export const Card = styled.View`
	width: ${(props) => (!props.fullWidth ? 47 : 100)}%;
	height: auto;
	background-color: ${({ theme }) => theme.brandLight};
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
	padding: ${(props) => (!props.fullWidth ? 15 : 12)}px;
	color: ${({ theme }) => theme.textSecondary};
	background-color: ${({ theme }) => theme.brandDark};
	text-align: ${(props) => (!props.fullWidth ? 'left' : 'center')};
	border-radius: 10px;
`;

export const CardDescription = styled(Paragraph)`
	margin: 0 auto;
	padding: 10px 10px 0 10px;
	overflow: hidden;
	text-align: ${(props) => (!props.fullWidth ? 'left' : 'center')};
`;

export const Thumbnail = styled.Image`
	width: 100%;
	height: ${(props) => (!props.fullWidth ? 150 : 100)}px;
`;

export const CardButton = styled(Button)`
	width: 100%;
	padding: ${(props) => (!props.fullWidth ? 10 : 12)}px;
	margin-bottom: 2px;
`;
