import {
	Button,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
} from '@chakra-ui/react';
import { CharacterModalComponent } from '../types/ComponentTypes';
import { Link } from 'react-router-dom';

export const CharacterModal: React.FC<CharacterModalComponent> = ({
	isOpen,
	closeCharacterModal,
	character,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={closeCharacterModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{character?.name}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Image
						src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
						alt={character?.name}
					/>
					<Text my="2">{character?.description}</Text>
					<Link to={`${character?.id}`}>
						<Button>Detail &rarr;</Button>
					</Link>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
