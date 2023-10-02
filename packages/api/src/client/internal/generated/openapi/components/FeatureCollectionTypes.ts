import { Feature } from "./Feature";

export interface FeatureCollectionTypes_Feature extends Feature {
    type: "Feature";
}

function isFeature(obj: FeatureCollectionTypes): obj is FeatureCollectionTypes_Feature {
    return (obj.type === "Feature");
}

function Feature(obj: Feature): FeatureCollectionTypes_Feature {
    return {
        ...obj,
        type: "Feature",
    };
}

export interface FeatureCollectionTypesVisitor<T> {
    Feature: (obj: Feature) => T;
    unknown: (obj: FeatureCollectionTypes) => T;
}

function visit<T>(obj: FeatureCollectionTypes, visitor: FeatureCollectionTypesVisitor<T>): T {
    if (isFeature(obj)) {
        return visitor.Feature(obj);
    }

    return visitor.unknown(obj);
}

export type FeatureCollectionTypes = FeatureCollectionTypes_Feature;

export const FeatureCollectionTypes = {
    isFeature: isFeature,
    Feature: Feature,
    visit: visit,
};
