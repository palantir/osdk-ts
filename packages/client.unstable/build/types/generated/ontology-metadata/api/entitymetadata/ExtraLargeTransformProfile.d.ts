/**
* Funnel jobs for this object types will be run with the largest possible transform profile. Note that this
* value is designed as a break-the-glass option for failing jobs and should be used carefully. Unnecessary
* usage of this option could lead to expensive builds and hog resources from other builds/services.
*/
export interface ExtraLargeTransformProfile {}
