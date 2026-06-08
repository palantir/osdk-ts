/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

export interface Media {
  /**
   * Fetches metadata for media reference property
   */
  fetchMetadata(): Promise<MediaMetadata>;
  /**
   * Fetches type-specific metadata for this media item, i.e. page count for documents,
   * dimensions for imagery, duration for audio/video, etc.
   *
   * Returns a `MediaFullMetadata` that can be narrowed on `result.itemMetadata.type`
   * to access variant-specific fields.
   *
   * @beta
   */
  fetchFullMetadata?(): Promise<MediaFullMetadata>;
  /**
   * Fetches content of a media reference property
   */
  fetchContents(): Promise<Response>;
  /**
   * Returns the media reference
   */
  getMediaReference(): MediaReference;
  /**
   * Returns the source location of this media (object type, primary key, property name).
   *
   * Optional because not all media has a source location (e.g., transient/uploaded media).
   */
  getMediaSourceLocation?(): MediaPropertyLocation;
}

/**
 * Location of a media property on an object.
 */
export interface MediaPropertyLocation {
  objectType: string;
  primaryKey: string | number;
  propertyName: string;
}

/**
 * Unique identifier of a media item in Foundry.
 */
export interface MediaReference {
  mimeType: string;
  reference: {
    type: "mediaSetViewItem";
    mediaSetViewItem: {
      mediaItemRid: string;
      mediaSetRid: string;
      mediaSetViewRid: string;
      token?: string;
      /** @deprecated Use `token` instead */
      readToken?: string;
    };
  };
}

/**
 * Object for uploading Media
 */
export interface MediaUpload {
  readonly fileName: string;
  readonly data: Blob;
}

/**
 * Metadata of a media item
 */
export interface MediaMetadata {
  path?: string;
  sizeBytes: number;
  mediaType: string;
}

/**
 * Metadata for a media item, returned by `Media.fetchFullMetadata`. Distinct from
 * the generic `MediaMetadata`.
 */
export interface MediaFullMetadata {
  /**
   * Type-specific metadata. Narrow on `itemMetadata.type` to access variant-specific fields.
   */
  itemMetadata: MediaItemMetadata;
}

/**
 * Type-specific metadata for a media item, discriminated by `type`. Narrow on
 * `result.itemMetadata.type` to access variant-specific fields with full IntelliSense.
 *
 * Note: mio currently supports a `streamingVideo` variant internally, but it is not yet exposed
 * on the platform API and is therefore absent here. When the platform API adds it, the variant
 * will be appended here as a non-breaking change.
 */
export type MediaItemMetadata =
  | ({ type: "document" } & DocumentMediaItemMetadata)
  | ({ type: "imagery" } & ImageryMediaItemMetadata)
  | ({ type: "audio" } & AudioMediaItemMetadata)
  | ({ type: "video" } & VideoMediaItemMetadata)
  | ({ type: "dicom" } & DicomMediaItemMetadata)
  | ({ type: "email" } & EmailMediaItemMetadata)
  | ({ type: "model3d" } & Model3dMediaItemMetadata)
  | ({ type: "spreadsheet" } & SpreadsheetMediaItemMetadata)
  | ({ type: "untyped" } & UntypedMediaItemMetadata);

// ─── Variant interfaces ──────────────────────────────────────────────────────

export interface DocumentMediaItemMetadata {
  format: DocumentDecodeFormat;
  pages?: number;
  sizeBytes: number;
  title?: string;
  author?: string;
}

export interface ImageryMediaItemMetadata {
  format: ImageryDecodeFormat;
  dimensions?: Dimensions;
  bands: Array<BandInfo>;
  attributes: Record<ImageAttributeDomain, Record<ImageAttributeKey, string>>;
  iccProfile?: string;
  geo?: GeoMetadata;
  pages?: number;
  orientation?: Orientation;
  sizeBytes: number;
}

export interface AudioMediaItemMetadata {
  format: AudioDecodeFormat;
  specification: AudioSpecification;
  sizeBytes: number;
}

export interface VideoMediaItemMetadata {
  format: VideoDecodeFormat;
  specification: VideoSpecification;
  sizeBytes: number;
}

