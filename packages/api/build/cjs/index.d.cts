import { A as Attachment, M as MediaReference, a as AttachmentUpload, O as ObjectTypeDefinition, b as OsdkBase, c as OsdkObjectPrimaryKeyType, d as ObjectSet, I as InterfaceDefinition, R as ReleaseStatus, e as OsdkMetadata, P as PropertyValueWireToClient, f as PrimaryKeyTypes } from './FilteredPropertyKeys-G2dSO0w4.cjs';
export { g as AggregateOpts, h as AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy, k as AggregationClause, i as AggregationResultsWithGroups, j as AggregationResultsWithoutGroups, l as AggregationsResults, t as AllGroupByValues, w as AsyncIterArgs, x as Augment, y as Augments, Q as BaseObjectSet, a3 as BaseWirePropertyTypes, $ as CompileTimeMetadata, a6 as ConvertProps, r as DerivedProperty, D as DistanceUnitMapping, s as DurationMapping, F as FetchPageArgs, C as FetchPageResult, U as FilteredPropertyKeys, G as GeoFilterOptions, m as GeoFilter_Intersects, n as GeoFilter_Within, aa as GeotimeSeriesProperty, u as GroupByClause, v as GroupByRange, X as InterfaceMetadata, af as LinkNames, ae as LinkedType, H as Media, J as MediaMetadata, N as NullabilityAdherence, a0 as ObjectMetadata, Y as ObjectOrInterfaceDefinition, T as ObjectSetSubscription, _ as ObjectSpecifier, a7 as Osdk, q as OsdkObjectLinksObject, p as OsdkObjectPropertyType, a8 as PageResult, o as PossibleWhereClauseFilters, a5 as PrimaryKeyType, a1 as PropertyDef, Z as PropertyKeys, L as Result, z as SelectArg, B as SelectArgToKeys, S as SingleLinkAccessor, E as SingleOsdkResult, ab as TimeSeriesPoint, ac as TimeSeriesProperty, ad as TimeSeriesQuery, a9 as TimeseriesDurationMapping, V as ValidAggregationKeys, a2 as VersionBound, W as WhereClause, a4 as WirePropertyTypes, K as isOk } from './FilteredPropertyKeys-G2dSO0w4.cjs';
import 'type-fest';
import 'geojson';

/**
 * Map from the DataValue type to the typescript type that we return
 */
interface DataValueWireToClient {
    attachment: Attachment;
    boolean: boolean;
    byte: number;
    datetime: string;
    date: string;
    decimal: string;
    float: number;
    double: number;
    integer: number;
    long: string;
    marking: string;
    null: null;
    short: number;
    string: string;
    timestamp: string;
    mediaReference: MediaReference;
    twoDimensionalAggregation: {
        key: AllowedBucketKeyTypes$1;
        value: AllowedBucketTypes$1;
    }[];
    threeDimensionalAggregation: {
        key: AllowedBucketKeyTypes$1;
        groups: {
            key: AllowedBucketKeyTypes$1;
            value: AllowedBucketTypes$1;
        }[];
    }[];
    struct: Record<string, any>;
    set: Set<any>;
    objectType: string;
}
/**
 * Map from the DataValue type to the typescript type that we accept
 */
interface DataValueClientToWire {
    attachment: string | AttachmentUpload | Blob & {
        readonly name: string;
    };
    boolean: boolean;
    byte: number;
    datetime: string;
    date: string;
    decimal: string | number;
    float: number;
    double: number;
    integer: number;
    long: string | number;
    marking: string;
    null: null;
    short: number;
    string: string;
    timestamp: string;
    set: Set<any>;
    mediaReference: MediaReference;
    twoDimensionalAggregation: {
        key: AllowedBucketKeyTypes$1;
        value: AllowedBucketTypes$1;
    }[];
    threeDimensionalAggregation: {
        key: AllowedBucketKeyTypes$1;
        groups: {
            key: AllowedBucketKeyTypes$1;
            value: AllowedBucketTypes$1;
        }[];
    }[];
    struct: Record<string, any>;
    objectType: string;
}
type AllowedBucketTypes$1 = string | number | boolean;
type AllowedBucketKeyTypes$1 = AllowedBucketTypes$1 | {
    startValue: AllowedBucketTypes$1;
    endValue: AllowedBucketTypes$1;
};

