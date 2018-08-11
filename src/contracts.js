const web3 = require('./web3')
const MyAwesomeTokenInterface = require('../build/contracts/MyAwesomeToken.json')

const list = {}

const setupMyAwesomeToken = async (networkId) => {
    console.log('setting up MyAwesomeToken')
    const deployedAddress = MyAwesomeTokenInterface.networks[networkId].address
    list.myAwesomeToken = new web3.eth.Contract(
        MyAwesomeTokenInterface.abi,
        deployedAddress
    )
  }

  const setup = async () => {
    const networkId = await web3.eth.net.getId()
    await setupMyAwesomeToken(networkId)
  }
  
  module.exports = {
    setup,
    list
  }