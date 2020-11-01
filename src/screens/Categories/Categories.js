import React from 'react';
import { View, Text, Button } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Container from '../../UI/Container/Container';
import Header from '../../components/Header/Header';

const Categories = ({ navigation }) => {
	return (
		<Wrapper>
			<Header title="Categories" />
			<Container>
				<View>
					<Text>Categories page</Text>
					<Button
						title="Go to Single Category"
						onPress={() => navigation.navigate('Category')}
					/>
				</View>
			</Container>
		</Wrapper>
	);
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
