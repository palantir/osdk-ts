import type {
  Attachment,
  LocalDate,
  ObjectSet,
  QueryError,
  QueryResponse,
  Range,
  Result,
  ThreeDimensionalAggregation,
  Timestamp,
  TwoDimensionalAggregation,
} from '@osdk/legacy-client';
import type { Todo } from '../objects/Todo';

export interface Queries {
  /**
   * description of the query that takes all parameter types
   * @param {number} params.double - a double parameter
   * @param {number} params.float
   * @param {number} params.integer
   * @param {string|number} params.long
   * @param {Attachment} params.attachment
   * @param {boolean} params.boolean
   * @param {LocalDate} params.date
   * @param {string} params.string
   * @param {Timestamp} params.timestamp
   * @param {Todo|Todo["__primaryKey"]} params.object
   * @param {ObjectSet<Todo>} params.objectSet
   * @param {Array<string>} params.array - an array of strings
   * @param {Set<string>} params.set - a set of strings
   * @param {string|number} params.unionNonNullable - a union of strings and integers
   * @param {string|number} params.unionNullable - a union of strings and integers but its optional
   * @param {{name:string,id:number}} params.struct - a struct with some fields
   * @param {TwoDimensionalAggregation<string,number>} params.twoDimensionalAggregation
   * @param {ThreeDimensionalAggregation<Range<LocalDate>,Range<Timestamp>,LocalDate>} params.threeDimensionalAggregation
   * @returns string
   */
  queryTakesAllParameterTypes(params: {
    double: number;
    float: number;
    integer: number;
    long: string | number;
    attachment: Attachment;
    boolean: boolean;
    date: LocalDate;
    string: string;
    timestamp: Timestamp;
    object: Todo | Todo['__primaryKey'];
    objectSet: ObjectSet<Todo>;
    array: Array<string>;
    set: Set<string>;
    unionNonNullable: string | number;
    unionNullable?: string | number;
    struct: { name: string; id: number };
    twoDimensionalAggregation: TwoDimensionalAggregation<string, number>;
    threeDimensionalAggregation: ThreeDimensionalAggregation<Range<LocalDate>, Range<Timestamp>, LocalDate>;
  }): Promise<Result<QueryResponse<string>, QueryError>>;

  /**
   * @returns number
   */
  getTodoCount(): Promise<Result<QueryResponse<number>, QueryError>>;
}
