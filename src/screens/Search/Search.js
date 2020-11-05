import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import CardGrid from '../../components/CardGrid/CardGrid';
import Input from '../../UI/Input/Input';
import Loading from '../../UI/Loading/Loading';
import Error from '../../UI/Error/Error';
import useSearch from '../../hooks/useSearch';
import { AppContext } from '../../context/AppProvider';
import * as S from './styles';

const Search = () => {
	const state = useContext(AppContext);
	const [keyWord, setKeyword] = useState(null);
	const { country } = state;
	const { status, data, isFetching } = useSearch(country, keyWord);

	return (
		<Wrapper>
			<Header title="Search" />
			<S.SearchHeader>
				<S.Headline size={2}>
					<FormattedMessage
						id="app.screens.header.search"
						values={{ country }}
					/>
				</S.Headline>
				<Input
					value={keyWord}
					onChangeText={(e) => setKeyword(e)}
					placeholder="search..."
				/>
			</S.SearchHeader>
			{!keyWord ? (
				<S.EmptySearch>
					<FormattedMessage id="app.global.search.empty" />
				</S.EmptySearch>
			) : (
				<>
					{status === 'loading' || isFetching ? (
						<Loading />
					) : status === 'error' ? (
						<Error />
					) : (
						<CardGrid news={data.articles} />
					)}
				</>
			)}
		</Wrapper>
	);
};

Search.propTypes = {};

export default Search;
