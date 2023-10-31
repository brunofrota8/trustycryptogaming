
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import Header from './components/Header';
import Main from './components/Main';
import customTheme from "./theme";

import WalletContextProvider from './components/WalletContextProvider';
import { WalletButton } from "./components/WalletButton";
import { Form_RegMov } from './functions/Form_RegMov'

require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

function App() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Box background="#2400FF" position='fixed' w='100%' h='100%'>
          <Flex>
            <Header />
            <Main />

          </Flex>
        </Box>

        <WalletContextProvider>
          <WalletButton />
            <div>
              <Form_RegMov/> 
            </div>
        </WalletContextProvider>


      </ChakraProvider >

    </>
  );
}

export default App;
