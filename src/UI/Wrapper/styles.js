import styled from 'styled-components/native';

export const Wrapper = styled.View`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: ${({ theme }) => theme.brandPrimary};
`;
