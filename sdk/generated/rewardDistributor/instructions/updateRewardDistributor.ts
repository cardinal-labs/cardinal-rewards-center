/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";

import type { UpdateRewardDistributorIx } from "../types/UpdateRewardDistributorIx";
import { updateRewardDistributorIxBeet } from "../types/UpdateRewardDistributorIx";

/**
 * @category Instructions
 * @category UpdateRewardDistributor
 * @category generated
 */
export type UpdateRewardDistributorInstructionArgs = {
  ix: UpdateRewardDistributorIx;
};
/**
 * @category Instructions
 * @category UpdateRewardDistributor
 * @category generated
 */
export const updateRewardDistributorStruct = new beet.FixableBeetArgsStruct<
  UpdateRewardDistributorInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["ix", updateRewardDistributorIxBeet],
  ],
  "UpdateRewardDistributorInstructionArgs"
);
/**
 * Accounts required by the _updateRewardDistributor_ instruction
 *
 * @property [_writable_] rewardDistributor
 * @property [**signer**] authority
 * @category Instructions
 * @category UpdateRewardDistributor
 * @category generated
 */
export type UpdateRewardDistributorInstructionAccounts = {
  rewardDistributor: web3.PublicKey;
  authority: web3.PublicKey;
};

export const updateRewardDistributorInstructionDiscriminator = [
  168, 16, 57, 210, 250, 214, 155, 146,
];

/**
 * Creates a _UpdateRewardDistributor_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateRewardDistributor
 * @category generated
 */
export function createUpdateRewardDistributorInstruction(
  accounts: UpdateRewardDistributorInstructionAccounts,
  args: UpdateRewardDistributorInstructionArgs,
  programId = new web3.PublicKey("rwd2rAm24YWUrtK6VmaNgadvhxcX5N1LVnSauUQZbuA")
) {
  const [data] = updateRewardDistributorStruct.serialize({
    instructionDiscriminator: updateRewardDistributorInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.rewardDistributor,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: false,
      isSigner: true,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
