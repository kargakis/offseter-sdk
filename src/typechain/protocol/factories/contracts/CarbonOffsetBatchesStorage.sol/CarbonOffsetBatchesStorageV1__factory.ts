/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  CarbonOffsetBatchesStorageV1,
  CarbonOffsetBatchesStorageV1Interface,
} from '../../../contracts/CarbonOffsetBatchesStorage.sol/CarbonOffsetBatchesStorageV1';

const _abi = [
  {
    inputs: [],
    name: 'batchTokenCounter',
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
    inputs: [],
    name: 'contractRegistry',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'nftList',
    outputs: [
      {
        internalType: 'uint256',
        name: 'projectVintageTokenId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'serialNumber',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'quantity',
        type: 'uint256',
      },
      {
        internalType: 'enum BatchStatus',
        name: 'status',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'serialNumberApproved',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export class CarbonOffsetBatchesStorageV1__factory {
  static readonly abi = _abi;
  static createInterface(): CarbonOffsetBatchesStorageV1Interface {
    return new utils.Interface(_abi) as CarbonOffsetBatchesStorageV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CarbonOffsetBatchesStorageV1 {
    return new Contract(address, _abi, signerOrProvider) as CarbonOffsetBatchesStorageV1;
  }
}
