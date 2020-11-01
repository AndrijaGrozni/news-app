import styled from 'styled-components/native';
import { Image as I } from 'react-native';

export const Image = styled(I)`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
`;
