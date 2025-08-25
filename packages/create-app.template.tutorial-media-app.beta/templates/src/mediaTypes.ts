export interface Media {
  /**
   * Fetches content of a media reference property
   */
  fetchContents(): Promise<Response>;
}

/**
 * Metadata of a media item
 */
export interface MediaMetadata {
  path?: string;
  sizeBytes: number;
  mediaType: string;
}
