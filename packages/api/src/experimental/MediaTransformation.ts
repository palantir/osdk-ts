/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { Just } from "../aggregate/Just.js";

// ─── Top-level transformation ─────────────────────────────────────────────────

/**
 * A media transformation request. The `$`-prefixed key selects the
 * transformation kind, and each variant requires specific encoding and
 * operation fields.
 *
 * @see {@link https://www.palantir.com/docs/foundry/api/v2/media-sets-v2-resources/media-sets/transform-media-item/ | Transform Media Item}
 * @experimental
 */
export interface MediaTransformationOptions {
  "$image": {
    $encoding: ImageryEncoding;
    $operations: Array<ImageOperation>;
  };
  "$video": { $encoding: VideoEncoding; $operation: VideoOperation };
  "$audio": { $operation: AudioOperation };
  "$emailToText": { $operation: EmailToTextOperation };
  "$spreadsheetToText": { $operation: SpreadsheetToTextOperation };
  "$videoToAudio": {
    $encoding: AudioEncoding;
    $operation: VideoToAudioOperation;
  };
  "$audioToText": { $operation: AudioToTextOperation };
  "$emailToAttachment": { $operation: EmailToAttachmentOperation };
  "$videoToArchive": {
    $encoding: ArchiveEncoding;
    $operation: VideoToArchiveOperation;
  };
  "$videoToText": { $operation: VideoToTextOperation };
  "$imageToText": { $operation: ImageToTextOperation };
  "$videoToImage": {
    $encoding: ImageryEncoding;
    $operation: VideoToImageOperation;
  };
  "$imageToDocument": { $operation: ImageToDocumentOperation };
  "$dicomToImage": {
    $encoding: ImageryEncoding;
    $operation: DicomToImageOperation;
  };
  "$documentToDocument": {
    $encoding: DocumentEncoding;
    $operation: DocumentToDocumentOperation;
  };
  "$documentToImage": {
    $encoding: ImageryEncoding;
    $operation: DocumentToImageOperation;
  };
  "$imageToEmbedding": { $operation: ImageToEmbeddingOperation };
  "$documentToText": { $operation: DocumentToTextOperation };
}

/**
 * @experimental
 */
export namespace MediaTransformation {
  export interface $image extends Just<"$image", MediaTransformationOptions> {}
  export interface $video extends Just<"$video", MediaTransformationOptions> {}
  export interface $audio extends Just<"$audio", MediaTransformationOptions> {}
  export interface $emailToText
    extends Just<"$emailToText", MediaTransformationOptions>
  {}
  export interface $spreadsheetToText
    extends Just<"$spreadsheetToText", MediaTransformationOptions>
  {}
  export interface $videoToAudio
    extends Just<"$videoToAudio", MediaTransformationOptions>
  {}
  export interface $audioToText
    extends Just<"$audioToText", MediaTransformationOptions>
  {}
  export interface $emailToAttachment
    extends Just<"$emailToAttachment", MediaTransformationOptions>
  {}
  export interface $videoToArchive
    extends Just<"$videoToArchive", MediaTransformationOptions>
  {}
  export interface $videoToText
    extends Just<"$videoToText", MediaTransformationOptions>
  {}
  export interface $imageToText
    extends Just<"$imageToText", MediaTransformationOptions>
  {}
  export interface $videoToImage
    extends Just<"$videoToImage", MediaTransformationOptions>
  {}
  export interface $imageToDocument
    extends Just<"$imageToDocument", MediaTransformationOptions>
  {}
  export interface $dicomToImage
    extends Just<"$dicomToImage", MediaTransformationOptions>
  {}
  export interface $documentToDocument
    extends Just<"$documentToDocument", MediaTransformationOptions>
  {}
  export interface $documentToImage
    extends Just<"$documentToImage", MediaTransformationOptions>
  {}
  export interface $imageToEmbedding
    extends Just<"$imageToEmbedding", MediaTransformationOptions>
  {}
  export interface $documentToText
    extends Just<"$documentToText", MediaTransformationOptions>
  {}
}

