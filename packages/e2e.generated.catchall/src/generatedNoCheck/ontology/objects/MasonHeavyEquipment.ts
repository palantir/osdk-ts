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

export namespace MasonHeavyEquipment {
  export type PropertyKeys =
    | 'serviceRequirement'
    | 'area'
    | 'id'
    | 'sidc'
    | 'classification'
    | 'location'
    | 'fullSize'
    | 'weight'
    | 'isCanonical'
    | 'driverId'
    | 'createdDatetime'
    | 'driverName'
    | 'resolvedTo'
    | 'site'
    | 'externalId'
    | 'maker'
    | 'badgeId'
    | 'age'
    | 'lastModified'
    | 'backupDriverName'
    | 'shortId'
    | 'managerName'
    | 'title'
    | 'supervisorName'
    | 'musicPlayer'
    | 'internalSize';

  export interface Links {
    readonly masonHeavyEquipment: $SingleLinkAccessor<MasonHeavyEquipment>;
  }

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Age'
     */
    readonly age:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['integer'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Area'
     */
    readonly area:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Backup Driver Name'
     */
    readonly backupDriverName:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Badge ID'
     */
    readonly badgeId:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Classification'
     */
    readonly classification: $PropType['string'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Created Datetime'
     */
    readonly createdDatetime: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Driver ID'
     */
    readonly driverId:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Driver Name'
     */
    readonly driverName:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'External Id'
     */
    readonly externalId: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Full Size'
     */
    readonly fullSize:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['integer'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Id'
     */
    readonly id: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Internal Size'
     */
    readonly internalSize:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['integer'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Is Canonical'
     */
    readonly isCanonical: $PropType['boolean'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Last Modified'
     */
    readonly lastModified: $PropType['timestamp'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Location'
     */
    readonly location:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['geopoint'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Maker'
     */
    readonly maker:
      | {
          makerValue: $PropType['string'] | undefined;
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Manager Name'
     */
    readonly managerName:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Music Player'
     */
    readonly musicPlayer:
      | {
          make: $PropType['string'] | undefined;
          name: $PropType['string'] | undefined;
          year: $PropType['integer'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Resolved To'
     */
    readonly resolvedTo: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Service Requirement'
     */
    readonly serviceRequirement:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Short ID'
     */
    readonly shortId:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Sidc'
     */
    readonly sidc: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Site'
     */
    readonly site:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Supervisor Name'
     */
    readonly supervisorName:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['string'] | undefined;
        }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Title'
     */
    readonly title: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Weight'
     */
    readonly weight:
      | {
          createdBy: $PropType['string'] | undefined;
          createdTime: $PropType['timestamp'] | undefined;
          datasourceGid: $PropType['string'] | undefined;
          datasourceName: $PropType['string'] | undefined;
          endDatetime: $PropType['timestamp'] | undefined;
          lastModifiedBy: $PropType['string'] | undefined;
          lastModifiedTime: $PropType['timestamp'] | undefined;
          startDatetime: $PropType['timestamp'] | undefined;
          value: $PropType['integer'] | undefined;
        }[]
      | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<MasonHeavyEquipment, MasonHeavyEquipment.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MasonHeavyEquipment.Props = keyof MasonHeavyEquipment.Props,
  > = $Osdk.Instance<MasonHeavyEquipment, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MasonHeavyEquipment.Props = keyof MasonHeavyEquipment.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface MasonHeavyEquipment extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'MasonHeavyEquipment';
  __DefinitionMetadata?: {
    objectSet: MasonHeavyEquipment.ObjectSet;
    props: MasonHeavyEquipment.Props;
    linksType: MasonHeavyEquipment.Links;
    strictProps: MasonHeavyEquipment.StrictProps;
    apiName: 'MasonHeavyEquipment';
    description: '';
    displayName: '[mason] Heavy Equipment';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      masonHeavyEquipment: $ObjectMetadata.Link<MasonHeavyEquipment, false>;
    };
    pluralDisplayName: '[mason] Heavy Equipments';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Age'
       */
      age: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'integer';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Area'
       */
      area: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          value: 'string';
          startDatetime: 'timestamp';
          endDatetime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Backup Driver Name'
       */
      backupDriverName: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'string';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Badge ID'
       */
      badgeId: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'string';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Classification'
       */
      classification: $PropertyDef<'string', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Created Datetime'
       */
      createdDatetime: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Driver ID'
       */
      driverId: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          endDatetime: 'timestamp';
          value: 'string';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Driver Name'
       */
      driverName: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'string';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'External Id'
       */
      externalId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Full Size'
       */
      fullSize: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'integer';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Id'
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Internal Size'
       */
      internalSize: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'integer';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Is Canonical'
       */
      isCanonical: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Last Modified'
       */
      lastModified: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Location'
       */
      location: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'geopoint';
          endDatetime: 'timestamp';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Maker'
       */
      maker: $PropertyDef<
        {
          makerValue: 'string';
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          endDatetime: 'timestamp';
          startDatetime: 'timestamp';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Manager Name'
       */
      managerName: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'string';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Music Player'
       */
      musicPlayer: $PropertyDef<{ make: 'string'; name: 'string'; year: 'integer' }, 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Resolved To'
       */
      resolvedTo: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Service Requirement'
       */
      serviceRequirement: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'string';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Short ID'
       */
      shortId: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'string';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Sidc'
       */
      sidc: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Site'
       */
      site: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'string';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Supervisor Name'
       */
      supervisorName: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'string';
        },
        'nullable',
        'array'
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Title'
       */
      title: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Weight'
       */
      weight: $PropertyDef<
        {
          createdBy: 'string';
          createdTime: 'timestamp';
          datasourceGid: 'string';
          datasourceName: 'string';
          endDatetime: 'timestamp';
          lastModifiedBy: 'string';
          lastModifiedTime: 'timestamp';
          startDatetime: 'timestamp';
          value: 'integer';
        },
        'nullable',
        'array'
      >;
    };
    rid: 'ri.ontology.main.object-type.73756c21-5a63-47ae-af39-2f22bedd8ec2';
    status: 'EXPERIMENTAL';
    titleProperty: 'title';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const MasonHeavyEquipment = {
  type: 'object',
  apiName: 'MasonHeavyEquipment',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.73756c21-5a63-47ae-af39-2f22bedd8ec2',
  },
} satisfies MasonHeavyEquipment & { internalDoNotUseMetadata: { rid: string } } as MasonHeavyEquipment;
