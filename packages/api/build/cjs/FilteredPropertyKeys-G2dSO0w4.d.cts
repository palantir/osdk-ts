import { SingleKeyObject } from 'type-fest';
import { Point, BBox, Polygon } from 'geojson';

interface Attachment {
    rid: string;
    /**
     * Fetches metadata for an attachment
     */
    fetchMetadata(): Promise<AttachmentMetadata>;
    /**
     * Fetches actual content of attachment in Blob form
     */
    fetchContents(): Promise<Response>;
}
interface AttachmentUpload {
    readonly name: string;
    readonly data: Blob;
}
interface AttachmentMetadata {
    rid: string;
    filename: string;
    sizeBytes: number;
    mediaType: string;
}

interface Media {
    /**
     * Fetches metadata for media reference property
     */
    fetchMetadata(): Promise<MediaMetadata>;
    /**
     * Fetches content of a media reference property
     */
    fetchContents(): Promise<Response>;
}
/**
 * Unique identifier of a media item in Foundry.
 */
interface MediaReference {
    mimeType: string;
    reference: {
        type: "mediaSetViewItem";
        mediaSetViewItem: {
            mediaItemRid: string;
            mediaSetRid: string;
            mediaSetViewRid: string;
        };
    };
}
/**
 * Metadata of a media item
 */
interface MediaMetadata {
    path?: string;
    sizeBytes: number;
    mediaType: string;
}

type CollectWithPropAggregations = "collectSet" | "collectList";
type BaseWithPropAggregations = "approximateDistinct" | "exactDistinct";
type StringWithPropAggregateOption = BaseWithPropAggregations | CollectWithPropAggregations;
type NumericWithPropAggregateOption = "min" | "max" | "sum" | "avg" | "approximatePercentile" | BaseWithPropAggregations | CollectWithPropAggregations;

type TimeSeriesQuery = {
    $before: number;
    $unit: keyof typeof TimeseriesDurationMapping;
    $after?: never;
    $startTime?: never;
    $endTime?: never;
} | {
    $after: number;
    $unit: keyof typeof TimeseriesDurationMapping;
    $before?: never;
    $startTime?: never;
    $endTime?: never;
} | {
    $startTime: string;
    $endTime?: string;
    $before?: never;
    $after?: never;
    $unit?: never;
} | {
    $startTime?: string;
    $endTime: string;
    $before?: never;
    $after?: never;
    $unit?: never;
};
declare const TimeseriesDurationMapping: {
    sec: "SECONDS";
    seconds: "SECONDS";
    min: "MINUTES";
    minute: "MINUTES";
    minutes: "MINUTES";
    hr: "HOURS";
    hrs: "HOURS";
    hour: "HOURS";
    hours: "HOURS";
    day: "DAYS";
    days: "DAYS";
    wk: "WEEKS";
    week: "WEEKS";
    weeks: "WEEKS";
    mos: "MONTHS";
    month: "MONTHS";
    months: "MONTHS";
    yr: "YEARS";
    year: "YEARS";
    years: "YEARS";
    ms: "MILLISECONDS";
    milliseconds: "MILLISECONDS";
};
interface TimeSeriesPoint<T extends string | number | GeoJSON.Point> {
    time: string;
    value: T;
}
interface TimeSeriesProperty<T extends number | string> {
    /**
     * Queries the first point of the Timeseries
     */
    readonly getFirstPoint: () => Promise<TimeSeriesPoint<T>>;
    /**
     * Queries the last point of the Timeseries
     */
    readonly getLastPoint: () => Promise<TimeSeriesPoint<T>>;
    /**
       * Loads all points, within the given time range if that's provided
       * @param query - a query representing either an absolute or relative range of time
       * @example
       *  const points = await employee.employeeStatus?.getAllPoints({
          $after: 1,
          $unit: "month",
        });
       */
    readonly getAllPoints: (query?: TimeSeriesQuery) => Promise<Array<TimeSeriesPoint<T>>>;
    /**
       * Returns an async iterator to load all points
       * within the given time range if that's provided
       * @param query - a query representing either an absolute or relative range of time
       * @example
       *  const iterator = employee.employeeStatus?.asyncIter({
          $after: 1,
          $unit: "month",
        });
        for await (const point of iterator) {
            // Handle time series point
        }
       */
    readonly asyncIterPoints: (query?: TimeSeriesQuery) => AsyncGenerator<TimeSeriesPoint<T>>;
}
interface GeotimeSeriesProperty<T extends GeoJSON.Point> {
    /**
     * Queries the last point of the Geotime series
     */
    readonly getLatestValue: () => Promise<TimeSeriesPoint<T> | undefined>;
    /**
       * Loads all points, within the given time range if that's provided
       * @param query - a query representing either an absolute or relative range of time
       * @example
       *  const points = await employee.employeeStatus?.getAllPoints({
          $after: 1,
          $unit: "month",
        });
       */
    readonly getAllValues: (query?: TimeSeriesQuery) => Promise<Array<TimeSeriesPoint<T>>>;
    /**
       * Returns an async iterator to load all points
       * within the given time range if that's provided
       * @param query - a query representing either an absolute or relative range of time
       * @example
       *  const iterator = employee.employeeStatus?.asyncIter({
          $after: 1,
          $unit: "month",
        });
        for await (const point of iterator) {
            // Handle time series point
        }
       */
    readonly asyncIterValues: (query?: TimeSeriesQuery) => AsyncGenerator<TimeSeriesPoint<T>>;
    /**
     * The most recently fetched value for the latest point in the GTSR.
     * This will not be loaded automatically upon object load, but will be refreshed every time
     * getLatestValue() is called
     */
    readonly lastFetchedValue: TimeSeriesPoint<T> | undefined;
}

/**
 * Map from the PropertyDefinition type to the typescript type that we return
 */
interface PropertyValueWireToClient {
    attachment: Attachment;
    boolean: boolean;
    byte: number;
    datetime: string;
    decimal: string;
    double: number;
    float: number;
    geopoint: GeoJSON.Point;
    geoshape: GeoJSON.GeoJSON;
    integer: number;
    long: string;
    marking: string;
    mediaReference: Media;
    short: number;
    string: string;
    timestamp: string;
    numericTimeseries: TimeSeriesProperty<number>;
    stringTimeseries: TimeSeriesProperty<string>;
    sensorTimeseries: TimeSeriesProperty<string | number>;
    geotimeSeriesReference: GeotimeSeriesProperty<GeoJSON.Point>;
}
type GetClientPropertyValueFromWire<T extends keyof PropertyValueWireToClient | Record<string, keyof PropertyValueWireToClient>> = T extends keyof PropertyValueWireToClient ? PropertyValueWireToClient[T] : T extends Record<string, keyof PropertyValueWireToClient> ? {
    [K in keyof T]: PropertyValueWireToClient[T[K]];
} : never;
/**
 * Map from the PropertyDefinition type to the typescript type that we accept
 */
interface PropertyValueClientToWire {
    attachment: string | AttachmentUpload | Blob & {
        readonly name: string;
    };
    boolean: boolean;
    byte: number;
    datetime: string;
    decimal: string | number;
    double: number;
    float: number;
    geopoint: GeoJSON.Point;
    geoshape: GeoJSON.GeoJSON;
    integer: number;
    long: string | number;
    marking: string;
    short: number;
    string: string;
    timestamp: string;
    mediaReference: Media;
    numericTimeseries: TimeSeriesProperty<number>;
    stringTimeseries: TimeSeriesProperty<string>;
    sensorTimeseries: TimeSeriesProperty<string | number>;
    geotimeSeriesReference: GeotimeSeriesProperty<GeoJSON.Point>;
}
type GetWirePropertyValueFromClient<T extends keyof PropertyValueClientToWire | Record<string, keyof PropertyValueClientToWire>> = T extends keyof PropertyValueClientToWire ? PropertyValueClientToWire[T] : T extends Record<string, keyof PropertyValueClientToWire> ? {
    [K in keyof T]: PropertyValueClientToWire[T[K]];
} : never;

interface OsdkMetadata {
    extraUserAgent: string;
}

type PrimaryKeyTypes = "string" | "datetime" | "double" | "boolean" | "integer" | "timestamp" | "short" | "long" | "byte";

