import { ReactComponent as PhalaIcon } from "../../../components/icons/phala.svg";

const phala = {
  name: "Phala",
  icon: <PhalaIcon />,
  identity: "polkadot",
  value: "phala",
  chain: "phala",
  symbol: "PHA",
  decimals: 12,
  color: "#3765DC",
  colorSecondary: "rgba(55, 101, 220, 0.1)",
  buttonColor: "#000000",
  modules: {
    identity: false,
  },
  nodes: [
    { name: "Phala", url: "wss://api.phala.network/ws" },
  ],
  useOnChainBlockData: true,
};

const chains = {
  phala,
};

export default chains;
