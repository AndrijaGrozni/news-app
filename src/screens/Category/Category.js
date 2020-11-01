import React from 'react';
import { View, Text, Button } from 'react-native';
import Container from '../../UI/Container/Container';

const SingleCategory = ({ navigation }) => {
	return (
		<Container>
			<View>
				<Text>Single Category list</Text>
				<Button
					title="Go to Single News"
					onPress={() => navigation.navigate('Single News')}
				/>
			</View>
		</Container>
	);
};

SingleCategory.propTypes = {};

SingleCategory.defaultProps = {};

export default SingleCategory;
