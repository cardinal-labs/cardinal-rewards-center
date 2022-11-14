/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as beetSolana from "@metaplex-foundation/beet-solana";
import * as web3 from "@solana/web3.js";

/**
 * Arguments used to create {@link Identifier}
 * @category Accounts
 * @category generated
 */
export type IdentifierArgs = {
  bump: number;
  count: beet.bignum;
};

export const identifierDiscriminator = [204, 189, 217, 160, 27, 67, 108, 181];
/**
 * Holds the data for the {@link Identifier} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Identifier implements IdentifierArgs {
  private constructor(readonly bump: number, readonly count: beet.bignum) {}

  /**
   * Creates a {@link Identifier} instance from the provided args.
   */
  static fromArgs(args: IdentifierArgs) {
    return new Identifier(args.bump, args.count);
  }

  /**
   * Deserializes the {@link Identifier} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Identifier, number] {
    return Identifier.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Identifier} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey
  ): Promise<Identifier> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find Identifier account at ${address}`);
    }
    return Identifier.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      "stk2688WVNGaHZGiLuuyGdQQWDdt8n69gEEo5eWYFt6"
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, identifierBeet);
  }

  /**
   * Deserializes the {@link Identifier} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Identifier, number] {
    return identifierBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link Identifier} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return identifierBeet.serialize({
      accountDiscriminator: identifierDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Identifier}
   */
  static get byteSize() {
    return identifierBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Identifier} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Identifier.byteSize,
      commitment
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link Identifier} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === Identifier.byteSize;
  }

  /**
   * Returns a readable version of {@link Identifier} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      bump: this.bump,
      count: (() => {
        const x = <{ toNumber: () => number }>this.count;
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const identifierBeet = new beet.BeetStruct<
  Identifier,
  IdentifierArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ["accountDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["bump", beet.u8],
    ["count", beet.u64],
  ],
  Identifier.fromArgs,
  "Identifier"
);
