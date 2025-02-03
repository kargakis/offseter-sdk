/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../../common';

export type FeeDistributionStruct = {
  recipients: PromiseOrValue<string>[];
  shares: PromiseOrValue<BigNumberish>[];
};

export type FeeDistributionStructOutput = [string[], BigNumber[]] & {
  recipients: string[];
  shares: BigNumber[];
};

export interface FlatFeeCalculatorInterface extends utils.Interface {
  functions: {
    'VERSION()': FunctionFragment;
    'VERSION_RELEASE_CANDIDATE()': FunctionFragment;
    'calculateDepositFees(address,address,uint256)': FunctionFragment;
    'calculateDepositFees(address,address,uint256,uint256)': FunctionFragment;
    'calculateRedemptionFees(address,address[],uint256[],uint256[])': FunctionFragment;
    'calculateRedemptionFees(address,address[],uint256[])': FunctionFragment;
    'feeBasisPoints()': FunctionFragment;
    'feeSetup(address[],uint256[])': FunctionFragment;
    'getFeeSetup()': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setFeeBasisPoints(uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'VERSION'
      | 'VERSION_RELEASE_CANDIDATE'
      | 'calculateDepositFees(address,address,uint256)'
      | 'calculateDepositFees(address,address,uint256,uint256)'
      | 'calculateRedemptionFees(address,address[],uint256[],uint256[])'
      | 'calculateRedemptionFees(address,address[],uint256[])'
      | 'feeBasisPoints'
      | 'feeSetup'
      | 'getFeeSetup'
      | 'owner'
      | 'renounceOwnership'
      | 'setFeeBasisPoints'
      | 'transferOwnership'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'VERSION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'VERSION_RELEASE_CANDIDATE', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'calculateDepositFees(address,address,uint256)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'calculateDepositFees(address,address,uint256,uint256)',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'calculateRedemptionFees(address,address[],uint256[],uint256[])',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'calculateRedemptionFees(address,address[],uint256[])',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(functionFragment: 'feeBasisPoints', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'feeSetup',
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(functionFragment: 'getFeeSetup', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setFeeBasisPoints',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: 'VERSION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'VERSION_RELEASE_CANDIDATE', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'calculateDepositFees(address,address,uint256)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'calculateDepositFees(address,address,uint256,uint256)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'calculateRedemptionFees(address,address[],uint256[],uint256[])',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'calculateRedemptionFees(address,address[],uint256[])',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'feeBasisPoints', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'feeSetup', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getFeeSetup', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeeBasisPoints', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'FeeBasisPointsUpdated(uint256)': EventFragment;
    'FeeSetup(address[],uint256[])': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'FeeBasisPointsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FeeSetup'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface FeeBasisPointsUpdatedEventObject {
  feeBasisPoints: BigNumber;
}
export type FeeBasisPointsUpdatedEvent = TypedEvent<[BigNumber], FeeBasisPointsUpdatedEventObject>;

export type FeeBasisPointsUpdatedEventFilter = TypedEventFilter<FeeBasisPointsUpdatedEvent>;

export interface FeeSetupEventObject {
  recipients: string[];
  shares: BigNumber[];
}
export type FeeSetupEvent = TypedEvent<[string[], BigNumber[]], FeeSetupEventObject>;

export type FeeSetupEventFilter = TypedEventFilter<FeeSetupEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface FlatFeeCalculator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FlatFeeCalculatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    VERSION(overrides?: CallOverrides): Promise<[string]>;

    VERSION_RELEASE_CANDIDATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    'calculateDepositFees(address,address,uint256)'(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[FeeDistributionStructOutput] & { feeDistribution: FeeDistributionStructOutput }>;

    'calculateDepositFees(address,address,uint256,uint256)'(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[FeeDistributionStructOutput] & { feeDistribution: FeeDistributionStructOutput }>;

    'calculateRedemptionFees(address,address[],uint256[],uint256[])'(
      arg0: PromiseOrValue<string>,
      erc1155s: PromiseOrValue<string>[],
      tokenIds: PromiseOrValue<BigNumberish>[],
      redemptionAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[FeeDistributionStructOutput] & { feeDistribution: FeeDistributionStructOutput }>;

    'calculateRedemptionFees(address,address[],uint256[])'(
      arg0: PromiseOrValue<string>,
      tco2s: PromiseOrValue<string>[],
      redemptionAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[FeeDistributionStructOutput] & { feeDistribution: FeeDistributionStructOutput }>;

    feeBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeSetup(
      recipients: PromiseOrValue<string>[],
      shares: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFeeSetup(
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]] & { recipients: string[]; shares: BigNumber[] }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFeeBasisPoints(
      _feeBasisPoints: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  VERSION(overrides?: CallOverrides): Promise<string>;

  VERSION_RELEASE_CANDIDATE(overrides?: CallOverrides): Promise<BigNumber>;

  'calculateDepositFees(address,address,uint256)'(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    depositAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<FeeDistributionStructOutput>;

  'calculateDepositFees(address,address,uint256,uint256)'(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    depositAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<FeeDistributionStructOutput>;

  'calculateRedemptionFees(address,address[],uint256[],uint256[])'(
    arg0: PromiseOrValue<string>,
    erc1155s: PromiseOrValue<string>[],
    tokenIds: PromiseOrValue<BigNumberish>[],
    redemptionAmounts: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<FeeDistributionStructOutput>;

  'calculateRedemptionFees(address,address[],uint256[])'(
    arg0: PromiseOrValue<string>,
    tco2s: PromiseOrValue<string>[],
    redemptionAmounts: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<FeeDistributionStructOutput>;

  feeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  feeSetup(
    recipients: PromiseOrValue<string>[],
    shares: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFeeSetup(
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]] & { recipients: string[]; shares: BigNumber[] }>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFeeBasisPoints(
    _feeBasisPoints: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<string>;

    VERSION_RELEASE_CANDIDATE(overrides?: CallOverrides): Promise<BigNumber>;

    'calculateDepositFees(address,address,uint256)'(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<FeeDistributionStructOutput>;

    'calculateDepositFees(address,address,uint256,uint256)'(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<FeeDistributionStructOutput>;

    'calculateRedemptionFees(address,address[],uint256[],uint256[])'(
      arg0: PromiseOrValue<string>,
      erc1155s: PromiseOrValue<string>[],
      tokenIds: PromiseOrValue<BigNumberish>[],
      redemptionAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<FeeDistributionStructOutput>;

    'calculateRedemptionFees(address,address[],uint256[])'(
      arg0: PromiseOrValue<string>,
      tco2s: PromiseOrValue<string>[],
      redemptionAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<FeeDistributionStructOutput>;

    feeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    feeSetup(
      recipients: PromiseOrValue<string>[],
      shares: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getFeeSetup(
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]] & { recipients: string[]; shares: BigNumber[] }>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFeeBasisPoints(
      _feeBasisPoints: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'FeeBasisPointsUpdated(uint256)'(feeBasisPoints?: null): FeeBasisPointsUpdatedEventFilter;
    FeeBasisPointsUpdated(feeBasisPoints?: null): FeeBasisPointsUpdatedEventFilter;

    'FeeSetup(address[],uint256[])'(recipients?: null, shares?: null): FeeSetupEventFilter;
    FeeSetup(recipients?: null, shares?: null): FeeSetupEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION_RELEASE_CANDIDATE(overrides?: CallOverrides): Promise<BigNumber>;

    'calculateDepositFees(address,address,uint256)'(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'calculateDepositFees(address,address,uint256,uint256)'(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'calculateRedemptionFees(address,address[],uint256[],uint256[])'(
      arg0: PromiseOrValue<string>,
      erc1155s: PromiseOrValue<string>[],
      tokenIds: PromiseOrValue<BigNumberish>[],
      redemptionAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'calculateRedemptionFees(address,address[],uint256[])'(
      arg0: PromiseOrValue<string>,
      tco2s: PromiseOrValue<string>[],
      redemptionAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    feeSetup(
      recipients: PromiseOrValue<string>[],
      shares: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFeeSetup(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFeeBasisPoints(
      _feeBasisPoints: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION_RELEASE_CANDIDATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'calculateDepositFees(address,address,uint256)'(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'calculateDepositFees(address,address,uint256,uint256)'(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'calculateRedemptionFees(address,address[],uint256[],uint256[])'(
      arg0: PromiseOrValue<string>,
      erc1155s: PromiseOrValue<string>[],
      tokenIds: PromiseOrValue<BigNumberish>[],
      redemptionAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'calculateRedemptionFees(address,address[],uint256[])'(
      arg0: PromiseOrValue<string>,
      tco2s: PromiseOrValue<string>[],
      redemptionAmounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeSetup(
      recipients: PromiseOrValue<string>[],
      shares: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFeeSetup(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFeeBasisPoints(
      _feeBasisPoints: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
