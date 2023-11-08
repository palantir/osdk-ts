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
import type { Todo } from './objects/Todo';
export interface Queries {
  queryTakesAllParameterTypes(params: {
    double: number;
    float: number;
    integer: number;
    long: number;
    attachment: Attachment;
    boolean: boolean;
    date: LocalDate;
    string: string;
    timestamp: Timestamp;
    object: Todo;
    objectSet: ObjectSet<Todo>;
    array: Array<string>;
    set: Set<string>;
    unionNonNullable: string | number;
    unionNullable?: string | number | null;
    struct: { name: string; id: number };
    twoDimensionalAggregation: TwoDimensionalAggregation<string, number>;
    threeDimensionalAggregation: ThreeDimensionalAggregation<Range<LocalDate>, Range<Timestamp>, LocalDate>;
  }): Promise<Result<QueryResponse<string>, QueryError>>;
}
