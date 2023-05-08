import { Obj } from 'itty-router'
import { error } from 'itty-router-extras'
import { createFarmFetcher } from '@pancakeswap/farms'
import { createMulticall } from '@pancakeswap/multicall'
import { bscProvider, bscTestnetProvider, goerliProvider, ethProvider } from './provider'
import { ChainId } from '@pancakeswap/sdk'

export const getProvider = ({ chainId }: { chainId?: number }) => {
  switch (chainId) {
    case ChainId.BSC:
      return bscProvider
    case ChainId.BSC_TESTNET:
      return bscTestnetProvider
    case ChainId.GOERLI:
      return goerliProvider
    case ChainId.ETHEREUM:
      return ethProvider
    default:
      return null
  }
}

export const { multicallv2, multicallv3 } = createMulticall(getProvider)

export const farmFetcher = createFarmFetcher(multicallv2)

export function requireChainId(params: Obj | undefined) {
  if (!params) {
    return error(400, 'Invalid params')
  }
  const { chainId } = params
  if (!chainId || !farmFetcher.isChainSupported(+chainId)) {
    return error(400, 'Invalid chain id')
  }
  return null
}
