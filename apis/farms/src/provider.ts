import { ChainId } from '@pancakeswap/sdk'
import { providers } from 'ethers'

const { StaticJsonRpcProvider } = providers

export const bscProvider = new StaticJsonRpcProvider(
  {
    url: BSC_NODE,
    skipFetchSetup: true,
  },
  ChainId.BSC,
)

export const bscTestnetProvider = new StaticJsonRpcProvider(
  {
    url: BSC_TESTNET_NODE,
    skipFetchSetup: true,
  },
  ChainId.BSC_TESTNET,
)

export const goerliProvider = new StaticJsonRpcProvider(
  {
    url: GOERLI_NODE,
    skipFetchSetup: true,
  },
  ChainId.GOERLI,
)

export const ethProvider = new StaticJsonRpcProvider(
  {
    url: ETH_NODE,
    skipFetchSetup: true,
  },
  ChainId.ETHEREUM,
)

export const baseGoerliProvider = new StaticJsonRpcProvider(
  {
    url: BASE_GOERLI_NODE,
    skipFetchSetup: true,
  },
  ChainId.BASE_GOERLI,
)
