import React from 'react';
import { errorIcon } from '../../settings/images';
import Icon from '../Icon/Icon';
import * as S from './styles';

const Error = () => (
	<S.Wrapper>
		<Icon source={errorIcon} width={35} height={35} />
		<S.ErrorText>Error. No data.</S.ErrorText>
	</S.Wrapper>
);

Error.propTypes = {};

Error.defaultProps = {};

export default Error;
