/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  ToucanCrosschainMessengerStorageV1,
  ToucanCrosschainMessengerStorageV1Interface,
} from '../../../../contracts/cross-chain/ToucanCrosschainMessengerStorage.sol/ToucanCrosschainMessengerStorageV1';

const _abi = [
  {
    inputs: [],
    name: 'nonce',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'requests',
    outputs: [
      {
        internalType: 'bool',
        name: 'isReverted',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
      {
        internalType: 'enum BridgeRequestType',
        name: 'requestType',
        type: 'uint8',
      },
      {
        internalType: 'enum MessageType',
        name: 'messageType',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export class ToucanCrosschainMessengerStorageV1__factory {
  static readonly abi = _abi;
  static createInterface(): ToucanCrosschainMessengerStorageV1Interface {
    return new utils.Interface(_abi) as ToucanCrosschainMessengerStorageV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ToucanCrosschainMessengerStorageV1 {
    return new Contract(address, _abi, signerOrProvider) as ToucanCrosschainMessengerStorageV1;
  }
}
