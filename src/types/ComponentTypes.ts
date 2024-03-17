import { CharactersResult, ComicsResult } from '../types';

export interface ComicModalComponent {
	isOpen: boolean;
	closeComicModal: () => void;
	comic: ComicsResult | null;
}

export interface ComicCardComponent {
	comic: ComicsResult;
	boxShadowColor: 'rgba(0,0,0,0.2)' | 'rgba(255,255,255,0.2)';
	backgroundColor: 'gray.100' | 'rgb(50, 50, 50)';
	handleComicClick: (comic: ComicsResult) => void;
}

export interface CharacterModalComponent {
	isOpen: boolean;
	closeCharacterModal: () => void;
	character: CharactersResult | null;
}

export interface CharacterCardComponent {
	character: CharactersResult;
	boxShadowColor: 'rgba(0,0,0,0.2)' | 'rgba(255,255,255,0.2)';
	backgroundColor: 'gray.100' | 'rgb(50, 50, 50)';
	handleCharacterClick: (character: CharactersResult) => void;
}
