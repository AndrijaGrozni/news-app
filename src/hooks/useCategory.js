import Config from 'react-native-config';
import { useQuery } from 'react-query';
import axios from 'axios';

const getCategory = async (_, country, category) => {
	const { data } = await axios.get(
		`${Config.APP_API}?country=${country}&category=${category}&apiKey=${Config.APP_API_KEY}`
	);

	return data;
};

export default function usePosts(country, category) {
	return useQuery(['topNews', country, category], getCategory);
}
