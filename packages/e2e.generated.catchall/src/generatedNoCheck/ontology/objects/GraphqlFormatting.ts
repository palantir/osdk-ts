import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/client';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client';

export namespace GraphqlFormatting {
  export type PropertyKeys =
    | 'doubleUnitKilogram'
    | 'doubleCurrencyEur'
    | 'timestampTimeOnly'
    | 'arrayIntegers'
    | 'datePatternMdy'
    | 'marking'
    | 'dateIso'
    | 'longScientific'
    | 'negativePercentage'
    | 'doublePerMille'
    | 'longCompact'
    | 'mediaReference'
    | 'dateRelative'
    | 'doublePrecision2'
    | 'timestampUtc'
    | 'doubleBasisPoints'
    | 'timestampDatetimeShort'
    | 'doublePrecision4'
    | 'longPlain'
    | 'zeroValue'
    | 'doublePlain'
    | 'struct'
    | 'doubleSignificant3'
    | 'doubleUnitCelsius'
    | 'integerPlain'
    | 'attachmentList'
    | 'doubleRoundingCeil'
    | 'durationMilliseconds'
    | 'dateLong'
    | 'doubleCustomUnit'
    | 'doubleThousandsK'
    | 'arrayFormattedNumbers'
    | 'doublePrefixPostfix'
    | 'longEngineering'
    | 'doubleUnitMeter'
    | 'geopoint'
    | 'doubleCurrencyJpy'
    | 'integerOrdinal1'
    | 'booleanFormattedFalse'
    | 'datePatternDmy'
    | 'doubleCurrencyUsd'
    | 'doublePercentage'
    | 'booleanFormattedTrue'
    | 'arrayStrings'
    | 'doubleBillionsB'
    | 'integerMinDigits'
    | 'doubleCurrencyCompact'
    | 'timezoneProperty'
    | 'timestampPattern12h'
    | 'timestampPattern24h'
    | 'arrayEmpty'
    | 'negativeNumber'
    | 'arrayBooleans'
    | 'durationSeconds'
    | 'stringUser'
    | 'dateMonthYear'
    | 'integerNoGrouping'
    | 'negativeCurrency'
    | 'nullValue'
    | 'doubleRoundingFloor'
    | 'smallDecimal'
    | 'doubleMillionsM'
    | 'link_'
    | 'dateShort'
    | 'doublePercentageDecimal'
    | 'stringResource'
    | 'timestampDatetime'
    | 'timestampNyc'
    | 'vector'
    | 'geoshape'
    | 'currency'
    | 'arrayOfStructs'
    | 'stringPlain'
    | 'arrayMixed'
    | 'doubleRoundingHalf'
    | 'timestampIso'
    | 'timestampTokyo'
    | 'largeNumber'
    | 'integerThousands';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Array Booleans'
     */
    readonly arrayBooleans: $PropType['boolean'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Array Empty'
     */
    readonly arrayEmpty: $PropType['string'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Array Formatted Numbers'
     */
    readonly arrayFormattedNumbers: $PropType['double'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Array Integers'
     */
    readonly arrayIntegers: $PropType['integer'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Array Mixed'
     */
    readonly arrayMixed: $PropType['string'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Array of structs'
     */
    readonly arrayOfStructs: { stringValue: $PropType['string'] | undefined }[] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Array Strings'
     */
    readonly arrayStrings: $PropType['string'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Attachment list'
     */
    readonly attachmentList: $PropType['attachment'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Boolean Formatted False'
     */
    readonly booleanFormattedFalse: $PropType['boolean'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Boolean Formatted True'
     */
    readonly booleanFormattedTrue: $PropType['boolean'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Currency'
     */
    readonly currency: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Date Iso'
     */
    readonly dateIso: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Date Long'
     */
    readonly dateLong: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Date Month Year'
     */
    readonly dateMonthYear: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Date Pattern Dmy'
     */
    readonly datePatternDmy: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Date Pattern Mdy'
     */
    readonly datePatternMdy: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Date Relative'
     */
    readonly dateRelative: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Date Short'
     */
    readonly dateShort: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Basis Points'
     */
    readonly doubleBasisPoints: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Billions B'
     */
    readonly doubleBillionsB: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Currency Reference Prominent'
     */
    readonly doubleCurrencyCompact: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Currency Eur'
     */
    readonly doubleCurrencyEur: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Currency Jpy'
     */
    readonly doubleCurrencyJpy: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Currency Usd'
     */
    readonly doubleCurrencyUsd: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Custom Unit'
     */
    readonly doubleCustomUnit: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Millions M'
     */
    readonly doubleMillionsM: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Percentage'
     */
    readonly doublePercentage: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Percentage Decimal'
     */
    readonly doublePercentageDecimal: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Per Mille'
     */
    readonly doublePerMille: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Plain'
     */
    readonly doublePlain: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Precision 2'
     */
    readonly doublePrecision2: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Precision 4'
     */
    readonly doublePrecision4: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Prefix Postfix'
     */
    readonly doublePrefixPostfix: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Rounding Ceil'
     */
    readonly doubleRoundingCeil: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Rounding Floor'
     */
    readonly doubleRoundingFloor: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Rounding Half'
     */
    readonly doubleRoundingHalf: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Significant 3'
     */
    readonly doubleSignificant3: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Thousands K'
     */
    readonly doubleThousandsK: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Unit Celsius'
     */
    readonly doubleUnitCelsius: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Unit Kilogram'
     */
    readonly doubleUnitKilogram: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Double Unit Meter'
     */
    readonly doubleUnitMeter: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Duration Milliseconds'
     */
    readonly durationMilliseconds: $PropType['long'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Duration Seconds'
     */
    readonly durationSeconds: $PropType['long'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Geopoint'
     */
    readonly geopoint: $PropType['geopoint'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Geoshape'
     */
    readonly geoshape: $PropType['geoshape'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Integer Min Digits'
     */
    readonly integerMinDigits: $PropType['decimal'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Integer No Grouping'
     */
    readonly integerNoGrouping: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Integer Ordinal 1'
     */
    readonly integerOrdinal1: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Integer Plain'
     */
    readonly integerPlain: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Integer Thousands'
     */
    readonly integerThousands: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Large Number'
     */
    readonly largeNumber: $PropType['decimal'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Link'
     */
    readonly link_: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Long Compact'
     */
    readonly longCompact: $PropType['long'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Long Engineering'
     */
    readonly longEngineering: $PropType['long'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Long Plain'
     */
    readonly longPlain: $PropType['long'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Long Scientific'
     */
    readonly longScientific: $PropType['long'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Marking'
     */
    readonly marking: $PropType['marking'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Media Reference'
     */
    readonly mediaReference: $PropType['mediaReference'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Negative Currency'
     */
    readonly negativeCurrency: $PropType['double'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Negative Number'
     */
    readonly negativeNumber: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Negative Percentage'
     */
    readonly negativePercentage: $PropType['float'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Null Value'
     */
    readonly nullValue: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Small Decimal'
     */
    readonly smallDecimal: $PropType['decimal'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'String Plain Prominent'
     */
    readonly stringPlain: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'String Resource'
     */
    readonly stringResource: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'String User'
     */
    readonly stringUser: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Struct'
     */
    readonly struct:
      | {
          stringValue: $PropType['string'] | undefined;
          integerValue: $PropType['integer'] | undefined;
          doubleValue: $PropType['double'] | undefined;
          booleanValue: $PropType['boolean'] | undefined;
          dateValue: $PropType['datetime'] | undefined;
          timestampValue: $PropType['timestamp'] | undefined;
          nullValue: $PropType['string'] | undefined;
        }
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp Datetime'
     */
    readonly timestampDatetime: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp Datetime Short'
     */
    readonly timestampDatetimeShort: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp Iso'
     */
    readonly timestampIso: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp Nyc'
     */
    readonly timestampNyc: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp Pattern 12h'
     */
    readonly timestampPattern12h: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp Pattern 24h'
     */
    readonly timestampPattern24h: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp Time Only'
     */
    readonly timestampTimeOnly: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp Tokyo'
     */
    readonly timestampTokyo: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timestamp reference'
     */
    readonly timestampUtc: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Timezone Property'
     */
    readonly timezoneProperty: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Vector'
     */
    readonly vector: $PropType['vector'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Zero Value'
     */
    readonly zeroValue: $PropType['integer'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<GraphqlFormatting, GraphqlFormatting.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof GraphqlFormatting.Props = keyof GraphqlFormatting.Props,
  > = $Osdk.Instance<GraphqlFormatting, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof GraphqlFormatting.Props = keyof GraphqlFormatting.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface GraphqlFormatting extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'GraphqlFormatting';
  __DefinitionMetadata?: {
    objectSet: GraphqlFormatting.ObjectSet;
    props: GraphqlFormatting.Props;
    linksType: GraphqlFormatting.Links;
    strictProps: GraphqlFormatting.StrictProps;
    apiName: 'GraphqlFormatting';
    description: '';
    displayName: 'Graphql Formatting';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Graphql Formatting';
    primaryKeyApiName: 'stringPlain';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Array Booleans'
       */
      arrayBooleans: $PropertyDef<'boolean', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Array Empty'
       */
      arrayEmpty: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Array Formatted Numbers'
       */
      arrayFormattedNumbers: $PropertyDef<'double', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Array Integers'
       */
      arrayIntegers: $PropertyDef<'integer', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Array Mixed'
       */
      arrayMixed: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Array of structs'
       */
      arrayOfStructs: $PropertyDef<{ stringValue: 'string' }, 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Array Strings'
       */
      arrayStrings: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Attachment list'
       */
      attachmentList: $PropertyDef<'attachment', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Boolean Formatted False'
       */
      booleanFormattedFalse: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Boolean Formatted True'
       */
      booleanFormattedTrue: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Currency'
       */
      currency: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Date Iso'
       */
      dateIso: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Date Long'
       */
      dateLong: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Date Month Year'
       */
      dateMonthYear: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Date Pattern Dmy'
       */
      datePatternDmy: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Date Pattern Mdy'
       */
      datePatternMdy: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Date Relative'
       */
      dateRelative: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Date Short'
       */
      dateShort: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Basis Points'
       */
      doubleBasisPoints: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Billions B'
       */
      doubleBillionsB: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Currency Reference Prominent'
       */
      doubleCurrencyCompact: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Currency Eur'
       */
      doubleCurrencyEur: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Currency Jpy'
       */
      doubleCurrencyJpy: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Currency Usd'
       */
      doubleCurrencyUsd: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Custom Unit'
       */
      doubleCustomUnit: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Millions M'
       */
      doubleMillionsM: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Percentage'
       */
      doublePercentage: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Percentage Decimal'
       */
      doublePercentageDecimal: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Per Mille'
       */
      doublePerMille: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Plain'
       */
      doublePlain: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Precision 2'
       */
      doublePrecision2: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Precision 4'
       */
      doublePrecision4: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Prefix Postfix'
       */
      doublePrefixPostfix: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Rounding Ceil'
       */
      doubleRoundingCeil: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Rounding Floor'
       */
      doubleRoundingFloor: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Rounding Half'
       */
      doubleRoundingHalf: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Significant 3'
       */
      doubleSignificant3: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Thousands K'
       */
      doubleThousandsK: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Unit Celsius'
       */
      doubleUnitCelsius: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Unit Kilogram'
       */
      doubleUnitKilogram: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Double Unit Meter'
       */
      doubleUnitMeter: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Duration Milliseconds'
       */
      durationMilliseconds: $PropertyDef<'long', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Duration Seconds'
       */
      durationSeconds: $PropertyDef<'long', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Geopoint'
       */
      geopoint: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Geoshape'
       */
      geoshape: $PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Integer Min Digits'
       */
      integerMinDigits: $PropertyDef<'decimal', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Integer No Grouping'
       */
      integerNoGrouping: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Integer Ordinal 1'
       */
      integerOrdinal1: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Integer Plain'
       */
      integerPlain: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Integer Thousands'
       */
      integerThousands: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Large Number'
       */
      largeNumber: $PropertyDef<'decimal', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Link'
       */
      link_: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Long Compact'
       */
      longCompact: $PropertyDef<'long', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Long Engineering'
       */
      longEngineering: $PropertyDef<'long', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Long Plain'
       */
      longPlain: $PropertyDef<'long', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Long Scientific'
       */
      longScientific: $PropertyDef<'long', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Marking'
       */
      marking: $PropertyDef<'marking', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Media Reference'
       */
      mediaReference: $PropertyDef<'mediaReference', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Negative Currency'
       */
      negativeCurrency: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Negative Number'
       */
      negativeNumber: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Negative Percentage'
       */
      negativePercentage: $PropertyDef<'float', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Null Value'
       */
      nullValue: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Small Decimal'
       */
      smallDecimal: $PropertyDef<'decimal', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'String Plain Prominent'
       */
      stringPlain: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'String Resource'
       */
      stringResource: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'String User'
       */
      stringUser: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Struct'
       */
      struct: $PropertyDef<
        {
          stringValue: 'string';
          integerValue: 'integer';
          doubleValue: 'double';
          booleanValue: 'boolean';
          dateValue: 'datetime';
          timestampValue: 'timestamp';
          nullValue: 'string';
        },
        'nullable',
        'single'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp Datetime'
       */
      timestampDatetime: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp Datetime Short'
       */
      timestampDatetimeShort: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp Iso'
       */
      timestampIso: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp Nyc'
       */
      timestampNyc: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp Pattern 12h'
       */
      timestampPattern12h: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp Pattern 24h'
       */
      timestampPattern24h: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp Time Only'
       */
      timestampTimeOnly: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp Tokyo'
       */
      timestampTokyo: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timestamp reference'
       */
      timestampUtc: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Timezone Property'
       */
      timezoneProperty: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Vector'
       */
      vector: $PropertyDef<'vector', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Zero Value'
       */
      zeroValue: $PropertyDef<'integer', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.353eb83c-df7e-4c97-a362-1e94689869bc';
    status: 'EXPERIMENTAL';
    titleProperty: 'stringPlain';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const GraphqlFormatting = {
  type: 'object',
  apiName: 'GraphqlFormatting',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.353eb83c-df7e-4c97-a362-1e94689869bc',
  },
} satisfies GraphqlFormatting & { internalDoNotUseMetadata: { rid: string } } as GraphqlFormatting;
