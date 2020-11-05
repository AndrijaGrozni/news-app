import React from 'react';
import { FormattedMessage } from 'react-intl';
import { errorIcon } from '../../settings/images';
import Icon from '../Icon/Icon';
import * as S from './styles';

const Error = () => (
	<S.Wrapper>
		<Icon source={errorIcon} width={35} height={35} />
		<S.ErrorText>
			<FormattedMessage id="app.global.error" />
		</S.ErrorText>
	</S.Wrapper>
);

Error.propTypes = {};

Error.defaultProps = {};

export default Error;