type VersionString<Major extends number, Minor extends number, Patch extends number> = `${Major}.${Minor}.${Patch}`;

type WirePropertyTypes = BaseWirePropertyTypes | Record<string, BaseWirePropertyTypes>;
type BaseWirePropertyTypes = "string" | "datetime" | "double" | "boolean" | "integer" | "timestamp" | "short" | "long" | "float" | "decimal" | "byte" | "marking" | "mediaReference" | "numericTimeseries" | "stringTimeseries" | "sensorTimeseries" | "attachment" | "geopoint" | "geoshape" | "geotimeSeriesReference";

type CompileTimeMetadata<T extends {
    __DefinitionMetadata?: {};
}> = NonNullable<T["__DefinitionMetadata"]>;
type ObjectInterfaceBaseMetadata = {
    type: "object" | "interface";
    apiName: string;
    displayName: string;
    description?: string;
    properties: Record<any, ObjectMetadata.Property>;
    links: Record<string, ObjectMetadata.Link<any, any>>;
    rid: string;
    /**
     * Represents the "super interfaces" of this object.
     *
     * Optional because they may not exist on legacy.
     */
    implements?: ReadonlyArray<string>;
};
interface ObjectInterfaceCompileDefinition {
    type: "object" | "interface";
    objectSet?: any;
    props?: any;
    strictProps?: any;
    linksType?: any;
}
interface VersionBound<V extends VersionString<any, any, any>> {
    __expectedClientVersion?: V;
}
interface ObjectMetadata extends ObjectInterfaceBaseMetadata {
    type: "object";
    primaryKeyApiName: keyof this["properties"];
    titleProperty: keyof this["properties"];
    primaryKeyType: PrimaryKeyTypes;
    icon?: Icon;
    visibility?: ObjectTypeVisibility;
    pluralDisplayName: string;
    status: ReleaseStatus;
    interfaceMap: Record<string, Record<string, string>>;
    inverseInterfaceMap: Record<string, Record<string, string>>;
}
declare namespace ObjectMetadata {
    interface Property {
        readonly?: boolean;
        displayName?: string;
        description?: string;
        type: WirePropertyTypes;
        multiplicity?: boolean;
        nullable?: boolean;
    }
    interface Link<Q extends ObjectTypeDefinition, M extends boolean> {
        __OsdkLinkTargetType?: Q;
        targetType: Q["apiName"];
        multiplicity: M;
    }
}
interface ObjectTypeDefinition {
    type: "object";
    apiName: string;
    osdkMetadata?: OsdkMetadata;
    __DefinitionMetadata?: ObjectMetadata & ObjectInterfaceCompileDefinition;
}
type ObjectTypeLinkKeysFrom2<Q extends ObjectTypeDefinition> = keyof CompileTimeMetadata<Q>["links"] & string;
interface PropertyDef<T extends WirePropertyTypes, N extends "nullable" | "non-nullable" = "nullable", M extends "array" | "single" = "single"> extends ObjectMetadata.Property {
    type: T;
    multiplicity: M extends "array" ? true : false;
    nullable: N extends "nullable" ? true : false;
}
type ReleaseStatus = "ACTIVE" | "EXPERIMENTAL" | "DEPRECATED" | "ENDORSED";
type ObjectTypeVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";
type BlueprintIcon = {
    type: "blueprint";
    color: string;
    name: string;
};
type Icon = BlueprintIcon;

interface InterfaceMetadata extends ObjectInterfaceBaseMetadata {
    type: "interface";
    implementedBy?: ReadonlyArray<string>;
}
interface InterfaceDefinition {
    type: "interface";
    apiName: string;
    osdkMetadata?: OsdkMetadata;
    __DefinitionMetadata?: InterfaceMetadata & ObjectInterfaceCompileDefinition;
}

type SimplePropertyDef = WirePropertyTypes | undefined | Array<WirePropertyTypes>;
declare namespace SimplePropertyDef {
    type Make<T extends WirePropertyTypes, N extends boolean | undefined, M extends boolean | undefined> = M extends true ? N extends true ? Array<T> | undefined : Array<T> : N extends true ? T | undefined : T;
    type FromPropertyMetadata<P extends ObjectMetadata.Property> = Make<P["type"], P["nullable"], P["multiplicity"]>;
    type ExtractMultiplicity<T extends WirePropertyTypes | undefined | Array<WirePropertyTypes>> = NonNullable<T> extends Array<any> ? "array" : "single";
    type ExtractWirePropertyType<T extends SimplePropertyDef> = T extends Array<infer Z> ? NonNullable<Z> : NonNullable<T>;
    type ExtractNullable<T extends SimplePropertyDef> = [undefined] extends [T] ? "nullable" : [[undefined]] extends [T] ? "nullable" : "non-nullable";
    type ToPropertyDef<S extends SimplePropertyDef> = PropertyDef<SimplePropertyDef.ExtractWirePropertyType<S>, SimplePropertyDef.ExtractNullable<S>, SimplePropertyDef.ExtractMultiplicity<S>>;
    type ExtractRuntimeBaseType<S extends SimplePropertyDef> = GetClientPropertyValueFromWire<SimplePropertyDef.ExtractWirePropertyType<S>>;
    type ToRuntimeProperty<S extends SimplePropertyDef> = ExtractMultiplicity<S> extends "array" ? ExtractNullable<S> extends "nullable" ? Array<ExtractRuntimeBaseType<S>> | undefined : Array<ExtractRuntimeBaseType<S>> : ExtractNullable<S> extends "nullable" ? ExtractRuntimeBaseType<S> | undefined : ExtractRuntimeBaseType<S>;
}

type ObjectOrInterfaceDefinition = ObjectTypeDefinition | InterfaceDefinition;
declare namespace DerivedObjectOrInterfaceDefinition {
    type WithDerivedProperties<K extends ObjectOrInterfaceDefinition, D extends Record<string, SimplePropertyDef>> = {
        __DefinitionMetadata: {
            properties: {
                [T in keyof D]: SimplePropertyDef.ToPropertyDef<D[T]>;
            };
            props: {
                [T in keyof D]: SimplePropertyDef.ToRuntimeProperty<D[T]>;
            };
        };
    } & K;
}
type PropertyKeys<O extends ObjectOrInterfaceDefinition, RDPs extends Record<string, SimplePropertyDef> = {}> = (keyof NonNullable<O["__DefinitionMetadata"]>["properties"] | keyof RDPs) & string;

type StringAggregateOption = "approximateDistinct" | "exactDistinct";
type NumericAggregateOption = "min" | "max" | "sum" | "avg" | "approximateDistinct" | "exactDistinct";
type AGG_FOR_TYPE<T, U extends boolean> = number extends T ? U extends true ? NumericAggregateOption : NumericWithPropAggregateOption : string extends T ? U extends true ? StringAggregateOption : StringWithPropAggregateOption : boolean extends T ? U extends true ? never : StringWithPropAggregateOption : never;
type ValidAggregationKeys<Q extends ObjectOrInterfaceDefinition, R extends "aggregate" | "withPropertiesAggregate" = "aggregate"> = keyof ({
    [KK in AggregatableKeys<Q> as `${KK & string}:${AGG_FOR_TYPE<GetWirePropertyValueFromClient<CompileTimeMetadata<Q>["properties"][KK]["type"]>, R extends "aggregate" ? true : false>}`]?: any;
} & {
    $count?: any;
});
type AggregatableKeys<Q extends ObjectOrInterfaceDefinition> = keyof {
    [P in PropertyKeys<Q>]: any;
};

interface GroupByMapper {
    string: StringGroupByValue;
    short: NumericGroupByValue;
    float: NumericGroupByValue;
    decimal: NumericGroupByValue;
    byte: NumericGroupByValue;
    double: NumericGroupByValue;
    integer: NumericGroupByValue;
    timestamp: TimestampGroupByValue;
    datetime: DateGroupByValue;
    boolean: BooleanGroupByValue;
}

