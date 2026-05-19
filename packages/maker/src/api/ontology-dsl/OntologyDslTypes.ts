/*!
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

export type NonEmptyArray<T> = readonly [T, ...T[]];

export type KeyOf<T> = Extract<keyof T, string>;

/**
 * Extracts the concrete declared keys of a map interface, filtering out the template literal index signature.
 * Use at call sites instead of `KeyOf<T> & TemplateRid` for better error messages that show the expected key pattern.
 */
export type KnownKeys<T, Template = string> = keyof {
    [K in keyof T as Template extends K ? never : K]: T[K];
} &
    string;

export type ObjectTypeId = string;
export type PropertyTypeId = string;
/** Marking ID, specified in UUID form. */
export type MarkingId = `${string}-${string}-${string}-${string}-${string}`;

/** If present, modifying an existing link type; if absent, creating a new one. */
export type ExistingLinkTypeId = string;

export type ObjectTypeRid = `ri.ontology.main.object-type.${string}`;
export type LinkTypeRid = `ri.ontology.main.link-type.${string}`;
export type StructFieldRid = `ri.ontology.main.struct-field.${string}`;
export type SecurityPolicyRid = `ri.ontology.main.property-security-group.${string}`;

/** Either conjunctive mandatory markings or hierarchical Classification-Based Access Control markings. */
export type MarkingType = "mandatory" | "CBAC";

export type CipherChannelRid = `ri.bellaso.main.cipher-channel.${string}`;

/** ISO 8601 timestamp string, e.g. "2026-04-29T22:00:00.000Z". */
type Iso8601Timestamp = string;

export namespace Type {
    export type String = { type: "string" };
    export type Boolean = { type: "boolean" };
    export type Integer = { type: "integer" };
    export type Long = { type: "long" };
    export type Short = { type: "short" };
    export type Byte = { type: "byte" };
    export type Double = { type: "double" };
    export type Float = { type: "float" };
    export type Decimal = {
        type: "decimal";
        /**
         * The total number of digits in a number. Must be equal to the backing column's precision. Default is 5.
         */
        precision?: number;
        /**
         * The number of digits to the right of the decimal in a number. Must be equal to the backing
         * column's scale. Defaults is 2.
         */
        scale?: number;
    };
    export type Date = { type: "date" };
    export type Timestamp = { type: "timestamp" };
    export type Geohash = { type: "geohash" };
    export type Geoshape = { type: "geoshape" };
    export type Attachment = { type: "attachment" };
    export type Marking = { type: "marking"; markingType: MarkingType };
    /**
     * Encrypts underlying plain text values using Cipher. */
    export type CipherText = {
        type: "cipherText";
        defaultCipherChannelRid?: CipherChannelRid; // used to encrypt edits to initially empty or non-encrypted fields
    };

    export type Primitive =
        | String
        | Boolean
        | Integer
        | Long
        | Short
        | Byte
        | Double
        | Float
        | Decimal
        | Date
        | Timestamp
        | Geohash
        | Geoshape
        | Attachment
        | CipherText;

    export type StructFieldType = Exclude<Primitive, Attachment | Marking | CipherText>;

    export interface StructFieldDefinition<T extends StructFieldType> {
        structFieldRid?: StructFieldRid; // present for existing struct fields
        displayName: string;
        description?: string;
        type: T;
    }

    export type StructFieldsShape = { [fieldApiName: string]: StructFieldDefinition<StructFieldType> };

    export interface Struct<Fields extends StructFieldsShape = StructFieldsShape> {
        type: "struct";
        fields: Fields;
        /** Field API names that make up the struct's primary display value. */
        mainValues?: ReadonlyArray<KeyOf<Fields>>;
    }

    export type ArrayElementType = Primitive | Struct;

    export interface Array<T extends ArrayElementType> {
        type: "array";
        elementType: T;
    }

    export interface Unsupported {
        type: "unsupported";
    }
}