export interface DicomMediaItemMetadata {
  metaInformation: DicomMetaInformation;
  mediaType: DicomMediaType;
  commonDataElements: CommonDicomDataElements;
  otherDataElements: Record<DicomDataElementKey, any>;
  sizeBytes: number;
}

export interface EmailMediaItemMetadata {
  format: EmailDecodeFormat;
  sizeBytes: number;
  sender: Array<Mailbox>;
  date: string;
  attachmentCount: number;
  to: Array<MailboxOrGroup>;
  cc: Array<MailboxOrGroup>;
  subject?: string;
  attachments: Array<EmailAttachment>;
}

export interface Model3dMediaItemMetadata {
  format: Model3dDecodeFormat;
  modelType: Model3dType;
  sizeBytes: number;
}

export interface SpreadsheetMediaItemMetadata {
  format: SpreadsheetDecodeFormat;
  sheetNames: Array<string>;
  sizeBytes: number;
  title?: string;
  author?: string;
}

export interface UntypedMediaItemMetadata {
  sizeBytes: number;
}

// ─── Format enums ────────────────────────────────────────────────────────────

export type AudioDecodeFormat =
  | "FLAC"
  | "MP2"
  | "MP3"
  | "MP4"
  | "NIST_SPHERE"
  | "OGG"
  | "WAV"
  | "WEBM";

export type VideoDecodeFormat = "MP4" | "MKV" | "MOV" | "TS";

export type DocumentDecodeFormat =
  | "PDF"
  | "DOC"
  | "DOCX"
  | "TXT"
  | "PPTX"
  | "RTF";

export type SpreadsheetDecodeFormat = "XLSX";

export type ImageryDecodeFormat =
  | "BMP"
  | "TIFF"
  | "NITF"
  | "JP2K"
  | "JPG"
  | "PNG"
  | "WEBP";

export type EmailDecodeFormat = "EML";

export type DicomMediaType =
  | "IMAGE"
  | "MULTI_FRAME_IMAGE"
  | "VIDEO"
  | "STRUCTURED_REPORT";

export type Model3dDecodeFormat = "LAS" | "PLY" | "OBJ";

export type Model3dType = "POINT_CLOUD" | "MESH";

// ─── Audio / video specification ─────────────────────────────────────────────

export interface AudioSpecification {
  bitRate: number;
  durationSeconds: number;
  numberOfChannels?: number;
}

export interface VideoSpecification {
  bitRate: number;
  durationSeconds: number;
}

// ─── Imagery support types ───────────────────────────────────────────────────

export interface Dimensions {
  width: number;
  height: number;
}

export interface BandInfo {
  dataType?: DataType;
  colorInterpretation?: ColorInterpretation;
  paletteInterpretation?: PaletteInterpretation;
  unitInterpretation?: UnitInterpretation;
}

export type DataType =
  | "UNDEFINED"
  | "BYTE"
  | "UINT16"
  | "INT16"
  | "UINT32"
  | "INT32"
  | "FLOAT32"
  | "FLOAT64"
  | "COMPLEX_INT16"
  | "COMPLEX_INT32"
  | "COMPLEX_FLOAT32"
  | "COMPLEX_FLOAT64"
  | "UINT64"
  | "INT64"
  | "INT8";

export type ColorInterpretation =
  | "UNDEFINED"
  | "GRAY"
  | "PALETTE_INDEX"
  | "RED"
  | "GREEN"
  | "BLUE"
  | "ALPHA"
  | "HUE"
  | "SATURATION"
  | "LIGHTNESS"
  | "CYAN"
  | "MAGENTA"
  | "YELLOW"
  | "BLACK"
  | "Y_CB_CR_SPACE_Y"
  | "Y_CB_CR_SPACE_CB"
  | "Y_CB_CR_SPACE_CR";

export type PaletteInterpretation = "GRAY" | "RGB" | "RGBA" | "CMYK" | "HLS";

export interface UnitInterpretation {
  unit?: string;
  scale?: number;
  offset?: number;
}

export type ImageAttributeDomain = LooselyBrandedString<"ImageAttributeDomain">;
export type ImageAttributeKey = LooselyBrandedString<"ImageAttributeKey">;

export interface GeoMetadata {
  crs?: CoordinateReferenceSystem;
  geotransform?: AffineTransform;
  gcpInfo?: GcpList;
  gpsData?: GpsMetadata;
}

