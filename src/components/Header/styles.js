import styled, { css } from 'styled-components/native';
import H from '../../UI/Heading/Heading';

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	position: relative;
	margin-bottom: 20px;
	padding: 5px 0 0 0;
`;

export const SubHeading = styled(H)`
	margin: 0 auto;
`;

export const BackText = styled.Text`
	color: white;
	margin-left: 5px;
	margin-top: 2px;
`;

export const BackButton = styled.TouchableOpacity`
	padding: 15px;
	z-index: 2;
	position: absolute;
	top: -10px;
	left: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