export type Type =
    | Type.String
    | Type.Boolean
    | Type.Integer
    | Type.Long
    | Type.Short
    | Type.Byte
    | Type.Double
    | Type.Float
    | Type.Decimal
    | Type.Date
    | Type.Timestamp
    | Type.Geohash
    | Type.Geoshape
    | Type.Attachment
    | Type.Marking
    | Type.CipherText
    | Type.Array<Type.ArrayElementType>
    | Type.Struct
    | Type.Unsupported;

export namespace DatasourceSchemaType {
    export type Primitive =
        | Type.String
        | Type.Boolean
        | Type.Integer
        | Type.Long
        | Type.Short
        | Type.Byte
        | Type.Double
        | Type.Float
        | Pick<Type.Decimal, "type">
        | Type.Date
        | Type.Timestamp;

    export type Array<T extends Primitive> = Type.Array<T>;

    export type Unsupported = Type.Unsupported;
}

export type DatasourceSchemaType =
    | DatasourceSchemaType.Primitive
    | DatasourceSchemaType.Array<DatasourceSchemaType.Primitive>
    | DatasourceSchemaType.Unsupported;

export interface PropertyDisplay {
    displayName: string;
    description?: string;
    visibility?: Visibility;
}

export interface DataConstraints {
    /**
     * When true, property values must not be null and array values must not be empty.
     * Use allowEmptyArrays to permit empty arrays while still requiring non-null values.
     */
    requireValues?: true | { allowEmptyArrays: true };
}

/**
 * notes on what is excluded
 * - ruleSets
 * - baseFormatter
 * - typeClasses
 * - valueType, inline action
 */
export interface PropertyDefinition<T extends Type> {
    propertyTypeId: PropertyTypeId;
    display: PropertyDisplay;
    type: T;
    dataConstraints?: DataConstraints;
    indexedForSearch?: boolean; // defaults to true, can be set to false for properties that do not need to be searchable or aggregatable
    status?: PropertyTypeStatus;
    // Can be omitted for userEdit backed properties on single datasource object types
    datasource?: PropertyDatasourceMapping<T>;
}

/** NORMAL is the default, PROMINENT is given higher importance in user applications, HIDDEN types are not displayed in user applications. */
type Visibility = "NORMAL" | "PROMINENT" | "HIDDEN";

export interface DeprecatedStatus<TReplacement extends string> {
    message: string;
    deprecationDeadline: Iso8601Timestamp;
    replacedBy?: TReplacement;
}

/**
 * Lifecycle status of ontology types.
 * experimental: under development (default)
 * active: stable and in use
 * example: sample/demo type
 * deprecated: not recommended for use
 */
export type Status<TReplacement extends string> =
    | "experimental"
    | "active"
    | "example"
    | DeprecatedStatus<TReplacement>;

export type PropertyTypeStatus = Status<PropertyTypeId>;

export type LinkTypeStatus = Status<ExistingLinkTypeId>;

/**
 * Lifecycle status of an object type. Extends {@link Status} with "endorsed".
 *
 * Status inheritance rules:
 * - If an object type is deprecated, experimental, or example, all of its properties should share that status.
 * - If an object type is active or endorsed, properties may have individual statuses (active, experimental, example,
 * or deprecated). The primary key property should be active in this case.
 */
export type ObjectTypeStatus = Status<ObjectTypeId> | "endorsed";

type BlueprintIconName = string;
type HexColor = string;

export interface Icon {
    name: BlueprintIconName;
    color: HexColor;
}

export interface ObjectTypeDisplayMetadata {
    description?: string;
    visibility?: Visibility;
    icon?: Icon;
    aliases?: string[];
}

export interface ObjectTypes {
    [objectTypeRid: ObjectTypeRid]: PropertiesShape;
}

export type LinkTypeCardinality = "oneToMany" | "manyToMany" | "objectBacked";

