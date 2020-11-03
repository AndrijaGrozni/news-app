import styled from 'styled-components/native';
import H from '../../UI/Heading/Heading';

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	position: relative;
	margin-bottom: 20px;
	padding: 10px 0 0 0;
	z-index: 10;
`;

export const SubHeading = styled(H)`
	margin: 0 auto;
`;

export const BackButton = styled.TouchableOpacity`
	padding: 15px;
	z-index: 2;
	position: absolute;
	top: -5px;
	left: 10px;
	width: 65px;
	height: 45px;
`;
