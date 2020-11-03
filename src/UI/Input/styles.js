import styled, { css } from 'styled-components/native';

export const InputWrapper = styled.View`
	width: 100%;
	position: relative;
`;

export const Input = styled.TextInput`
	width: 100%;
	max-width: 100%;
	flex-shrink: 0;
	border: none;
	border-radius: 0;
	background: rgb(229, 229, 234);
	color: ${({ theme }) => theme.textPrimary};
	font-size: 16px;
	line-height: 20px;
	margin-top: 10px;
	padding: 15px 25px;
	border-radius: 35px;
`;
