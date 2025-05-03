
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model promises
 * 
 */
export type promises = $Result.DefaultSelection<Prisma.$promisesPayload>
/**
 * Model transcripts
 * 
 */
export type transcripts = $Result.DefaultSelection<Prisma.$transcriptsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Promises
 * const promises = await prisma.promises.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Promises
   * const promises = await prisma.promises.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.promises`: Exposes CRUD operations for the **promises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promises
    * const promises = await prisma.promises.findMany()
    * ```
    */
  get promises(): Prisma.promisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transcripts`: Exposes CRUD operations for the **transcripts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transcripts
    * const transcripts = await prisma.transcripts.findMany()
    * ```
    */
  get transcripts(): Prisma.transcriptsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    promises: 'promises',
    transcripts: 'transcripts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "promises" | "transcripts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      promises: {
        payload: Prisma.$promisesPayload<ExtArgs>
        fields: Prisma.promisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.promisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.promisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload>
          }
          findFirst: {
            args: Prisma.promisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.promisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload>
          }
          findMany: {
            args: Prisma.promisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload>[]
          }
          create: {
            args: Prisma.promisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload>
          }
          createMany: {
            args: Prisma.promisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.promisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload>[]
          }
          delete: {
            args: Prisma.promisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload>
          }
          update: {
            args: Prisma.promisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload>
          }
          deleteMany: {
            args: Prisma.promisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.promisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.promisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload>[]
          }
          upsert: {
            args: Prisma.promisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promisesPayload>
          }
          aggregate: {
            args: Prisma.PromisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromises>
          }
          groupBy: {
            args: Prisma.promisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.promisesCountArgs<ExtArgs>
            result: $Utils.Optional<PromisesCountAggregateOutputType> | number
          }
        }
      }
      transcripts: {
        payload: Prisma.$transcriptsPayload<ExtArgs>
        fields: Prisma.transcriptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transcriptsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transcriptsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload>
          }
          findFirst: {
            args: Prisma.transcriptsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transcriptsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload>
          }
          findMany: {
            args: Prisma.transcriptsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload>[]
          }
          create: {
            args: Prisma.transcriptsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload>
          }
          createMany: {
            args: Prisma.transcriptsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transcriptsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload>[]
          }
          delete: {
            args: Prisma.transcriptsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload>
          }
          update: {
            args: Prisma.transcriptsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload>
          }
          deleteMany: {
            args: Prisma.transcriptsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transcriptsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transcriptsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload>[]
          }
          upsert: {
            args: Prisma.transcriptsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transcriptsPayload>
          }
          aggregate: {
            args: Prisma.TranscriptsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranscripts>
          }
          groupBy: {
            args: Prisma.transcriptsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranscriptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transcriptsCountArgs<ExtArgs>
            result: $Utils.Optional<TranscriptsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    promises?: promisesOmit
    transcripts?: transcriptsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model promises
   */

  export type AggregatePromises = {
    _count: PromisesCountAggregateOutputType | null
    _min: PromisesMinAggregateOutputType | null
    _max: PromisesMaxAggregateOutputType | null
  }

  export type PromisesMinAggregateOutputType = {
    id: string | null
    customer_name: string | null
    promise_text: string | null
    due_time: Date | null
    fulfilled: boolean | null
    created_at: Date | null
  }

  export type PromisesMaxAggregateOutputType = {
    id: string | null
    customer_name: string | null
    promise_text: string | null
    due_time: Date | null
    fulfilled: boolean | null
    created_at: Date | null
  }

  export type PromisesCountAggregateOutputType = {
    id: number
    customer_name: number
    promise_text: number
    due_time: number
    fulfilled: number
    created_at: number
    _all: number
  }


  export type PromisesMinAggregateInputType = {
    id?: true
    customer_name?: true
    promise_text?: true
    due_time?: true
    fulfilled?: true
    created_at?: true
  }

  export type PromisesMaxAggregateInputType = {
    id?: true
    customer_name?: true
    promise_text?: true
    due_time?: true
    fulfilled?: true
    created_at?: true
  }

  export type PromisesCountAggregateInputType = {
    id?: true
    customer_name?: true
    promise_text?: true
    due_time?: true
    fulfilled?: true
    created_at?: true
    _all?: true
  }

  export type PromisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which promises to aggregate.
     */
    where?: promisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promises to fetch.
     */
    orderBy?: promisesOrderByWithRelationInput | promisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: promisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned promises
    **/
    _count?: true | PromisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromisesMaxAggregateInputType
  }

  export type GetPromisesAggregateType<T extends PromisesAggregateArgs> = {
        [P in keyof T & keyof AggregatePromises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromises[P]>
      : GetScalarType<T[P], AggregatePromises[P]>
  }




  export type promisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: promisesWhereInput
    orderBy?: promisesOrderByWithAggregationInput | promisesOrderByWithAggregationInput[]
    by: PromisesScalarFieldEnum[] | PromisesScalarFieldEnum
    having?: promisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromisesCountAggregateInputType | true
    _min?: PromisesMinAggregateInputType
    _max?: PromisesMaxAggregateInputType
  }

  export type PromisesGroupByOutputType = {
    id: string
    customer_name: string | null
    promise_text: string | null
    due_time: Date | null
    fulfilled: boolean | null
    created_at: Date | null
    _count: PromisesCountAggregateOutputType | null
    _min: PromisesMinAggregateOutputType | null
    _max: PromisesMaxAggregateOutputType | null
  }

  type GetPromisesGroupByPayload<T extends promisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromisesGroupByOutputType[P]>
            : GetScalarType<T[P], PromisesGroupByOutputType[P]>
        }
      >
    >


  export type promisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_name?: boolean
    promise_text?: boolean
    due_time?: boolean
    fulfilled?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["promises"]>

  export type promisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_name?: boolean
    promise_text?: boolean
    due_time?: boolean
    fulfilled?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["promises"]>

  export type promisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_name?: boolean
    promise_text?: boolean
    due_time?: boolean
    fulfilled?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["promises"]>

  export type promisesSelectScalar = {
    id?: boolean
    customer_name?: boolean
    promise_text?: boolean
    due_time?: boolean
    fulfilled?: boolean
    created_at?: boolean
  }

  export type promisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_name" | "promise_text" | "due_time" | "fulfilled" | "created_at", ExtArgs["result"]["promises"]>

  export type $promisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "promises"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customer_name: string | null
      promise_text: string | null
      due_time: Date | null
      fulfilled: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["promises"]>
    composites: {}
  }

  type promisesGetPayload<S extends boolean | null | undefined | promisesDefaultArgs> = $Result.GetResult<Prisma.$promisesPayload, S>

  type promisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<promisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromisesCountAggregateInputType | true
    }

  export interface promisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['promises'], meta: { name: 'promises' } }
    /**
     * Find zero or one Promises that matches the filter.
     * @param {promisesFindUniqueArgs} args - Arguments to find a Promises
     * @example
     * // Get one Promises
     * const promises = await prisma.promises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends promisesFindUniqueArgs>(args: SelectSubset<T, promisesFindUniqueArgs<ExtArgs>>): Prisma__promisesClient<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {promisesFindUniqueOrThrowArgs} args - Arguments to find a Promises
     * @example
     * // Get one Promises
     * const promises = await prisma.promises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends promisesFindUniqueOrThrowArgs>(args: SelectSubset<T, promisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__promisesClient<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promisesFindFirstArgs} args - Arguments to find a Promises
     * @example
     * // Get one Promises
     * const promises = await prisma.promises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends promisesFindFirstArgs>(args?: SelectSubset<T, promisesFindFirstArgs<ExtArgs>>): Prisma__promisesClient<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promisesFindFirstOrThrowArgs} args - Arguments to find a Promises
     * @example
     * // Get one Promises
     * const promises = await prisma.promises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends promisesFindFirstOrThrowArgs>(args?: SelectSubset<T, promisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__promisesClient<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promises
     * const promises = await prisma.promises.findMany()
     * 
     * // Get first 10 Promises
     * const promises = await prisma.promises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promisesWithIdOnly = await prisma.promises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends promisesFindManyArgs>(args?: SelectSubset<T, promisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promises.
     * @param {promisesCreateArgs} args - Arguments to create a Promises.
     * @example
     * // Create one Promises
     * const Promises = await prisma.promises.create({
     *   data: {
     *     // ... data to create a Promises
     *   }
     * })
     * 
     */
    create<T extends promisesCreateArgs>(args: SelectSubset<T, promisesCreateArgs<ExtArgs>>): Prisma__promisesClient<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promises.
     * @param {promisesCreateManyArgs} args - Arguments to create many Promises.
     * @example
     * // Create many Promises
     * const promises = await prisma.promises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends promisesCreateManyArgs>(args?: SelectSubset<T, promisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promises and returns the data saved in the database.
     * @param {promisesCreateManyAndReturnArgs} args - Arguments to create many Promises.
     * @example
     * // Create many Promises
     * const promises = await prisma.promises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promises and only return the `id`
     * const promisesWithIdOnly = await prisma.promises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends promisesCreateManyAndReturnArgs>(args?: SelectSubset<T, promisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promises.
     * @param {promisesDeleteArgs} args - Arguments to delete one Promises.
     * @example
     * // Delete one Promises
     * const Promises = await prisma.promises.delete({
     *   where: {
     *     // ... filter to delete one Promises
     *   }
     * })
     * 
     */
    delete<T extends promisesDeleteArgs>(args: SelectSubset<T, promisesDeleteArgs<ExtArgs>>): Prisma__promisesClient<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promises.
     * @param {promisesUpdateArgs} args - Arguments to update one Promises.
     * @example
     * // Update one Promises
     * const promises = await prisma.promises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends promisesUpdateArgs>(args: SelectSubset<T, promisesUpdateArgs<ExtArgs>>): Prisma__promisesClient<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promises.
     * @param {promisesDeleteManyArgs} args - Arguments to filter Promises to delete.
     * @example
     * // Delete a few Promises
     * const { count } = await prisma.promises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends promisesDeleteManyArgs>(args?: SelectSubset<T, promisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promises
     * const promises = await prisma.promises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends promisesUpdateManyArgs>(args: SelectSubset<T, promisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promises and returns the data updated in the database.
     * @param {promisesUpdateManyAndReturnArgs} args - Arguments to update many Promises.
     * @example
     * // Update many Promises
     * const promises = await prisma.promises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promises and only return the `id`
     * const promisesWithIdOnly = await prisma.promises.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends promisesUpdateManyAndReturnArgs>(args: SelectSubset<T, promisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promises.
     * @param {promisesUpsertArgs} args - Arguments to update or create a Promises.
     * @example
     * // Update or create a Promises
     * const promises = await prisma.promises.upsert({
     *   create: {
     *     // ... data to create a Promises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promises we want to update
     *   }
     * })
     */
    upsert<T extends promisesUpsertArgs>(args: SelectSubset<T, promisesUpsertArgs<ExtArgs>>): Prisma__promisesClient<$Result.GetResult<Prisma.$promisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promisesCountArgs} args - Arguments to filter Promises to count.
     * @example
     * // Count the number of Promises
     * const count = await prisma.promises.count({
     *   where: {
     *     // ... the filter for the Promises we want to count
     *   }
     * })
    **/
    count<T extends promisesCountArgs>(
      args?: Subset<T, promisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromisesAggregateArgs>(args: Subset<T, PromisesAggregateArgs>): Prisma.PrismaPromise<GetPromisesAggregateType<T>>

    /**
     * Group by Promises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends promisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: promisesGroupByArgs['orderBy'] }
        : { orderBy?: promisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, promisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the promises model
   */
  readonly fields: promisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for promises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__promisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the promises model
   */
  interface promisesFieldRefs {
    readonly id: FieldRef<"promises", 'String'>
    readonly customer_name: FieldRef<"promises", 'String'>
    readonly promise_text: FieldRef<"promises", 'String'>
    readonly due_time: FieldRef<"promises", 'DateTime'>
    readonly fulfilled: FieldRef<"promises", 'Boolean'>
    readonly created_at: FieldRef<"promises", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * promises findUnique
   */
  export type promisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * Filter, which promises to fetch.
     */
    where: promisesWhereUniqueInput
  }

  /**
   * promises findUniqueOrThrow
   */
  export type promisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * Filter, which promises to fetch.
     */
    where: promisesWhereUniqueInput
  }

  /**
   * promises findFirst
   */
  export type promisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * Filter, which promises to fetch.
     */
    where?: promisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promises to fetch.
     */
    orderBy?: promisesOrderByWithRelationInput | promisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promises.
     */
    cursor?: promisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promises.
     */
    distinct?: PromisesScalarFieldEnum | PromisesScalarFieldEnum[]
  }

  /**
   * promises findFirstOrThrow
   */
  export type promisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * Filter, which promises to fetch.
     */
    where?: promisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promises to fetch.
     */
    orderBy?: promisesOrderByWithRelationInput | promisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promises.
     */
    cursor?: promisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promises.
     */
    distinct?: PromisesScalarFieldEnum | PromisesScalarFieldEnum[]
  }

  /**
   * promises findMany
   */
  export type promisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * Filter, which promises to fetch.
     */
    where?: promisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promises to fetch.
     */
    orderBy?: promisesOrderByWithRelationInput | promisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing promises.
     */
    cursor?: promisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promises.
     */
    skip?: number
    distinct?: PromisesScalarFieldEnum | PromisesScalarFieldEnum[]
  }

  /**
   * promises create
   */
  export type promisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * The data needed to create a promises.
     */
    data?: XOR<promisesCreateInput, promisesUncheckedCreateInput>
  }

  /**
   * promises createMany
   */
  export type promisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many promises.
     */
    data: promisesCreateManyInput | promisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * promises createManyAndReturn
   */
  export type promisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * The data used to create many promises.
     */
    data: promisesCreateManyInput | promisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * promises update
   */
  export type promisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * The data needed to update a promises.
     */
    data: XOR<promisesUpdateInput, promisesUncheckedUpdateInput>
    /**
     * Choose, which promises to update.
     */
    where: promisesWhereUniqueInput
  }

  /**
   * promises updateMany
   */
  export type promisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update promises.
     */
    data: XOR<promisesUpdateManyMutationInput, promisesUncheckedUpdateManyInput>
    /**
     * Filter which promises to update
     */
    where?: promisesWhereInput
    /**
     * Limit how many promises to update.
     */
    limit?: number
  }

  /**
   * promises updateManyAndReturn
   */
  export type promisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * The data used to update promises.
     */
    data: XOR<promisesUpdateManyMutationInput, promisesUncheckedUpdateManyInput>
    /**
     * Filter which promises to update
     */
    where?: promisesWhereInput
    /**
     * Limit how many promises to update.
     */
    limit?: number
  }

  /**
   * promises upsert
   */
  export type promisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * The filter to search for the promises to update in case it exists.
     */
    where: promisesWhereUniqueInput
    /**
     * In case the promises found by the `where` argument doesn't exist, create a new promises with this data.
     */
    create: XOR<promisesCreateInput, promisesUncheckedCreateInput>
    /**
     * In case the promises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<promisesUpdateInput, promisesUncheckedUpdateInput>
  }

  /**
   * promises delete
   */
  export type promisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
    /**
     * Filter which promises to delete.
     */
    where: promisesWhereUniqueInput
  }

  /**
   * promises deleteMany
   */
  export type promisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which promises to delete
     */
    where?: promisesWhereInput
    /**
     * Limit how many promises to delete.
     */
    limit?: number
  }

  /**
   * promises without action
   */
  export type promisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promises
     */
    select?: promisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promises
     */
    omit?: promisesOmit<ExtArgs> | null
  }


  /**
   * Model transcripts
   */

  export type AggregateTranscripts = {
    _count: TranscriptsCountAggregateOutputType | null
    _min: TranscriptsMinAggregateOutputType | null
    _max: TranscriptsMaxAggregateOutputType | null
  }

  export type TranscriptsMinAggregateOutputType = {
    id: string | null
    session_id: string | null
    raw_text: string | null
    created_at: Date | null
  }

  export type TranscriptsMaxAggregateOutputType = {
    id: string | null
    session_id: string | null
    raw_text: string | null
    created_at: Date | null
  }

  export type TranscriptsCountAggregateOutputType = {
    id: number
    session_id: number
    raw_text: number
    detected_intent: number
    action_taken: number
    created_at: number
    _all: number
  }


  export type TranscriptsMinAggregateInputType = {
    id?: true
    session_id?: true
    raw_text?: true
    created_at?: true
  }

  export type TranscriptsMaxAggregateInputType = {
    id?: true
    session_id?: true
    raw_text?: true
    created_at?: true
  }

  export type TranscriptsCountAggregateInputType = {
    id?: true
    session_id?: true
    raw_text?: true
    detected_intent?: true
    action_taken?: true
    created_at?: true
    _all?: true
  }

  export type TranscriptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transcripts to aggregate.
     */
    where?: transcriptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transcripts to fetch.
     */
    orderBy?: transcriptsOrderByWithRelationInput | transcriptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transcriptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transcripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transcripts
    **/
    _count?: true | TranscriptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranscriptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranscriptsMaxAggregateInputType
  }

  export type GetTranscriptsAggregateType<T extends TranscriptsAggregateArgs> = {
        [P in keyof T & keyof AggregateTranscripts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranscripts[P]>
      : GetScalarType<T[P], AggregateTranscripts[P]>
  }




  export type transcriptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transcriptsWhereInput
    orderBy?: transcriptsOrderByWithAggregationInput | transcriptsOrderByWithAggregationInput[]
    by: TranscriptsScalarFieldEnum[] | TranscriptsScalarFieldEnum
    having?: transcriptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranscriptsCountAggregateInputType | true
    _min?: TranscriptsMinAggregateInputType
    _max?: TranscriptsMaxAggregateInputType
  }

  export type TranscriptsGroupByOutputType = {
    id: string
    session_id: string | null
    raw_text: string
    detected_intent: JsonValue | null
    action_taken: JsonValue | null
    created_at: Date | null
    _count: TranscriptsCountAggregateOutputType | null
    _min: TranscriptsMinAggregateOutputType | null
    _max: TranscriptsMaxAggregateOutputType | null
  }

  type GetTranscriptsGroupByPayload<T extends transcriptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranscriptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranscriptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranscriptsGroupByOutputType[P]>
            : GetScalarType<T[P], TranscriptsGroupByOutputType[P]>
        }
      >
    >


  export type transcriptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    raw_text?: boolean
    detected_intent?: boolean
    action_taken?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["transcripts"]>

  export type transcriptsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    raw_text?: boolean
    detected_intent?: boolean
    action_taken?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["transcripts"]>

  export type transcriptsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    raw_text?: boolean
    detected_intent?: boolean
    action_taken?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["transcripts"]>

  export type transcriptsSelectScalar = {
    id?: boolean
    session_id?: boolean
    raw_text?: boolean
    detected_intent?: boolean
    action_taken?: boolean
    created_at?: boolean
  }

  export type transcriptsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_id" | "raw_text" | "detected_intent" | "action_taken" | "created_at", ExtArgs["result"]["transcripts"]>

  export type $transcriptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transcripts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      session_id: string | null
      raw_text: string
      detected_intent: Prisma.JsonValue | null
      action_taken: Prisma.JsonValue | null
      created_at: Date | null
    }, ExtArgs["result"]["transcripts"]>
    composites: {}
  }

  type transcriptsGetPayload<S extends boolean | null | undefined | transcriptsDefaultArgs> = $Result.GetResult<Prisma.$transcriptsPayload, S>

  type transcriptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transcriptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranscriptsCountAggregateInputType | true
    }

  export interface transcriptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transcripts'], meta: { name: 'transcripts' } }
    /**
     * Find zero or one Transcripts that matches the filter.
     * @param {transcriptsFindUniqueArgs} args - Arguments to find a Transcripts
     * @example
     * // Get one Transcripts
     * const transcripts = await prisma.transcripts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transcriptsFindUniqueArgs>(args: SelectSubset<T, transcriptsFindUniqueArgs<ExtArgs>>): Prisma__transcriptsClient<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transcripts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transcriptsFindUniqueOrThrowArgs} args - Arguments to find a Transcripts
     * @example
     * // Get one Transcripts
     * const transcripts = await prisma.transcripts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transcriptsFindUniqueOrThrowArgs>(args: SelectSubset<T, transcriptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transcriptsClient<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transcripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transcriptsFindFirstArgs} args - Arguments to find a Transcripts
     * @example
     * // Get one Transcripts
     * const transcripts = await prisma.transcripts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transcriptsFindFirstArgs>(args?: SelectSubset<T, transcriptsFindFirstArgs<ExtArgs>>): Prisma__transcriptsClient<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transcripts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transcriptsFindFirstOrThrowArgs} args - Arguments to find a Transcripts
     * @example
     * // Get one Transcripts
     * const transcripts = await prisma.transcripts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transcriptsFindFirstOrThrowArgs>(args?: SelectSubset<T, transcriptsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transcriptsClient<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transcripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transcriptsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transcripts
     * const transcripts = await prisma.transcripts.findMany()
     * 
     * // Get first 10 Transcripts
     * const transcripts = await prisma.transcripts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transcriptsWithIdOnly = await prisma.transcripts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transcriptsFindManyArgs>(args?: SelectSubset<T, transcriptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transcripts.
     * @param {transcriptsCreateArgs} args - Arguments to create a Transcripts.
     * @example
     * // Create one Transcripts
     * const Transcripts = await prisma.transcripts.create({
     *   data: {
     *     // ... data to create a Transcripts
     *   }
     * })
     * 
     */
    create<T extends transcriptsCreateArgs>(args: SelectSubset<T, transcriptsCreateArgs<ExtArgs>>): Prisma__transcriptsClient<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transcripts.
     * @param {transcriptsCreateManyArgs} args - Arguments to create many Transcripts.
     * @example
     * // Create many Transcripts
     * const transcripts = await prisma.transcripts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transcriptsCreateManyArgs>(args?: SelectSubset<T, transcriptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transcripts and returns the data saved in the database.
     * @param {transcriptsCreateManyAndReturnArgs} args - Arguments to create many Transcripts.
     * @example
     * // Create many Transcripts
     * const transcripts = await prisma.transcripts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transcripts and only return the `id`
     * const transcriptsWithIdOnly = await prisma.transcripts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transcriptsCreateManyAndReturnArgs>(args?: SelectSubset<T, transcriptsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transcripts.
     * @param {transcriptsDeleteArgs} args - Arguments to delete one Transcripts.
     * @example
     * // Delete one Transcripts
     * const Transcripts = await prisma.transcripts.delete({
     *   where: {
     *     // ... filter to delete one Transcripts
     *   }
     * })
     * 
     */
    delete<T extends transcriptsDeleteArgs>(args: SelectSubset<T, transcriptsDeleteArgs<ExtArgs>>): Prisma__transcriptsClient<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transcripts.
     * @param {transcriptsUpdateArgs} args - Arguments to update one Transcripts.
     * @example
     * // Update one Transcripts
     * const transcripts = await prisma.transcripts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transcriptsUpdateArgs>(args: SelectSubset<T, transcriptsUpdateArgs<ExtArgs>>): Prisma__transcriptsClient<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transcripts.
     * @param {transcriptsDeleteManyArgs} args - Arguments to filter Transcripts to delete.
     * @example
     * // Delete a few Transcripts
     * const { count } = await prisma.transcripts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transcriptsDeleteManyArgs>(args?: SelectSubset<T, transcriptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transcripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transcriptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transcripts
     * const transcripts = await prisma.transcripts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transcriptsUpdateManyArgs>(args: SelectSubset<T, transcriptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transcripts and returns the data updated in the database.
     * @param {transcriptsUpdateManyAndReturnArgs} args - Arguments to update many Transcripts.
     * @example
     * // Update many Transcripts
     * const transcripts = await prisma.transcripts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transcripts and only return the `id`
     * const transcriptsWithIdOnly = await prisma.transcripts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transcriptsUpdateManyAndReturnArgs>(args: SelectSubset<T, transcriptsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transcripts.
     * @param {transcriptsUpsertArgs} args - Arguments to update or create a Transcripts.
     * @example
     * // Update or create a Transcripts
     * const transcripts = await prisma.transcripts.upsert({
     *   create: {
     *     // ... data to create a Transcripts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transcripts we want to update
     *   }
     * })
     */
    upsert<T extends transcriptsUpsertArgs>(args: SelectSubset<T, transcriptsUpsertArgs<ExtArgs>>): Prisma__transcriptsClient<$Result.GetResult<Prisma.$transcriptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transcripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transcriptsCountArgs} args - Arguments to filter Transcripts to count.
     * @example
     * // Count the number of Transcripts
     * const count = await prisma.transcripts.count({
     *   where: {
     *     // ... the filter for the Transcripts we want to count
     *   }
     * })
    **/
    count<T extends transcriptsCountArgs>(
      args?: Subset<T, transcriptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranscriptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transcripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TranscriptsAggregateArgs>(args: Subset<T, TranscriptsAggregateArgs>): Prisma.PrismaPromise<GetTranscriptsAggregateType<T>>

    /**
     * Group by Transcripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transcriptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transcriptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transcriptsGroupByArgs['orderBy'] }
        : { orderBy?: transcriptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transcriptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscriptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transcripts model
   */
  readonly fields: transcriptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transcripts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transcriptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transcripts model
   */
  interface transcriptsFieldRefs {
    readonly id: FieldRef<"transcripts", 'String'>
    readonly session_id: FieldRef<"transcripts", 'String'>
    readonly raw_text: FieldRef<"transcripts", 'String'>
    readonly detected_intent: FieldRef<"transcripts", 'Json'>
    readonly action_taken: FieldRef<"transcripts", 'Json'>
    readonly created_at: FieldRef<"transcripts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transcripts findUnique
   */
  export type transcriptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * Filter, which transcripts to fetch.
     */
    where: transcriptsWhereUniqueInput
  }

  /**
   * transcripts findUniqueOrThrow
   */
  export type transcriptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * Filter, which transcripts to fetch.
     */
    where: transcriptsWhereUniqueInput
  }

  /**
   * transcripts findFirst
   */
  export type transcriptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * Filter, which transcripts to fetch.
     */
    where?: transcriptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transcripts to fetch.
     */
    orderBy?: transcriptsOrderByWithRelationInput | transcriptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transcripts.
     */
    cursor?: transcriptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transcripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transcripts.
     */
    distinct?: TranscriptsScalarFieldEnum | TranscriptsScalarFieldEnum[]
  }

  /**
   * transcripts findFirstOrThrow
   */
  export type transcriptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * Filter, which transcripts to fetch.
     */
    where?: transcriptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transcripts to fetch.
     */
    orderBy?: transcriptsOrderByWithRelationInput | transcriptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transcripts.
     */
    cursor?: transcriptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transcripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transcripts.
     */
    distinct?: TranscriptsScalarFieldEnum | TranscriptsScalarFieldEnum[]
  }

  /**
   * transcripts findMany
   */
  export type transcriptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * Filter, which transcripts to fetch.
     */
    where?: transcriptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transcripts to fetch.
     */
    orderBy?: transcriptsOrderByWithRelationInput | transcriptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transcripts.
     */
    cursor?: transcriptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transcripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transcripts.
     */
    skip?: number
    distinct?: TranscriptsScalarFieldEnum | TranscriptsScalarFieldEnum[]
  }

  /**
   * transcripts create
   */
  export type transcriptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * The data needed to create a transcripts.
     */
    data: XOR<transcriptsCreateInput, transcriptsUncheckedCreateInput>
  }

  /**
   * transcripts createMany
   */
  export type transcriptsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transcripts.
     */
    data: transcriptsCreateManyInput | transcriptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transcripts createManyAndReturn
   */
  export type transcriptsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * The data used to create many transcripts.
     */
    data: transcriptsCreateManyInput | transcriptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transcripts update
   */
  export type transcriptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * The data needed to update a transcripts.
     */
    data: XOR<transcriptsUpdateInput, transcriptsUncheckedUpdateInput>
    /**
     * Choose, which transcripts to update.
     */
    where: transcriptsWhereUniqueInput
  }

  /**
   * transcripts updateMany
   */
  export type transcriptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transcripts.
     */
    data: XOR<transcriptsUpdateManyMutationInput, transcriptsUncheckedUpdateManyInput>
    /**
     * Filter which transcripts to update
     */
    where?: transcriptsWhereInput
    /**
     * Limit how many transcripts to update.
     */
    limit?: number
  }

  /**
   * transcripts updateManyAndReturn
   */
  export type transcriptsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * The data used to update transcripts.
     */
    data: XOR<transcriptsUpdateManyMutationInput, transcriptsUncheckedUpdateManyInput>
    /**
     * Filter which transcripts to update
     */
    where?: transcriptsWhereInput
    /**
     * Limit how many transcripts to update.
     */
    limit?: number
  }

  /**
   * transcripts upsert
   */
  export type transcriptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * The filter to search for the transcripts to update in case it exists.
     */
    where: transcriptsWhereUniqueInput
    /**
     * In case the transcripts found by the `where` argument doesn't exist, create a new transcripts with this data.
     */
    create: XOR<transcriptsCreateInput, transcriptsUncheckedCreateInput>
    /**
     * In case the transcripts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transcriptsUpdateInput, transcriptsUncheckedUpdateInput>
  }

  /**
   * transcripts delete
   */
  export type transcriptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
    /**
     * Filter which transcripts to delete.
     */
    where: transcriptsWhereUniqueInput
  }

  /**
   * transcripts deleteMany
   */
  export type transcriptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transcripts to delete
     */
    where?: transcriptsWhereInput
    /**
     * Limit how many transcripts to delete.
     */
    limit?: number
  }

  /**
   * transcripts without action
   */
  export type transcriptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transcripts
     */
    select?: transcriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transcripts
     */
    omit?: transcriptsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PromisesScalarFieldEnum: {
    id: 'id',
    customer_name: 'customer_name',
    promise_text: 'promise_text',
    due_time: 'due_time',
    fulfilled: 'fulfilled',
    created_at: 'created_at'
  };

  export type PromisesScalarFieldEnum = (typeof PromisesScalarFieldEnum)[keyof typeof PromisesScalarFieldEnum]


  export const TranscriptsScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    raw_text: 'raw_text',
    detected_intent: 'detected_intent',
    action_taken: 'action_taken',
    created_at: 'created_at'
  };

  export type TranscriptsScalarFieldEnum = (typeof TranscriptsScalarFieldEnum)[keyof typeof TranscriptsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type promisesWhereInput = {
    AND?: promisesWhereInput | promisesWhereInput[]
    OR?: promisesWhereInput[]
    NOT?: promisesWhereInput | promisesWhereInput[]
    id?: UuidFilter<"promises"> | string
    customer_name?: StringNullableFilter<"promises"> | string | null
    promise_text?: StringNullableFilter<"promises"> | string | null
    due_time?: DateTimeNullableFilter<"promises"> | Date | string | null
    fulfilled?: BoolNullableFilter<"promises"> | boolean | null
    created_at?: DateTimeNullableFilter<"promises"> | Date | string | null
  }

  export type promisesOrderByWithRelationInput = {
    id?: SortOrder
    customer_name?: SortOrderInput | SortOrder
    promise_text?: SortOrderInput | SortOrder
    due_time?: SortOrderInput | SortOrder
    fulfilled?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type promisesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: promisesWhereInput | promisesWhereInput[]
    OR?: promisesWhereInput[]
    NOT?: promisesWhereInput | promisesWhereInput[]
    customer_name?: StringNullableFilter<"promises"> | string | null
    promise_text?: StringNullableFilter<"promises"> | string | null
    due_time?: DateTimeNullableFilter<"promises"> | Date | string | null
    fulfilled?: BoolNullableFilter<"promises"> | boolean | null
    created_at?: DateTimeNullableFilter<"promises"> | Date | string | null
  }, "id">

  export type promisesOrderByWithAggregationInput = {
    id?: SortOrder
    customer_name?: SortOrderInput | SortOrder
    promise_text?: SortOrderInput | SortOrder
    due_time?: SortOrderInput | SortOrder
    fulfilled?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: promisesCountOrderByAggregateInput
    _max?: promisesMaxOrderByAggregateInput
    _min?: promisesMinOrderByAggregateInput
  }

  export type promisesScalarWhereWithAggregatesInput = {
    AND?: promisesScalarWhereWithAggregatesInput | promisesScalarWhereWithAggregatesInput[]
    OR?: promisesScalarWhereWithAggregatesInput[]
    NOT?: promisesScalarWhereWithAggregatesInput | promisesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"promises"> | string
    customer_name?: StringNullableWithAggregatesFilter<"promises"> | string | null
    promise_text?: StringNullableWithAggregatesFilter<"promises"> | string | null
    due_time?: DateTimeNullableWithAggregatesFilter<"promises"> | Date | string | null
    fulfilled?: BoolNullableWithAggregatesFilter<"promises"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"promises"> | Date | string | null
  }

  export type transcriptsWhereInput = {
    AND?: transcriptsWhereInput | transcriptsWhereInput[]
    OR?: transcriptsWhereInput[]
    NOT?: transcriptsWhereInput | transcriptsWhereInput[]
    id?: UuidFilter<"transcripts"> | string
    session_id?: UuidNullableFilter<"transcripts"> | string | null
    raw_text?: StringFilter<"transcripts"> | string
    detected_intent?: JsonNullableFilter<"transcripts">
    action_taken?: JsonNullableFilter<"transcripts">
    created_at?: DateTimeNullableFilter<"transcripts"> | Date | string | null
  }

  export type transcriptsOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrderInput | SortOrder
    raw_text?: SortOrder
    detected_intent?: SortOrderInput | SortOrder
    action_taken?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type transcriptsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transcriptsWhereInput | transcriptsWhereInput[]
    OR?: transcriptsWhereInput[]
    NOT?: transcriptsWhereInput | transcriptsWhereInput[]
    session_id?: UuidNullableFilter<"transcripts"> | string | null
    raw_text?: StringFilter<"transcripts"> | string
    detected_intent?: JsonNullableFilter<"transcripts">
    action_taken?: JsonNullableFilter<"transcripts">
    created_at?: DateTimeNullableFilter<"transcripts"> | Date | string | null
  }, "id">

  export type transcriptsOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrderInput | SortOrder
    raw_text?: SortOrder
    detected_intent?: SortOrderInput | SortOrder
    action_taken?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: transcriptsCountOrderByAggregateInput
    _max?: transcriptsMaxOrderByAggregateInput
    _min?: transcriptsMinOrderByAggregateInput
  }

  export type transcriptsScalarWhereWithAggregatesInput = {
    AND?: transcriptsScalarWhereWithAggregatesInput | transcriptsScalarWhereWithAggregatesInput[]
    OR?: transcriptsScalarWhereWithAggregatesInput[]
    NOT?: transcriptsScalarWhereWithAggregatesInput | transcriptsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"transcripts"> | string
    session_id?: UuidNullableWithAggregatesFilter<"transcripts"> | string | null
    raw_text?: StringWithAggregatesFilter<"transcripts"> | string
    detected_intent?: JsonNullableWithAggregatesFilter<"transcripts">
    action_taken?: JsonNullableWithAggregatesFilter<"transcripts">
    created_at?: DateTimeNullableWithAggregatesFilter<"transcripts"> | Date | string | null
  }

  export type promisesCreateInput = {
    id?: string
    customer_name?: string | null
    promise_text?: string | null
    due_time?: Date | string | null
    fulfilled?: boolean | null
    created_at?: Date | string | null
  }

  export type promisesUncheckedCreateInput = {
    id?: string
    customer_name?: string | null
    promise_text?: string | null
    due_time?: Date | string | null
    fulfilled?: boolean | null
    created_at?: Date | string | null
  }

  export type promisesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promise_text?: NullableStringFieldUpdateOperationsInput | string | null
    due_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type promisesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promise_text?: NullableStringFieldUpdateOperationsInput | string | null
    due_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type promisesCreateManyInput = {
    id?: string
    customer_name?: string | null
    promise_text?: string | null
    due_time?: Date | string | null
    fulfilled?: boolean | null
    created_at?: Date | string | null
  }

  export type promisesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promise_text?: NullableStringFieldUpdateOperationsInput | string | null
    due_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type promisesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    promise_text?: NullableStringFieldUpdateOperationsInput | string | null
    due_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfilled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transcriptsCreateInput = {
    id?: string
    session_id?: string | null
    raw_text: string
    detected_intent?: NullableJsonNullValueInput | InputJsonValue
    action_taken?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type transcriptsUncheckedCreateInput = {
    id?: string
    session_id?: string | null
    raw_text: string
    detected_intent?: NullableJsonNullValueInput | InputJsonValue
    action_taken?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type transcriptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    raw_text?: StringFieldUpdateOperationsInput | string
    detected_intent?: NullableJsonNullValueInput | InputJsonValue
    action_taken?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transcriptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    raw_text?: StringFieldUpdateOperationsInput | string
    detected_intent?: NullableJsonNullValueInput | InputJsonValue
    action_taken?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transcriptsCreateManyInput = {
    id?: string
    session_id?: string | null
    raw_text: string
    detected_intent?: NullableJsonNullValueInput | InputJsonValue
    action_taken?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
  }

  export type transcriptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    raw_text?: StringFieldUpdateOperationsInput | string
    detected_intent?: NullableJsonNullValueInput | InputJsonValue
    action_taken?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transcriptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    raw_text?: StringFieldUpdateOperationsInput | string
    detected_intent?: NullableJsonNullValueInput | InputJsonValue
    action_taken?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type promisesCountOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    promise_text?: SortOrder
    due_time?: SortOrder
    fulfilled?: SortOrder
    created_at?: SortOrder
  }

  export type promisesMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    promise_text?: SortOrder
    due_time?: SortOrder
    fulfilled?: SortOrder
    created_at?: SortOrder
  }

  export type promisesMinOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    promise_text?: SortOrder
    due_time?: SortOrder
    fulfilled?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type transcriptsCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    raw_text?: SortOrder
    detected_intent?: SortOrder
    action_taken?: SortOrder
    created_at?: SortOrder
  }

  export type transcriptsMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    raw_text?: SortOrder
    created_at?: SortOrder
  }

  export type transcriptsMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    raw_text?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}