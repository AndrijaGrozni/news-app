import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Card = ({
	width,
	height,
	title,
	image,
	description,
	onPress,
	fullWidth
}) => {
	return (
		<S.Card width={width} height={height} fullWidth={fullWidth}>
			<S.CardInner>
				{image !== '' && (
					<S.Thumbnail
						resizeMode="cover"
						source={{
							uri: `${
								image ||
								'https://reactnative.dev/img/tiny_logo.png'
							}`
						}}
					/>
				)}
				<S.CardTitle size={3} numberOfLines={3}>
					{title}
				</S.CardTitle>
				{description !== '' && (
					<S.CardDescription medium numberOfLines={3}>
						{description}
					</S.CardDescription>
				)}
				<S.CardButton
					title="Read more  >"
					secondary
					onPress={onPress}
				/>
			</S.CardInner>
		</S.Card>
	);
};

Card.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	onPress: PropTypes.func
};

Card.defaultProps = {
	width: 'auto',
	height: 'auto',
	title: 'No title',
	image: 'https://reactnative.dev/img/tiny_logo.png',
	description: '',
	onPress: () => {}
};

export default Card;
