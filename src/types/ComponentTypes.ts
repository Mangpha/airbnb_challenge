import { ComicsResult } from '../types';

export interface ComicModalComponent {
	isOpen: boolean;
	closeComicModal: () => void;
	comic: ComicsResult | null;
}
