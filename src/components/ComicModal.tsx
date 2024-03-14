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
import { ComicModalComponent } from '../types/ComponentTypes';
import { Link } from 'react-router-dom';

export const ComicModal: React.FC<ComicModalComponent> = ({
	isOpen,
	closeComicModal,
	comic,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={closeComicModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{comic?.title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Image
						src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
						alt={comic?.title}
					/>
					<Text my="2">{comic?.description}</Text>
					<Link to={`comics/${comic?.id}`}>
						<Button>Detail &rarr;</Button>
					</Link>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
