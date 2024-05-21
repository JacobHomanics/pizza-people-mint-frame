export const address = "0x1c8264Cee472ef10758DFe8AE05156A1E52E6e40";
export const abi = [
  {
    type: "constructor",
    inputs: [
      { name: "newOwner", type: "address", internalType: "address" },
      {
        name: "mintRoyaltyRecipient",
        type: "address",
        internalType: "address",
      },
      { name: "baseURI", type: "string", internalType: "string" },
      { name: "maxTokenCount", type: "uint256", internalType: "uint256" },
      { name: "mintStartTimestamp", type: "uint256", internalType: "uint256" },
      { name: "mintEndTimestamp", type: "uint256", internalType: "uint256" },
      {
        name: "mintingThresholds",
        type: "tuple[]",
        internalType: "struct Weedies.MintingThreshold[]",
        components: [
          { name: "minThreshold", type: "uint256", internalType: "uint256" },
          { name: "maxThreshold", type: "uint256", internalType: "uint256" },
          { name: "mintPrice", type: "uint256", internalType: "uint256" },
        ],
      },
      { name: "maxMintAmount", type: "uint256", internalType: "uint256" },
      {
        name: "initialMintRecipients",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAcitveMintingThreshold",
    inputs: [],
    outputs: [
      {
        name: "threshold",
        type: "tuple",
        internalType: "struct Weedies.MintingThreshold",
        components: [
          { name: "minThreshold", type: "uint256", internalType: "uint256" },
          { name: "maxThreshold", type: "uint256", internalType: "uint256" },
          { name: "mintPrice", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMaxMintCount",
    inputs: [],
    outputs: [
      { name: "maxMintCount", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMintCount",
    inputs: [],
    outputs: [{ name: "mintCount", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMintEndTimestamp",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMintPrice",
    inputs: [],
    outputs: [{ name: "mintPrice", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMintRoyaltyRecipient",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMintStartTimestamp",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "operator", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isWithinConstraints",
    inputs: [],
    outputs: [{ name: "isWithin", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isWithinConstraints",
    inputs: [
      { name: "a", type: "uint256", internalType: "uint256" },
      { name: "b", type: "uint256", internalType: "uint256" },
      { name: "c", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "isWithin", type: "bool", internalType: "bool" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      { name: "target", type: "address", internalType: "address" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "_data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "result", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "approved", type: "bool", indexed: false, internalType: "bool" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ConsecutiveTransfer",
    inputs: [
      {
        name: "fromTokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "toTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Minted",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "startIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "endIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "ApprovalCallerNotOwnerNorApproved", inputs: [] },
  { type: "error", name: "ApprovalQueryForNonexistentToken", inputs: [] },
  { type: "error", name: "BalanceQueryForZeroAddress", inputs: [] },
  { type: "error", name: "MintERC2309QuantityExceedsLimit", inputs: [] },
  { type: "error", name: "MintToZeroAddress", inputs: [] },
  { type: "error", name: "MintZeroQuantity", inputs: [] },
  { type: "error", name: "NotCompatibleWithSpotMints", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
  { type: "error", name: "OwnerQueryForNonexistentToken", inputs: [] },
  { type: "error", name: "OwnershipNotInitializedForExtraData", inputs: [] },
  { type: "error", name: "SequentialMintExceedsLimit", inputs: [] },
  { type: "error", name: "SequentialUpToTooSmall", inputs: [] },
  { type: "error", name: "SpotMintTokenIdTooSmall", inputs: [] },
  { type: "error", name: "TokenAlreadyExists", inputs: [] },
  { type: "error", name: "TransferCallerNotOwnerNorApproved", inputs: [] },
  { type: "error", name: "TransferFromIncorrectOwner", inputs: [] },
  { type: "error", name: "TransferToNonERC721ReceiverImplementer", inputs: [] },
  { type: "error", name: "TransferToZeroAddress", inputs: [] },
  { type: "error", name: "URIQueryForNonexistentToken", inputs: [] },
  { type: "error", name: "Weedies__AddressNotZero", inputs: [] },
  { type: "error", name: "Weedies__DontHarshOurMellowDude", inputs: [] },
  { type: "error", name: "Weedies__TheDealerDoesNotHaveThatMuch", inputs: [] },
  {
    type: "error",
    name: "Weedies__TheDealersNotAnsweringHisPhone",
    inputs: [],
  },
  { type: "error", name: "Weedies__TheDealersOutOfTheGoodStuff", inputs: [] },
  { type: "error", name: "Weedies__YouGottaHitUpTheWeedman", inputs: [] },
  { type: "error", name: "Weedies__YouShortedTheDealer", inputs: [] },
] as const;
