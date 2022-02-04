import config from './config'
import axios from 'axios'

export const fetchPolygonBlockData = () => {
    const url = `${config.apis.alchemyApiBaseUrl}/${config.alchemyApiKey}`

    const data = JSON.stringify({
        "jsonrpc": "2.0",
        "method": "eth_getBlockByNumber",
        "params": [
            'latest',
            true
        ],
        "id": 0
    })


    return axios.post(url, data)
}

export const getPolygonContractData = () => {
    const url = `${config.apis.covalentApiUrl}/v1/${config.network.polygon.chainId}/address/0x70bca57f4579f58670ab2d18ef16e02c17553c38/transactions_v2/?key=${config.covalentApiKey}`

    return axios.get(url)
}

export const getEthereumContractData = () => {
    const url = `${config.apis.covalentApiUrl}/v1/${config.network.ethereum.chainId}/address/0x70bca57f4579f58670ab2d18ef16e02c17553c38/transactions_v2/?key=${config.covalentApiKey}`

    return axios.get(url)
}
