require('./web3')
const contracts = require('./contracts')
const events = require('./events')

contracts.setup()
  .then(() => {
    events.subscribeLogEvent(contracts.list.myAwesomeToken, 'Mint')
    events.subscribeLogEvent(contracts.list.myAwesomeToken, 'Transfer')
    events.subscribeLogEvent(contracts.list.myAwesomeToken, 'CrowdsaleFinishedEvent')
  })