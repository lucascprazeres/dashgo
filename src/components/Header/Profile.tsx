import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>
          Lucas Prazeres
            </Text>
        <Text color="gray.300" fontSize="small">
          lucas.prazeres@dashgo.com
            </Text>
      </Box>

      <Avatar size="md" name="Lucas Prazeres" src="https://github.com/lucascprazeres.png" />
    </Flex>
  )
}