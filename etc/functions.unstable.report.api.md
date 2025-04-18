## API Report File for "@osdk/functions.unstable"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Attachment } from '@osdk/client';
import type { Client } from '@osdk/client';
import type { CompileTimeMetadata } from '@osdk/client';
import type { ObjectMetadata } from '@osdk/client';
import type { ObjectTypeDefinition } from '@osdk/client';
import type { Osdk } from '@osdk/client';
import type { OsdkObjectPropertyType } from '@osdk/client';
import type { PropertyKeys } from '@osdk/client';
import { Range as Range_2 } from '@osdk/client';
import { ThreeDimensionalAggregation } from '@osdk/client';
import { TwoDimensionalAggregation } from '@osdk/client';

export { Attachment }

// Warning: (ae-forgotten-export) The symbol "AnyEdit" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export function createEditBatch<T extends AnyEdit = never>(_client: Client): EditBatch<T>;

// @public (undocumented)
export type DateISOString<T extends string = string> = T & {
    	__dateBrand?: void
};

// @public (undocumented)
export type Double<T extends number = number> = T & {
    	__doubleBrand?: void
};

// @public (undocumented)
export interface EditBatch<X extends AnyEdit = never> {
    	// Warning: (ae-forgotten-export) The symbol "CreateObjectEdits" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    create: <O extends CreateObjectEdits<X>>(obj: O["obj"], properties: O["properties"]) => void;
    	// Warning: (ae-forgotten-export) The symbol "DeleteObjectEdits" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    delete: <O extends DeleteObjectEdits<X>>(obj: O["obj"]) => void;
    	// (undocumented)
    getEdits: () => X[];
    	// Warning: (ae-forgotten-export) The symbol "AddLinkEdits" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    link: <L extends AddLinkEdits<X>>(source: L["source"], apiName: L["apiName"], target: L["target"]) => void;
    	// Warning: (ae-forgotten-export) The symbol "RemoveLinkEdits" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    unlink: <L extends RemoveLinkEdits<X>>(source: L["source"], apiName: L["apiName"], target: L["target"]) => void;
    	// Warning: (ae-forgotten-export) The symbol "UpdateObjectEdits" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    update: <O extends UpdateObjectEdits<X>>(obj: O["obj"], properties: O["properties"]) => void;
}

// @public (undocumented)
export namespace Edits {
    	// Warning: (ae-forgotten-export) The symbol "AddLink" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "RemoveLink" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    export type Link<
    		S extends ObjectTypeDefinition,
    		L extends keyof CompileTimeMetadata<S>["links"]
    	> = AddLink<S, L> | RemoveLink<S, L>;
    	// Warning: (ae-forgotten-export) The symbol "CreateObject" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "DeleteObject" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "UpdateObject" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    export type Object<S extends ObjectTypeDefinition> = CreateObject<S> | DeleteObject<S> | UpdateObject<S>;
}

// @public (undocumented)
export type Float<T extends number = number> = T & {
    	__floatBrand?: void
};

// @public (undocumented)
export type Integer<T extends number = number> = T & {
    	__integerBrand?: void
};

// @public (undocumented)
export type Long<T extends string = string> = T & {
    	__longBrand?: void
};

export { Range_2 as Range }

export { ThreeDimensionalAggregation }

// @public (undocumented)
export type TimestampISOString<T extends string = string> = T & {
    	__timestampBrand?: void
};

export { TwoDimensionalAggregation }

// (No @packageDocumentation comment for this package)

```
