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
 * @category CloseStakeEntry
 * @category generated
 */
export const closeStakeEntryStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CloseStakeEntryInstructionArgs'
)
/**
 * Accounts required by the _closeStakeEntry_ instruction
 *
 * @property [] stakePool
 * @property [_writable_] stakeEntry
 * @property [_writable_, **signer**] authority
 * @category Instructions
 * @category CloseStakeEntry
 * @category generated
 */
export type CloseStakeEntryInstructionAccounts = {
  stakePool: web3.PublicKey
  stakeEntry: web3.PublicKey
  authority: web3.PublicKey
}

export const closeStakeEntryInstructionDiscriminator = [
  48, 103, 249, 196, 41, 126, 174, 32,
]

/**
 * Creates a _CloseStakeEntry_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CloseStakeEntry
 * @category generated
 */
export function createCloseStakeEntryInstruction(
  accounts: CloseStakeEntryInstructionAccounts,
  programId = new web3.PublicKey('rwcn6Ry17ChPXpJCN2hoK5kwpgFarQqzycXwVJ3om7U')
) {
  const [data] = closeStakeEntryStruct.serialize({
    instructionDiscriminator: closeStakeEntryInstructionDiscriminator,
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
