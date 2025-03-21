import type { GeoJsonObject } from "@osdk/foundry.geo";
export declare const employee50050: {
	__rid: string
	__primaryKey: number
	__apiName: string
	fullName: string
	employeeId: number
	office: string
	class: string
	startDate: string
};
export declare const employee1: {
	readonly __rid: "ri.phonograph2-objects.main.object.88a6fccb-f333-46d6-a07e-7725c5f18b61"
	readonly __primaryKey: 50030
	readonly __apiName: "Employee"
	readonly employeeId: 50030
	readonly fullName: "John Doe"
	readonly office: "NYC"
	readonly class: "Red"
	readonly startDate: "2019-01-01"
	readonly employeeStatus: "TimeSeries<String>"
	readonly employeeSensor: "TimeSeries<>"
	readonly employeeLocation: "GeotimeSeriesReferencePlaceholder"
};
export declare const employee1_50030_JohnDoe: typeof employee1;
export declare const employee2: {
	readonly __rid: "ri.phonograph2-objects.main.object.ae6a0b9a-9b9a-4b9e-8b0a-2b0b9a9a0b9a"
	readonly __primaryKey: 50031
	readonly __apiName: "Employee"
	readonly __title: "Jane Doe"
	readonly employeeId: 50031
	readonly fullName: "Jane Doe"
	readonly office: "SEA"
	readonly class: "Blue"
	readonly startDate: "2012-02-12"
	readonly employeeStatus: "TimeSeries<String>"
	readonly employeeSensor: "TimeSeries<>"
	readonly employeeLocation: "GeotimeSeriesReferencePlaceholder"
};
export declare const employee2_50031_JaneDoe: typeof employee2;
export declare const employee3: {
	__rid: string
	__primaryKey: number
	__apiName: string
	__title: string
	employeeId: number
	fullName: string
	office: string
	class: string
	startDate: string
	employeeStatus: string
	employeeSensor: string
	employeeLocation: string
};
export declare const employee3_Jack_50032: typeof employee3;
export declare const employee4withDerived: {
	__rid: string
	__primaryKey: number
	__apiName: string
	__title: string
	employeeId: number
	fullName: string
	office: string
	class: string
	startDate: string
	derivedPropertyName: number
	employeeStatus: string
	employeeSensor: string
	employeeLocation: string
};
export declare const employee5withUndefinedDerived: {
	__rid: string
	__primaryKey: number
	__apiName: string
	__title: string
	employeeId: number
	fullName: string
	office: string
	class: string
	startDate: string
	derivedPropertyName: undefined
	employeeStatus: string
	employeeSensor: string
	employeeLocation: string
};
export declare const employeePassesStrict: {
	__rid: string
	__primaryKey: number
	__apiName: string
	__title: string
	employeeId: number
	fullName: string
	office: string
	class: string
	startDate: string
	employeeStatus: string
	employeeSensor: string
	employeeLocation: string
};
export declare const officeAreaGeoJson: GeoJsonObject;
export declare const nycOffice: {
	__rid: string
	__primaryKey: string
	__apiName: string
	__title: string
	officeId: string
	name: string
	entrance: {
		type: string
		coordinates: readonly [1.1, 1.1]
	}
	occupiedArea: GeoJsonObject
};
export declare const travisPlayer: {
	__rid: string
	__primaryKey: string
	__apiName: string
	__title: string
	gamesPlayed: number
	name: string
	number: number
	wikiUrl: string
	address: {
		addressLine1: string
		addressLine2: string
		city: string
		state: string
		zipCode: number
	}
	id: string
};
export declare const objectWithAllPropertyTypes1: {
	readonly __rid: "ri.phonograph2-objects.main.object.401ac022-89eb-4591-8b7e-0a912b9efb44"
	readonly __primaryKey: 1
	readonly __apiName: "objectTypeWithAllPropertyTypes"
	readonly __title: "1"
	readonly id: 1
	readonly string: "string"
	readonly boolean: true
	readonly date: "2019-01-01"
	readonly dateTime: "2019-01-01T01:01:01.000Z"
	readonly decimal: 1.1
	readonly integer: 1
	readonly attachment: {
		readonly rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75"
	}
	readonly attachment2: {
		readonly rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a80"
	}
	readonly attachmentArray: readonly [{
		readonly rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75"
	}, {
		readonly rid: "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a80"
	}]
	readonly long: 1
	readonly short: 1
	readonly float: 1.1
	readonly double: 1.1
	readonly byte: 1
	readonly geoPoint: {
		readonly type: "Point"
		readonly coordinates: readonly [1.1, 1.1]
	}
	readonly geoShape: {
		readonly coordinates: readonly [readonly [readonly [1.0, 1.0], readonly [1.0, 2.0], readonly [2.0, 2.0], readonly [2.0, 1.0], readonly [1.0, 1.0]]]
		readonly type: "Polygon"
	}
	readonly stringArray: readonly ["string"]
	readonly booleanArray: readonly [true]
	readonly dateArray: readonly ["2019-01-01"]
	readonly dateTimeArray: readonly ["2019-01-01T01:01:01.000Z"]
	readonly decimalArray: readonly [1.1]
	readonly integerArray: readonly [1]
	readonly longArray: readonly [1]
	readonly shortArray: readonly [1]
	readonly floatArray: readonly [1.1]
	readonly doubleArray: readonly [1.1]
	readonly byteArray: readonly [1]
	readonly geoPointArray: readonly [{
		readonly type: "Point"
		readonly coordinates: readonly [1.1, 1.1]
	}]
	readonly geoShapeArray: readonly [{
		readonly coordinates: readonly [readonly [readonly [1.0, 1.0], readonly [1.0, 2.0], readonly [2.0, 2.0], readonly [2.0, 1.0], readonly [1.0, 1.0]]]
		readonly type: "Polygon"
	}]
	readonly mediaReference: "ri.MediaReferencePlaceholder"
};
export declare const objectWithAllPropertyTypesEmptyEntries: {
	__rid: string
	__primaryKey: number
	__apiName: string
	__title: string
	id: number
};
