# web3.js Subscribe Example
An example project for subscribing log events on web3.js 1.0

## Requirements
- node ^8
- yarn
- a local test RPC like [Ganache](https://truffleframework.com/ganache)

## Install
```bash
git clone git@github.com:vbilici/web3-subscribe-example.git
cd web3-subscribe-example
yarn
```

## Run
Run testRPC first with the config given in `truffle.js`.   
Then run the commands below with the same order.
```bash
yarn compile
yarn deploy
yarn start
```