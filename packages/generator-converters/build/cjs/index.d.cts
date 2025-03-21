import { InterfaceMetadata, ActionMetadata, ObjectMetadata, QueryDataTypeDefinition, QueryMetadata, QueryParameterDefinition } from '@osdk/api';
import { InterfaceType, ActionTypeV2, ObjectTypeFullMetadata, PropertyApiName, PropertyV2, SharedPropertyType, QueryDataType, QueryTypeV2, QueryParameterV2 } from '@osdk/foundry.ontologies';

declare function __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(interfaceType: InterfaceType, v2: boolean, log?: {
    info: (msg: string) => void;
}): InterfaceMetadata;

declare function wireActionTypeV2ToSdkActionMetadata(input: ActionTypeV2): ActionMetadata;

declare function wireObjectTypeFullMetadataToSdkObjectMetadata(objectTypeWithLink: ObjectTypeFullMetadata & {
    objectType: {
        properties: Record<PropertyApiName, PropertyV2 & {
            nullable?: boolean;
        }>;
    };
}, v2: boolean, log?: {
    info: (msg: string) => void;
}): ObjectMetadata;

declare function wirePropertyV2ToSdkPropertyDefinition(input: (PropertyV2 | SharedPropertyType) & {
    nullable?: boolean;
}, isNullable?: boolean, log?: {
    info: (msg: string) => void;
}): ObjectMetadata.Property | undefined;

declare function wireQueryDataTypeToQueryDataTypeDefinition<K extends string>(input: QueryDataType): QueryDataTypeDefinition;

declare function wireQueryTypeV2ToSdkQueryMetadata(input: QueryTypeV2): QueryMetadata;
declare function wireQueryTypeV2ToSdkQueryDefinitionNoParams(input: QueryTypeV2): {
    type: string;
    apiName: string;
    description: string | undefined;
    displayName: string | undefined;
    version: string;
    rid: string;
};
declare function wireQueryParameterV2ToQueryParameterDefinition(parameter: QueryParameterV2): QueryParameterDefinition<any>;

export { __UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition, wireActionTypeV2ToSdkActionMetadata, wireObjectTypeFullMetadataToSdkObjectMetadata, wirePropertyV2ToSdkPropertyDefinition, wireQueryDataTypeToQueryDataTypeDefinition, wireQueryParameterV2ToQueryParameterDefinition, wireQueryTypeV2ToSdkQueryDefinitionNoParams, wireQueryTypeV2ToSdkQueryMetadata };
