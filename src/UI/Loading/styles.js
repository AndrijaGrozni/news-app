import styled from 'styled-components/native';

export const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
	background-color: ${({ theme }) => theme.brandLight};
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 10px;
	min-height: 100px;
`;