/**
 * @experimental
 */
export type MediaTransformation =
  | MediaTransformation.$image
  | MediaTransformation.$video
  | MediaTransformation.$audio
  | MediaTransformation.$emailToText
  | MediaTransformation.$spreadsheetToText
  | MediaTransformation.$videoToAudio
  | MediaTransformation.$audioToText
  | MediaTransformation.$emailToAttachment
  | MediaTransformation.$videoToArchive
  | MediaTransformation.$videoToText
  | MediaTransformation.$imageToText
  | MediaTransformation.$videoToImage
  | MediaTransformation.$imageToDocument
  | MediaTransformation.$dicomToImage
  | MediaTransformation.$documentToDocument
  | MediaTransformation.$documentToImage
  | MediaTransformation.$imageToEmbedding
  | MediaTransformation.$documentToText;

// ─── Encoding types ───────────────────────────────────────────────────────────

/**
 * @experimental
 */
export type ImageryEncoding = "jpg" | "png" | "tiff" | "webp";

/**
 * @experimental
 */
export type VideoEncoding = "mp4" | "mov" | "mkv" | "ts";

/**
 * @experimental
 */
export type AudioEncoding =
  | "mp3"
  | "ts"
  | {
    $wav: {
      $sampleRate?: number;
      $audioChannelLayout?: { $numberOfChannels: number };
    };
  };

/**
 * @experimental
 */
export type ArchiveEncoding = "tar";

/**
 * @experimental
 */
export type DocumentEncoding = "pdf";

// ─── Image operations ─────────────────────────────────────────────────────────

/**
 * @experimental
 */
export interface ImageOperationOptions {
  "$resize": { $width?: number; $height?: number; $autoOrient?: boolean };
  "$resizeToFitBoundingBox": { $width: number; $height: number };
  "$rotate": { $angle: number };
  "$crop": {
    $xOffset: number;
    $yOffset: number;
    $width: number;
    $height: number;
  };
  "$grayscale": {};
  "$tile": { $zoom: number; $x: number; $y: number };
}

/**
 * @experimental
 */
export namespace ImageOperation {
  export interface $resize extends Just<"$resize", ImageOperationOptions> {}
  export interface $resizeToFitBoundingBox
    extends Just<"$resizeToFitBoundingBox", ImageOperationOptions>
  {}
  export interface $rotate extends Just<"$rotate", ImageOperationOptions> {}
  export interface $crop extends Just<"$crop", ImageOperationOptions> {}
  export interface $grayscale
    extends Just<"$grayscale", ImageOperationOptions>
  {}
  export interface $tile extends Just<"$tile", ImageOperationOptions> {}
}

/**
 * @experimental
 */
export type ImageOperation =
  | ImageOperation.$resize
  | ImageOperation.$resizeToFitBoundingBox
  | ImageOperation.$rotate
  | ImageOperation.$crop
  | ImageOperation.$grayscale
  | ImageOperation.$tile;

// ─── Video operations ─────────────────────────────────────────────────────────

/**
 * @experimental
 */
export interface VideoOperationOptions {
  "$transcode": {};
  "$chunk": { $chunkDurationMilliseconds: number; $chunkIndex: number };
}

/**
 * @experimental
 */
export namespace VideoOperation {
  export interface $transcode
    extends Just<"$transcode", VideoOperationOptions>
  {}
  export interface $chunk extends Just<"$chunk", VideoOperationOptions> {}
}

/**
 * @experimental
 */
export type VideoOperation =
  | VideoOperation.$transcode
  | VideoOperation.$chunk;

// ─── Audio operations ─────────────────────────────────────────────────────────

/**
 * @experimental
 */
