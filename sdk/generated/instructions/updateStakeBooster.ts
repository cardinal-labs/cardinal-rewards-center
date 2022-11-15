/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  UpdateStakeBoosterIx,
  updateStakeBoosterIxBeet,
} from '../types/UpdateStakeBoosterIx'

/**
 * @category Instructions
 * @category UpdateStakeBooster
 * @category generated
 */
export type UpdateStakeBoosterInstructionArgs = {
  ix: UpdateStakeBoosterIx
}
/**
 * @category Instructions
 * @category UpdateStakeBooster
 * @category generated
 */
export const updateStakeBoosterStruct = new beet.BeetArgsStruct<
  UpdateStakeBoosterInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['ix', updateStakeBoosterIxBeet],
  ],
  'UpdateStakeBoosterInstructionArgs'
)
/**
 * Accounts required by the _updateStakeBooster_ instruction
 *
 * @property [_writable_] stakeBooster
 * @property [_writable_] stakePool
 * @property [_writable_, **signer**] authority
 * @category Instructions
 * @category UpdateStakeBooster
 * @category generated
 */
export type UpdateStakeBoosterInstructionAccounts = {
  stakeBooster: web3.PublicKey
  stakePool: web3.PublicKey
  authority: web3.PublicKey
}

export const updateStakeBoosterInstructionDiscriminator = [
  248, 245, 42, 75, 39, 8, 117, 52,
]

/**
 * Creates a _UpdateStakeBooster_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateStakeBooster
 * @category generated
 */
export function createUpdateStakeBoosterInstruction(
  accounts: UpdateStakeBoosterInstructionAccounts,
  args: UpdateStakeBoosterInstructionArgs,
  programId = new web3.PublicKey('rwcg7ZBhxV8ViZvueh5kRuQXkTGD8TmcoPmEpDutCUJ')
) {
  const [data] = updateStakeBoosterStruct.serialize({
    instructionDiscriminator: updateStakeBoosterInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.stakeBooster,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakePool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}