export interface LinkTypes {
    [linkTypeRid: LinkTypeRid]: LinkTypeCardinality;
}

/** Extracts link type RIDs from the module-level LinkTypes map that have the given cardinality. */
type LinkTypeRidsOfCardinality<Cardinality extends LinkTypeCardinality> = {
    [Rid in KnownKeys<LinkTypes, LinkTypeRid>]: LinkTypes[Rid] extends Cardinality ? Rid : never;
}[KnownKeys<LinkTypes, LinkTypeRid>];

type ColumnName = string;
type DatasetRid = `ri.foundry.main.dataset.${string}`;
type RestrictedViewRid = `ri.gps.main.view.${string}`;
type StreamLocatorRid = `ri.foundry.main.dataset.${string}`;
type TableRid = `ri.tables.main.table.${string}`;
export type UnknownDatasourceColumnType = { type: "unknownType" };
type DatasourceColumnValueType = DatasourceSchemaType | UnknownDatasourceColumnType;

export interface Datasets {
    [datasetRid: DatasetRid]: Record<ColumnName, DatasourceColumnValueType>;
}

export interface RestrictedViews {
    [restrictedViewRid: RestrictedViewRid]: Record<ColumnName, DatasourceColumnValueType>;
}

export interface Streams {
    [streamLocatorRid: StreamLocatorRid]: Record<ColumnName, DatasourceColumnValueType>;
}

export interface Tables {
    [tableRid: TableRid]: Record<ColumnName, DatasourceColumnValueType>;
}

export interface DatasetDatasource<
    D extends Datasets = Datasets,
    R extends KnownKeys<D, DatasetRid> = KnownKeys<D, DatasetRid>,
> {
    type: "dataset";
    backingDatasourceRid: R;
    column<const Column extends KeyOf<D[R]>>(
        column: Column,
    ): DatasourceColumnMapping<"dataset", Extract<D[R][Column], DatasourceColumnValueType>>;
    userEdits(): DatasourceEditsOnlyMapping<"dataset">;
}

export interface RestrictedViewDatasource<
    RV extends RestrictedViews = RestrictedViews,
    R extends KnownKeys<RV, RestrictedViewRid> = KnownKeys<RV, RestrictedViewRid>,
> {
    type: "restrictedView";
    backingDatasourceRid: R;
    column<const Column extends KeyOf<RV[R]>>(
        column: Column,
    ): DatasourceColumnMapping<"restrictedView", Extract<RV[R][Column], DatasourceColumnValueType>>;
    userEdits(): DatasourceEditsOnlyMapping<"restrictedView">;
}

export interface StreamDatasource<
    S extends Streams = Streams,
    R extends KnownKeys<S, StreamLocatorRid> = KnownKeys<S, StreamLocatorRid>,
> {
    type: "stream";
    backingDatasourceRid: R;
    column<const Column extends KeyOf<S[R]>>(
        column: Column,
    ): DatasourceColumnMapping<"stream", Extract<S[R][Column], DatasourceColumnValueType>>;
    userEdits(): DatasourceEditsOnlyMapping<"stream">;
}

export interface TableDatasource<T extends Tables = Tables, R extends KnownKeys<T, TableRid> = KnownKeys<T, TableRid>> {
    type: "table";
    backingDatasourceRid: R;
    column<const Column extends KeyOf<T[R]>>(
        column: Column,
    ): DatasourceColumnMapping<"table", Extract<T[R][Column], DatasourceColumnValueType>>;
    userEdits(): DatasourceEditsOnlyMapping<"table">;
}

export interface UnsupportedDatasource {
    type: "unsupported";
    datasourceRid: string;
    unsupported(): UnsupportedDatasourceMapping;
}

export type DatasourceConfig =
    | { type: "dataset"; backingDatasourceRid: DatasetRid }
    | { type: "restrictedView"; backingDatasourceRid: RestrictedViewRid }
    | { type: "stream"; backingDatasourceRid: StreamLocatorRid }
    | { type: "table"; backingDatasourceRid: TableRid }
    | { type: "unsupported"; datasourceRid: string };

