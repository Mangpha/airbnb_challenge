import {
	Box,
	Flex,
	Grid,
	GridItem,
	HStack,
	Stack,
	VStack,
} from '@chakra-ui/react';

export default function Header() {
	return (
		<Flex justifyContent={'space-between'} bg={'gray.300'} px={20} py={10}>
			<Grid templateColumns={'1fr 1fr 1fr'} gap={'5rem'}>
				<Box>asdf</Box>
				<Box>asdf</Box>
				<Box>asdf</Box>
			</Grid>
			<Box>asdfasdf</Box>
		</Flex>
	);
}
