const config = Object.freeze({
    polygonBurnContractAddress: '0x70bca57f4579f58670ab2d18ef16e02c17553c38',
    network: {
        polygon: {
            chainId: 80001,
            name: 'Matic Mumbai',
        },
        ethereum: {
            chainId: 137,
            name: 'Ethereum Testnet',
        }
    },
    covalentApiKey: '',
    apis: {
        covalentApiUrl: 'https://api.covalenthq.com',
    }
})

export default config
