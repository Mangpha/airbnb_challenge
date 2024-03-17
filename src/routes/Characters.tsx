import { Box, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { listCharacters } from '../api';
import { CHARACTERS } from '../constants';
import { CharactersResponse } from '../types';
import CharacterList from '../components/CharacterList';

export const Characters = () => {
	const { data: characterData, isLoading: characterDataLoading } =
		useQuery<CharactersResponse>({
			queryFn: listCharacters,
			queryKey: [CHARACTERS],
		});

	return (
		<Box>
			{characterData?.code === 200 && !characterDataLoading ? (
				<CharacterList
					offset={characterData.data.offset}
					limit={characterData.data.limit}
					total={characterData.data.total}
					count={characterData.data.count}
					results={characterData.data.results}
				/>
			) : (
				<Text>Loading</Text>
			)}
		</Box>
	);
};
