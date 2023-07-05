import { Hex } from 'viem'
import { ChainId } from './internal'

/**
 * DEX v2 SDK
 */
export const MULTICALL_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.SPRUCE]: '0x5CB6904C4c4518e7a28c385a20064dD5FFc70850'
}

export const LB_QUOTER_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x2644fE413b8Fe94D69c4706455108368fa36354F',
  [ChainId.SPRUCE]: '0x0000000000000000000000000000000000000000'
}

export const LB_QUOTER_V21_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x64b57F4249aA99a812212cee7DAEFEDC40B203cD',
  [ChainId.SPRUCE]: '0x8D0a05Cf0e71d40523C8F1341a890b168c49Ba2c'
}

export const LB_ROUTER_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x7b50046cEC8252ca835b148b1eDD997319120a12',
  [ChainId.SPRUCE]: '0x0000000000000000000000000000000000000000'
}

export const LB_ROUTER_V21_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0xb4315e873dBcf96Ffd0acd8EA43f689D8c20fB30',
  [ChainId.SPRUCE]: '0xE5DFa09A0a66ebb4E92cDa46122EC55Ed6faf4C8'
}

export const LB_FACTORY_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x6B8E020098cd1B3Ec9f811024bc24e51C660F768',
  [ChainId.SPRUCE]: '0x0000000000000000000000000000000000000000'
}

export const LB_FACTORY_V21_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x8e42f2F4101563bF679975178e880FD87d3eFd4e',
  [ChainId.SPRUCE]: '0x8e42f2F4101563bF679975178e880FD87d3eFd4e'
}

export const DEXLENS_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x441eF20e39DfE886AAb99a6E1bb64f43E45bD973',
  [ChainId.SPRUCE]: '0xCe1978CFab524249C37BC3889A1b91a36FFe1468'
}

export const LB_REWARDER_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x3e031f1486a27c997e85c5a2af2638ee3a4c28a1',
  [ChainId.SPRUCE]: '0x0000000000000000000000000000000000000000'
}

export const VAULT_FACTORY_ADDRESS: { [chainId in ChainId]: Hex } = {
  [ChainId.FUJI]: '0x0000000000000000000000000000000000000000',
  [ChainId.SPRUCE]: '0x0000000000000000000000000000000000000000'
}

export const LIQUIDITY_AMOUNTS_HELPER_ADDRESS: {
  [chainId in ChainId]: Hex
} = {
  [ChainId.FUJI]: '0x49D3D17b5349600A7206EE7f46218A1209a5c2B4',
  [ChainId.SPRUCE]: '0x0000000000000000000000000000000000000000'
}

export const LIMIT_ORDER_MANAGER_ADDRESS: {
  [chainId in ChainId]: Hex
} = {
  [ChainId.FUJI]: '0xd88401763206db1C32A3bd938CBD205b9fcde5b5',
  [ChainId.SPRUCE]: '0x0000000000000000000000000000000000000000'
}