type ActionResults = (ObjectEdits | LargeScaleObjectEdits) & {
    editedObjectTypes: Array<String>;
};
interface ObjectEdits {
    type: "edits";
    addedObjects: Array<ObjectReference>;
    modifiedObjects: Array<ObjectReference>;
    deletedObjects?: Array<ObjectReference>;
    addedLinks: Array<LinkReference>;
    deletedLinks?: Array<LinkReference>;
    deletedObjectsCount: number;
    deletedLinksCount: number;
}
interface LargeScaleObjectEdits {
    type: "largeScaleEdits";
    addedObjects?: never;
    modifiedObjects?: never;
    deletedObjects?: never;
    addedLinks?: never;
    deletedLinks?: never;
    deletedObjectsCount?: never;
    deletedLinksCount?: never;
}
type LinkReference = {
    linkTypeApiNameAtoB: string;
    linkTypeApiNameBtoA: string;
    aSideObject: ObjectReference;
    bSideObject: ObjectReference;
};
interface ObjectReference {
    primaryKey: string | number;
    objectType: string;
}
interface ValidateActionResponseV2 {
    result: "VALID" | "INVALID";
    submissionCriteria: Array<{
        configuredFailureMessage?: string;
        result: "VALID" | "INVALID";
    }>;
    parameters: Record<string, {
        result: "VALID" | "INVALID";
        evaluatedConstraints: Array<ParameterEvaluatedConstraint>;
        required: boolean;
    }>;
}
type ParameterEvaluatedConstraint = {
    type: "arraySize";
    lt?: any;
    lte?: any;
    gt?: any;
    gte?: any;
} | {
    type: "groupMember";
} | {
    type: "objectPropertyValue";
} | {
    type: "objectQueryResult";
} | {
    type: "oneOf";
    options: Array<{
        displayName?: string;
        value?: any;
    }>;
    otherValuesAllowed: boolean;
} | {
    type: "range";
    lt?: any;
    lte?: any;
    gt?: any;
    gte?: any;
} | {
    type: "stringLength";
    lt?: any;
    lte?: any;
    gt?: any;
    gte?: any;
} | {
    type: "stringRegexMatch";
    regex: string;
    configuredFailureMessage?: string;
} | {
    type: "unevaluable";
};

type ApplyActionOptions = {
    $returnEdits?: true;
    $validateOnly?: false;
} | {
    $validateOnly?: true;
    $returnEdits?: false;
};
type ApplyBatchActionOptions = {
    $returnEdits?: boolean;
};
/**
 * Helper types for converting action definition parameter types to typescript types
 */
declare namespace ActionParam {
    /**
     * Helper type to convert action definition parameter primitives to typescript types
     */
    type PrimitiveType<T extends keyof DataValueClientToWire> = DataValueClientToWire[T];
    /**
     * Helper type to convert action definition parameter object types to typescript types
     */
    type ObjectType<T extends ObjectTypeDefinition> = OsdkBase<T> | OsdkObjectPrimaryKeyType<T>;
    /**
     * Helper type to convert action definition parameter object sets to typescript types
     */
    type ObjectSetType<T extends ObjectTypeDefinition> = ObjectSet<T>;
    /**
     * Helper type to convert action definition parameter interface types to typescript types
     */
    type InterfaceType<T extends InterfaceDefinition> = {
        $objectType: NonNullable<T["__DefinitionMetadata"]> extends {
            implementedBy: infer U;
        } ? (U extends ReadonlyArray<never> ? string : U extends ReadonlyArray<string> ? U[number] : string) : string;
        $primaryKey: string | number;
    };
    type StructType<T extends Record<string, keyof DataValueClientToWire>> = {
        [K in keyof T]: DataValueClientToWire[T[K]];
    };
}
type ActionEditResponse = ActionResults;
type ActionValidationResponse = ValidateActionResponseV2;