type GroupByClause<Q extends ObjectOrInterfaceDefinition> = {
    [P in AggregatableKeys<Q>]?: GroupByEntry<Q, P>;
};
type BaseGroupByValue = "exact" | {
    $exactWithLimit: number;
} | ExactGroupByWithOptions;
type ExactGroupByWithOptions = {
    $exact: {
        $limit?: number;
        $defaultValue?: string;
    };
};
type GroupByRange<T> = [T, T];
type StringGroupByValue = BaseGroupByValue;
type NumericGroupByValue = BaseGroupByValue | {
    $fixedWidth: number;
} | {
    $ranges: GroupByRange<number>[];
};
type TimestampGroupByValue = BaseGroupByValue | {
    $ranges: GroupByRange<string>[];
} | {
    $duration: TimestampDurationGroupBy;
};
type DateGroupByValue = BaseGroupByValue | {
    $ranges: GroupByRange<string>[];
} | {
    $duration: DatetimeDurationGroupBy;
};
type BooleanGroupByValue = BaseGroupByValue;
type TimestampTimeUnits = DateTimeUnits | "SECONDS" | "MINUTES" | "HOURS";
type DateTimeUnits = "DAYS" | "WEEKS" | "MONTHS" | "YEARS" | "QUARTERS";
declare const DurationMapping: {
    quarter: "QUARTERS";
    quarters: "QUARTERS";
    sec: "SECONDS";
    seconds: "SECONDS";
    min: "MINUTES";
    minute: "MINUTES";
    minutes: "MINUTES";
    hr: "HOURS";
    hrs: "HOURS";
    hour: "HOURS";
    hours: "HOURS";
    day: "DAYS";
    days: "DAYS";
    wk: "WEEKS";
    week: "WEEKS";
    weeks: "WEEKS";
    mos: "MONTHS";
    month: "MONTHS";
    months: "MONTHS";
    yr: "YEARS";
    year: "YEARS";
    years: "YEARS";
};
interface TimeValueMapping {
    SECONDS: number;
    MINUTES: number;
    HOURS: number;
    DAYS: number;
    WEEKS: 1;
    MONTHS: 1;
    YEARS: 1;
    QUARTERS: 1;
}
type DurationGroupBy<A> = {
    [K in keyof typeof DurationMapping]: typeof DurationMapping[K] extends A ? [TimeValueMapping[typeof DurationMapping[K]], K] : never;
}[keyof typeof DurationMapping];
type TimestampDurationGroupBy = DurationGroupBy<TimestampTimeUnits>;
type DatetimeDurationGroupBy = DurationGroupBy<DateTimeUnits>;
type GroupByEntry<Q extends ObjectOrInterfaceDefinition, P extends AggregatableKeys<Q>> = CompileTimeMetadata<Q>["properties"][P]["type"] extends keyof GroupByMapper ? GroupByMapper[CompileTimeMetadata<Q>["properties"][P]["type"]] : never;
type AllGroupByValues = GroupByMapper[keyof GroupByMapper];

type UnorderedAggregationClause<Q extends ObjectOrInterfaceDefinition> = {
    [AK in ValidAggregationKeys<Q>]?: "unordered";
};
type OrderedAggregationClause<Q extends ObjectOrInterfaceDefinition> = {
    [AK in ValidAggregationKeys<Q>]?: "unordered" | "asc" | "desc";
};
type AggregationClause<Q extends ObjectOrInterfaceDefinition> = UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>;

type AggregateOpts<Q extends ObjectOrInterfaceDefinition> = {
    $select: UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>;
    $groupBy?: GroupByClause<Q>;
};

type AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Q extends ObjectOrInterfaceDefinition, AO extends AggregateOpts<Q>> = SingleKeyObject<AO["$groupBy"]> extends never ? (AO["$select"] extends UnorderedAggregationClause<Q> ? AggregateOptsThatErrors<Q, AO> : {} extends AO["$groupBy"] ? AggregateOptsThatErrors<Q, AO> : {
    $groupBy: AO["$groupBy"];
    $select: UnorderedAggregationClause<Q>;
}) : AggregateOptsThatErrors<Q, AO>;
type AggregateOptsThatErrors<Q extends ObjectOrInterfaceDefinition, AO extends AggregateOpts<Q>> = AO & {
    $select: Pick<AO["$select"], keyof AggregateOpts<Q>["$select"] & keyof AO["$select"]> & Record<Exclude<keyof AO["$select"], keyof AggregateOpts<Q>["$select"]>, never>;
} & (unknown extends AO["$groupBy"] ? {} : Exclude<AO["$groupBy"], undefined> extends never ? {} : {
    $groupBy: Pick<AO["$groupBy"], keyof GroupByClause<Q> & keyof AO["$groupBy"]> & Record<Exclude<keyof AO["$groupBy"], keyof GroupByClause<Q>>, never>;
});

type MaybeArray<T extends {
    multiplicity?: boolean | undefined;
}, U> = T["multiplicity"] extends true ? Array<U> : U;
type MaybeNullable<T extends ObjectMetadata.Property, U> = T["nullable"] extends true ? U | undefined : U;
type Converted<T> = T extends Array<any> ? T[1] : T;
/**
 * @param {T} ObjectMetadata.Property in literal form
 * @param {STRICTLY_ENFORCE_NULLABLE}  S for strict. If false, always `|undefined`
 */
type OsdkObjectPropertyType<T extends ObjectMetadata.Property, STRICTLY_ENFORCE_NULLABLE extends boolean = true> = STRICTLY_ENFORCE_NULLABLE extends false ? MaybeArray<T, Converted<GetClientPropertyValueFromWire<T["type"]>>> | undefined : MaybeNullable<T, MaybeArray<T, Converted<GetClientPropertyValueFromWire<T["type"]>>>>;

type ExtractPropName<T extends string> = T extends `${infer PropName}:${string}` ? PropName : T extends "$count" ? T : never;
type ExtractMetricNameForPropName<T, PropName extends string> = T extends `${PropName}:${infer MetricName}` ? MetricName : never;
type AggregationResultsWithoutGroups<Q extends ObjectOrInterfaceDefinition, AC extends UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>> = {
    [PropName in ExtractPropName<keyof AC & string>]: PropName extends "$count" ? number : {
        [MetricName in ExtractMetricNameForPropName<keyof AC & string, PropName>]: MetricName extends "approximateDistinct" | "exactDistinct" ? number : OsdkObjectPropertyType<CompileTimeMetadata<Q>["properties"][PropName]>;
    };
};

type AggregationResultsWithGroups<Q extends ObjectOrInterfaceDefinition, A extends UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>, G extends GroupByClause<Q> | undefined> = ({
    $group: {
        [P in keyof G & PropertyKeys<Q>]: G[P] extends {
            $ranges: GroupByRange<infer T>[];
        } ? {
            startValue: T;
            endValue: T;
        } : OsdkObjectPropertyType<CompileTimeMetadata<Q>["properties"][P], true>;
    };
} & AggregationResultsWithoutGroups<Q, A>)[];

type AggregationsResults<Q extends ObjectOrInterfaceDefinition, AO extends AggregateOpts<Q>> = Exclude<keyof AO["$select"], ValidAggregationKeys<Q>> extends never ? unknown extends AO["$groupBy"] ? AggregationResultsWithoutGroups<Q, AO["$select"]> : Exclude<AO["$groupBy"], undefined> extends never ? AggregationResultsWithoutGroups<Q, AO["$select"]> : Exclude<keyof AO["$groupBy"], AggregatableKeys<Q>> extends never ? AggregationResultsWithGroups<Q, AO["$select"], AO["$groupBy"]> : `Sorry, the following are not valid groups for an aggregation: ${Exclude<keyof AO["$groupBy"] & string, AggregatableKeys<Q>>}` : `Sorry, the following are not valid selectors for an aggregation: ${Exclude<keyof AO["$select"] & string, ValidAggregationKeys<Q>>}`;

