import { useState } from 'react';
import { CharactersData, CharactersResult } from '../types';
import { Flex, Grid, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { CharacterCard } from './CharacterCard';
import { CharacterModal } from './CharacterModal';

export default function CharacterList({ results: characters }: CharactersData) {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [selectedCharacter, setSelectedCharacter] =
		useState<CharactersResult | null>(null);

	const handleCharacterClick = (character: CharactersResult) => {
		setSelectedCharacter(character);
		onOpen();
	};

	const closeCharacterModal = () => {
		setSelectedCharacter(null);
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
				{characters.map((character) => (
					<CharacterCard
						character={character}
						boxShadowColor={boxShadowColor}
						backgroundColor={backgroundColor}
						handleCharacterClick={handleCharacterClick}
					/>
				))}
				<CharacterModal
					isOpen={isOpen}
					closeCharacterModal={closeCharacterModal}
					character={selectedCharacter}
				/>
			</Grid>
		</Flex>
	);
}
