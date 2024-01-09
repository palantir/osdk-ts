import type { LocalDate, QueryError, QueryResponse, Range, Result, ThreeDimensionalAggregation, Timestamp, TwoDimensionalAggregation } from '@osdk/legacy-client';
import type { Employee } from '../objects/Employee';
export interface Queries {
    /**
     * @param {number} params.n
     * @returns number
     */
    addOne(params: {
        n: number;
    }): Promise<Result<QueryResponse<number>, QueryError>>;
    /**
     * @param {{firstName:string,lastName:string,age?:number}} params.person
     * @returns {firstName:string,lastName:string,age?:number}
     */
    incrementPersonAge(params: {
        person: {
            firstName: string;
            lastName: string;
            age?: number;
        };
    }): Promise<Result<QueryResponse<{
        firstName: string;
        lastName: string;
        age?: number;
    }>, QueryError>>;
    /**
     * @returns LocalDate
     */
    returnsDate(): Promise<Result<QueryResponse<LocalDate>, QueryError>>;
    /**
     * @returns Employee
     */
    returnsObject(): Promise<Result<QueryResponse<Employee>, QueryError>>;
    /**
     * @returns Timestamp
     */
    returnsTimestamp(): Promise<Result<QueryResponse<Timestamp>, QueryError>>;
    /**
     * @returns TwoDimensionalAggregation<string,number>
     */
    twoDimensionalAggregationFunction(): Promise<Result<QueryResponse<TwoDimensionalAggregation<string, number>>, QueryError>>;
    /**
     * @returns ThreeDimensionalAggregation<string,Range<Timestamp>,number>
     */
    threeDimensionalAggregationFunction(): Promise<Result<QueryResponse<ThreeDimensionalAggregation<string, Range<Timestamp>, number>>, QueryError>>;
}
