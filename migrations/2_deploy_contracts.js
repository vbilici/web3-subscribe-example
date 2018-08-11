const matArtifact = artifacts.require("./MyAwesomeToken.sol");

const { localMigration } = require("./networks/localMigration");

const contractArtifacts = {
  matArtifact
};

module.exports = (deployer, network, accounts) => {
  console.log(`deploying on ${network} network`);
  console.log('web3 version:', web3.version)
  deployer
    .then(async () => {
      switch (network) {
        case "test":
          return true;
        case "dev":
          await localMigration(deployer, accounts, contractArtifacts, web3);
          return true;
        default:
          console.log(
            `unsupported network: ${network}, default deployment will skip`
          );
          return true;
      }
    })
    .catch(err => {
      console.error(err);
    });
};