type NullabilityAdherence = false | "throw" | "drop";
declare namespace NullabilityAdherence {
    type Default = "throw";
}
interface SelectArg<Q extends ObjectOrInterfaceDefinition, L extends PropertyKeys<Q> = PropertyKeys<Q>, R extends boolean = false, S extends NullabilityAdherence = NullabilityAdherence.Default> {
    $select?: readonly L[];
    $includeRid?: R;
}
interface OrderByArg<Q extends ObjectOrInterfaceDefinition, L extends PropertyKeys<Q> = PropertyKeys<Q>> {
    $orderBy?: {
        [K in L]?: "asc" | "desc";
    };
}
type SelectArgToKeys<Q extends ObjectOrInterfaceDefinition, A extends SelectArg<Q, any, any>> = A extends SelectArg<Q, never> ? PropertyKeys<Q> : A["$select"] extends readonly string[] ? A["$select"][number] : PropertyKeys<Q>;
interface FetchPageArgs<Q extends ObjectOrInterfaceDefinition, K extends PropertyKeys<Q> = PropertyKeys<Q>, R extends boolean = false, A extends Augments = never, S extends NullabilityAdherence = NullabilityAdherence.Default, T extends boolean = false> extends AsyncIterArgs<Q, K, R, A, S, T> {
    $nextPageToken?: string;
    $pageSize?: number;
}
interface AsyncIterArgs<Q extends ObjectOrInterfaceDefinition, K extends PropertyKeys<Q> = PropertyKeys<Q>, R extends boolean = false, A extends Augments = never, S extends NullabilityAdherence = NullabilityAdherence.Default, T extends boolean = false> extends SelectArg<Q, K, R, S>, OrderByArg<Q, PropertyKeys<Q>> {
    $__UNSTABLE_useOldInterfaceApis?: boolean;
    $includeAllBaseObjectProperties?: PropertyKeys<Q> extends K ? T : never;
}
type Augment<X extends ObjectOrInterfaceDefinition, T extends string> = {
    [K in CompileTimeMetadata<X>["apiName"]]: T[];
};
type Augments = Record<string, string[]>;

type ErrorResult = {
    error: Error;
    value?: never;
};
type OkResult<V> = {
    value: V;
    error?: never;
};
type Result<V> = OkResult<V> | ErrorResult;
/**
 * Check if a result was successfully received
 * @param a - result wrapped value
 * @returns whether a result has a value in it
 */
declare function isOk<X>(a: Result<X>): a is OkResult<X>;

/** The $link container to get from one object type to its linked objects */
type OsdkObjectLinksObject<O extends ObjectTypeDefinition> = ObjectTypeLinkKeysFrom2<O> extends never ? never : {
    readonly [L in ObjectTypeLinkKeysFrom2<O>]: OsdkObjectLinksEntry<O, L>;
};
type OsdkObjectLinksEntry<Q extends ObjectTypeDefinition, L extends ObjectTypeLinkKeysFrom2<Q>> = CompileTimeMetadata<Q>["links"][L] extends ObjectMetadata.Link<infer T, infer M> ? (M extends false ? SingleLinkAccessor<T> : ObjectSet<T>) : never;
type DefaultToFalse<B extends boolean | undefined> = false extends B ? false : undefined extends B ? false : true;
interface SingleLinkAccessor<T extends ObjectTypeDefinition> {
    /** Load the linked object
     */
    fetchOne: <const A extends SelectArg<T, PropertyKeys<T>, boolean>>(options?: A) => Promise<A extends FetchPageArgs<T, infer L, infer R, any, infer S> ? Osdk.Instance<T, ExtractOptions<R, S>, L> : Osdk.Instance<T>>;
    /** Load the linked object, with a result wrapper
     */
    fetchOneWithErrors: <const A extends SelectArg<T, PropertyKeys<T>, boolean>>(options?: A) => Promise<Result<A extends FetchPageArgs<T, infer L, infer R, any, infer S> ? Osdk.Instance<T, ExtractOptions<R, S>, L> : Osdk.Instance<T>>>;
}

interface PageResult<T> {
    data: T[];
    nextPageToken: string | undefined;
    totalCount: string;
}

/** exposed for a test */
type UnionIfTrue<S extends string, UNION_IF_TRUE extends boolean, E extends string> = IsNever<S> extends true ? never : UNION_IF_TRUE extends true ? S | E : S;
/**
 * Helper type for converting fetch options into an Osdk object
 */
type FetchPageResult<Q extends ObjectOrInterfaceDefinition, L extends PropertyKeys<Q>, R extends boolean, S extends NullabilityAdherence, T extends boolean> = PageResult<PropertyKeys<Q> extends L ? Osdk.Instance<Q, ExtractOptions<R, S, T>> : Osdk.Instance<Q, ExtractOptions<R, S, T>, L>>;
/**
 * Helper type for converting fetch options into an Osdk object
 */
type SingleOsdkResult<Q extends ObjectOrInterfaceDefinition, L extends PropertyKeys<Q> | (keyof RDPs & string), R extends boolean, S extends NullabilityAdherence, RDPs extends Record<string, SimplePropertyDef> = {}, T extends boolean = false> = Osdk.Instance<Q, ExtractOptions<R, S, T>, PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L, {
    [K in Extract<keyof RDPs, L>]: RDPs[K];
}>;

type ObjectSpecifier<Q extends ObjectOrInterfaceDefinition> = string & {
    __apiName: Q["apiName"] | (Q extends InterfaceDefinition ? NonNullable<Q["__DefinitionMetadata"]> extends InterfaceMetadata ? NonNullable<NonNullable<Q["__DefinitionMetadata"]>["implementedBy"]>[number] : never : never);
};

type OsdkObjectPrimaryKeyType<Q extends ObjectTypeDefinition> = PropertyValueWireToClient[CompileTimeMetadata<Q>["primaryKeyType"]];

type OsdkBase<Q extends ObjectOrInterfaceDefinition> = {
    readonly $apiName: Q["apiName"];
    readonly $objectType: string;
    readonly $primaryKey: PrimaryKeyType<Q>;
    readonly $title: string | undefined;
    readonly $objectSpecifier: ObjectSpecifier<Q>;
};
type PrimaryKeyType<Q extends ObjectOrInterfaceDefinition> = (Q extends ObjectTypeDefinition ? OsdkObjectPrimaryKeyType<Q> : unknown) & PropertyValueWireToClient[PrimaryKeyTypes];

type SpecialOsdkPropParams = "$all" | "$rid" | "$strict" | "$notStrict";
type ValidOsdkPropParams<Q extends ObjectOrInterfaceDefinition> = SpecialOsdkPropParams | PropertyKeys<Q>;
type ApiNameAsString<T extends ObjectOrInterfaceDefinition> = CompileTimeMetadata<T>["apiName"];
type JustProps<T extends ObjectOrInterfaceDefinition, P extends ValidOsdkPropParams<T>> = P extends "$all" ? PropertyKeys<T> : Exclude<P, SpecialOsdkPropParams>;
type PropMapToObject<FROM extends ObjectOrInterfaceDefinition, TO extends ObjectTypeDefinition> = NonNullable<CompileTimeMetadata<TO>["interfaceMap"]>[ApiNameAsString<FROM>];
type MapPropNamesToObjectType<FROM extends ObjectOrInterfaceDefinition, TO extends ObjectTypeDefinition, P extends ValidOsdkPropParams<FROM>, OPTIONS extends never | "$rid" | "$allBaseProperties" = never> = "$allBaseProperties" extends OPTIONS ? PropertyKeys<FROM> extends P ? PropertyKeys<TO> : PropMapToObject<FROM, TO>[JustProps<FROM, P> & keyof PropMapToObject<FROM, TO>] : PropMapToObject<FROM, TO>[JustProps<FROM, P> & keyof PropMapToObject<FROM, TO>];
type PropMapToInterface<FROM extends ObjectTypeDefinition, TO extends InterfaceDefinition> = NonNullable<CompileTimeMetadata<FROM>["inverseInterfaceMap"]>[ApiNameAsString<TO>];
type MapPropNamesToInterface<FROM extends ObjectTypeDefinition, TO extends InterfaceDefinition, P extends ValidOsdkPropParams<FROM>> = PropMapToInterface<FROM, TO>[JustProps<FROM, P> & keyof PropMapToInterface<FROM, TO>];
/**
 * @param FROM - the interface or object type to convert from
 * @param TO - the interface or object type to convert to
 * @param P - the property(s) to convert
 */
