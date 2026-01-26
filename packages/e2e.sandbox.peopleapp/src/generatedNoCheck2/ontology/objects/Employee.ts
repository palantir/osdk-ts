import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Office } from './Office.js';
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

export namespace Employee {
  export type PropertyKeys =
    | 'adUsername'
    | 'businessArea'
    | 'businessTitle'
    | 'department'
    | 'emailPrimaryWork'
    | 'employeeDocuments'
    | 'employeeFile'
    | 'employeeMedia'
    | 'employeeNumber'
    | 'favoritePlaceArea'
    | 'favPlace'
    | 'firstFullTimeStartDate'
    | 'firstInternStartDate'
    | 'fullName'
    | 'jobProfile'
    | 'jobTitle'
    | 'latestVenture'
    | 'leadEmployeeNumber'
    | 'locationCity'
    | 'locationCountry'
    | 'locationName'
    | 'locationRegion'
    | 'locationType'
    | 'mentorEmployeeNumber'
    | 'newProperty1'
    | 'preferredNameFirst'
    | 'preferredNameLast'
    | 'primaryOfficeId'
    | 'team'
    | 'workerType';

  export interface Links {
    readonly lead: $SingleLinkAccessor<Employee>;
    readonly peeps: Employee.ObjectSet;
    readonly primaryOffice: $SingleLinkAccessor<Office>;
  }

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Ad Username'
     */
    readonly adUsername: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Business Area'
     */
    readonly businessArea: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Business Title'
     */
    readonly businessTitle: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Department'
     */
    readonly department: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Email'
     */
    readonly emailPrimaryWork: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly employeeDocuments: $PropType['mediaReference'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Employee File'
     */
    readonly employeeFile: $PropType['attachment'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Media'
     */
    readonly employeeMedia: $PropType['mediaReference'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Employee Number'
     */
    readonly employeeNumber: $PropType['integer'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Favorite Place Area'
     */
    readonly favoritePlaceArea: $PropType['geoshape'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Favorite Place'
     */
    readonly favPlace: $PropType['geopoint'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'First Full Time Start Date'
     */
    readonly firstFullTimeStartDate: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'First Intern Start Date'
     */
    readonly firstInternStartDate: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Name'
     */
    readonly fullName: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Job Profile'
     */
    readonly jobProfile: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Job Title'
     */
    readonly jobTitle: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Latest Venture '
     */
    readonly latestVenture:
      | { venture: $PropType['string'] | undefined; days: $PropType['integer'] | undefined }
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Lead Employee Number'
     */
    readonly leadEmployeeNumber: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Location City'
     */
    readonly locationCity: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Location Country'
     */
    readonly locationCountry: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Location Name'
     */
    readonly locationName: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Location Region'
     */
    readonly locationRegion: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Location Type'
     */
    readonly locationType: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Mentor Employee Number'
     */
    readonly mentorEmployeeNumber: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'New property 1'
     */
    readonly newProperty1: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Preferred Name First'
     */
    readonly preferredNameFirst: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Preferred Name Last'
     */
    readonly preferredNameLast: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Primary Office ID'
     */
    readonly primaryOfficeId: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Team'
     */
    readonly team: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Worker Type'
     */
    readonly workerType: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Employee.Props = keyof Employee.Props,
  > = $Osdk.Instance<Employee, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Employee.Props = keyof Employee.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Employee extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Employee';
  __DefinitionMetadata?: {
    objectSet: Employee.ObjectSet;
    props: Employee.Props;
    linksType: Employee.Links;
    strictProps: Employee.StrictProps;
    apiName: 'Employee';
    description: '';
    displayName: 'Employee';
    icon: {
      type: 'blueprint';
      color: '#EC9A3C';
      name: 'person';
    };
    implements: ['Person', 'Worker'];
    interfaceMap: {
      Person: {
        email: 'emailPrimaryWork';
        employeeNumber: 'employeeNumber';
      };
      Worker: {
        email: 'emailPrimaryWork';
        name: 'fullName';
        employeeNumber: 'employeeNumber';
      };
    };
    inverseInterfaceMap: {
      Person: {
        emailPrimaryWork: 'email';
        employeeNumber: 'employeeNumber';
      };
      Worker: {
        emailPrimaryWork: 'email';
        fullName: 'name';
        employeeNumber: 'employeeNumber';
      };
    };
    links: {
      lead: $ObjectMetadata.Link<Employee, false>;
      peeps: $ObjectMetadata.Link<Employee, true>;
      primaryOffice: $ObjectMetadata.Link<Office, false>;
    };
    pluralDisplayName: 'Employees';
    primaryKeyApiName: 'employeeNumber';
    primaryKeyType: 'integer';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Ad Username'
       */
      adUsername: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Business Area'
       */
      businessArea: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Business Title'
       */
      businessTitle: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Department'
       */
      department: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Email'
       */
      emailPrimaryWork: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      employeeDocuments: $PropertyDef<'mediaReference', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Employee File'
       */
      employeeFile: $PropertyDef<'attachment', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Media'
       */
      employeeMedia: $PropertyDef<'mediaReference', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Employee Number'
       */
      employeeNumber: $PropertyDef<'integer', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Favorite Place Area'
       */
      favoritePlaceArea: $PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Favorite Place'
       */
      favPlace: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'First Full Time Start Date'
       */
      firstFullTimeStartDate: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'First Intern Start Date'
       */
      firstInternStartDate: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Name'
       */
      fullName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Job Profile'
       */
      jobProfile: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Job Title'
       */
      jobTitle: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Latest Venture '
       */
      latestVenture: $PropertyDef<{ venture: 'string'; days: 'integer' }, 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Lead Employee Number'
       */
      leadEmployeeNumber: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Location City'
       */
      locationCity: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Location Country'
       */
      locationCountry: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Location Name'
       */
      locationName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Location Region'
       */
      locationRegion: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Location Type'
       */
      locationType: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Mentor Employee Number'
       */
      mentorEmployeeNumber: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'New property 1'
       */
      newProperty1: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Preferred Name First'
       */
      preferredNameFirst: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Preferred Name Last'
       */
      preferredNameLast: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Primary Office ID'
       */
      primaryOfficeId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Team'
       */
      team: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Worker Type'
       */
      workerType: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.ade16a88-ecc4-4f96-9751-ca1799247d64';
    status: 'EXPERIMENTAL';
    titleProperty: 'fullName';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Employee = {
  type: 'object',
  apiName: 'Employee',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.ade16a88-ecc4-4f96-9751-ca1799247d64',
  },
} satisfies Employee & { internalDoNotUseMetadata: { rid: string } } as Employee;