export type PropertySecurityGroupEligibleDatasourceConfig = Extract<
    DatasourceConfig,
    { type: "dataset" | "stream" | "table" }
>;

export type AllowsPropertySecurityGroups<Datasources extends readonly DatasourceConfig[]> =
    Datasources extends readonly [PropertySecurityGroupEligibleDatasourceConfig] ? true : false;

type SupportedDatasourceType = "dataset" | "restrictedView" | "stream" | "table";

export interface DatasourceColumnMapping<
    T extends SupportedDatasourceType = SupportedDatasourceType,
    ColumnType extends DatasourceColumnValueType = DatasourceColumnValueType,
> {
    type: T;
    backingDatasourceRid: string;
    column: ColumnName;
    readonly columnType?: ColumnType;
}

export interface DatasourceEditsOnlyMapping<T extends SupportedDatasourceType = SupportedDatasourceType> {
    type: T;
    backingDatasourceRid: string;
    readonly column?: never;
}

export interface UnsupportedDatasourceMapping {
    type: "unsupported";
    datasourceRid: string;
}

export interface RedactedDatasourceMapping {
    type: "redacted";
}

type CompatibleDatasourcePrimitiveTypeByTag = {
    attachment: Type.String;
    boolean: Type.Boolean;
    byte: Type.Byte;
    cipherText: Type.String;
    date: Type.Date;
    decimal: Pick<Type.Decimal, "type">;
    double: Type.Double;
    float: Type.Float;
    geohash: Type.String;
    geoshape: Type.String;
    integer: Type.Integer;
    long: Type.Long;
    short: Type.Short;
    string: Type.String;
    timestamp: Type.Timestamp;
};

type CompatibleDatasourcePrimitiveType<PropertyType extends Type.Primitive> =
    CompatibleDatasourcePrimitiveTypeByTag[PropertyType["type"]];

type CompatibleDatasourceNonArrayTypeByTag = CompatibleDatasourcePrimitiveTypeByTag & {
    marking: DatasourceSchemaType.Array<Type.String>;
    unsupported: DatasourceSchemaType.Unsupported;
};

type CompatibleDatasourceNonArrayType<PropertyType extends Type> = PropertyType extends {
    type: infer TypeTag extends keyof CompatibleDatasourceNonArrayTypeByTag;
}
    ? CompatibleDatasourceNonArrayTypeByTag[TypeTag]
    : never;

type CompatibleDatasourceColumnType<PropertyType extends Type> = PropertyType extends {
    type: "array";
    elementType: infer ElementType extends Type.Primitive;
}
    ? DatasourceSchemaType.Array<CompatibleDatasourcePrimitiveType<ElementType>>
    : CompatibleDatasourceNonArrayType<PropertyType>;

export type CompatibleDatasourceColumnMapping<PropertyType extends Type> =
    | {
          [K in SupportedDatasourceType]: DatasourceColumnMapping<
              K,
              CompatibleDatasourceColumnType<PropertyType> | UnknownDatasourceColumnType
          >;
      }[SupportedDatasourceType]
    | RedactedDatasourceMapping;

export interface PrimaryKeyDatasourceMapping<PropertyType extends Type> {
    type: "primaryKey";
    columns: Array<CompatibleDatasourceColumnMapping<PropertyType>>;
}

type SupportedDatasourceMappings<PropertyType extends Type> = {
    [K in SupportedDatasourceType]: CompatibleDatasourceColumnMapping<PropertyType> | DatasourceEditsOnlyMapping<K>;
}[SupportedDatasourceType];

export type PropertyDatasourceMapping<PropertyType extends Type> =
    | SupportedDatasourceMappings<PropertyType>
    | UnsupportedDatasourceMapping
    | RedactedDatasourceMapping
    | PrimaryKeyDatasourceMapping<PropertyType>;

