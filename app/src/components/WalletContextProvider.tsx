

import { FC, ReactNode} from "react";

import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import * as web3 from "@solana/web3.js";

import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";

require("@solana/wallet-adapter-react-ui/styles.css");

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.    
    const endpoint = web3.clusterApiUrl("devnet");
    
    //Por hora somente a Phantom
    //const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];

    //Adicionando Mais Carteiras
    const wallets = [
		new walletAdapterWallets.PhantomWalletAdapter(),
		new walletAdapterWallets.SolflareWalletAdapter()
	]

    return (
        <ConnectionProvider endpoint={endpoint}>
  
            <WalletProvider wallets={wallets}>
  
                <WalletModalProvider>{children}</WalletModalProvider>
  
            </WalletProvider>
  
        </ConnectionProvider>
  );

};

export default WalletContextProvider;