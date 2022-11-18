import { getBatchedMultipleAccounts } from "@cardinal/common";
import type { AccountInfo, Connection, PublicKey } from "@solana/web3.js";

import type { RewardEntry } from "./generated";
import {
  PROGRAM_ID,
  ReceiptManager,
  receiptManagerDiscriminator,
  RewardDistributor,
  rewardDistributorDiscriminator,
  StakeBooster,
  stakeBoosterDiscriminator,
  StakeEntry,
  stakeEntryDiscriminator,
  StakePool,
  stakePoolDiscriminator,
} from "./generated";

export type AccountData = AccountInfo<Buffer> &
  (
    | {
        type: "rewardDistributor";
        parsed: RewardDistributor;
      }
    | { type: "rewardEntry"; parsed: RewardEntry }
    | { type: "stakePool"; parsed: StakePool }
    | { type: "stakeEntry"; parsed: StakeEntry }
    | { type: "receiptManager"; parsed: ReceiptManager }
    | { type: "stakeBooster"; parsed: StakeBooster }
    | { type: "unknown"; parsed: null }
  );

export type AccountDataById = {
  [accountId: string]: AccountData;
};

export const deserializeAccountInfos = (
  accountIds: (PublicKey | null)[],
  accountInfos: (AccountInfo<Buffer> | null)[]
): AccountDataById => {
  return accountInfos.reduce((acc, accountInfo, i) => {
    if (!accountInfo?.data) return acc;
    const ownerString = accountInfo.owner.toString();
    const baseData = {
      timestamp: Date.now(),
      pubkey: accountIds[i]!,
    };
    const discriminator = accountInfo.data
      .subarray(0, 8)
      .map((b) => b.valueOf())
      .join(",");
    switch ([ownerString, discriminator].join(":")) {
      // stakePool
      case [PROGRAM_ID.toString(), stakePoolDiscriminator.join(",")].join(":"):
        try {
          acc[accountIds[i]!.toString()] = {
            ...baseData,
            ...accountInfo,
            type: "stakePool",
            parsed: StakePool.deserialize(accountInfo.data)[0],
          };
        } catch (e) {
          //
        }
        return acc;
      // rewardDistributor
      case [
        PROGRAM_ID.toString(),
        rewardDistributorDiscriminator.join(","),
      ].join(":"):
        try {
          acc[accountIds[i]!.toString()] = {
            ...baseData,
            ...accountInfo,
            type: "rewardDistributor",
            parsed: RewardDistributor.deserialize(accountInfo.data)[0],
          };
        } catch (e) {
          //
        }
        return acc;
      // stakeEntry
      case [PROGRAM_ID.toString(), stakeEntryDiscriminator.join(",")].join(":"):
        try {
          acc[accountIds[i]!.toString()] = {
            ...baseData,
            ...accountInfo,
            type: "stakeEntry",
            parsed: StakeEntry.deserialize(accountInfo.data)[0],
          };
        } catch (e) {
          //
        }
        return acc;

      // receiptManager
      case [PROGRAM_ID.toString(), receiptManagerDiscriminator.join(",")].join(
        ":"
      ):
        try {
          acc[accountIds[i]!.toString()] = {
            ...baseData,
            ...accountInfo,
            type: "receiptManager",
            parsed: ReceiptManager.deserialize(accountInfo.data)[0],
          };
        } catch (e) {
          //
        }
        return acc;
      // stakeBooster
      case [PROGRAM_ID.toString(), stakeBoosterDiscriminator.join(",")].join(
        ":"
      ):
        try {
          acc[accountIds[i]!.toString()] = {
            ...baseData,
            ...accountInfo,
            type: "stakeBooster",
            parsed: StakeBooster.deserialize(accountInfo.data)[0],
          };
        } catch (e) {
          //
        }
        return acc;
      // fallback
      default:
        acc[accountIds[i]!.toString()] = {
          ...baseData,
          ...accountInfo,
          type: "unknown",
          parsed: null,
        };
        return acc;
    }
  }, {} as AccountDataById);
};

export const fetchAccountDataById = async (
  connection: Connection,
  ids: (PublicKey | null)[]
): Promise<AccountDataById> => {
  const filteredIds = ids.filter((id): id is PublicKey => id !== null);
  const accountInfos = await getBatchedMultipleAccounts(
    connection,
    filteredIds
  );
  return deserializeAccountInfos(filteredIds, accountInfos);
};