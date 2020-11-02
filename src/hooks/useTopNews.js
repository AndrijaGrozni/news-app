import Config from 'react-native-config';
import { useQuery } from 'react-query';
import axios from 'axios';

const getTopNews = async (_, country) => {
	const { data } = await axios.get(
		`${Config.APP_API}?country=${country}&apiKey=${Config.APP_API_KEY}`
	);
	return data;
};

export default function usePosts(country) {
	return useQuery(['topNews', country], getTopNews);
}
