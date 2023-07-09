import React from 'react';

import { ListNavItems, NavigationContainer, NavItem } from '@keystone-6/core/admin-ui/components';

import type { NavigationProps } from '@keystone-6/core/admin-ui/components';

export function CustomNavigation({ lists, authenticatedItem }: NavigationProps) {
  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <NavItem href="/">Dashboard</NavItem>
      <ListNavItems lists={lists} />
      <NavItem href="https://keystonejs.com">Keystone Docs 바로가기</NavItem>
      <NavItem href="http://localhost:3000/api/graphql">API 테스트 바로가기</NavItem>
    </NavigationContainer>
  );
}

// import React from 'react';
// import { NavItem, ListNavItems, NavigationContainer } from '@keystone-6/core/admin-ui/components';
// import type { NavigationProps } from '@keystone-6/core/admin-ui/components';

// export function CustomNavigation({ lists, authenticatedItem }: NavigationProps) {
//   return (
//     <NavigationContainer authenticatedItem={authenticatedItem}>
//       <NavItem href="/">Dashboard</NavItem>
//       <ListNavItems lists={lists} />
//       <NavItem href="../pages/AdminPage">Custom Page</NavItem>
//     </NavigationContainer>
//   );
// }