type ActionReturnTypeForOptions<Op extends ApplyActionOptions | ApplyBatchActionOptions> = Op extends {
    $validateOnly: true;
} ? ActionValidationResponse : Op extends {
    $returnEdits: true;
} ? ActionEditResponse : undefined;

interface ActionMetadata {
    type: "action";
    apiName: string;
    description?: string;
    displayName?: string;
    parameters: Record<any, ActionMetadata.Parameter<any>>;
    modifiedEntities?: Partial<Record<any, {
        created: boolean;
        modified: boolean;
    }>>;
    status: ReleaseStatus;
    rid: string;
}
declare namespace ActionMetadata {
    interface Parameter<T_Target extends ObjectTypeDefinition = never> {
        type: DataType.BaseActionParameterTypes | DataType.Object<any> | DataType.ObjectSet<any> | DataType.Interface<any> | DataType.Struct<any>;
        description?: string;
        multiplicity?: boolean;
        nullable?: boolean;
    }
    namespace DataType {
        type BaseActionParameterTypes = "boolean" | "string" | "integer" | "long" | "double" | "datetime" | "timestamp" | "attachment" | "marking" | "mediaReference" | "objectType";
        interface Object<T_Target extends ObjectTypeDefinition = never> {
            __OsdkTargetType?: T_Target;
            type: "object";
            object: T_Target["apiName"];
        }
        interface Interface<T_Target extends InterfaceDefinition = never> {
            __OsdkTargetType?: T_Target;
            type: "interface";
            interface: T_Target["apiName"];
        }
        interface ObjectSet<T_Target extends ObjectTypeDefinition = never> {
            __OsdkTargetType?: T_Target;
            type: "objectSet";
            objectSet: T_Target["apiName"];
        }
        interface Struct<T extends Record<string, DataType.BaseActionParameterTypes>> {
            type: "struct";
            struct: T;
        }
    }
}
interface ActionCompileTimeMetadata<T> {
    signatures: T;
}
interface ActionDefinition<T_signatures = never> {
    type: "action";
    apiName: string;
    osdkMetadata?: OsdkMetadata;
    __DefinitionMetadata?: ActionCompileTimeMetadata<T_signatures> & ActionMetadata;
}

interface OntologyMetadata<_NEVER_USED_KEPT_FOR_BACKCOMPAT = any> {
    expectsClientVersion?: _NEVER_USED_KEPT_FOR_BACKCOMPAT;
    ontologyRid: string;
    ontologyApiName: string;
    userAgent: string;
}

