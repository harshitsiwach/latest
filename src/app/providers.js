'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
  shardeumSphinx,
} from 'wagmi/chains';

// Define your custom ShardeumSphinx chain object with a logo
const customShardeumSphinx = {
  ...shardeumSphinx,
  iconUrl: '/images/Logos/Shm-log.png', // Use the relative path to your logo file
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    customShardeumSphinx,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  [publicProvider()]
);

const projectId = 'YOUR_PROJECT_ID';

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
      accentColor: '#9CA3AF',
      accentColorForeground: 'white',
      borderRadius: 'medium',
      fontStack: 'system',
      overlayBlur: 'small',
    })}
     appInfo={demoAppInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
