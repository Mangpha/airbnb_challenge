import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { listCharacters } from '../api';
import { CHARACTERS } from '../constants';
import { CharactersResponse } from '../types';

export const Characters = () => {
	const { data, isLoading } = useQuery<CharactersResponse>({
		queryFn: listCharacters,
		queryKey: [CHARACTERS],
	});

	console.log(data);

	return (
		<Grid px={40} py={30} templateColumns="repeat(5, 1fr)" gap={6}>
			<GridItem w="100%" h="250" bg="blue.500" />
			<GridItem w="100%" h="250" bg="blue.500" />
			<GridItem w="100%" h="250" bg="blue.500" />
			<GridItem w="100%" h="250" bg="blue.500" />
			<GridItem w="100%" h="250" bg="blue.500" />
		</Grid>
	);
};
