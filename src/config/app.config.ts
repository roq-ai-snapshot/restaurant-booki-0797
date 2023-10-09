interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef', 'Customer'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own reservations',
    'Create new orders',
    'Edit own orders',
    'View restaurant information and menus',
  ],
  ownerAbilities: ['Manage restaurant information', 'Manage menus', 'Manage reservations', 'Manage orders'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/0d20dff5-5176-449f-9610-59643d8c07a9',
};
