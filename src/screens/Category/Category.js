import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../components/CardGrid/CardGrid';
import Loading from '../../UI/Loading/Loading';
import Error from '../../UI/Error/Error';
import useCategory from '../../hooks/useCategory';
import { AppContext } from '../../context/AppProvider';
import * as S from './styles';

const Category = ({ route, navigation }) => {
	const { params } = route;
	const { category } = params;
	const state = useContext(AppContext);
	const { country } = state;
	const { status, data, isFetching } = useCategory(country, category);

	return (
		<Wrapper>
			<Header
				title={category}
				button
				onPress={() => {
					navigation.goBack();
				}}
			/>
			<S.Headline size={2}>
				<FormattedMessage
					id="app.screens.header.topNews"
					values={{ country }}
				/>
			</S.Headline>
			{status === 'loading' || isFetching ? (
				<Loading />
			) : status === 'error' ? (
				<Error />
			) : (
				<CardGrid news={data.articles} />
			)}
		</Wrapper>
	);
};

Category.propTypes = {
	route: PropTypes.any.isRequired
};

export default Category;