interface QueryMetadata {
    type: "query";
    apiName: string;
    description?: string;
    displayName?: string;
    version: string;
    parameters: Record<string, QueryParameterDefinition<any>>;
    output: QueryDataTypeDefinition;
    rid: string;
}
interface QueryCompileTimeMetadata<T> {
    signature: T;
}
interface QueryDefinition<T = any> {
    type: "query";
    apiName: string;
    osdkMetadata?: OsdkMetadata;
    __DefinitionMetadata?: QueryCompileTimeMetadata<T> & QueryMetadata;
}
type QueryParameterDefinition<T_Target extends ObjectTypeDefinition = any> = {
    description?: string;
} & QueryDataTypeDefinition<T_Target>;
type QueryDataTypeDefinition<T_Target extends ObjectTypeDefinition = any> = PrimitiveDataType | ObjectQueryDataType<T_Target> | ObjectSetQueryDataType<T_Target> | SetQueryDataType | UnionQueryDataType | StructQueryDataType | TwoDimensionalAggregationDataType | ThreeDimensionalAggregationDataType | MapDataType;
type BaseQueryDataTypeDefinition<T extends string> = {
    multiplicity?: boolean;
    nullable?: boolean;
    type: T;
};
type WireQueryDataTypes = "double" | "float" | "integer" | "long" | "boolean" | "string" | "date" | "timestamp" | "attachment";
type PrimitiveDataType<Q extends WireQueryDataTypes = WireQueryDataTypes> = BaseQueryDataTypeDefinition<Q>;
interface ObjectQueryDataType<T_Target extends ObjectTypeDefinition = never> extends BaseQueryDataTypeDefinition<"object"> {
    object: string;
    __OsdkTargetType?: T_Target;
}
interface ObjectSetQueryDataType<T_Target extends ObjectTypeDefinition = never> extends BaseQueryDataTypeDefinition<"objectSet"> {
    objectSet: string;
    __OsdkTargetType?: T_Target;
}
interface SetQueryDataType extends BaseQueryDataTypeDefinition<"set"> {
    set: QueryDataTypeDefinition;
}
interface UnionQueryDataType extends BaseQueryDataTypeDefinition<"union"> {
    union: ReadonlyArray<QueryDataTypeDefinition>;
}
interface StructQueryDataType extends BaseQueryDataTypeDefinition<"struct"> {
    struct: Record<string, QueryDataTypeDefinition>;
}
interface TwoDimensionalAggregationDataType extends BaseQueryDataTypeDefinition<"twoDimensionalAggregation"> {
    twoDimensionalAggregation: TwoDimensionalQueryAggregationDefinition;
}
interface ThreeDimensionalAggregationDataType extends BaseQueryDataTypeDefinition<"threeDimensionalAggregation"> {
    threeDimensionalAggregation: ThreeDimensionalQueryAggregationDefinition;
}
interface MapDataType extends BaseQueryDataTypeDefinition<"map"> {
    keyType: QueryDataTypeDefinition;
    valueType: QueryDataTypeDefinition;
}
type AggregationKeyDataType<V = any> = SimpleAggregationKeyDataType<V> | RangeAggregationKeyDataType<V>;
interface SimpleAggregationKeyDataType<V = any> {
    keyType: Exclude<AggregationKeyTypes, "range">;
    valueType: V;
}
interface RangeAggregationKeyDataType<V = any> {
    keyType: "range";
    keySubtype: AggregationRangeKeyTypes;
    valueType: V;
}
type TwoDimensionalQueryAggregationDefinition = AggregationKeyDataType<AggregationValueTypes>;
type ThreeDimensionalQueryAggregationDefinition = AggregationKeyDataType<TwoDimensionalQueryAggregationDefinition>;
type AggregationKeyTypes = "boolean" | "string" | "date" | "double" | "integer" | "timestamp" | "range";
type AggregationRangeKeyTypes = "date" | "double" | "integer" | "timestamp";
type AggregationValueTypes = "date" | "double" | "timestamp";

/**
 * @deprecated Use OsdkBase
 */
type OsdkObject<N extends string> = {
    readonly $apiName: N;
    readonly $objectType: string;
    readonly $primaryKey: PropertyValueWireToClient[PrimaryKeyTypes];
};

type Range<T extends AllowedBucketTypes> = {
    startValue?: T;
    endValue: T;
} | {
    startValue: T;
    endValue?: T;
};
type AllowedBucketTypes = string | number | boolean;
type AllowedBucketKeyTypes = AllowedBucketTypes | Range<AllowedBucketTypes>;
type TwoDimensionalAggregation<T extends AllowedBucketKeyTypes, U extends AllowedBucketTypes> = {
    key: T;
    value: U;
}[];
type ThreeDimensionalAggregation<T extends AllowedBucketKeyTypes, U extends AllowedBucketKeyTypes, V extends AllowedBucketTypes> = {
    key: T;
    groups: {
        key: U;
        value: V;
    }[];
}[];
type AggKeyWireToClient<T extends AggregationKeyTypes, S extends AggregationRangeKeyTypes = never> = T extends keyof DataValueWireToClient ? DataValueWireToClient[T] : T extends "range" ? S extends keyof DataValueWireToClient ? Range<DataValueWireToClient[S]> : never : never;
type AggKeyClientToWire<T extends AggregationKeyTypes, S extends AggregationRangeKeyTypes = never> = T extends keyof DataValueClientToWire ? DataValueClientToWire[T] : T extends "range" ? S extends keyof DataValueClientToWire ? Range<DataValueClientToWire[S]> : never : never;
type AggValueWireToClient<T extends AggregationValueTypes> = T extends keyof DataValueWireToClient ? DataValueWireToClient[T] : never;
type AggValueClientToWire<T extends AggregationValueTypes> = T extends keyof DataValueClientToWire ? DataValueClientToWire[T] : never;

