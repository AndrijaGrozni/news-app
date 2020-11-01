import React from 'react';
import { View, Text, Button } from 'react-native';
import Container from '../../UI/Container/Container';

const Categories = ({ navigation }) => {
	return (
		<Container>
			<View>
				<Text>Categories page</Text>
				<Button
					title="Go to Selected Category"
					onPress={() => navigation.navigate('Category')}
				/>
			</View>
		</Container>
	);
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
