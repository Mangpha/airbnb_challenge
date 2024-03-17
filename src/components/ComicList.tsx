import { useState } from 'react';
import { ComicsData, ComicsResult } from '../types';
import { Flex, Grid, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { ComicModal } from './ComicModal';
import { ComicCard } from './ComicCard';

export default function ComicList({ results: comics }: ComicsData) {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [selectedComic, setSelectedComic] = useState<ComicsResult | null>(null);

	const handleComicClick = (comic: ComicsResult) => {
		setSelectedComic(comic);
		onOpen();
	};

	const closeComicModal = () => {
		setSelectedComic(null);
		onClose();
	};

	const backgroundColor = useColorModeValue('gray.100', 'rgb(50, 50, 50)');
	const boxShadowColor = useColorModeValue(
		'rgba(0,0,0,0.2)',
		'rgba(255,255,255,0.2)'
	);

	return (
		<Flex justifyContent={'center'}>
			<Grid px={20} templateColumns={'repeat(4, minmax(150px, 1fr))'} gap={5}>
				{comics.map((comic) => (
					<ComicCard
						comic={comic}
						boxShadowColor={boxShadowColor}
						backgroundColor={backgroundColor}
						handleComicClick={handleComicClick}
					/>
				))}
				<ComicModal
					isOpen={isOpen}
					closeComicModal={closeComicModal}
					comic={selectedComic}
				/>
			</Grid>
		</Flex>
	);
}
