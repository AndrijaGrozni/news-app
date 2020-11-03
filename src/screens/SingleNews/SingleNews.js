import React from 'react';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Container from '../../UI/Container/Container';
import Paragraph from '../../UI/Paragraph/Paragraph';
import * as S from './styles';

const SingleNews = ({ route, navigation }) => {
	const { params } = route;
	const { source, title, urlToImage, content, description } = params;

	return (
		<Wrapper>
			<Header
				title={source?.name}
				onPress={() => navigation.goBack()}
				dropdownDisabled={true}
			/>
			<S.Headline size={1}>{title}</S.Headline>
			<Container contentContainerStyle={contentContainerStyleOverride}>
				{urlToImage && (
					<S.Cover
						resizeMode="cover"
						source={{
							uri: `${
								urlToImage ||
								'https://reactnative.dev/img/tiny_logo.png'
							}`
						}}
					/>
				)}
				<S.ContentInner>
					<Paragraph>{description}</Paragraph>
					<Paragraph>{content}</Paragraph>
				</S.ContentInner>
			</Container>
		</Wrapper>
	);
};

SingleNews.propTypes = {};

SingleNews.defaultProps = {};

export default SingleNews;

const contentContainerStyleOverride = {
	padding: 0,
	backgroundColor: 'white',
	minHeight: '100%'
};
