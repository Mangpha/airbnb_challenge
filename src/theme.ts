import { extendTheme } from '@chakra-ui/react';
import { ThemeConfig } from '@chakra-ui/theme';

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true,
	disableTransitionOnChange: false,
};

export const theme = extendTheme({
	config,
	styles: {
		global: {
			body: {
				transitionProperty: 'all',
				transitionDuration: 'normal',
			},
		},
	},
});