type ConvertProps<FROM extends ObjectOrInterfaceDefinition, TO extends ValidToFrom<FROM>, P extends ValidOsdkPropParams<FROM>, OPTIONS extends never | "$rid" | "$allBaseProperties" = never> = TO extends FROM ? P : TO extends ObjectTypeDefinition ? (UnionIfTrue<MapPropNamesToObjectType<FROM, TO, P, OPTIONS>, P extends "$rid" ? true : false, "$rid">) : TO extends InterfaceDefinition ? FROM extends ObjectTypeDefinition ? (UnionIfTrue<MapPropNamesToInterface<FROM, TO, P>, P extends "$rid" ? true : false, "$rid">) : never : never;
/** DO NOT EXPORT FROM PACKAGE */
type ValidToFrom<FROM extends ObjectOrInterfaceDefinition> = FROM extends InterfaceDefinition ? ObjectOrInterfaceDefinition : InterfaceDefinition;
type IsNever<T> = [T] extends [never] ? true : false;
type ExtractPropsKeysFromOldPropsStyle<Q extends ObjectOrInterfaceDefinition, P extends ValidOsdkPropParams<Q>> = P extends "$all" ? PropertyKeys<Q> : Exclude<P, "$strict" | "$notStrict" | "$rid">;
type IsAny<T> = unknown extends T ? [keyof T] extends [never] ? false : true : false;
type GetPropsKeys<Q extends ObjectOrInterfaceDefinition, P extends PropertyKeys<Q>, N extends boolean = false> = IsNever<P> extends true ? N extends true ? never : PropertyKeys<Q> : IsAny<P> extends true ? PropertyKeys<Q> : P;
/**
 * Use `Osdk.Instance` or `YourType.OsdkInstance`
 */
type Osdk<Q extends ObjectOrInterfaceDefinition, OPTIONS extends string = never, P extends PropertyKeys<Q> = PropertyKeys<Q>> = IsNever<OPTIONS> extends true ? Osdk.Instance<Q, never, P> : IsAny<OPTIONS> extends true ? Osdk.Instance<Q, never, P> : (IsNever<Exclude<OPTIONS, "$rid">>) extends true ? Osdk.Instance<Q, OPTIONS & "$rid", P> : Osdk.Instance<Q, ("$rid" extends OPTIONS ? "$rid" : never), ExtractPropsKeysFromOldPropsStyle<Q, OPTIONS>>;
declare namespace Osdk {
    type Instance<Q extends ObjectOrInterfaceDefinition, OPTIONS extends never | "$rid" | "$allBaseProperties" = never, P extends PropertyKeys<Q> = PropertyKeys<Q>, R extends Record<string, SimplePropertyDef> = {}> = OsdkBase<Q> & Pick<CompileTimeMetadata<Q>["props"], GetPropsKeys<Q, P, [R] extends [{}] ? false : true>> & ([R] extends [never] ? {} : {
        [A in keyof R]: SimplePropertyDef.ToRuntimeProperty<R[A]>;
    }) & {
        readonly $link: Q extends {
            linksType?: any;
        } ? Q["linksType"] : Q extends ObjectTypeDefinition ? OsdkObjectLinksObject<Q> : never;
        readonly $as: <NEW_Q extends ValidToFrom<Q>>(type: NEW_Q | string) => Osdk.Instance<NEW_Q, OPTIONS, ConvertProps<Q, NEW_Q, P, OPTIONS>>;
        readonly $clone: <NEW_PROPS extends PropertyKeys<Q>>(updatedObject?: Osdk.Instance<Q, any, NEW_PROPS> | {
            [K in NEW_PROPS]?: CompileTimeMetadata<Q>["props"][K];
        }) => Osdk.Instance<Q, OPTIONS, P | NEW_PROPS>;
    } & (IsNever<OPTIONS> extends true ? {} : IsAny<OPTIONS> extends true ? {} : "$rid" extends OPTIONS ? {
        readonly $rid: string;
    } : {});
}
/**
 * NOT EXPORTED FROM PACKAGE
 *
 * Anything you throw at this that is not exactly `true` should always be `never`.
 */
type ExtractRidOption<R extends boolean> = IsNever<R> extends true ? never : DefaultToFalse<R> extends false ? never : "$rid";
type ExtractAllPropertiesOption<T extends boolean> = IsNever<T> extends true ? never : DefaultToFalse<T> extends false ? never : "$allBaseProperties";
type ExtractOptions<R extends boolean, S extends NullabilityAdherence = NullabilityAdherence.Default, T extends boolean = false> = ExtractRidOption<R> | ExtractAllPropertiesOption<T>;

type Just<Z extends keyof V, V> = {
    [k in Z]: V[k];
} & {
    [k in keyof V as k extends Z ? never : k]?: never;
};

interface ArrayFilterOptions<T> {
    "$contains": T;
    "$isNull": boolean;
}
declare namespace ArrayFilter {
    interface $contains<T> extends Just<"$contains", ArrayFilterOptions<T>> {
    }
    interface $isNull<T> extends Just<"$isNull", ArrayFilterOptions<T>> {
    }
}
type ArrayFilter<T> = ArrayFilter.$contains<T> | ArrayFilter.$isNull<T>;

type BaseFilterOptions<T> = {
    "$eq": T;
    "$ne": T;
    "$isNull": boolean;
    "$in": ReadonlyArray<T>;
};
declare namespace BaseFilter {
    interface $eq<T> extends Just<"$eq", BaseFilterOptions<T>> {
    }
    interface $ne<T> extends Just<"$ne", BaseFilterOptions<T>> {
    }
    interface $in<T> extends Just<"$in", BaseFilterOptions<T>> {
    }
    interface $isNull<T> extends Just<"$isNull", BaseFilterOptions<T>> {
    }
}
type BaseFilter<T> = BaseFilter.$eq<T> | BaseFilter.$ne<T> | BaseFilter.$in<T> | BaseFilter.$isNull<T>;

interface BooleanFilterOptions extends BaseFilterOptions<boolean> {
}
declare namespace BooleanFilter {
    interface $eq extends Just<"$eq", BooleanFilterOptions> {
    }
    interface $ne extends Just<"$ne", BooleanFilterOptions> {
    }
    interface $isNull extends Just<"$isNull", BooleanFilterOptions> {
    }
    interface $in extends Just<"$in", BooleanFilterOptions> {
    }
}
type BooleanFilter = boolean | BooleanFilter.$eq | BooleanFilter.$ne | BooleanFilter.$in | BooleanFilter.$isNull;

interface DatetimeFilterOptions extends BaseFilterOptions<string> {
    "$gt": string;
    "$gte": string;
    "$lt": string;
    "$lte": string;
}
declare namespace DatetimeFilter {
    interface $eq extends Just<"$eq", DatetimeFilterOptions> {
    }
    interface $ne extends Just<"$ne", DatetimeFilterOptions> {
    }
    interface $isNull extends Just<"$isNull", DatetimeFilterOptions> {
    }
    interface $gt extends Just<"$gt", DatetimeFilterOptions> {
    }
    interface $gte extends Just<"$gte", DatetimeFilterOptions> {
    }
    interface $lt extends Just<"$lt", DatetimeFilterOptions> {
    }
    interface $lte extends Just<"$lte", DatetimeFilterOptions> {
    }
    interface $in extends Just<"$in", DatetimeFilterOptions> {
    }
}
type DatetimeFilter = string | DatetimeFilter.$eq | DatetimeFilter.$ne | DatetimeFilter.$isNull | DatetimeFilter.$in | DatetimeFilter.$gt | DatetimeFilter.$gte | DatetimeFilter.$lt | DatetimeFilter.$lte;

interface GeoFilterOptions {
    "$within": {
        $distance: [number, keyof typeof DistanceUnitMapping];
        $of: [number, number] | Readonly<Point>;
        $bbox?: never;
        $polygon?: never;
    } | {
        $bbox: BBox;
        $distance?: never;
        $of?: never;
        $polygon?: never;
    } | BBox | {
        $polygon: Polygon["coordinates"];
        $bbox?: never;
        $distance?: never;
        $of?: never;
    } | Polygon;
    "$intersects": {
        $bbox: BBox;
        $polygon?: never;
    } | BBox | {
        $polygon: Polygon["coordinates"];
        $bbox?: never;
    } | Polygon;
    "$isNull": boolean;
}
declare namespace GeoFilter {
    interface $within extends Just<"$within", GeoFilterOptions> {
    }
    interface $intersects extends Just<"$intersects", GeoFilterOptions> {
    }
    interface $isNull extends Just<"$isNull", GeoFilterOptions> {
    }
}
type GeoFilter = GeoFilter.$within | GeoFilter.$intersects | GeoFilter.$isNull;

