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
 * @category InitReceiptEntry
 * @category generated
 */
export const initReceiptEntryStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'InitReceiptEntryInstructionArgs'
)
/**
 * Accounts required by the _initReceiptEntry_ instruction
 *
 * @property [_writable_] receiptEntry
 * @property [] stakeEntry
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category InitReceiptEntry
 * @category generated
 */
export type InitReceiptEntryInstructionAccounts = {
  receiptEntry: web3.PublicKey
  stakeEntry: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const initReceiptEntryInstructionDiscriminator = [
  133, 94, 121, 16, 41, 185, 20, 30,
]

/**
 * Creates a _InitReceiptEntry_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitReceiptEntry
 * @category generated
 */
export function createInitReceiptEntryInstruction(
  accounts: InitReceiptEntryInstructionAccounts,
  programId = new web3.PublicKey('rwcn6Ry17ChPXpJCN2hoK5kwpgFarQqzycXwVJ3om7U')
) {
  const [data] = initReceiptEntryStruct.serialize({
    instructionDiscriminator: initReceiptEntryInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.receiptEntry,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeEntry,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
