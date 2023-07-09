import { AdminConfig } from '@keystone-6/core/types';
import { CustomLogo } from './components/Logo';
import { CustomNavigation } from './components/Navigation';

// Presently the Logo is the only Admin UI component that is customisable.
export const components: AdminConfig['components'] = {
  Logo: CustomLogo,
  Navigation: CustomNavigation,
};