export interface AudioOperationOptions {
  "$channel": { $encodeFormat: AudioEncoding; $channel: number };
  "$chunk": {
    $encodeFormat: AudioEncoding;
    $chunkDurationMilliseconds: number;
    $chunkIndex: number;
  };
  "$convert": { $encodeFormat: AudioEncoding };
}

/**
 * @experimental
 */
export namespace AudioOperation {
  export interface $channel extends Just<"$channel", AudioOperationOptions> {}
  export interface $chunk extends Just<"$chunk", AudioOperationOptions> {}
  export interface $convert extends Just<"$convert", AudioOperationOptions> {}
}

/**
 * @experimental
 */
export type AudioOperation =
  | AudioOperation.$channel
  | AudioOperation.$chunk
  | AudioOperation.$convert;

// ─── Other operation types ────────────────────────────────────────────────────

/**
 * @experimental
 */
export interface VideoToAudioOperationOptions {
  "$extractAudio": {};
}

export namespace VideoToAudioOperation {
  export interface $extractAudio
    extends Just<"$extractAudio", VideoToAudioOperationOptions>
  {}
}

export type VideoToAudioOperation = VideoToAudioOperation.$extractAudio;

/**
 * @experimental
 */
export interface AudioToTextOperationOptions {
  "$transcribe": {
    $language?: string;
    $diarize?: boolean;
    $outputFormat?: Record<string, unknown>;
    $performanceMode?: Record<string, unknown>;
  };
  "$waveform": { $peaksPerSecond: number };
}

export namespace AudioToTextOperation {
  export interface $transcribe
    extends Just<"$transcribe", AudioToTextOperationOptions>
  {}
  export interface $waveform
    extends Just<"$waveform", AudioToTextOperationOptions>
  {}
}

export type AudioToTextOperation =
  | AudioToTextOperation.$transcribe
  | AudioToTextOperation.$waveform;

/**
 * @experimental
 */
export interface EmailToTextOperationOptions {
  "$getEmailBody": { $outputFormat: string };
}

export namespace EmailToTextOperation {
  export interface $getEmailBody
    extends Just<"$getEmailBody", EmailToTextOperationOptions>
  {}
}

export type EmailToTextOperation = EmailToTextOperation.$getEmailBody;

/**
 * @experimental
 */
export interface EmailToAttachmentOperationOptions {
  "$getEmailAttachment": { $mimeType: string; $attachmentIndex: number };
}

export namespace EmailToAttachmentOperation {
  export interface $getEmailAttachment
    extends Just<"$getEmailAttachment", EmailToAttachmentOperationOptions>
  {}
}

export type EmailToAttachmentOperation =
  EmailToAttachmentOperation.$getEmailAttachment;

/**
 * @experimental
 */
export interface SpreadsheetToTextOperationOptions {
  "$convertSheetToJson": { $sheetName: string };
}

export namespace SpreadsheetToTextOperation {
  export interface $convertSheetToJson
    extends Just<"$convertSheetToJson", SpreadsheetToTextOperationOptions>
  {}
}

export type SpreadsheetToTextOperation =
  SpreadsheetToTextOperation.$convertSheetToJson;

/**
 * @experimental
 */
export interface VideoToArchiveOperationOptions {
  "$extractSceneFrames": {
    $encoding: ImageryEncoding;
    $sceneScore?: Record<string, unknown>;
  };
}

export namespace VideoToArchiveOperation {
  export interface $extractSceneFrames
    extends Just<"$extractSceneFrames", VideoToArchiveOperationOptions>
  {}
}

export type VideoToArchiveOperation =
  VideoToArchiveOperation.$extractSceneFrames;

/**
 * @experimental
 */
export interface VideoToTextOperationOptions {
  "$getTimestampsForSceneFrames": {
    $sceneScore?: Record<string, unknown>;
  };
}

export namespace VideoToTextOperation {
  export interface $getTimestampsForSceneFrames
    extends Just<"$getTimestampsForSceneFrames", VideoToTextOperationOptions>
  {}
}

