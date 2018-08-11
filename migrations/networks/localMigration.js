const localMigration = async (deployer, accounts, contracts, web3) => {
  const users = accounts.slice(1, accounts.length)

  const mat = await deployer.deploy(
    contracts.matArtifact
  )


  const value = web3.utils.toWei('10', 'ether');

  users.forEach(async user => {
    console.log('sending MAT to user ', user)
    await mat.mint(user, value)
  });

}

module.exports = {
  localMigration
}
