import styled from 'styled-components/native';

export const Wrapper = styled.View`
	flex: 1;
	justify-content: center;
	background-color: ${({ theme }) => theme.brandLight};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	min-height: 100px;
`;

export const ErrorText = styled.Text`
	color: ${({ theme }) => theme.brandGray};
	margin-top: 10px;
`;
