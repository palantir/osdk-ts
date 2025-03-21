/**
* In this mode, all apply action requests need to be valid (also considered as the collection) in order for the
* submission to go through. In other words, this mode respects the atomicity property, i.e. actions are applied
* either completely, or none at all. It also mirrors the V1 endpoint behaviour.
*/
export interface SubmitAllValidOrNothingThrowingMode {}
