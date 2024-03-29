import {
	Box,
	Flex,
	Grid,
	HStack,
	Heading,
	Image,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { CharactersResponse, ComicDetailResponse } from '../types';
import { comicDetail, listComicCharacters } from '../api';
import { CHARACTERS, COMICS } from '../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const ComicDetail = () => {
	const { comicId } = useParams();
	const { isLoading, data } = useQuery<ComicDetailResponse>({
		queryFn: comicDetail,
		queryKey: [COMICS, comicId],
	});
	const { data: comicCharacter } = useQuery<CharactersResponse>({
		queryFn: listComicCharacters,
		queryKey: [CHARACTERS],
	});
	const navigate = useNavigate();
	useEffect(() => {
		if (data) if (data.code !== 200) navigate('/404');
	});

	return (
		<Flex px={40} my={5} minW={'100vw'}>
			<Grid templateColumns={'1fr 2fr'}>
				<Image
					h={'80%'}
					src={`${data?.data.results[0].thumbnail.path}.${data?.data.results[0].thumbnail.extension}`}
				/>

				<VStack ml={20}>
					<Heading as={'h2'} mb={10}>
						{data?.data.results[0].title}
					</Heading>

					<Box>
						<Box mb={10}>
							<Text fontSize={'2xl'}>Characters</Text>
							<Text>
								{comicCharacter?.data.results.length !== 0
									? comicCharacter?.data.results.map((item, index) => (
											<Text key={index}>{item.name}</Text>
									  ))
									: '-'}
							</Text>
						</Box>
						<Box>
							<Text fontSize={'2xl'}>Description</Text>
							<Text>{data?.data.results[0].description}</Text>
						</Box>
					</Box>
				</VStack>
			</Grid>
		</Flex>
	);
};
