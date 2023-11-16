import { configureChains, mainnet, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "Hamaca",
  projectId: "04b06c471b88e576c1a3d5b9e69d3827",
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors,
});

export { config, connectors, chains };
