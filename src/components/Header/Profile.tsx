import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileDetails: boolean;
}

export function Profile({ showProfileDetails = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileDetails && (
        <Box mr="4" textAlign="right">
          <Text>
            Lucas Prazeres
            </Text>
          <Text color="gray.300" fontSize="small">
            lucas.prazeres@dashgo.com
        </Text>
        </Box>
      )}

      <Avatar size="md" name="Lucas Prazeres" src="https://github.com/lucascprazeres.png" />
    </Flex>
  )
}