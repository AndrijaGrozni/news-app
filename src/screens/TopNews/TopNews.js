import React from 'react';
import { View, Text, Button } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Container from '../../UI/Container/Container';
import Header from '../../components/Header/Header';

const TopNews = ({ navigation }) => {
	return (
		<Wrapper>
			<Header title="Top News" />
			<Container>
				<View>
					<Text>Top news page</Text>
					<Button
						title="Go to Single News"
						onPress={() => navigation.navigate('Single News')}
					/>
				</View>
			</Container>
		</Wrapper>
	);
};

TopNews.propTypes = {};

TopNews.defaultProps = {};

export default TopNews;
