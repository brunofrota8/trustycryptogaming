
import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const WalletButton: FC = () => {
  return (
    <div>
      <WalletMultiButton />
    </div>
  );
};