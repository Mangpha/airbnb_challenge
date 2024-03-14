import {
	Box,
	Flex,
	Heading,
	InputGroup,
	InputLeftElement,
	Input,
	IconButton,
	useColorMode,
	useColorModeValue,
	HStack,
} from '@chakra-ui/react';
import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';

export default function Header() {
	const { toggleColorMode } = useColorMode();
	const Icon = useColorModeValue(MoonIcon, SunIcon);

	return (
		<Box
			as={'header'}
			borderBottom={'1px'}
			borderColor={'gray.200'}
			px={20}
			py={6}
		>
			<Flex alignItems={'center'} justifyContent={'space-between'}>
				<Link to={'/'}>
					<HStack>
						<RiMovie2Line size={'2rem'} />
						<Heading as={'h1'} size={'lg'}>
							Marvel Comics
						</Heading>
					</HStack>
				</Link>
				<Flex alignItems={'center'}>
					<HStack mx={10}>
						<Box mr={5}>
							<Link to={'/'}>Comics</Link>
						</Box>
						<Box>
							<Link to={'/characters'}>Characters</Link>
						</Box>
					</HStack>
					<IconButton
						onClick={toggleColorMode}
						variant={'ghost'}
						aria-label={'Toggle color mode'}
						icon={<Icon />}
					/>
				</Flex>
			</Flex>
		</Box>
	);
}
