/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  DIMOUserProfileStorage,
  DIMOUserProfileStorageInterface,
} from '../../../../contracts/retirements/dimo/DIMOUserProfileStorage';

const _abi = [
  {
    inputs: [],
    name: 'baseURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dimoCostBasisSales',
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
] as const;

export class DIMOUserProfileStorage__factory {
  static readonly abi = _abi;
  static createInterface(): DIMOUserProfileStorageInterface {
    return new utils.Interface(_abi) as DIMOUserProfileStorageInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DIMOUserProfileStorage {
    return new Contract(address, _abi, signerOrProvider) as DIMOUserProfileStorage;
  }
}
