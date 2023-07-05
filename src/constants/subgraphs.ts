import { ChainId } from './internal'

export const DEX_V2_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v2-fuji',
  [ChainId.SPRUCE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v2-fuji',
}

export const DEXCANDLES_SUBGRAPH_V2: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dex-candles-v2-fuji',
  [ChainId.SPRUCE]:
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dex-candles-v2-fuji',
}
