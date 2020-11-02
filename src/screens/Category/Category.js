import React from 'react';
import { View, Text, Button } from 'react-native';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Container from '../../UI/Container/Container';
import Header from '../../components/Header/Header';

const SingleCategory = ({ navigation }) => {
	return (
		<Wrapper>
			<Header
				title="Category"
				button
				onPress={() => navigation.goBack()}
			/>
			<Container>
				<View>
					<Text>Category page</Text>
					<Button
						title="Go to Single Category"
						onPress={() => navigation.navigate('TopNews')}
					/>
				</View>
			</Container>
		</Wrapper>
	);
};

SingleCategory.propTypes = {};

SingleCategory.defaultProps = {};

export default SingleCategory;
