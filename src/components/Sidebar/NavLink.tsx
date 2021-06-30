import { Link, Icon, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest}: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}