export interface SharedPropertyDefinition {
    propertyTypeId: PropertyTypeId;
    sharedPropertyTypeRid: string;
    status?: PropertyTypeStatus;
    datasource?: PropertyDatasourceMapping<Type>;
}

export type PrimaryKeyOf<Properties extends PropertiesShape> = {
    [K in KeyOf<Properties>]: Properties[K] extends { datasource: PrimaryKeyDatasourceMapping<Type> } ? K : never;
}[KeyOf<Properties>];

export type PropertiesShape = { [apiName: string]: PropertyDefinition<Type> | SharedPropertyDefinition };

export type InterfaceTypeRid = `ri.ontology.main.interface.${string}`;

type InterfacePropertyApiName = string;

type InterfacePropertiesShape = Record<InterfacePropertyApiName, Type>;

export interface InterfaceTypes {
    [interfaceRid: InterfaceTypeRid]: InterfacePropertiesShape;
}

export interface UnsupportedInterfacePropertyImplementation {
    type: "unsupported";
}

export interface SkipInterfacePropertyImplementation {
    type: "skip";
}

/** True iff `A` and `B` are mutually assignable. */
type IsEqual<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

/**
 * Api names of object properties whose declared `type` is the same as the interface property's type.
 * Shared properties have no DSL-level `type` and are always permitted.
 * `Type.Unsupported` on either side is only satisfied by `Type.Unsupported` on the other.
 */
type PropertyApiNamesOfType<Properties extends PropertiesShape, InterfacePropertyType extends Type> = {
    [K in KeyOf<Properties>]: Properties[K] extends { type: infer T }
        ? IsEqual<T, InterfacePropertyType> extends true
            ? K
            : never
        : K;
}[KeyOf<Properties>];

export type InterfacePropertyImplementation<Properties extends PropertiesShape, InterfacePropertyType extends Type> =
    | PropertyApiNamesOfType<Properties, InterfacePropertyType>
    | UnsupportedInterfacePropertyImplementation
    | SkipInterfacePropertyImplementation;

export type InterfacePropertyMapping<
    Properties extends PropertiesShape,
    InterfaceProperties extends InterfacePropertiesShape,
> = {
    [Property in KeyOf<InterfaceProperties>]: InterfacePropertyImplementation<
        Properties,
        InterfaceProperties[Property]
    >;
};

export interface InterfaceImplementation<
    Properties extends PropertiesShape,
    InterfaceProperties extends InterfacePropertiesShape,
> {
    propertyMapping: InterfacePropertyMapping<Properties, InterfaceProperties>;
}

export type InterfaceImplementationMap<Properties extends PropertiesShape> = Partial<{
    [Rid in KnownKeys<InterfaceTypes, InterfaceTypeRid>]: InterfaceImplementation<Properties, InterfaceTypes[Rid]>;
}>;

type ValidatedProperty<Property extends PropertyDefinition<Type> | SharedPropertyDefinition> = Property extends {
    type: infer PropertyType extends Type;
}
    ? PropertyDefinition<PropertyType>
    : SharedPropertyDefinition;

type ValidatedProperties<Properties extends PropertiesShape> = {
    [K in keyof Properties]: ValidatedProperty<Properties[K]>;
};
/**
 * notes on what is excluded
 * - typeGroups
 * - traits
 */
export interface ObjectTypeConfig<Properties extends PropertiesShape, Datasources extends readonly DatasourceConfig[]> {
    id?: ObjectTypeId; // if present, modifying an existing OT; if absent, creating a new one
    apiName: string;
    displayName: string;
    pluralDisplayName: string;
    displayMetadata?: ObjectTypeDisplayMetadata;
    properties: Properties & ValidatedProperties<Properties>;
    primaryKey: PrimaryKeyOf<Properties>;
    titleProperty: KeyOf<Properties>;
    status?: ObjectTypeStatus;
    allowEdits?: boolean; // defaults to false
    interfaceImplementations?: InterfaceImplementationMap<Properties>;
    datasources: Datasources;
}