interface NumberFilterOptions extends BaseFilterOptions<number> {
    "$gt": number;
    "$gte": number;
    "$lt": number;
    "$lte": number;
}
declare namespace NumberFilter {
    interface $eq extends Just<"$eq", NumberFilterOptions> {
    }
    interface $ne extends Just<"$ne", NumberFilterOptions> {
    }
    interface $isNull extends Just<"$isNull", NumberFilterOptions> {
    }
    interface $gt extends Just<"$gt", NumberFilterOptions> {
    }
    interface $gte extends Just<"$gte", NumberFilterOptions> {
    }
    interface $lt extends Just<"$lt", NumberFilterOptions> {
    }
    interface $lte extends Just<"$lte", NumberFilterOptions> {
    }
    interface $in extends Just<"$in", NumberFilterOptions> {
    }
}
type NumberFilter = number | NumberFilter.$eq | NumberFilter.$ne | NumberFilter.$isNull | NumberFilter.$in | NumberFilter.$gt | NumberFilter.$gte | NumberFilter.$lt | NumberFilter.$lte;

interface StringFilterOptions extends BaseFilterOptions<string> {
    "$startsWith": string;
    "$containsAllTermsInOrder": string;
    "$containsAnyTerm": string | {
        term: string;
        fuzzySearch?: boolean;
    };
    "$containsAllTerms": string | {
        term: string;
        fuzzySearch?: boolean;
    };
    "$in": ReadonlyArray<string>;
}
declare namespace StringFilter {
    interface $eq extends Just<"$eq", StringFilterOptions> {
    }
    interface $ne extends Just<"$ne", StringFilterOptions> {
    }
    interface $isNull extends Just<"$isNull", StringFilterOptions> {
    }
    interface $startsWith extends Just<"$startsWith", StringFilterOptions> {
    }
    interface $containsAllTermsInOrder extends Just<"$containsAllTermsInOrder", StringFilterOptions> {
    }
    interface $containsAnyTerm extends Just<"$containsAnyTerm", StringFilterOptions> {
    }
    interface $containsAllTerms extends Just<"$containsAllTerms", StringFilterOptions> {
    }
    interface $in extends Just<"$in", StringFilterOptions> {
    }
}
type StringFilter = string | StringFilter.$eq | StringFilter.$ne | StringFilter.$isNull | StringFilter.$in | StringFilter.$startsWith | StringFilter.$containsAllTermsInOrder | StringFilter.$containsAnyTerm | StringFilter.$containsAllTerms;

type PossibleWhereClauseFilters = "$gt" | "$eq" | "$ne" | "$isNull" | "$contains" | "$gte" | "$lt" | "$lte" | "$within" | "$in" | "$intersects" | "$startsWith" | "$containsAllTermsInOrder" | "$containsAnyTerm" | "$containsAllTerms";
declare const DistanceUnitMapping: {
    centimeter: "CENTIMETERS";
    centimeters: "CENTIMETERS";
    cm: "CENTIMETERS";
    meter: "METERS";
    meters: "METERS";
    m: "METERS";
    kilometer: "KILOMETERS";
    kilometers: "KILOMETERS";
    km: "KILOMETERS";
    inch: "INCHES";
    inches: "INCHES";
    foot: "FEET";
    feet: "FEET";
    yard: "YARDS";
    yards: "YARDS";
    mile: "MILES";
    miles: "MILES";
    nautical_mile: "NAUTICAL_MILES";
    nauticalMile: "NAUTICAL_MILES";
    "nautical miles": "NAUTICAL_MILES";
};
type GeoFilter_Within = {
    "$within": {
        $distance: [number, keyof typeof DistanceUnitMapping];
        $of: [number, number] | Readonly<Point>;
        $bbox?: never;
        $polygon?: never;
    } | {
        $bbox: BBox;
        $distance?: never;
        $of?: never;
        $polygon?: never;
    } | BBox | {
        $polygon: Polygon["coordinates"];
        $bbox?: never;
        $distance?: never;
        $of?: never;
    } | Polygon;
};
type GeoFilter_Intersects = {
    "$intersects": {
        $bbox: BBox;
        $polygon?: never;
    } | BBox | {
        $polygon: Polygon["coordinates"];
        $bbox?: never;
    } | Polygon;
};
type FilterFor<PD extends ObjectMetadata.Property> = PD["multiplicity"] extends true ? (PD["type"] extends "string" | "geopoint" | "geoshape" | "datetime" | "timestamp" ? ArrayFilter<string> : (PD["type"] extends boolean ? ArrayFilter<boolean> : ArrayFilter<number>)) : PD["type"] extends Record<string, BaseWirePropertyTypes> ? StructFilter<PD["type"]> | BaseFilter.$isNull<string> : (PD["type"] extends "string" ? StringFilter : PD["type"] extends "geopoint" | "geoshape" ? GeoFilter : PD["type"] extends "datetime" | "timestamp" ? DatetimeFilter : PD["type"] extends "boolean" ? BooleanFilter : PD["type"] extends "double" | "integer" | "long" | "float" | "decimal" | "byte" ? NumberFilter : BaseFilter<string>);
type StructFilterOpts<ST extends Record<string, BaseWirePropertyTypes>> = {
    [K in keyof ST]?: FilterFor<{
        "type": ST[K];
    }>;
};
type StructFilter<ST extends Record<string, BaseWirePropertyTypes>> = {
    [K in keyof ST]: Just<K, StructFilterOpts<ST>>;
}[keyof ST];
interface AndWhereClause<T extends ObjectOrInterfaceDefinition> {
    $and: WhereClause<T>[];
}
interface OrWhereClause<T extends ObjectOrInterfaceDefinition> {
    $or: WhereClause<T>[];
}
interface NotWhereClause<T extends ObjectOrInterfaceDefinition> {
    $not: WhereClause<T>;
}
type PropertyWhereClause<T extends ObjectOrInterfaceDefinition> = {
    [P in keyof CompileTimeMetadata<T>["properties"]]?: FilterFor<CompileTimeMetadata<T>["properties"][P]>;
};
type WhereClause<T extends ObjectOrInterfaceDefinition> = OrWhereClause<T> | AndWhereClause<T> | NotWhereClause<T> | (IsNever<keyof CompileTimeMetadata<T>["properties"]> extends true ? Record<string, never> : PropertyWhereClause<T>);

type LinkNames<Q extends ObjectOrInterfaceDefinition> = keyof CompileTimeMetadata<Q>["links"] & string;
type LinkedType<Q extends ObjectOrInterfaceDefinition, L extends LinkNames<Q>> = NonNullable<CompileTimeMetadata<Q>["links"][L]["__OsdkLinkTargetType"]>;

