/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category UpdateTotalStakeSeconds
 * @category generated
 */
export const updateTotalStakeSecondsStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'UpdateTotalStakeSecondsInstructionArgs'
)
/**
 * Accounts required by the _updateTotalStakeSeconds_ instruction
 *
 * @property [_writable_] stakeEntry
 * @property [_writable_, **signer**] updater
 * @category Instructions
 * @category UpdateTotalStakeSeconds
 * @category generated
 */
export type UpdateTotalStakeSecondsInstructionAccounts = {
  stakeEntry: web3.PublicKey
  updater: web3.PublicKey
}

export const updateTotalStakeSecondsInstructionDiscriminator = [
  156, 69, 149, 195, 171, 223, 177, 245,
]

/**
 * Creates a _UpdateTotalStakeSeconds_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category UpdateTotalStakeSeconds
 * @category generated
 */
export function createUpdateTotalStakeSecondsInstruction(
  accounts: UpdateTotalStakeSecondsInstructionAccounts,
  programId = new web3.PublicKey('rwcn6Ry17ChPXpJCN2hoK5kwpgFarQqzycXwVJ3om7U')
) {
  const [data] = updateTotalStakeSecondsStruct.serialize({
    instructionDiscriminator: updateTotalStakeSecondsInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.stakeEntry,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.updater,
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
