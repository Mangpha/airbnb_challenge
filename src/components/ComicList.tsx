import { useEffect, useState } from 'react';
import { ComicsData, ComicsResponse, ComicsResult } from '../types';
import {
	Box,
	Flex,
	Grid,
	IconButton,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	SlideFade,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Variants, motion } from 'framer-motion';

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

	return (
		<Flex justifyContent={'center'}>
			<Grid px={20} templateColumns={'repeat(4, minmax(150px, 1fr))'} gap={5}>
				{visibleComics.map((comic) => (
					<Box
						key={comic.id}
						onClick={() => handleComicClick(comic)}
						cursor={'pointer'}
						m={4}
					>
						<Image
							w={'200px'}
							h={'300px'}
							src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
							alt={comic.title}
						/>
						<Text mt={2}>{comic.title}</Text>
					</Box>
				))}
				{isLoading && <Text>Loading...</Text>}
				<Modal isOpen={isOpen} onClose={closeComicModal}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{selectedComic?.title}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Image
								src={`${selectedComic?.thumbnail.path}.${selectedComic?.thumbnail.extension}`}
								alt={selectedComic?.title}
							/>
							<Text mt="2">{selectedComic?.description}</Text>
						</ModalBody>
					</ModalContent>
				</Modal>
			</Grid>
		</Flex>
	);
}
