import { useEffect, useState } from 'react';
import { ComicsData, ComicsResult } from '../types';
import {
	AspectRatio,
	Box,
	Flex,
	Grid,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { ComicModal } from './ComicModal';

export default function ComicList({ results: comics }: ComicsData) {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [selectedComic, setSelectedComic] = useState<ComicsResult | null>(null);
	const [visibleComics, setVisibleComics] = useState<ComicsResult[]>([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const itemsPerPage = 10;

	useEffect(() => {
		setVisibleComics(comics.slice(0, itemsPerPage));
		setPageNumber(2);
	}, [comics]);

	const handleComicClick = (comic: ComicsResult) => {
		setSelectedComic(comic);
		onOpen();
	};

	const closeComicModal = () => {
		setSelectedComic(null);
		onClose();
	};

	const loadMoreComics = () => {
		setIsLoading(true);
		setTimeout(() => {
			const startIndex = (pageNumber - 1) * itemsPerPage;
			const endIndex = startIndex + itemsPerPage;
			setVisibleComics((prevVisibleComics) => [
				...prevVisibleComics,
				...comics.slice(startIndex, endIndex),
			]);
			setPageNumber((prevPageNumber) => prevPageNumber + 1);
			setIsLoading(false);
		}, 500);
	};

	const handleScroll = () => {
		const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
		if (scrollHeight - scrollTop === clientHeight && !isLoading) {
			loadMoreComics();
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const backgroundColor = useColorModeValue('gray.100', 'rgb(50, 50, 50)');
	const boxShadowColor = useColorModeValue(
		'rgba(0,0,0,0.2)',
		'rgba(255,255,255,0.2)'
	);

	return (
		<Flex justifyContent={'center'}>
			<Grid px={20} templateColumns={'repeat(4, minmax(150px, 1fr))'} gap={5}>
				{visibleComics.map((comic) => (
					<Box
						key={comic.id}
						onClick={() => handleComicClick(comic)}
						cursor={'pointer'}
						m={4}
						p={4}
						bg={backgroundColor}
						borderRadius="md"
						boxShadow={`0px 4px 6px -1px ${boxShadowColor}, 0px 2px 4px -1px ${boxShadowColor}`}
						transition="transform 0.2s, box-shadow 0.2s"
						_hover={{
							transform: 'scale(1.05)',
							boxShadow: `0px 8px 10px -1px ${boxShadowColor}, 0px 4px 6px -1px ${boxShadowColor}`,
						}}
					>
						<AspectRatio ratio={3 / 4}>
							<Image
								w={'100%'}
								h={'auto'}
								src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
								alt={comic.title}
							/>
						</AspectRatio>
						<Text mt={2}>{comic.title}</Text>
					</Box>
				))}
				{isLoading && <Text>Loading...</Text>}
				<ComicModal
					isOpen={isOpen}
					closeComicModal={closeComicModal}
					title={selectedComic?.title}
					description={selectedComic?.description}
					thumbnailUrl={`${selectedComic?.thumbnail.path}.${selectedComic?.thumbnail.extension}`}
				/>
			</Grid>
		</Flex>
	);
}