export type VideoToTextOperation =
  VideoToTextOperation.$getTimestampsForSceneFrames;

/**
 * @experimental
 */
export interface ImageToTextOperationOptions {
  "$extractLayoutAwareContent": { $parameters: Record<string, unknown> };
  "$ocr": { $parameters: Record<string, unknown> };
}

export namespace ImageToTextOperation {
  export interface $extractLayoutAwareContent
    extends Just<"$extractLayoutAwareContent", ImageToTextOperationOptions>
  {}
  export interface $ocr extends Just<"$ocr", ImageToTextOperationOptions> {}
}

export type ImageToTextOperation =
  | ImageToTextOperation.$extractLayoutAwareContent
  | ImageToTextOperation.$ocr;

/**
 * @experimental
 */
export interface VideoToImageOperationOptions {
  "$extractFirstFrame": { $height?: number; $width?: number };
  "$extractFramesAtTimestamps": {
    $height?: number;
    $width?: number;
    $timestamp: number;
  };
}

export namespace VideoToImageOperation {
  export interface $extractFirstFrame
    extends Just<"$extractFirstFrame", VideoToImageOperationOptions>
  {}
  export interface $extractFramesAtTimestamps
    extends Just<"$extractFramesAtTimestamps", VideoToImageOperationOptions>
  {}
}

export type VideoToImageOperation =
  | VideoToImageOperation.$extractFirstFrame
  | VideoToImageOperation.$extractFramesAtTimestamps;

/**
 * @experimental
 */
export interface ImageToDocumentOperationOptions {
  "$createPdf": {};
}

export namespace ImageToDocumentOperation {
  export interface $createPdf
    extends Just<"$createPdf", ImageToDocumentOperationOptions>
  {}
}

export type ImageToDocumentOperation = ImageToDocumentOperation.$createPdf;

/**
 * @experimental
 */
export interface DicomToImageOperationOptions {
  "$renderImageLayer": {
    $layerNumber?: number;
    $height?: number;
    $width?: number;
  };
}

export namespace DicomToImageOperation {
  export interface $renderImageLayer
    extends Just<"$renderImageLayer", DicomToImageOperationOptions>
  {}
}

export type DicomToImageOperation = DicomToImageOperation.$renderImageLayer;

/**
 * @experimental
 */
export interface DocumentToDocumentOperationOptions {
  "$slicePdfRange": {
    $startPageInclusive: number;
    $endPageExclusive: number;
    $strictlyEnforceEndPage?: boolean;
  };
  "$convertDocument": {};
}

export namespace DocumentToDocumentOperation {
  export interface $slicePdfRange
    extends Just<"$slicePdfRange", DocumentToDocumentOperationOptions>
  {}
  export interface $convertDocument
    extends Just<"$convertDocument", DocumentToDocumentOperationOptions>
  {}
}

export type DocumentToDocumentOperation =
  | DocumentToDocumentOperation.$slicePdfRange
  | DocumentToDocumentOperation.$convertDocument;

/**
 * @experimental
 */
export interface DocumentToImageOperationOptions {
  "$renderPage": { $pageNumber?: number; $height?: number; $width?: number };
  "$renderPageToFitBoundingBox": {
    $pageNumber?: number;
    $width: number;
    $height: number;
  };
}

export namespace DocumentToImageOperation {
  export interface $renderPage
    extends Just<"$renderPage", DocumentToImageOperationOptions>
  {}
  export interface $renderPageToFitBoundingBox
    extends Just<"$renderPageToFitBoundingBox", DocumentToImageOperationOptions>
  {}
}

export type DocumentToImageOperation =
  | DocumentToImageOperation.$renderPage
  | DocumentToImageOperation.$renderPageToFitBoundingBox;

/**
 * @experimental
 */
export interface ImageToEmbeddingOperationOptions {
  "$generateEmbedding": { $modelId: string };
}