/**
 * Helper types for converting query definition parameter types to typescript types
 */
declare namespace QueryParam {
    /**
     * Helper type to convert action definition parameter primitives to typescript types
     */
    type PrimitiveType<T extends keyof DataValueClientToWire> = DataValueClientToWire[T];
    /**
     * Helper type to convert action definition parameter object types to typescript types
     */
    type ObjectType<T extends ObjectTypeDefinition> = OsdkBase<T> | OsdkObjectPrimaryKeyType<T>;
    /**
     * Helper type to convert action definition parameter object sets to typescript types
     */
    type ObjectSetType<T extends ObjectTypeDefinition> = ObjectSet<T>;
    type RangeKey<T extends AggregationRangeKeyTypes> = AggKeyClientToWire<"range", T>;
    type TwoDimensionalAggregationType<T extends AggregationKeyTypes | RangeKey<any>, V extends AggregationValueTypes> = TwoDimensionalAggregation<T extends AggregationKeyTypes ? AggKeyClientToWire<T> : T, AggValueClientToWire<V>>;
    type ThreeDimensionalAggregationType<OUT extends AggregationKeyTypes | RangeKey<any>, IN extends AggregationKeyTypes | RangeKey<any>, V extends AggregationValueTypes> = ThreeDimensionalAggregation<OUT extends AggregationKeyTypes ? AggKeyClientToWire<OUT> : OUT, IN extends AggregationKeyTypes ? AggKeyClientToWire<IN> : IN, AggValueClientToWire<V>>;
}
/**
 * Helper types for converting query result types to typescript types
 */
declare namespace QueryResult {
    /**
     * Helper type to convert action definition parameter primitives to typescript types
     */
    type PrimitiveType<T extends keyof DataValueClientToWire> = DataValueWireToClient[T];
    /**
     * Helper type to convert action definition parameter object types to typescript types
     */
    type ObjectType<T extends ObjectTypeDefinition> = OsdkBase<T>;
    /**
     * Helper type to convert action definition parameter object sets to typescript types
     */
    type ObjectSetType<T extends ObjectTypeDefinition> = ObjectSet<T>;
    type RangeKey<T extends AggregationRangeKeyTypes> = AggKeyWireToClient<"range", T>;
    type TwoDimensionalAggregationType<T extends AggregationKeyTypes | RangeKey<any>, V extends AggregationValueTypes> = TwoDimensionalAggregation<T extends AggregationKeyTypes ? AggKeyWireToClient<T> : T, AggValueWireToClient<V>>;
    type ThreeDimensionalAggregationType<OUT extends AggregationKeyTypes | RangeKey<any>, IN extends AggregationKeyTypes | RangeKey<any>, V extends AggregationValueTypes> = ThreeDimensionalAggregation<OUT extends AggregationKeyTypes ? AggKeyWireToClient<OUT> : OUT, IN extends AggregationKeyTypes ? AggKeyWireToClient<IN> : IN, AggValueWireToClient<V>>;
}

export { type ActionDefinition, type ActionEditResponse, ActionMetadata, ActionParam, type ActionReturnTypeForOptions, type ActionValidationResponse, type AllowedBucketKeyTypes$1 as AllowedBucketKeyTypes, type AllowedBucketTypes$1 as AllowedBucketTypes, type ApplyActionOptions, type ApplyBatchActionOptions, Attachment, AttachmentUpload, type DataValueClientToWire, type DataValueWireToClient, InterfaceDefinition, MediaReference, type ObjectQueryDataType, type ObjectSet, type ObjectSetQueryDataType, ObjectTypeDefinition, type OntologyMetadata, OsdkBase, type OsdkObject, PrimaryKeyTypes, PropertyValueWireToClient, type QueryDataTypeDefinition, type QueryDefinition, type QueryMetadata, QueryParam, type QueryParameterDefinition, QueryResult, type Range, type ThreeDimensionalAggregation, type ThreeDimensionalQueryAggregationDefinition, type TwoDimensionalAggregation, type TwoDimensionalQueryAggregationDefinition };
