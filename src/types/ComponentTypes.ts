export interface ComicModalComponent {
	isOpen: boolean;
	closeComicModal: () => void;
	title?: string;
	thumbnailUrl?: string;
	description?: string;
}
