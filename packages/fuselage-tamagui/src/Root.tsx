import '@tamagui/core/reset.css';

import { Button, TamaguiProvider } from 'tamagui';

import { config } from '../tamagui.config';

export const Root = () => {
  return (
    <TamaguiProvider config={config} defaultTheme='dark'>
      <Button>Hello world</Button>
    </TamaguiProvider>
  );
};
