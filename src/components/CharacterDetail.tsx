import {
	Box,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { CharacterDetailResponse } from '../types';
import { characterDetail } from '../api';
import { CHARACTERS } from '../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const CharacterDetail = () => {
	const { characterId } = useParams();
	const { data: comicCharacter } = useQuery<CharacterDetailResponse>({
		queryFn: characterDetail,
		queryKey: [CHARACTERS, characterId],
	});
	const navigate = useNavigate();
	useEffect(() => {
		if (comicCharacter) if (comicCharacter.code !== 200) navigate('/404');
	});

	console.log(comicCharacter);
	return (
		<Flex px={40} my={5} minW={'100vw'}>
			<Grid templateColumns={'1fr 2fr'}>
				<Image
					h={'80%'}
					src={`${comicCharacter?.data.results[0].thumbnail.path}.${comicCharacter?.data.results[0].thumbnail.extension}`}
				/>

				<VStack ml={20}>
					<Heading as={'h2'} mb={10}>
						{comicCharacter?.data.results[0].name}
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
							<Text>{comicCharacter?.data.results[0].description}</Text>
						</Box>
					</Box>
				</VStack>
			</Grid>
		</Flex>
	);
};
