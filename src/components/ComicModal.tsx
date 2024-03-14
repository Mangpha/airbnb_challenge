import {
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
} from '@chakra-ui/react';
import { ComicModalComponent } from '../types/ComponentTypes';

export const ComicModal: React.FC<ComicModalComponent> = ({
	isOpen,
	closeComicModal,
	title,
	thumbnailUrl,
	description,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={closeComicModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Image src={thumbnailUrl} alt={title} />
					<Text mt="2">{description}</Text>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
