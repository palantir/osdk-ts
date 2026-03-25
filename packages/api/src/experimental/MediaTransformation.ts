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

// ─── Top-level transformation union ──────────────────────────────────────────

/**
 * A media transformation request. The `type` field selects the transformation
 * kind, and each variant requires specific encoding and operation fields.
 *
 * @see {@link https://www.palantir.com/docs/foundry/api/v2/media-sets-v2-resources/media-sets/transform-media-item/ | Transform Media Item}
 * @experimental
 */
export type MediaTransformation =
  | {
    type: "image";
    encoding: ImageryEncodeFormat;
    operations: Array<ImageOperation>;
  }
  | { type: "video"; encoding: VideoEncodeFormat; operation: VideoOperation }
  | { type: "audio"; operation: AudioOperation }
  | { type: "emailToText"; operation: EmailToTextOperation }
  | { type: "spreadsheetToText"; operation: SpreadsheetToTextOperation }
  | {
    type: "videoToAudio";
    encoding: AudioEncodeFormat;
    operation: VideoToAudioOperation;
  }
  | { type: "audioToText"; operation: AudioToTextOperation }
  | { type: "emailToAttachment"; operation: EmailToAttachmentOperation }
  | {
    type: "videoToArchive";
    encoding: ArchiveEncodeFormat;
    operation: VideoToArchiveOperation;
  }
  | { type: "videoToText"; operation: VideoToTextOperation }
  | { type: "imageToText"; operation: ImageToTextOperation }
  | {
    type: "videoToImage";
    encoding: ImageryEncodeFormat;
    operation: VideoToImageOperation;
  }
  | { type: "imageToDocument"; operation: ImageToDocumentOperation }
  | {
    type: "dicomToImage";
    encoding: ImageryEncodeFormat;
    operation: DicomToImageOperation;
  }
  | {
    type: "documentToDocument";
    encoding: DocumentEncodeFormat;
    operation: DocumentToDocumentOperation;
  }
  | {
    type: "documentToImage";
    encoding: ImageryEncodeFormat;
    operation: DocumentToImageOperation;
  }
  | { type: "imageToEmbedding"; operation: ImageToEmbeddingOperation }
  | { type: "documentToText"; operation: DocumentToTextOperation };

// ─── Encoding types ───────────────────────────────────────────────────────────

/**
 * @experimental
 */
export type ImageryEncodeFormat =
  | { type: "jpg" }
  | { type: "png" }
  | { type: "tiff" }
  | { type: "webp" };

/**
 * @experimental
 */
export type VideoEncodeFormat =
  | { type: "mp4" }
  | { type: "mov" }
  | { type: "mkv" }
  | { type: "ts" };

/**
 * @experimental
 */
export type AudioEncodeFormat =
  | { type: "mp3" }
  | { type: "wav"; sampleRate?: number; audioChannelLayout?: { type: string } }
  | { type: "ts" };

/**
 * @experimental
 */
export type ArchiveEncodeFormat = { type: "tar" };

/**
 * @experimental
 */
export type DocumentEncodeFormat = { type: "pdf" };

// ─── Operation types ──────────────────────────────────────────────────────────
// Each is a discriminated union. Required fields are typed;
// deeply nested params use Record<string, unknown>.

/**
 * @experimental
 */
export type ImageOperation =
  | { type: "resize"; width?: number; height?: number; autoOrient?: boolean }
  | { type: "resizeToFitBoundingBox"; width: number; height: number }
  | { type: "rotate"; angle: number }
  | {
    type: "crop";
    xOffset: number;
    yOffset: number;
    width: number;
    height: number;
  }
  | { type: "grayscale" }
  | { type: "tile"; zoom: number; x: number; y: number };

/**
 * @experimental
 */
export type VideoOperation =
  | { type: "transcode" }
  | {
    type: "chunk";
    chunkDurationMilliseconds: number;
    chunkIndex: number;
  };

/**
 * @experimental
 */
export type AudioOperation =
  | {
    type: "channel";
    encodeFormat: AudioEncodeFormat;
    channel: number;
  }
  | {
    type: "chunk";
    encodeFormat: AudioEncodeFormat;
    chunkDurationMilliseconds: number;
    chunkIndex: number;
  }
  | { type: "convert"; encodeFormat: AudioEncodeFormat };

