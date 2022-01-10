// https://eth-ropsten.alchemyapi.io/v2/x8ebb9H40P-4WRDr-PJG4PwEIbgX96N-

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/x8ebb9H40P-4WRDr-PJG4PwEIbgX96N-',
      accounts: ['f5a69a493878a8a796ad88e94754ba37cfea6f1df9133520f75558f2bfafb4ed']
    }
  }
}

