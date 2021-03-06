import React from 'react';
import PropTypes from 'prop-types';
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
			<Container contentContainerStyle={contentContainerStyleOverride}>
				<S.Cover source={urlToImage} />
				<S.Headline size={1}>{title}</S.Headline>
				<S.ContentInner>
					<Paragraph>{description}</Paragraph>
					<Paragraph>{content}</Paragraph>
				</S.ContentInner>
			</Container>
		</Wrapper>
	);
};

SingleNews.propTypes = {
	route: PropTypes.object.isRequired
};

export default SingleNews;

const contentContainerStyleOverride = {
	padding: 0,
	backgroundColor: 'white',
	minHeight: '100%'
};
