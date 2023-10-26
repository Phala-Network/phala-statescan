const chains = Object.freeze({
  phala: "phala",
});

const ss58Format = Object.freeze({
  [chains.phala]: 30,
});

function getSs58Format(chain) {
  return ss58Format[chain];
}

const assetsModuleChains = [];

const uniquesModuleChains = [];

module.exports = {
  chains,
  assetsModuleChains,
  uniquesModuleChains,
  getSs58Format,
};
