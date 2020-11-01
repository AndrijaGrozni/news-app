import React from 'react';
import { View, Text, Button } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Container from '../../UI/Container/Container';
import Header from '../../components/Header/Header';

const Search = ({ navigation }) => {
	return (
		<Wrapper>
			<Header title="Search" backgroundColor="#fff" />
			<Container>
				<View>
					<Text>Search</Text>
					<Button
						title="Go to Single News"
						onPress={() => navigation.navigate('Single News')}
					/>
				</View>
			</Container>
		</Wrapper>
	);
};

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