export interface CoordinateReferenceSystem {
  wkt?: string;
}

export interface AffineTransform {
  xTranslate?: number;
  xScale?: number;
  xShear?: number;
  yTranslate?: number;
  yShear?: number;
  yScale?: number;
}

export interface GcpList {
  gcps: Array<GroundControlPoint>;
}

export interface GroundControlPoint {
  pixX?: number;
  pixY?: number;
  projX?: number;
  projY?: number;
  projZ?: number;
}

export interface GpsMetadata {
  latitude?: number;
  longitude?: number;
  altitude?: number;
}

export interface Orientation {
  rotationAngle?: RotationAngle;
  flipAxis?: FlipAxis;
}

export type RotationAngle =
  | "DEGREE_90"
  | "DEGREE_180"
  | "DEGREE_270"
  | "UNKNOWN";

export type FlipAxis = "HORIZONTAL" | "VERTICAL" | "UNKNOWN";

// ─── DICOM support types ─────────────────────────────────────────────────────

export type DicomMetaInformation = { type: "v1" } & DicomMetaInformationV1;

export interface DicomMetaInformationV1 {
  mediaStorageSop: string;
  mediaStorageSopInstance: string;
  transferSyntax: string;
}

export interface CommonDicomDataElements {
  numberFrames?: number;
  modality?: Modality;
  patientId?: string;
  studyId?: string;
  studyUid?: string;
  seriesUid?: string;
  studyTime?: string;
  seriesTime?: string;
}

export type DicomDataElementKey = LooselyBrandedString<"DicomDataElementKey">;

export type Modality =
  | "AR"
  | "ASMT"
  | "AU"
  | "BDUS"
  | "BI"
  | "BMD"
  | "CR"
  | "CT"
  | "CTPROTOCOL"
  | "DG"
  | "DOC"
  | "DX"
  | "ECG"
  | "EPS"
  | "ES"
  | "FID"
  | "GM"
  | "HC"
  | "HD"
  | "IO"
  | "IOL"
  | "IVOCT"
  | "IVUS"
  | "KER"
  | "KO"
  | "LEN"
  | "LS"
  | "MG"
  | "MR"
  | "M3D"
  | "NM"
  | "OAM"
  | "OCT"
  | "OP"
  | "OPM"
  | "OPT"
  | "OPTBSV"
  | "OPTENF"
  | "OPV"
  | "OSS"
  | "OT"
  | "PLAN"
  | "PR"
  | "PT"
  | "PX"
  | "REG"
  | "RESP"
  | "RF"
  | "RG"
  | "RTDOSE"
  | "RTIMAGE"
  | "RTINTENT"
  | "RTPLAN"
  | "RTRAD"
  | "RTRECORD"
  | "RTSEGANN"
  | "RTSTRUCT"
  | "RWV"
  | "SEG"
  | "SM"
  | "SMR"
  | "SR"
  | "SRF"
  | "STAIN"
  | "TEXTUREMAP"
  | "TG"
  | "US"
  | "VA"
  | "XA"
  | "XC"
  | "AS"
  | "CD"
  | "CF"
  | "CP"
  | "CS"
  | "DD"
  | "DF"
  | "DM"
  | "DS"
  | "EC"
  | "FA"
  | "FS"
  | "LP"
  | "MA"
  | "MS"
  | "OPR"
  | "ST"
  | "VF";

// ─── Email support types ─────────────────────────────────────────────────────

export interface Mailbox {
  displayName?: string;
  emailAddress: string;
}

export interface MailboxWrapper {
  mailbox: Mailbox;
}

export interface Group {
  groupName: string;
  mailboxes: Array<Mailbox>;
}

export interface GroupWrapper {
  group: Group;
}

export type MailboxOrGroup =
  | ({ type: "mailbox" } & MailboxWrapper)
  | ({ type: "group" } & GroupWrapper);

export interface EmailAttachment {
  attachmentIndex: number;
  fileName?: string;
  mimeType: string;
}

// ─── Brand utility ───────────────────────────────────────────────────────────

/**
 * Loose brand: structurally a string, with an optional phantom field for IntelliSense.
 * Matches the `@osdk/foundry.mediasets` definition so brand-bearing types unify across packages.
 */
export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};
