/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category UnstakeEdition
 * @category generated
 */
export const unstakeEditionStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'UnstakeEditionInstructionArgs'
)
/**
 * Accounts required by the _unstakeEdition_ instruction
 *
 * @property [_writable_] stakePool
 * @property [_writable_] stakeEntry
 * @property [] stakeMint
 * @property [] stakeMintEdition
 * @property [_writable_, **signer**] user
 * @property [_writable_] userEscrow
 * @property [_writable_] userStakeMintTokenAccount
 * @property [] tokenMetadataProgram
 * @category Instructions
 * @category UnstakeEdition
 * @category generated
 */
export type UnstakeEditionInstructionAccounts = {
  stakePool: web3.PublicKey
  stakeEntry: web3.PublicKey
  stakeMint: web3.PublicKey
  stakeMintEdition: web3.PublicKey
  user: web3.PublicKey
  userEscrow: web3.PublicKey
  userStakeMintTokenAccount: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const unstakeEditionInstructionDiscriminator = [
  14, 46, 5, 175, 171, 28, 33, 151,
]

/**
 * Creates a _UnstakeEdition_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category UnstakeEdition
 * @category generated
 */
export function createUnstakeEditionInstruction(
  accounts: UnstakeEditionInstructionAccounts,
  programId = new web3.PublicKey('stk2688WVNGaHZGiLuuyGdQQWDdt8n69gEEo5eWYFt6')
) {
  const [data] = unstakeEditionStruct.serialize({
    instructionDiscriminator: unstakeEditionInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.stakePool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeEntry,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeMintEdition,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.user,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.userEscrow,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userStakeMintTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
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
