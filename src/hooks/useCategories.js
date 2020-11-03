import Config from 'react-native-config';
import { useQuery } from 'react-query';
import axios from 'axios';

const getCategories = async (_, country, category, limit) => {
	const { data } = await axios.get(
		`${Config.APP_API}?country=${country}&category=${category}&apiKey=${Config.APP_API_KEY}`
	);

	return data.articles?.splice(0, limit);
};

export default function usePosts(country, category, limit) {
	return useQuery(['topNews', country, category, limit], getCategories);
}
