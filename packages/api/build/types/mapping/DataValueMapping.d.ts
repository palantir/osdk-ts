import type { Attachment, AttachmentUpload } from "../object/Attachment.js";
import type { MediaReference } from "../object/Media.js";
/**
* Map from the DataValue type to the typescript type that we return
*/
export interface DataValueWireToClient {
	attachment: Attachment;
	boolean: boolean;
	byte: number;
	datetime: string;
	date: string;
	decimal: string;
	float: number;
	double: number;
	integer: number;
	long: string;
	marking: string;
	null: null;
	short: number;
	string: string;
	timestamp: string;
	mediaReference: MediaReference;
	twoDimensionalAggregation: {
		key: AllowedBucketKeyTypes
		value: AllowedBucketTypes
	}[];
	threeDimensionalAggregation: {
		key: AllowedBucketKeyTypes
		groups: {
			key: AllowedBucketKeyTypes
			value: AllowedBucketTypes
		}[]
	}[];
	struct: Record<string, any>;
	set: Set<any>;
	objectType: string;
}
/**
* Map from the DataValue type to the typescript type that we accept
*/
export interface DataValueClientToWire {
	attachment: string | AttachmentUpload | Blob & {
		readonly name: string
	};
	boolean: boolean;
	byte: number;
	datetime: string;
	date: string;
	decimal: string | number;
	float: number;
	double: number;
	integer: number;
	long: string | number;
	marking: string;
	null: null;
	short: number;
	string: string;
	timestamp: string;
	set: Set<any>;
	mediaReference: MediaReference;
	twoDimensionalAggregation: {
		key: AllowedBucketKeyTypes
		value: AllowedBucketTypes
	}[];
	threeDimensionalAggregation: {
		key: AllowedBucketKeyTypes
		groups: {
			key: AllowedBucketKeyTypes
			value: AllowedBucketTypes
		}[]
	}[];
	struct: Record<string, any>;
	objectType: string;
}
export type AllowedBucketTypes = string | number | boolean;
export type AllowedBucketKeyTypes = AllowedBucketTypes | {
	startValue: AllowedBucketTypes
	endValue: AllowedBucketTypes
};
