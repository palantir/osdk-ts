/**
* A token that can be used to access the media item. This token is only valid for a limited time and can be used to access the media item without authentication repeatedly during the lifetime of the token.
* This token will only be present if explicitly requested by the client by setting  `referenceSigningOptions.signMediaReferences` to true in the endpoints that support it.
* This token can only be generated for media items that are backed by a media set view datasource.
* This token will not be generated for media items in arrays.
* NOTE: This token is generated for the calling user and should not be shared.
*/
export type MediaItemReadToken = string;
