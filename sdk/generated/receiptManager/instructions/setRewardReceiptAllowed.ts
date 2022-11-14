/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";

/**
 * @category Instructions
 * @category SetRewardReceiptAllowed
 * @category generated
 */
export type SetRewardReceiptAllowedInstructionArgs = {
  allowed: boolean;
};
/**
 * @category Instructions
 * @category SetRewardReceiptAllowed
 * @category generated
 */
export const setRewardReceiptAllowedStruct = new beet.BeetArgsStruct<
  SetRewardReceiptAllowedInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["allowed", beet.bool],
  ],
  "SetRewardReceiptAllowedInstructionArgs"
);
/**
 * Accounts required by the _setRewardReceiptAllowed_ instruction
 *
 * @property [] receiptManager
 * @property [_writable_] rewardReceipt
 * @property [_writable_, **signer**] authority
 * @category Instructions
 * @category SetRewardReceiptAllowed
 * @category generated
 */
export type SetRewardReceiptAllowedInstructionAccounts = {
  receiptManager: web3.PublicKey;
  rewardReceipt: web3.PublicKey;
  authority: web3.PublicKey;
};

export const setRewardReceiptAllowedInstructionDiscriminator = [
  249, 167, 0, 176, 129, 78, 102, 23,
];

/**
 * Creates a _SetRewardReceiptAllowed_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category SetRewardReceiptAllowed
 * @category generated
 */
export function createSetRewardReceiptAllowedInstruction(
  accounts: SetRewardReceiptAllowedInstructionAccounts,
  args: SetRewardReceiptAllowedInstructionArgs,
  programId = new web3.PublicKey("rrm26Uq1x1Rx8TwZaReKqUEu5fnNKufyANpgbon5otp")
) {
  const [data] = setRewardReceiptAllowedStruct.serialize({
    instructionDiscriminator: setRewardReceiptAllowedInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.receiptManager,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardReceipt,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: true,
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
