import { Distance as OG_Distance, DistanceUnit as OG_DistanceUnit } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export declare const Distance: {
    ofMillimeters: (value: number) => {
        unit: OG_DistanceUnit;
        value: number;
    };
    ofCentimeters: (value: number) => {
        /** @deprecated submodule imports arent public api **/
        unit: OG_DistanceUnit;
        value: number;
    };
    ofMeters: (value: number) => {
        unit: OG_DistanceUnit;
        value: number;
    };
    ofKilometers: (value: number) => {
        unit: OG_DistanceUnit;
        value: number;
    };
    ofInches: (value: number) => {
        unit: OG_DistanceUnit;
        value: number;
    };
    ofFeet: (value: number) => {
        unit: OG_DistanceUnit;
        value: number;
    };
    ofYards: (value: number) => {
        unit: OG_DistanceUnit;
        value: number;
    };
    ofMiles: (value: number) => {
        unit: OG_DistanceUnit;
        value: number;
    };
    ofNauticalMiles: (value: number) => {
        unit: OG_DistanceUnit;
        value: number;
    };
};
/** @deprecated submodule imports arent public api **/
export declare const DistanceUnit: typeof OG_DistanceUnit;
/** @deprecated submodule imports arent public api **/
export type Distance = OG_Distance;
/** @deprecated submodule imports arent public api **/
export type DistanceUnit = OG_DistanceUnit;
