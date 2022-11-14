/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as beetSolana from "@metaplex-foundation/beet-solana";
import type * as web3 from "@solana/web3.js";

export type InitPoolIx = {
  overlayText: string;
  imageUri: string;
  requiresCollections: web3.PublicKey[];
  requiresCreators: web3.PublicKey[];
  requiresAuthorization: boolean;
  authority: web3.PublicKey;
  resetOnStake: boolean;
  cooldownSeconds: beet.COption<number>;
  minStakeSeconds: beet.COption<number>;
  endDate: beet.COption<beet.bignum>;
  paymentAmount: beet.COption<beet.bignum>;
  paymentMint: beet.COption<web3.PublicKey>;
  paymentManager: beet.COption<web3.PublicKey>;
};

/**
 * @category userTypes
 * @category generated
 */
export const initPoolIxBeet = new beet.FixableBeetArgsStruct<InitPoolIx>(
  [
    ["overlayText", beet.utf8String],
    ["imageUri", beet.utf8String],
    ["requiresCollections", beet.array(beetSolana.publicKey)],
    ["requiresCreators", beet.array(beetSolana.publicKey)],
    ["requiresAuthorization", beet.bool],
    ["authority", beetSolana.publicKey],
    ["resetOnStake", beet.bool],
    ["cooldownSeconds", beet.coption(beet.u32)],
    ["minStakeSeconds", beet.coption(beet.u32)],
    ["endDate", beet.coption(beet.i64)],
    ["paymentAmount", beet.coption(beet.u64)],
    ["paymentMint", beet.coption(beetSolana.publicKey)],
    ["paymentManager", beet.coption(beetSolana.publicKey)],
  ],
  "InitPoolIx"
);
