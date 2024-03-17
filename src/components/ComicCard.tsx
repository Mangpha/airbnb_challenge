import { AspectRatio, Box, Image, Text } from '@chakra-ui/react';
import { ComicCardComponent } from '../types/ComponentTypes';

export const ComicCard: React.FC<ComicCardComponent> = ({
	comic,
	backgroundColor,
	boxShadowColor,
	handleComicClick,
}) => {
	return (
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
	);
};
