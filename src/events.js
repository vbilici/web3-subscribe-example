const web3 = require('./web3')

const subscribedEvents = {}

const subscribeLogEvent = (contract, eventName) => {
  const eventJsonInterface = web3.utils._.find(
    contract._jsonInterface,
    o => o.name === eventName && o.type === 'event',
  )
  
  const subscription = web3.eth.subscribe('logs', {
    address: contract.options.address,
    topics: [eventJsonInterface.signature]
  }, (error, result) => {
      if (!error) {
        const eventObj = web3.eth.abi.decodeLog(
            eventJsonInterface.inputs,
            result.data,
            result.topics.slice(1)
          )
        console.log(`New ${eventName}!`, eventObj)
      }


  })

  subscribedEvents[eventName] = subscription

  console.log(`subscribed to event '${eventName}' of contract '${contract.options.address}' `)

}

const unsubscribeEvent = (eventName) => {
    subscribedEvents[eventName].unsubscribe(function(error, success){
        if(success)
            console.log('Successfully unsubscribed!');
    });
}

module.exports = {
  subscribeLogEvent,
  unsubscribeEvent
}