declare namespace DerivedProperty {
    type SelectorResult<T extends SimplePropertyDef> = {
        type: T;
    };
    type Clause<Q extends ObjectOrInterfaceDefinition> = {
        [key: string]: Selector<Q, SimplePropertyDef>;
    };
    type Selector<Q extends ObjectOrInterfaceDefinition, T extends SimplePropertyDef> = (baseObjectSet: DerivedProperty.Builder<Q, false>) => SelectorResult<T>;
    interface Builder<Q extends ObjectOrInterfaceDefinition, CONSTRAINED extends boolean> extends Filterable<Q, CONSTRAINED>, Pivotable<Q, CONSTRAINED> {
    }
    interface AggregateBuilder<Q extends ObjectOrInterfaceDefinition, CONSTRAINED extends boolean> extends Builder<Q, CONSTRAINED>, Aggregatable<Q> {
    }
    interface SelectPropertyBuilder<Q extends ObjectOrInterfaceDefinition, CONSTRAINED extends boolean> extends AggregateBuilder<Q, CONSTRAINED>, Selectable<Q> {
    }
}
type BuilderTypeFromConstraint<Q extends ObjectOrInterfaceDefinition, CONSTRAINED extends boolean> = CONSTRAINED extends true ? DerivedProperty.AggregateBuilder<Q, true> : DerivedProperty.SelectPropertyBuilder<Q, false>;
type Filterable<Q extends ObjectOrInterfaceDefinition, CONSTRAINED extends boolean> = {
    readonly where: (clause: WhereClause<Q>) => BuilderTypeFromConstraint<Q, CONSTRAINED>;
};
type Pivotable<Q extends ObjectOrInterfaceDefinition, CONSTRAINED extends boolean> = {
    readonly pivotTo: <L extends LinkNames<Q>>(type: L) => CONSTRAINED extends true ? DerivedProperty.AggregateBuilder<LinkedType<Q, L>, true> : NonNullable<CompileTimeMetadata<Q>["links"][L]["multiplicity"]> extends true ? DerivedProperty.AggregateBuilder<LinkedType<Q, L>, true> : DerivedProperty.SelectPropertyBuilder<LinkedType<Q, L>, false>;
};
type Aggregatable<Q extends ObjectOrInterfaceDefinition> = {
    readonly aggregate: <V extends ValidAggregationKeys<Q, "withPropertiesAggregate">>(aggregationSpecifier: V, opts?: V extends `${any}:${infer P}` ? P extends CollectWithPropAggregations ? {
        limit: number;
    } : P extends "approximatePercentile" ? {
        percentile: number;
    } : never : never) => DerivedProperty.SelectorResult<V extends `${infer N}:${infer P}` ? P extends CollectWithPropAggregations ? Array<CompileTimeMetadata<Q>["properties"][N]["type"]> | undefined : P extends "approximateDistinct" | "exactDistinct" | "$count" ? "integer" : "double" | undefined : V extends "$count" ? "integer" : never>;
};
type Selectable<Q extends ObjectOrInterfaceDefinition> = {
    readonly selectProperty: <R extends PropertyKeys<Q>>(propertyName: R) => DerivedProperty.SelectorResult<SimplePropertyDef.Make<CompileTimeMetadata<Q>["properties"][R]["type"], CompileTimeMetadata<Q>["properties"][R]["nullable"], CompileTimeMetadata<Q>["properties"][R]["multiplicity"]>>;
};

interface BaseObjectSet<Q extends ObjectOrInterfaceDefinition> {
    readonly $objectSetInternals: {
        def: Q;
    };
}

declare namespace ObjectSetSubscription {
    interface Listener<O extends ObjectOrInterfaceDefinition, P extends PropertyKeys<O> = PropertyKeys<O>> {
        /**
         * Specific objects have changed and can be immediately updated
         */
        onChange?: (objectUpdate: ObjectUpdate<O, P>) => void;
        /**
         * The subscription has been successfully established and updates can be expected to be received.
         */
        onSuccessfulSubscription?: () => void;
        /**
         * The ObjectSet has become outdated and should be re-fetched in its entirety.
         * This is also sent when the subscription is first initialized.
         */
        onOutOfDate?: () => void;
        /**
         * There was a fatal error with the subscription process. The subscription will close or will not be established.
         */
        onError?: (errors: {
            subscriptionClosed: boolean;
            error: any;
        }) => void;
    }
    /**
     * Options for subscribing to an ObjectSet.
     *
     * properties - The properties to request a subscription for. Requesting specific properties limits the possible properties
     * that can be returned from the subscription. If not provided, all properties will be requested and potentially be returned on updates.
     */
    interface Options<O extends ObjectOrInterfaceDefinition, P extends PropertyKeys<O> = PropertyKeys<O>> {
        properties?: Array<P>;
    }
}
type ObjectUpdate<O extends ObjectOrInterfaceDefinition, P extends PropertyKeys<O>> = {
    object: Osdk.Instance<O, never, P>;
    state: "ADDED_OR_UPDATED" | "REMOVED";
};