/**
 * @experimental
 */
export type VideoToAudioOperation = { type: "extractAudio" };

/**
 * @experimental
 */
export type AudioToTextOperation =
  | {
    type: "transcribe";
    language?: string;
    diarize?: boolean;
    outputFormat?: Record<string, unknown>;
    performanceMode?: Record<string, unknown>;
  }
  | { type: "waveform"; peaksPerSecond: number };

/**
 * @experimental
 */
export type EmailToTextOperation = {
  type: "getEmailBody";
  outputFormat: string;
};

/**
 * @experimental
 */
export type EmailToAttachmentOperation = {
  type: "getEmailAttachment";
  mimeType: string;
  attachmentIndex: number;
};

/**
 * @experimental
 */
export type SpreadsheetToTextOperation = {
  type: "convertSheetToJson";
  sheetName: string;
};

/**
 * @experimental
 */
export type VideoToArchiveOperation = {
  type: "extractSceneFrames";
  encoding: ImageryEncodeFormat;
  sceneScore?: Record<string, unknown>;
};

/**
 * @experimental
 */
export type VideoToTextOperation = {
  type: "getTimestampsForSceneFrames";
  sceneScore?: Record<string, unknown>;
};

/**
 * @experimental
 */
export type ImageToTextOperation =
  | {
    type: "extractLayoutAwareContent";
    parameters: Record<string, unknown>;
  }
  | { type: "ocr"; parameters: Record<string, unknown> };

/**
 * @experimental
 */
export type VideoToImageOperation =
  | { type: "extractFirstFrame"; height?: number; width?: number }
  | {
    type: "extractFramesAtTimestamps";
    height?: number;
    width?: number;
    timestamp: number;
  };

/**
 * @experimental
 */
export type ImageToDocumentOperation = { type: "createPdf" };

/**
 * @experimental
 */
export type DicomToImageOperation = {
  type: "renderImageLayer";
  layerNumber?: number;
  height?: number;
  width?: number;
};

/**
 * @experimental
 */
export type DocumentToDocumentOperation =
  | {
    type: "slicePdfRange";
    startPageInclusive: number;
    endPageExclusive: number;
    strictlyEnforceEndPage?: boolean;
  }
  | { type: "convertDocument" };

/**
 * @experimental
 */
export type DocumentToImageOperation =
  | {
    type: "renderPage";
    pageNumber?: number;
    height?: number;
    width?: number;
  }
  | {
    type: "renderPageToFitBoundingBox";
    pageNumber?: number;
    width: number;
    height: number;
  };

/**
 * @experimental
 */
export type ImageToEmbeddingOperation = {
  type: "generateEmbedding";
  modelId: string;
};

/**
 * @experimental
 */
export type DocumentToTextOperation =
  | { type: "extractAllText" }
  | { type: "extractTableOfContents" }
  | { type: "getPdfPageDimensions" }
  | { type: "extractFormFields" }
  | { type: "extractUnstructuredTextFromPage"; pageNumber: number }
  | {
    type: "extractTextFromPagesToArray";
    startPage?: number;
    endPage?: number;
  }
  | {
    type: "ocrOnPage";
    pageNumber: number;
    parameters: Record<string, unknown>;
  }
  | {
    type: "ocrOnPages";
    pageNumber: number;
    parameters: Record<string, unknown>;
  }
  | {
    type: "extractLayoutAwareContent";
    parameters: Record<string, unknown>;
  }
  | {
    type: "extractLayoutAwareTextV2";
    pageRange?: Record<string, unknown>;
    config: Record<string, unknown>;
  }
  | {
    type: "extractTextV2";
    pageRange?: Record<string, unknown>;
    config: Record<string, unknown>;
  }
  | {
    type: "extractVlmText";
    llmSpec: Record<string, unknown>;
    preprocessingConfiguration?: Record<string, unknown>;
    imageSpec?: Record<string, unknown>;
    outputFormat: Record<string, unknown>;
    pageRange?: Record<string, unknown>;
  };
