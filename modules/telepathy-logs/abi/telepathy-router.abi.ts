// pulled from https://github.com/succinctlabs/telepathy-contracts/blob/main/abi/TelepathyRouter.json 🤞
export const TelepathyRouterABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [],
		name: "CannotSendToSameChain",
		type: "error",
	},
	{
		inputs: [],
		name: "SendingDisabled",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "previousAdmin",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "newAdmin",
				type: "address",
			},
		],
		name: "AdminChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "beacon",
				type: "address",
			},
		],
		name: "BeaconUpgraded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint32",
				name: "sourceChainId",
				type: "uint32",
			},
			{
				indexed: true,
				internalType: "uint64",
				name: "nonce",
				type: "uint64",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "msgHash",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "message",
				type: "bytes",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "status",
				type: "bool",
			},
		],
		name: "ExecutedMessage",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint32",
				name: "chainId",
				type: "uint32",
			},
		],
		name: "Freeze",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [],
		name: "FreezeAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint8",
				name: "version",
				type: "uint8",
			},
		],
		name: "Initialized",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "previousAdminRole",
				type: "bytes32",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "newAdminRole",
				type: "bytes32",
			},
		],
		name: "RoleAdminChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address",
			},
		],
		name: "RoleGranted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				indexed: true,
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address",
			},
		],
		name: "RoleRevoked",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "bool",
				name: "enabled",
				type: "bool",
			},
		],
		name: "SendingEnabled",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint64",
				name: "nonce",
				type: "uint64",
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "msgHash",
				type: "bytes32",
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "message",
				type: "bytes",
			},
		],
		name: "SentMessage",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint32",
				name: "chainId",
				type: "uint32",
			},
			{
				indexed: false,
				internalType: "address",
				name: "lightClient",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "broadcaster",
				type: "address",
			},
		],
		name: "SetLightClientAndBroadcaster",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint32",
				name: "chainId",
				type: "uint32",
			},
		],
		name: "SourceChainAdded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint32",
				name: "chainId",
				type: "uint32",
			},
		],
		name: "Unfreeze",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [],
		name: "UnfreezeAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "implementation",
				type: "address",
			},
		],
		name: "Upgraded",
		type: "event",
	},
	{
		inputs: [],
		name: "DEFAULT_ADMIN_ROLE",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "GUARDIAN_ROLE",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "MIN_LIGHT_CLIENT_DELAY",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "TIMELOCK_ROLE",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "VERSION",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
		],
		name: "broadcasters",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "slot",
				type: "uint64",
			},
			{
				internalType: "bytes",
				name: "messageBytes",
				type: "bytes",
			},
			{
				internalType: "bytes[]",
				name: "accountProof",
				type: "bytes[]",
			},
			{
				internalType: "bytes[]",
				name: "storageProof",
				type: "bytes[]",
			},
		],
		name: "executeMessage",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "srcSlotTxSlotPack",
				type: "bytes",
			},
			{
				internalType: "bytes",
				name: "messageBytes",
				type: "bytes",
			},
			{
				internalType: "bytes32[]",
				name: "receiptsRootProof",
				type: "bytes32[]",
			},
			{
				internalType: "bytes32",
				name: "receiptsRoot",
				type: "bytes32",
			},
			{
				internalType: "bytes[]",
				name: "receiptProof",
				type: "bytes[]",
			},
			{
				internalType: "bytes",
				name: "txIndexRLPEncoded",
				type: "bytes",
			},
			{
				internalType: "uint256",
				name: "logIndex",
				type: "uint256",
			},
		],
		name: "executeMessageFromLog",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "chainId",
				type: "uint32",
			},
		],
		name: "freeze",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "freezeAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
		],
		name: "frozen",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
		],
		name: "getRoleAdmin",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "grantRole",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "hasRole",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32[]",
				name: "_sourceChainIds",
				type: "uint32[]",
			},
			{
				internalType: "address[]",
				name: "_lightClients",
				type: "address[]",
			},
			{
				internalType: "address[]",
				name: "_broadcasters",
				type: "address[]",
			},
			{
				internalType: "address",
				name: "_timelock",
				type: "address",
			},
			{
				internalType: "address",
				name: "_guardian",
				type: "address",
			},
			{
				internalType: "bool",
				name: "_sendingEnabled",
				type: "bool",
			},
		],
		name: "initialize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
		],
		name: "lightClients",
		outputs: [
			{
				internalType: "contract ILightClient",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		name: "messageStatus",
		outputs: [
			{
				internalType: "enum MessageStatus",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		name: "messages",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "nonce",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "proxiableUUID",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "renounceRole",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "role",
				type: "bytes32",
			},
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "revokeRole",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "destinationChainId",
				type: "uint32",
			},
			{
				internalType: "address",
				name: "destinationAddress",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "send",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "destinationChainId",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "destinationAddress",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "send",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "destinationChainId",
				type: "uint32",
			},
			{
				internalType: "address",
				name: "destinationAddress",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "sendViaStorage",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "destinationChainId",
				type: "uint32",
			},
			{
				internalType: "bytes32",
				name: "destinationAddress",
				type: "bytes32",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "sendViaStorage",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "sendingEnabled",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "chainId",
				type: "uint32",
			},
			{
				internalType: "address",
				name: "lightclient",
				type: "address",
			},
			{
				internalType: "address",
				name: "broadcaster",
				type: "address",
			},
		],
		name: "setLightClientAndBroadcaster",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "enabled",
				type: "bool",
			},
		],
		name: "setSendingEnabled",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "sourceChainIds",
		outputs: [
			{
				internalType: "uint32",
				name: "",
				type: "uint32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "sourceChainIdsLength",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		name: "storageRootCache",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint32",
				name: "chainId",
				type: "uint32",
			},
		],
		name: "unfreeze",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "unfreezeAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newImplementation",
				type: "address",
			},
		],
		name: "upgradeTo",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newImplementation",
				type: "address",
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes",
			},
		],
		name: "upgradeToAndCall",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "version",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

/* [
    {
        inputs: [
            { internalType: "address", name: "implementation", type: "address" },
            { internalType: "bytes", name: "_data", type: "bytes" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    { stateMutability: "payable", type: "fallback" },
    { stateMutability: "payable", type: "receive" },
];
 */