/** Resolves the properties shape from an object type reference — either from the inline properties
 * or by looking up the RID in ObjectTypes. */
type PropertiesOfRef<OTs extends ObjectTypes, Ref extends ObjectTypeRef<OTs>> = Ref extends {
    properties: infer P extends PropertiesShape;
}
    ? P
    : OTs[Ref & keyof OTs];

export interface LinkSideMetadata {
    displayName: string;
    pluralDisplayName: string;
    apiName: string;
    visibility?: Visibility;
}

export type ObjectTypeRef<OTs extends ObjectTypes> =
    | Pick<ObjectTypeConfig<PropertiesShape, readonly DatasourceConfig[]>, "apiName" | "properties">
    | KnownKeys<OTs, ObjectTypeRid>;

/**
 * One-to-many (or one-to-one): the many side has a foreign key property referencing the one side's primary key. */
export interface OneToManyLinkType<OTs extends ObjectTypes, Ref extends ObjectTypeRef<OTs>> {
    type: "oneToMany";
    linkTypeId?: ExistingLinkTypeId;
    description?: string;
    status?: LinkTypeStatus;
    manyToOneSide: LinkSideMetadata & {
        manyObjectType: Ref;
        foreignKeyProperty: KeyOf<PropertiesOfRef<OTs, Ref>>;
    };
    oneToManySide: LinkSideMetadata & {
        oneObjectType: ObjectTypeRef<OTs>;
    };
    /**
     * Cardinality hint — not enforced at the data layer.
     * Use "oneToOne" when the foreign key column holds at most one row per value (e.g., a unique index).
     */
    cardinalityHint: "oneToMany" | "oneToOne";
}

export type ManyToManyLinkDatasource<AllDatasets extends Datasets, AllStreams extends Streams> =
    | ([AllDatasets] extends [never]
          ? never
          : {
                [Rid in KnownKeys<AllDatasets, DatasetRid>]: ManyToManyDatasetDatasource<AllDatasets, Rid>;
            }[KnownKeys<AllDatasets, DatasetRid>])
    | ([AllStreams] extends [never]
          ? never
          : {
                [Rid in KnownKeys<AllStreams, StreamLocatorRid>]: ManyToManyStreamDatasource<AllStreams, Rid>;
            }[KnownKeys<AllStreams, StreamLocatorRid>]);

export interface ManyToManyDatasetDatasource<
    AllDatasets extends Datasets,
    Rid extends KnownKeys<AllDatasets, DatasetRid>,
> {
    type: "dataset";
    datasetRid: Rid;
    aSidePkColumn: KeyOf<AllDatasets[Rid]>;
    bSidePkColumn: KeyOf<AllDatasets[Rid]>;
}

export interface ManyToManyStreamDatasource<
    AllStreams extends Streams,
    Rid extends KnownKeys<AllStreams, StreamLocatorRid>,
> {
    type: "stream";
    streamLocatorRid: Rid;
    aSidePkColumn: KeyOf<AllStreams[Rid]>;
    bSidePkColumn: KeyOf<AllStreams[Rid]>;
}

export interface ManyToManyLinkType<OTs extends ObjectTypes, AllDatasets extends Datasets, AllStreams extends Streams> {
    type: "manyToMany";
    linkTypeId?: ExistingLinkTypeId;
    description?: string;
    status?: LinkTypeStatus;
    aToBSide: LinkSideMetadata & {
        objectTypeA: ObjectTypeRef<OTs>;
    };
    bToASide: LinkSideMetadata & {
        objectTypeB: ObjectTypeRef<OTs>;
    };
    datasource: ManyToManyLinkDatasource<AllDatasets, AllStreams>;
    editsEnabled?: boolean; // defaults to true
}

