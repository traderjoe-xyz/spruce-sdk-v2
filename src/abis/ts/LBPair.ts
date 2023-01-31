export const LBPairABI = [
  {
    inputs: [
      {
        internalType: 'contract ILBFactory',
        name: '_factory',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'bp',
        type: 'uint256'
      }
    ],
    name: 'BinHelper__BinStepOverflows',
    type: 'error'
  },
  {
    inputs: [],
    name: 'BinHelper__IdOverflows',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__AddressZero',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__AddressZeroOrThis',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__AlreadyInitialized',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'LBPair__CompositionFactorFlawed',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__DistributionsOverflow',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__FlashLoanCallbackFailed',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__FlashLoanTokenNotSupported',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__FlashLoanWrongFee',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__InsufficientAmounts',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'LBPair__InsufficientLiquidityBurned',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }
    ],
    name: 'LBPair__InsufficientLiquidityMinted',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newSize',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'oracleSize',
        type: 'uint256'
      }
    ],
    name: 'LBPair__NewSizeTooSmall',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__OnlyFactory',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'feeRecipient',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'LBPair__OnlyFeeRecipient',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__OnlyStrictlyIncreasingId',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBPair__WrongLengths',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'LBToken__BurnExceedsBalance',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBToken__BurnFromAddress0',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountsLength',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'idsLength',
        type: 'uint256'
      }
    ],
    name: 'LBToken__LengthMismatch',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBToken__MintToAddress0',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBToken__NotSupported',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }
    ],
    name: 'LBToken__SelfApproval',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      }
    ],
    name: 'LBToken__SpenderNotApproved',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'LBToken__TransferExceedsBalance',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBToken__TransferFromOrToAddress0',
    type: 'error'
  },
  {
    inputs: [],
    name: 'LBToken__TransferToSelf',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256'
      },
      {
        internalType: 'int256',
        name: 'y',
        type: 'int256'
      }
    ],
    name: 'Math128x128__PowerUnderflow',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'prod1',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'denominator',
        type: 'uint256'
      }
    ],
    name: 'Math512Bits__MulDivOverflow',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'prod1',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'offset',
        type: 'uint256'
      }
    ],
    name: 'Math512Bits__MulShiftOverflow',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'offset',
        type: 'uint256'
      }
    ],
    name: 'Math512Bits__OffsetOverflows',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_minTimestamp',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_lookUpTimestamp',
        type: 'uint256'
      }
    ],
    name: 'Oracle__LookUpTimestampTooOld',
    type: 'error'
  },
  {
    inputs: [],
    name: 'Oracle__NotInitialized',
    type: 'error'
  },
  {
    inputs: [],
    name: 'ReentrancyGuardUpgradeable__AlreadyInitialized',
    type: 'error'
  },
  {
    inputs: [],
    name: 'ReentrancyGuardUpgradeable__ReentrantCall',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256'
      }
    ],
    name: 'SafeCast__Exceeds112Bits',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256'
      }
    ],
    name: 'SafeCast__Exceeds128Bits',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256'
      }
    ],
    name: 'SafeCast__Exceeds24Bits',
    type: 'error'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256'
      }
    ],
    name: 'SafeCast__Exceeds40Bits',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TokenHelper__CallFailed',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TokenHelper__NonContract',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TokenHelper__TransferFailed',
    type: 'error'
  },
  {
    inputs: [],
    name: 'TreeMath__ErrorDepthSearch',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountX',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountY',
        type: 'uint256'
      }
    ],
    name: 'Burn',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feesX',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'feesY',
        type: 'uint256'
      }
    ],
    name: 'CompositionFee',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountX',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountY',
        type: 'uint256'
      }
    ],
    name: 'DepositedToBin',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountX',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountY',
        type: 'uint256'
      }
    ],
    name: 'FeesCollected',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'contract ILBFlashLoanCallback',
        name: 'receiver',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256'
      }
    ],
    name: 'FlashLoan',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousSize',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newSize',
        type: 'uint256'
      }
    ],
    name: 'OracleSizeIncreased',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountX',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountY',
        type: 'uint256'
      }
    ],
    name: 'ProtocolFeesCollected',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'swapForY',
        type: 'bool'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'volatilityAccumulated',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fees',
        type: 'uint256'
      }
    ],
    name: 'Swap',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]'
      }
    ],
    name: 'TransferBatch',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'TransferSingle',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountX',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountY',
        type: 'uint256'
      }
    ],
    name: 'WithdrawnFromBin',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_accounts',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      }
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'batchBalances',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: '_amounts',
        type: 'uint256[]'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      }
    ],
    name: 'burn',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountX',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amountY',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      }
    ],
    name: 'collectFees',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountX',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amountY',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'collectProtocolFees',
    outputs: [
      {
        internalType: 'uint128',
        name: 'amountX',
        type: 'uint128'
      },
      {
        internalType: 'uint128',
        name: 'amountY',
        type: 'uint128'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [
      {
        internalType: 'contract ILBFactory',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'feeParameters',
    outputs: [
      {
        components: [
          {
            internalType: 'uint16',
            name: 'binStep',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'baseFactor',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'filterPeriod',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'decayPeriod',
            type: 'uint16'
          },
          {
            internalType: 'uint16',
            name: 'reductionFactor',
            type: 'uint16'
          },
          {
            internalType: 'uint24',
            name: 'variableFeeControl',
            type: 'uint24'
          },
          {
            internalType: 'uint16',
            name: 'protocolShare',
            type: 'uint16'
          },
          {
            internalType: 'uint24',
            name: 'maxVolatilityAccumulated',
            type: 'uint24'
          },
          {
            internalType: 'uint24',
            name: 'volatilityAccumulated',
            type: 'uint24'
          },
          {
            internalType: 'uint24',
            name: 'volatilityReference',
            type: 'uint24'
          },
          {
            internalType: 'uint24',
            name: 'indexRef',
            type: 'uint24'
          },
          {
            internalType: 'uint40',
            name: 'time',
            type: 'uint40'
          }
        ],
        internalType: 'struct FeeHelper.FeeParameters',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint24',
        name: '_id',
        type: 'uint24'
      },
      {
        internalType: 'bool',
        name: '_swapForY',
        type: 'bool'
      }
    ],
    name: 'findFirstNonEmptyBinId',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract ILBFlashLoanCallback',
        name: '_receiver',
        type: 'address'
      },
      {
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'flashLoan',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'forceDecay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint24',
        name: '_id',
        type: 'uint24'
      }
    ],
    name: 'getBin',
    outputs: [
      {
        internalType: 'uint256',
        name: 'reserveX',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'reserveY',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getGlobalFees',
    outputs: [
      {
        internalType: 'uint128',
        name: 'feesXTotal',
        type: 'uint128'
      },
      {
        internalType: 'uint128',
        name: 'feesYTotal',
        type: 'uint128'
      },
      {
        internalType: 'uint128',
        name: 'feesXProtocol',
        type: 'uint128'
      },
      {
        internalType: 'uint128',
        name: 'feesYProtocol',
        type: 'uint128'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getOracleParameters',
    outputs: [
      {
        internalType: 'uint256',
        name: 'oracleSampleLifetime',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'oracleSize',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'oracleActiveSize',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'oracleLastTimestamp',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'oracleId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'min',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'max',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_timeDelta',
        type: 'uint256'
      }
    ],
    name: 'getOracleSampleFrom',
    outputs: [
      {
        internalType: 'uint256',
        name: 'cumulativeId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'cumulativeVolatilityAccumulated',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'cumulativeBinCrossed',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getReservesAndId',
    outputs: [
      {
        internalType: 'uint256',
        name: 'reserveX',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'reserveY',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'activeId',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '_newSize',
        type: 'uint16'
      }
    ],
    name: 'increaseOracleLength',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_tokenX',
        type: 'address'
      },
      {
        internalType: 'contract IERC20',
        name: '_tokenY',
        type: 'address'
      },
      {
        internalType: 'uint24',
        name: '_activeId',
        type: 'uint24'
      },
      {
        internalType: 'uint16',
        name: '_sampleLifetime',
        type: 'uint16'
      },
      {
        internalType: 'bytes32',
        name: '_packedFeeParameters',
        type: 'bytes32'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_spender',
        type: 'address'
      }
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: '_distributionX',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: '_distributionY',
        type: 'uint256[]'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      }
    ],
    name: 'mint',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'uint256[]',
        name: 'liquidityMinted',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      }
    ],
    name: 'pendingFees',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountX',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amountY',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: '_amounts',
        type: 'uint256[]'
      }
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_spender',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: '_approved',
        type: 'bool'
      }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_packedFeeParameters',
        type: 'bytes32'
      }
    ],
    name: 'setFeesParameters',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_interfaceId',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_swapForY',
        type: 'bool'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      }
    ],
    name: 'swap',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountXOut',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amountYOut',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [],
    name: 'tokenX',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'tokenY',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const
