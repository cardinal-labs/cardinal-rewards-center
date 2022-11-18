/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { PaymentShare, paymentShareBeet } from './PaymentShare'
export type UpdateStakeBoosterIx = {
  paymentInfo: web3.PublicKey
  paymentAmount: beet.bignum
  paymentMint: web3.PublicKey
  paymentShares: PaymentShare[]
  boostSeconds: beet.bignum
  startTimeSeconds: beet.bignum
  boostActionPaymentInfo: web3.PublicKey
}

/**
 * @category userTypes
 * @category generated
 */
export const updateStakeBoosterIxBeet =
  new beet.FixableBeetArgsStruct<UpdateStakeBoosterIx>(
    [
      ['paymentInfo', beetSolana.publicKey],
      ['paymentAmount', beet.u64],
      ['paymentMint', beetSolana.publicKey],
      ['paymentShares', beet.array(paymentShareBeet)],
      ['boostSeconds', beet.u128],
      ['startTimeSeconds', beet.i64],
      ['boostActionPaymentInfo', beetSolana.publicKey],
    ],
    'UpdateStakeBoosterIx'
  )
