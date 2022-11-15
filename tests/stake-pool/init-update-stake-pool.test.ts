import { beforeAll, expect, test } from "@jest/globals";
import { Transaction } from "@solana/web3.js";

import { findStakePoolId, stakePool } from "../../sdk";
import type { CardinalProvider } from "../utils";
import { executeTransaction, getProvider } from "../utils";

const stakePoolIdentifier = `test-${Math.random()}`;
let provider: CardinalProvider;
beforeAll(async () => {
  provider = await getProvider();
});

test("Init", async () => {
  const tx = new Transaction();
  const stakePoolId = findStakePoolId(stakePoolIdentifier);
  tx.add(
    stakePool.createInitPoolInstruction(
      {
        stakePool: stakePoolId,
        payer: provider.wallet.publicKey,
      },
      {
        ix: {
          identifier: stakePoolIdentifier,
          requiresCollections: [],
          requiresCreators: [],
          requiresAuthorization: false,
          authority: provider.wallet.publicKey,
          resetOnUnstake: false,
          cooldownSeconds: null,
          minStakeSeconds: null,
          endDate: null,
          stakePaymentAmount: null,
          unstakePaymentAmount: null,
          paymentMint: null,
          paymentManager: null,
        },
      }
    )
  );
  await executeTransaction(provider.connection, tx, provider.wallet);
  const pool = await stakePool.StakePool.fromAccountAddress(
    provider.connection,
    stakePoolId
  );
  expect(pool.authority.toString()).toBe(provider.wallet.publicKey.toString());
  expect(pool.requiresAuthorization).toBe(false);
});

test("Update", async () => {
  const tx = new Transaction();
  const stakePoolId = findStakePoolId(stakePoolIdentifier);
  tx.add(
    stakePool.createUpdatePoolInstruction(
      {
        stakePool: stakePoolId,
        payer: provider.wallet.publicKey,
      },
      {
        ix: {
          requiresCollections: [],
          requiresCreators: [],
          requiresAuthorization: true,
          authority: provider.wallet.publicKey,
          resetOnUnstake: false,
          cooldownSeconds: null,
          minStakeSeconds: null,
          endDate: null,
          stakePaymentAmount: null,
          unstakePaymentAmount: null,
          paymentMint: null,
          paymentManager: null,
        },
      }
    )
  );
  await executeTransaction(provider.connection, tx, provider.wallet);
  const pool = await stakePool.StakePool.fromAccountAddress(
    provider.connection,
    stakePoolId
  );
  expect(pool.authority.toString()).toBe(provider.wallet.publicKey.toString());
  expect(pool.requiresAuthorization).toBe(true);
});