/** A reference to a one-to-many link type whose many side is the intermediate object type.
 * Either an inline OneToManyLinkType or a known one-to-many LinkTypeRid. */
type IntermediateLinkTypeRef<IntermediateRef> =
    | { type: "oneToMany"; manyToOneSide: { manyObjectType: IntermediateRef } }
    | LinkTypeRidsOfCardinality<"oneToMany">;

export interface ObjectBackedLinkType<OTs extends ObjectTypes, IntermediateRef extends ObjectTypeRef<OTs>> {
    type: "objectBacked";
    linkTypeId?: ExistingLinkTypeId;
    description?: string;
    status?: LinkTypeStatus;
    intermediateObjectType: IntermediateRef;
    aToBSide: LinkSideMetadata & {
        objectTypeA: ObjectTypeRef<OTs>;
        aToIntermediateLinkType: IntermediateLinkTypeRef<NoInfer<IntermediateRef>>;
    };
    bToASide: LinkSideMetadata & {
        objectTypeB: ObjectTypeRef<OTs>;
        bToIntermediateLinkType: IntermediateLinkTypeRef<NoInfer<IntermediateRef>>;
    };
}

export interface OntologyBuilder<
    D extends Datasets = Datasets,
    RV extends RestrictedViews = RestrictedViews,
    S extends Streams = Streams,
    T extends Tables = Tables,
    OT extends ObjectTypes = ObjectTypes,
> {
    types: {
        string: Type.String;
        boolean: Type.Boolean;
        integer: Type.Integer;
        long: Type.Long;
        short: Type.Short;
        byte: Type.Byte;
        double: Type.Double;
        float: Type.Float;
        decimal(args?: { precision?: number; scale?: number }): Type.Decimal;
        date: Type.Date;
        timestamp: Type.Timestamp;
        geohash: Type.Geohash;
        geoshape: Type.Geoshape;
        attachment: Type.Attachment;
        marking(markingType: MarkingType): Type.Marking;
        cipherText(args?: { defaultCipherChannelRid?: CipherChannelRid }): Type.CipherText;
        array<E extends Type.ArrayElementType>(elementType: E): Type.Array<E>;
        struct<Fields extends Type.StructFieldsShape>(config: Omit<Type.Struct<Fields>, "type">): Type.Struct<Fields>;
        unsupported(): Type.Unsupported;
    };

    datasource: {
        dataset<const R extends KnownKeys<D, DatasetRid>>(datasetRid: R): DatasetDatasource<D, R>;
        restrictedView<const R extends KnownKeys<RV, RestrictedViewRid>>(
            restrictedViewRid: R,
        ): RestrictedViewDatasource<RV, R>;
        stream<const R extends KnownKeys<S, StreamLocatorRid>>(streamLocatorRid: R): StreamDatasource<S, R>;
        table<const R extends KnownKeys<T, TableRid>>(tableRid: R): TableDatasource<T, R>;
        unsupported(datasourceRid: string): UnsupportedDatasource;
        redacted(): RedactedDatasourceMapping;
    };

    objectType<Properties extends PropertiesShape, const Datasources extends readonly DatasourceConfig[]>(
        config: ObjectTypeConfig<Properties, Datasources>,
    ): ObjectTypeConfig<Properties, Datasources>;

    linkType: {
        oneToMany<Ref extends ObjectTypeRef<OT>>(
            config: Omit<OneToManyLinkType<OT, Ref>, "type">,
        ): OneToManyLinkType<OT, Ref>;
        manyToMany(config: Omit<ManyToManyLinkType<OT, D, S>, "type">): ManyToManyLinkType<OT, D, S>;
        objectBacked<IntermediateRef extends ObjectTypeRef<OT>>(
            config: Omit<ObjectBackedLinkType<OT, IntermediateRef>, "type">,
        ): ObjectBackedLinkType<OT, IntermediateRef>;
    };
}
