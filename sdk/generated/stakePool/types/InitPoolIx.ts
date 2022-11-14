/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
export type InitPoolIx = {
  requiresCollections: web3.PublicKey[]
  requiresCreators: web3.PublicKey[]
  requiresAuthorization: boolean
  authority: web3.PublicKey
  resetOnUnstake: boolean
  cooldownSeconds: beet.COption<number>
  minStakeSeconds: beet.COption<number>
  endDate: beet.COption<beet.bignum>
  stakePaymentAmount: beet.COption<beet.bignum>
  unstakePaymentAmount: beet.COption<beet.bignum>
  paymentMint: beet.COption<web3.PublicKey>
  paymentManager: beet.COption<web3.PublicKey>
  identifier: string
}

/**
 * @category userTypes
 * @category generated
 */
export const initPoolIxBeet = new beet.FixableBeetArgsStruct<InitPoolIx>(
  [
    ['requiresCollections', beet.array(beetSolana.publicKey)],
    ['requiresCreators', beet.array(beetSolana.publicKey)],
    ['requiresAuthorization', beet.bool],
    ['authority', beetSolana.publicKey],
    ['resetOnUnstake', beet.bool],
    ['cooldownSeconds', beet.coption(beet.u32)],
    ['minStakeSeconds', beet.coption(beet.u32)],
    ['endDate', beet.coption(beet.i64)],
    ['stakePaymentAmount', beet.coption(beet.u64)],
    ['unstakePaymentAmount', beet.coption(beet.u64)],
    ['paymentMint', beet.coption(beetSolana.publicKey)],
    ['paymentManager', beet.coption(beetSolana.publicKey)],
    ['identifier', beet.utf8String],
  ],
  'InitPoolIx'
)
