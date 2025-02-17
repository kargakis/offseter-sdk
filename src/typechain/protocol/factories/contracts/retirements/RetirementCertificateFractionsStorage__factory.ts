/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  RetirementCertificateFractionsStorage,
  RetirementCertificateFractionsStorageInterface,
} from '../../../contracts/retirements/RetirementCertificateFractionsStorage';

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
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'fractions',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'projectVintageTokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'createdAt',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'fractioningEntity',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'beneficiary',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'beneficiaryString',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'retirementMessage',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'beneficiaryLocation',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'consumptionCountryCode',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'consumptionPeriodStart',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'consumptionPeriodEnd',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'tokenURI',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'extraData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export class RetirementCertificateFractionsStorage__factory {
  static readonly abi = _abi;
  static createInterface(): RetirementCertificateFractionsStorageInterface {
    return new utils.Interface(_abi) as RetirementCertificateFractionsStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RetirementCertificateFractionsStorage {
    return new Contract(address, _abi, signerOrProvider) as RetirementCertificateFractionsStorage;
  }
}
