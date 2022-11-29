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
 * @category ResetStakeEntry
 * @category generated
 */
export const resetStakeEntryStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ResetStakeEntryInstructionArgs'
)
/**
 * Accounts required by the _resetStakeEntry_ instruction
 *
 * @property [] stakePool
 * @property [_writable_] stakeEntry
 * @property [_writable_, **signer**] authority
 * @category Instructions
 * @category ResetStakeEntry
 * @category generated
 */
export type ResetStakeEntryInstructionAccounts = {
  stakePool: web3.PublicKey
  stakeEntry: web3.PublicKey
  authority: web3.PublicKey
}

export const resetStakeEntryInstructionDiscriminator = [
  189, 90, 39, 72, 82, 90, 236, 109,
]

/**
 * Creates a _ResetStakeEntry_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ResetStakeEntry
 * @category generated
 */
export function createResetStakeEntryInstruction(
  accounts: ResetStakeEntryInstructionAccounts,
  programId = new web3.PublicKey('rwcn6Ry17ChPXpJCN2hoK5kwpgFarQqzycXwVJ3om7U')
) {
  const [data] = resetStakeEntryStruct.serialize({
    instructionDiscriminator: resetStakeEntryInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.stakePool,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeEntry,
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