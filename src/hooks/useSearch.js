import Config from 'react-native-config';
import { useQuery } from 'react-query';
import axios from 'axios';

const getSearch = async (_, country, keyWord) => {
	const { data } = await axios.get(
		`${Config.APP_API}?country=${country}&q=${keyWord}&apiKey=${Config.APP_API_KEY}`
	);

	return data;
};

export default function usePosts(country, keyWord) {
	return useQuery(['getSearch', country, keyWord], getSearch);
}
