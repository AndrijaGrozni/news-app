import styled, { css } from 'styled-components/native';

export const Button = styled.TouchableOpacity`
	position: relative;
	max-width: 100%;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	text-align: center;
	border: none;
	padding: 10px;

	${({ primary }) =>
		primary &&
		css`
			background-color: ${({ theme, danger }) =>
				danger ? theme.brandDanger : theme.brandPrimary};};
			}
		`};

	${({ secondary }) =>
		secondary &&
		css`
			background-color: transparent;
		`};

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
		`};
`;

export const Text = styled.Text`
	font-size: 12px;
	font-weight: bold;

	${({ primary }) =>
		primary &&
		css`
			color: ${({ theme }) => theme.textPrimary};
			}
		`};

	${({ secondary }) =>
		secondary &&
		css`
			color: ${({ theme, danger }) =>
				danger ? theme.brandDanger : theme.brandPrimary};
		`};
`;