export namespace ImageToEmbeddingOperation {
  export interface $generateEmbedding
    extends Just<"$generateEmbedding", ImageToEmbeddingOperationOptions>
  {}
}

export type ImageToEmbeddingOperation =
  ImageToEmbeddingOperation.$generateEmbedding;

/**
 * @experimental
 */
export interface DocumentToTextOperationOptions {
  "$extractAllText": {};
  "$extractTableOfContents": {};
  "$getPdfPageDimensions": {};
  "$extractFormFields": {};
  "$extractUnstructuredTextFromPage": { $pageNumber: number };
  "$extractTextFromPagesToArray": {
    $startPage?: number;
    $endPage?: number;
  };
  "$ocrOnPage": {
    $pageNumber: number;
    $parameters: Record<string, unknown>;
  };
  "$ocrOnPages": {
    $pageNumber: number;
    $parameters: Record<string, unknown>;
  };
  "$extractLayoutAwareContent": { $parameters: Record<string, unknown> };
  "$extractLayoutAwareTextV2": {
    $pageRange?: Record<string, unknown>;
    $config: Record<string, unknown>;
  };
  "$extractTextV2": {
    $pageRange?: Record<string, unknown>;
    $config: Record<string, unknown>;
  };
  "$extractVlmText": {
    $llmSpec: Record<string, unknown>;
    $preprocessingConfiguration?: Record<string, unknown>;
    $imageSpec?: Record<string, unknown>;
    $outputFormat: Record<string, unknown>;
    $pageRange?: Record<string, unknown>;
  };
}

export namespace DocumentToTextOperation {
  export interface $extractAllText
    extends Just<"$extractAllText", DocumentToTextOperationOptions>
  {}
  export interface $extractTableOfContents
    extends Just<"$extractTableOfContents", DocumentToTextOperationOptions>
  {}
  export interface $getPdfPageDimensions
    extends Just<"$getPdfPageDimensions", DocumentToTextOperationOptions>
  {}
  export interface $extractFormFields
    extends Just<"$extractFormFields", DocumentToTextOperationOptions>
  {}
  export interface $extractUnstructuredTextFromPage
    extends
      Just<"$extractUnstructuredTextFromPage", DocumentToTextOperationOptions>
  {}
  export interface $extractTextFromPagesToArray
    extends Just<"$extractTextFromPagesToArray", DocumentToTextOperationOptions>
  {}
  export interface $ocrOnPage
    extends Just<"$ocrOnPage", DocumentToTextOperationOptions>
  {}
  export interface $ocrOnPages
    extends Just<"$ocrOnPages", DocumentToTextOperationOptions>
  {}
  export interface $extractLayoutAwareContent
    extends Just<"$extractLayoutAwareContent", DocumentToTextOperationOptions>
  {}
  export interface $extractLayoutAwareTextV2
    extends Just<"$extractLayoutAwareTextV2", DocumentToTextOperationOptions>
  {}
  export interface $extractTextV2
    extends Just<"$extractTextV2", DocumentToTextOperationOptions>
  {}
  export interface $extractVlmText
    extends Just<"$extractVlmText", DocumentToTextOperationOptions>
  {}
}

export type DocumentToTextOperation =
  | DocumentToTextOperation.$extractAllText
  | DocumentToTextOperation.$extractTableOfContents
  | DocumentToTextOperation.$getPdfPageDimensions
  | DocumentToTextOperation.$extractFormFields
  | DocumentToTextOperation.$extractUnstructuredTextFromPage
  | DocumentToTextOperation.$extractTextFromPagesToArray
  | DocumentToTextOperation.$ocrOnPage
  | DocumentToTextOperation.$ocrOnPages
  | DocumentToTextOperation.$extractLayoutAwareContent
  | DocumentToTextOperation.$extractLayoutAwareTextV2
  | DocumentToTextOperation.$extractTextV2
  | DocumentToTextOperation.$extractVlmText;