type MergeObjectSet<Q extends ObjectOrInterfaceDefinition, D extends ObjectSet<Q> | Record<string, SimplePropertyDef> = {}> = D extends Record<string, SimplePropertyDef> ? DerivedObjectOrInterfaceDefinition.WithDerivedProperties<Q, D> : Q;
type ExtractRdp<D extends ObjectSet<any, any> | Record<string, SimplePropertyDef>> = D extends Record<string, SimplePropertyDef> ? D : {};
interface MinimalObjectSet<Q extends ObjectOrInterfaceDefinition, RDPs extends Record<string, SimplePropertyDef> = {}> extends BaseObjectSet<Q>, FetchPage<Q, RDPs>, AsyncIter<Q, RDPs>, Where<Q, RDPs> {
}
interface FetchPage<Q extends ObjectOrInterfaceDefinition, RDPs extends Record<string, SimplePropertyDef> = {}> {
    /**
     * Gets a page of objects of this type, with a result wrapper
     * @param args - Args to specify next page token and page size, if applicable
     * @example
     *  const myObjs = await objectSet.fetchPage({
        $pageSize: 10,
        $nextPageToken: "nextPage"
      });
       const myObjsResult = myObjs.data;
  
     * @returns a page of objects
     */
    readonly fetchPage: <L extends PropertyKeys<Q, RDPs>, R extends boolean, const A extends Augments, S extends NullabilityAdherence = NullabilityAdherence.Default, T extends boolean = false>(args?: FetchPageArgs<Q, L, R, A, S, T>) => Promise<PageResult<Osdk.Instance<Q, ExtractOptions<R, S, T>, PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L, {
        [K in Extract<keyof RDPs, L>]: RDPs[K];
    }>>>;
    /**
     * Gets a page of objects of this type, with a result wrapper
     * @param args - Args to specify next page token and page size, if applicable
     * @example
     *  const myObjs = await objectSet.fetchPage({
        $pageSize: 10,
        $nextPageToken: "nextPage"
      });
  
       if(isOk(myObjs)){
       const myObjsResult = myObjs.value.data;
      }
     * @returns a page of objects, wrapped in a result wrapper
     */
    readonly fetchPageWithErrors: <L extends PropertyKeys<Q, RDPs>, R extends boolean, const A extends Augments, S extends NullabilityAdherence = NullabilityAdherence.Default, T extends boolean = false>(args?: FetchPageArgs<Q, L, R, A, S, T>) => Promise<Result<PageResult<Osdk.Instance<Q, ExtractOptions<R, S, T>, PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L, {
        [K in Extract<keyof RDPs, L>]: RDPs[K];
    }>>>>;
}
interface Where<Q extends ObjectOrInterfaceDefinition, RDPs extends Record<string, SimplePropertyDef> = {}> {
    /**
   * Allows you to filter an object set with a given clause
   * @param clause - Takes a filter clause
   * @example
   * await client(Office).where({
      meetingRooms: { $contains: "Grand Central" },
      meetingRoomCapacities: { $contains: 30 },
  });
  * @returns an objectSet
    */
    readonly where: (clause: WhereClause<MergeObjectSet<Q, RDPs>>) => this;
}
interface AsyncIter<Q extends ObjectOrInterfaceDefinition, RDPs extends Record<string, SimplePropertyDef> = {}> {
    /**
     * Returns an async iterator to load all objects of this type
     * @example
     * for await (const obj of myObjectSet.asyncIter()){
     * // Handle obj
     * }
     * @returns an async iterator to load all objects
     */
    readonly asyncIter: <L extends PropertyKeys<Q, RDPs>, R extends boolean, const A extends Augments, S extends NullabilityAdherence = NullabilityAdherence.Default, T extends boolean = false>(args?: AsyncIterArgs<Q, L, R, A, S, T>) => AsyncIterableIterator<Osdk.Instance<Q, ExtractOptions<R, S, T>, PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L, {
        [K in Extract<keyof RDPs, L>]: RDPs[K];
    }>>;
}
interface WithProperties<Q extends ObjectOrInterfaceDefinition = any, RDPs extends Record<string, SimplePropertyDef> = {}> {
    readonly withProperties: <NEW extends Record<string, SimplePropertyDef>>(clause: {
        [K in keyof NEW]: DerivedProperty.Selector<Q, NEW[K]>;
    }) => ObjectSet<Q, {
        [NN in keyof NEW | keyof RDPs]: NN extends keyof NEW ? NEW[NN] : NN extends keyof RDPs ? RDPs[NN] : never;
    }>;
}
interface ObjectSet<Q extends ObjectOrInterfaceDefinition = any, UNUSED_OR_RDP extends ObjectSet<Q, any> | Record<string, SimplePropertyDef> = ObjectSet<Q, any>> extends ObjectSetCleanedTypes<Q, ExtractRdp<UNUSED_OR_RDP>, MergeObjectSet<Q, UNUSED_OR_RDP>> {
}
interface Aggregate<Q extends ObjectOrInterfaceDefinition> {
    /**
     * Aggregate on a field in an object type
     * @param req - an aggregation request where you can select fields and choose how to aggregate, e.g., max, min, avg, and also choose
     * whether or not you order your results. You can also specify a groupBy field to group your aggregations
     * @example
     * const testAggregateCountWithGroups = await client(BoundariesUsState)
      .aggregate({
        $select: {
          $count: "unordered",
          "latitude:max": "unordered",
          "latitude:min": "unordered",
          "latitude:avg": "unordered",
        },
        $groupBy: {
          usState: "exact",
          longitude: {
            $fixedWidth: 10,
          },
        },
      });
  
     * @returns aggregation results, sorted in the groups based on the groupBy clause (if applicable)
     */
    readonly aggregate: <AO extends AggregateOpts<Q>>(req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Q, AO>) => Promise<AggregationsResults<Q, AO>>;
}
interface SetArithmetic<Q extends ObjectOrInterfaceDefinition> {
    /**
     * Unions object sets together
     * @param objectSets - objectSets you want to union with
     * @example
     * const unionObjectSet = complexFilteredEmployeeObjectSet.union(
      simpleFilteredEmployeeObjectSet,
    );
     * @returns the unioned object set
     */
    readonly union: (...objectSets: ReadonlyArray<CompileTimeMetadata<Q>["objectSet"]>) => this;
    /**
     * Computes the intersection of object sets
     * @param objectSets - objectSets you want to intersect with
     * @example
     * const intersectedObjectSet = complexFilteredEmployeeObjectSet.intersect(
      simpleFilteredEmployeeObjectSet,
    );
     * @returns the intersected object set
     */
    readonly intersect: (...objectSets: ReadonlyArray<CompileTimeMetadata<Q>["objectSet"]>) => this;
    /**
     * Computes the subtraction of object sets
     * @param objectSets - objectSets you want to subtract from
     * @example
     * const subtractObjectSet = complexFilteredEmployeeObjectSet.subtract(
      simpleFilteredEmployeeObjectSet,
    );
     * @returns the subtract object set
     */
    readonly subtract: (...objectSets: ReadonlyArray<CompileTimeMetadata<Q>["objectSet"]>) => this;
}
interface PivotTo<Q extends ObjectOrInterfaceDefinition> {
    /**
     * Pivots the object set over to all its linked objects of the specified type
     * @param type - The linked object type you want to pivot to
     * @returns an object set of the specified linked type
     */
    readonly pivotTo: <L extends LinkNames<Q>>(type: L) => CompileTimeMetadata<LinkedType<Q, L>>["objectSet"];
}
interface FetchOne<Q extends ObjectOrInterfaceDefinition, RDPs extends Record<string, SimplePropertyDef>> {
    /**
     * Fetches one object with the specified primary key, without a result wrapper
     */
    readonly fetchOne: Q extends ObjectTypeDefinition ? <const L extends PropertyKeys<Q, RDPs>, const R extends boolean, const S extends false | "throw" = NullabilityAdherence.Default>(primaryKey: PrimaryKeyType<Q>, options?: SelectArg<Q, L, R, S>) => Promise<Osdk.Instance<Q, ExtractOptions<R, S>, PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L, {
        [K in Extract<keyof RDPs, L>]: RDPs[K];
    }>> : never;
    /**
     * Fetches one object with the specified primary key, with a result wrapper
     */
    readonly fetchOneWithErrors: Q extends ObjectTypeDefinition ? <L extends PropertyKeys<Q, RDPs>, R extends boolean, S extends false | "throw" = NullabilityAdherence.Default>(primaryKey: PrimaryKeyType<Q>, options?: SelectArg<Q, L, R, S>) => Promise<Result<Osdk.Instance<Q, ExtractOptions<R, S>, PropertyKeys<Q> extends L ? PropertyKeys<Q> : PropertyKeys<Q> & L, {
        [K in Extract<keyof RDPs, L>]: RDPs[K];
    }>>> : never;
}
interface Subscribe<Q extends ObjectOrInterfaceDefinition> {
    /**
     * Request updates when the objects in an object set are added, updated, or removed.
     * @param listener - The handlers to be executed during the lifecycle of the subscription.
     * @param opts - Options to modify what properties are returned on subscription updates.
     * @returns an object containing a function to unsubscribe.
     */
    readonly subscribe: <const P extends PropertyKeys<Q>>(listener: ObjectSetSubscription.Listener<Q, P>, opts?: ObjectSetSubscription.Options<Q, P>) => {
        unsubscribe: () => void;
    };
}
interface ObjectSetCleanedTypes<Q extends ObjectOrInterfaceDefinition, D extends Record<string, SimplePropertyDef>, MERGED extends ObjectOrInterfaceDefinition> extends MinimalObjectSet<Q, D>, WithProperties<Q, D>, Aggregate<MERGED>, SetArithmetic<MERGED>, PivotTo<MERGED>, FetchOne<Q, D>, Subscribe<MERGED> {
}

type FilteredPropertyKeys<O extends ObjectOrInterfaceDefinition, T extends WirePropertyTypes> = {
    [K in keyof NonNullable<O["__DefinitionMetadata"]>["properties"]]: NonNullable<O["__DefinitionMetadata"]>["properties"][K]["type"] extends T ? K : never;
}[keyof NonNullable<O["__DefinitionMetadata"]>["properties"]];

export { type CompileTimeMetadata as $, type Attachment as A, type SelectArgToKeys as B, type FetchPageResult as C, DistanceUnitMapping as D, type SingleOsdkResult as E, type FetchPageArgs as F, type GeoFilterOptions as G, type Media as H, type InterfaceDefinition as I, type MediaMetadata as J, isOk as K, type Result as L, type MediaReference as M, NullabilityAdherence as N, type ObjectTypeDefinition as O, type PropertyValueWireToClient as P, type BaseObjectSet as Q, type ReleaseStatus as R, type SingleLinkAccessor as S, ObjectSetSubscription as T, type FilteredPropertyKeys as U, type ValidAggregationKeys as V, type WhereClause as W, type InterfaceMetadata as X, type ObjectOrInterfaceDefinition as Y, type PropertyKeys as Z, type ObjectSpecifier as _, type AttachmentUpload as a, ObjectMetadata as a0, type PropertyDef as a1, type VersionBound as a2, type BaseWirePropertyTypes as a3, type WirePropertyTypes as a4, type PrimaryKeyType as a5, type ConvertProps as a6, Osdk as a7, type PageResult as a8, TimeseriesDurationMapping as a9, type GeotimeSeriesProperty as aa, type TimeSeriesPoint as ab, type TimeSeriesProperty as ac, type TimeSeriesQuery as ad, type LinkedType as ae, type LinkNames as af, type ExtractOptions as ag, type MinimalObjectSet as ah, type OsdkBase as b, type OsdkObjectPrimaryKeyType as c, type ObjectSet as d, type OsdkMetadata as e, type PrimaryKeyTypes as f, type AggregateOpts as g, type AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as h, type AggregationResultsWithGroups as i, type AggregationResultsWithoutGroups as j, type AggregationClause as k, type AggregationsResults as l, type GeoFilter_Intersects as m, type GeoFilter_Within as n, type PossibleWhereClauseFilters as o, type OsdkObjectPropertyType as p, type OsdkObjectLinksObject as q, DerivedProperty as r, DurationMapping as s, type AllGroupByValues as t, type GroupByClause as u, type GroupByRange as v, type AsyncIterArgs as w, type Augment as x, type Augments as y, type SelectArg as z };
