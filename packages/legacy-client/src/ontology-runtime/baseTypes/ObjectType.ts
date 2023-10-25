/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { OntologyObject } from "./OntologyObject";

export interface BaseType {
  type: string;
}

export interface StringType extends BaseType {
  type: "string";
}

export const StringType: {
  of: () => StringType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface IntegerType extends BaseType {
  type: "integer";
}

export const IntegerType: {
  of: () => IntegerType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface DateType extends BaseType {
  type: "date";
}

export const DateType: {
  of: () => DateType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface BooleanType extends BaseType {
  type: "boolean";
}

export const BooleanType: {
  of: () => BooleanType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface ByteType extends BaseType {
  type: "byte";
}

export const ByteType: {
  of: () => ByteType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface DecimalType extends BaseType {
  type: "decimal";
}

export const DecimalType: {
  of: () => DecimalType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface FloatType extends BaseType {
  type: "float";
}

export const FloatType: {
  of: () => FloatType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface TimeSeriesType<T extends OntologyType> extends BaseType {
  type: "timeSeries";
  subType: T;
}

export const TimeSeriesType: {
  of: <T extends OntologyType>(subType: T) => TimeSeriesType<T>;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface TimestampType extends BaseType {
  type: "timestamp";
}

export const TimestampType: {
  of: () => TimestampType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface ShortType extends BaseType {
  type: "short";
}

export const ShortType: {
  of: () => ShortType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface LongType extends BaseType {
  type: "long";
}

export const LongType: {
  of: () => LongType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface DoubleType extends BaseType {
  type: "double";
}

export const DoubleType: {
  of: () => DoubleType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface GeoPointType {
  type: "GeoPoint";
}

export const GeoPointType: {
  of: () => GeoPointType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface GeoShapeType {
  type: "GeoShape";
}

export const GeoShapeType: {
  of: () => GeoShapeType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface AttachmentType {
  type: "attachment";
}

export const AttachmentType: {
  of: () => AttachmentType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface StructType extends BaseType {
  type: "struct";
  fields: StructField[];
}

export interface ObjectType extends BaseType {
  type: "object";
  objectTypeApiName: string;
}

export const ObjectType: {
  of: (objectTypeApiName: string) => ObjectType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface StructField {
  name: string;
  fieldType: OntologyType;
  required: boolean;
}

export const StructField: {
  of: (name: string, fieldType: OntologyType, required: boolean) => StructField;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export const StructType: {
  of: (fields: StructField[]) => StructType;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface ArrayType<T extends OntologyType> extends BaseType {
  type: "array";
  subType: T;
}

export const ArrayType: {
  of: <T extends OntologyType>(subType: T) => ArrayType<T>;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export interface SetType<T extends OntologyType> extends BaseType {
  type: "set";
  subType: T;
}

export const SetType: {
  of: <T extends OntologyType>(subType: T) => SetType<T>;
} = {
  of: () => {
    throw new Error("not implemented");
  },
};

export type OntologyType =
  | BooleanType
  | ByteType
  | DateType
  | FloatType
  | TimeSeriesType<OntologyType>
  | TimestampType
  | ShortType
  | DecimalType
  | StringType
  | LongType
  | IntegerType
  | DoubleType
  | GeoPointType
  | GeoShapeType
  | StructType
  | ObjectType
  | ArrayType<OntologyType>
  | SetType<OntologyType>
  | AttachmentType;

export interface Property<TType extends OntologyType = OntologyType> {
  apiName: string;
  baseType: TType;
  docs: string;
  description: string;
}

export type ObjectTypeProperties = {
  [propertyApiName: string]: any;
};

export type BaseObjectType<
  TOntologyObject extends OntologyObject = OntologyObject,
> = {
  type?: TOntologyObject;
  apiName: string;
  properties: {
    [propertyApiName: string]: Property;
  };
  primaryKey: Property;
};
