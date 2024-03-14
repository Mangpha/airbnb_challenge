import { useQuery } from '@tanstack/react-query';
import ComicList from '../components/ComicList';
import { listComics } from '../api';
import { ComicsResponse } from '../types';
import { Box, Text } from '@chakra-ui/react';
import { COMICS } from '../constants';

export default function Home() {
	const { data: comicsData, isLoading: comicsDataLoading } =
		useQuery<ComicsResponse>({
			queryFn: listComics,
			queryKey: [COMICS],
		});

	return (
		<Box>
			{comicsData?.code === 200 && !comicsDataLoading ? (
				<ComicList
					offset={comicsData.data.offset}
					limit={comicsData.data.limit}
					total={comicsData.data.total}
					count={comicsData.data.count}
					results={comicsData.data.results}
				/>
			) : (
				<Text>Loading</Text>
			)}
		</Box>
	);
}
