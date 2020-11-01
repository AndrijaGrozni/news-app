import React from 'react';
import { View, Text, Button } from 'react-native';
import Container from '../../UI/Container/Container';

const TopNews = ({ navigation }) => {
	return (
		<Container>
			<View>
				<Text>Top news page</Text>
				<Button
					title="Go to Single News"
					onPress={() => navigation.navigate('Single News')}
				/>
			</View>
		</Container>
	);
};

TopNews.propTypes = {};

TopNews.defaultProps = {};

export default TopNews;
