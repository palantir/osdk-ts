declare module "@osdk/faux" {
  export class FauxFoundry {
    constructor(baseUrl: string, options: {
      apiName: string;
      displayName: string;
      description: string;
      rid: string;
    });

    get handlers(): any[];
    get baseUrl(): string;
    get defaultOntologyRid(): string;

    getDefaultOntology(): {
      registerObjectType(objectType: any): void;
      registerInterfaceType(interfaceType: any): void;
    };

    getDefaultDataStore(): {
      registerObject(object: any): void;
      getObjectsOfType(type: string): any[];
    };
  }
}
