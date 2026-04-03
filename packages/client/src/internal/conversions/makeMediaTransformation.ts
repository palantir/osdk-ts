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

import type {
  AudioEncoding,
  AudioOperation,
  AudioToTextOperation,
  DicomToImageOperation,
  DocumentTextExtractionConfig,
  DocumentToDocumentOperation,
  DocumentToImageOperation,
  DocumentToTextOperation,
  EmailToAttachmentOperation,
  EmailToTextOperation,
  ImageOperation,
  ImageSpec,
  ImageToDocumentOperation,
  ImageToEmbeddingOperation,
  ImageToTextOperation,
  LayoutAwareExtractionParameters,
  LlmSpec,
  MediaTransformation,
  OcrLanguageOrScript,
  OcrOutputFormat,
  OcrParameters,
  PageRange,
  SpreadsheetToTextOperation,
  TranscribeOutputFormat,
  VideoOperation,
  VideoToArchiveOperation,
  VideoToAudioOperation,
  VideoToImageOperation,
  VideoToTextOperation,
  VlmPreprocessingConfig,
} from "@osdk/api/unstable";
import type { Transformation } from "@osdk/foundry.mediasets";

export function makeMediaTransformation(
  transformation: MediaTransformation,
): Transformation {
  if ("$image" in transformation && transformation.$image != null) {
    const t = transformation.$image;
    return {
      type: "image",
      encoding: { type: t.$encoding },
      operations: t.$operations.map(convertImageOperation),
    };
  } else if ("$video" in transformation && transformation.$video != null) {
    const t = transformation.$video;
    return {
      type: "video",
      encoding: { type: t.$encoding },
      operation: convertVideoOperation(t.$operation),
    };
  } else if ("$audio" in transformation && transformation.$audio != null) {
    return {
      type: "audio",
      operation: convertAudioOperation(transformation.$audio.$operation),
    };
  } else if (
    "$emailToText" in transformation && transformation.$emailToText != null
  ) {
    return {
      type: "emailToText",
      operation: convertEmailToTextOperation(
        transformation.$emailToText.$operation,
      ),
    };
  } else if (
    "$spreadsheetToText" in transformation
    && transformation.$spreadsheetToText != null
  ) {
    return {
      type: "spreadsheetToText",
      operation: convertSpreadsheetToTextOperation(
        transformation.$spreadsheetToText.$operation,
      ),
    };
  } else if (
    "$videoToAudio" in transformation && transformation.$videoToAudio != null
  ) {
    const t = transformation.$videoToAudio;
    return {
      type: "videoToAudio",
      encoding: convertAudioEncoding(t.$encoding),
      operation: convertVideoToAudioOperation(t.$operation),
    };
  } else if (
    "$audioToText" in transformation && transformation.$audioToText != null
  ) {
    return {
      type: "audioToText",
      operation: convertAudioToTextOperation(
        transformation.$audioToText.$operation,
      ),
    };
  } else if (
    "$emailToAttachment" in transformation
    && transformation.$emailToAttachment != null
  ) {
    return {
      type: "emailToAttachment",
      operation: convertEmailToAttachmentOperation(
        transformation.$emailToAttachment.$operation,
      ),
    };
  } else if (
    "$videoToArchive" in transformation
    && transformation.$videoToArchive != null
  ) {
    const t = transformation.$videoToArchive;
    return {
      type: "videoToArchive",
      encoding: { type: t.$encoding },
      operation: convertVideoToArchiveOperation(t.$operation),
    };
  } else if (
    "$videoToText" in transformation && transformation.$videoToText != null
  ) {
    return {
      type: "videoToText",
      operation: convertVideoToTextOperation(
        transformation.$videoToText.$operation,
      ),
    };
  } else if (
    "$imageToText" in transformation && transformation.$imageToText != null
  ) {
    return {
      type: "imageToText",
      operation: convertImageToTextOperation(
        transformation.$imageToText.$operation,
      ),
    };
  } else if (
    "$videoToImage" in transformation && transformation.$videoToImage != null
  ) {
    const t = transformation.$videoToImage;
    return {
      type: "videoToImage",
      encoding: { type: t.$encoding },
      operation: convertVideoToImageOperation(t.$operation),
    };
  } else if (
    "$imageToDocument" in transformation
    && transformation.$imageToDocument != null
  ) {
    return {
      type: "imageToDocument",
      operation: convertImageToDocumentOperation(
        transformation.$imageToDocument.$operation,
      ),
    };
  } else if (
    "$dicomToImage" in transformation && transformation.$dicomToImage != null
  ) {
    const t = transformation.$dicomToImage;
    return {
      type: "dicomToImage",
      encoding: { type: t.$encoding },
      operation: convertDicomToImageOperation(t.$operation),
    };
  } else if (
    "$documentToDocument" in transformation
    && transformation.$documentToDocument != null
  ) {
    const t = transformation.$documentToDocument;
    return {
      type: "documentToDocument",
      encoding: { type: t.$encoding },
      operation: convertDocumentToDocumentOperation(t.$operation),
    };
  } else if (
    "$documentToImage" in transformation
    && transformation.$documentToImage != null
  ) {
    const t = transformation.$documentToImage;
    return {
      type: "documentToImage",
      encoding: { type: t.$encoding },
      operation: convertDocumentToImageOperation(t.$operation),
    };
  } else if (
    "$imageToEmbedding" in transformation
    && transformation.$imageToEmbedding != null
  ) {
    return {
      type: "imageToEmbedding",
      operation: convertImageToEmbeddingOperation(
        transformation.$imageToEmbedding.$operation,
      ),
    };
  } else {
    return {
      type: "documentToText",
      operation: convertDocumentToTextOperation(
        (transformation as MediaTransformation & { $documentToText: {} })
          .$documentToText.$operation,
      ),
    };
  }
}

// ─── Shared converters ──────────────────────────────────────────────────────

function convertAudioEncoding(encoding: AudioEncoding) {
  if (typeof encoding === "string") {
    return { type: encoding };
  }
  return {
    type: "wav",
    sampleRate: encoding.$wav.$sampleRate,
    audioChannelLayout: encoding.$wav.$audioChannelLayout != null
      ? {
        type: "numberOfChannels",
        numberOfChannels: encoding.$wav.$audioChannelLayout.$numberOfChannels,
      }
      : undefined,
  };
}

function convertPageRange(range: PageRange) {
  return {
    startPageInclusive: range.$startPageInclusive,
    endPageExclusive: range.$endPageExclusive,
  };
}

function convertOcrOutputFormat(fmt: OcrOutputFormat) {
  if ("$hocr" in fmt) {
    return { type: "hocr" };
  } else {
    return { type: "text" };
  }
}

function convertOcrLanguageOrScript(item: OcrLanguageOrScript) {
  if ("$language" in item && item.$language != null) {
    return { type: "language", language: item.$language.$language };
  } else {
    const script = (item as OcrLanguageOrScript & { $script: {} }).$script;
    return { type: "script", script: script.$script };
  }
}

function convertOcrParameters(params: OcrParameters) {
  return {
    outputFormat: convertOcrOutputFormat(params.$outputFormat),
    languages: params.$languages.map(convertOcrLanguageOrScript),
  };
}

function convertLayoutAwareExtractionParameters(
  params: LayoutAwareExtractionParameters,
) {
  return {
    languages: params.$languages,
  };
}

function convertDocumentTextExtractionConfig(
  config: DocumentTextExtractionConfig,
) {
  return {
    format: config.$format,
    mode: config.$mode,
    languages: config.$languages.map(convertOcrLanguageOrScript),
  };
}

function convertTranscribeOutputFormat(fmt: TranscribeOutputFormat) {
  if ("$plainTextNoSegmentData" in fmt) {
    return { type: "plainTextNoSegmentData" };
  } else if ("$json" in fmt) {
    return { type: "json" };
  } else {
    return { type: "pttml" };
  }
}

function convertLlmSpec(spec: LlmSpec) {
  return {
    type: "chat",
    chat: {
      modelLocator: { type: "apiName", apiName: spec.$chat.$modelLocator },
      systemPrompt: spec.$chat.$systemPrompt,
      userPrompt: spec.$chat.$userPrompt,
      maxTokens: spec.$chat.$maxTokens,
    },
  };
}

function convertVlmPreprocessingConfig(config: VlmPreprocessingConfig) {
  if ("$layoutAware" in config && config.$layoutAware != null) {
    return {
      type: "layoutAware",
      transformationConfig: convertDocumentTextExtractionConfig(
        config.$layoutAware.$transformationConfig,
      ),
    };
  } else {
    const ext =
      (config as VlmPreprocessingConfig & { $extractText: {} }).$extractText;
    return {
      type: "extractText",
      extractText: convertDocumentTextExtractionConfig(ext.$extractText),
    };
  }
}

function convertImageSpec(spec: ImageSpec) {
  return {
    resizingMode: spec.$resizingMode,
    height: spec.$height,
    width: spec.$width,
    mimeType: spec.$mimeType,
  };
}

// ─── Operation converters ───────────────────────────────────────────────────

function convertImageOperation(op: ImageOperation) {
  if ("$resize" in op && op.$resize != null) {
    return {
      type: "resize",
      width: op.$resize.$width,
      height: op.$resize.$height,
      autoOrient: op.$resize.$autoOrient,
    };
  } else if (
    "$resizeToFitBoundingBox" in op && op.$resizeToFitBoundingBox != null
  ) {
    return {
      type: "resizeToFitBoundingBox",
      width: op.$resizeToFitBoundingBox.$width,
      height: op.$resizeToFitBoundingBox.$height,
    };
  } else if ("$rotate" in op && op.$rotate != null) {
    return {
      type: "rotate",
      angle: op.$rotate.$angle,
    };
  } else if ("$crop" in op && op.$crop != null) {
    return {
      type: "crop",
      xOffset: op.$crop.$xOffset,
      yOffset: op.$crop.$yOffset,
      width: op.$crop.$width,
      height: op.$crop.$height,
    };
  } else if ("$grayscale" in op) {
    return { type: "grayscale" };
  } else {
    const tile = (op as ImageOperation & { $tile: {} }).$tile;
    return {
      type: "tile",
      zoom: tile.$zoom,
      x: tile.$x,
      y: tile.$y,
    };
  }
}

function convertVideoOperation(op: VideoOperation) {
  if ("$transcode" in op) {
    return { type: "transcode" };
  } else {
    const chunk = (op as VideoOperation & { $chunk: {} }).$chunk;
    return {
      type: "chunk",
      chunkDurationMilliseconds: chunk.$chunkDurationMilliseconds,
      chunkIndex: chunk.$chunkIndex,
    };
  }
}

function convertAudioOperation(op: AudioOperation) {
  if ("$channel" in op && op.$channel != null) {
    return {
      type: "channel",
      encodeFormat: convertAudioEncoding(op.$channel.$encodeFormat),
      channel: op.$channel.$channel,
    };
  } else if ("$chunk" in op && op.$chunk != null) {
    return {
      type: "chunk",
      encodeFormat: convertAudioEncoding(op.$chunk.$encodeFormat),
      chunkDurationMilliseconds: op.$chunk.$chunkDurationMilliseconds,
      chunkIndex: op.$chunk.$chunkIndex,
    };
  } else {
    const convert = (op as AudioOperation & { $convert: {} }).$convert;
    return {
      type: "convert",
      encodeFormat: convertAudioEncoding(convert.$encodeFormat),
    };
  }
}

function convertVideoToAudioOperation(_op: VideoToAudioOperation) {
  return { type: "extractAudio" };
}

function convertAudioToTextOperation(op: AudioToTextOperation) {
  if ("$transcribe" in op && op.$transcribe != null) {
    return {
      type: "transcribe",
      language: op.$transcribe.$language,
      diarize: op.$transcribe.$diarize,
      outputFormat: op.$transcribe.$outputFormat != null
        ? convertTranscribeOutputFormat(op.$transcribe.$outputFormat)
        : undefined,
      performanceMode: op.$transcribe.$performanceMode,
    };
  } else {
    const waveform = (op as AudioToTextOperation & { $waveform: {} }).$waveform;
    return {
      type: "waveform",
      peaksPerSecond: waveform.$peaksPerSecond,
    };
  }
}

function convertEmailToTextOperation(op: EmailToTextOperation) {
  return {
    type: "getEmailBody",
    outputFormat: op.$getEmailBody.$outputFormat,
  };
}

function convertEmailToAttachmentOperation(op: EmailToAttachmentOperation) {
  return {
    type: "getEmailAttachment",
    mimeType: op.$getEmailAttachment.$mimeType,
    attachmentIndex: op.$getEmailAttachment.$attachmentIndex,
  };
}

function convertSpreadsheetToTextOperation(op: SpreadsheetToTextOperation) {
  return {
    type: "convertSheetToJson",
    sheetName: op.$convertSheetToJson.$sheetName,
  };
}

function convertVideoToArchiveOperation(op: VideoToArchiveOperation) {
  return {
    type: "extractSceneFrames",
    encoding: { type: op.$extractSceneFrames.$encoding },
    sceneScore: op.$extractSceneFrames.$sceneScore,
  };
}

function convertVideoToTextOperation(op: VideoToTextOperation) {
  return {
    type: "getTimestampsForSceneFrames",
    sceneScore: op.$getTimestampsForSceneFrames.$sceneScore,
  };
}

function convertImageToTextOperation(op: ImageToTextOperation) {
  if (
    "$extractLayoutAwareContent" in op
    && op.$extractLayoutAwareContent != null
  ) {
    return {
      type: "extractLayoutAwareContent",
      parameters: convertLayoutAwareExtractionParameters(
        op.$extractLayoutAwareContent.$parameters,
      ),
    };
  } else {
    const ocr = (op as ImageToTextOperation & { $ocr: {} }).$ocr;
    return {
      type: "ocr",
      parameters: convertOcrParameters(ocr.$parameters),
    };
  }
}

function convertVideoToImageOperation(op: VideoToImageOperation) {
  if ("$extractFirstFrame" in op && op.$extractFirstFrame != null) {
    return {
      type: "extractFirstFrame",
      height: op.$extractFirstFrame.$height,
      width: op.$extractFirstFrame.$width,
    };
  } else {
    const ext =
      (op as VideoToImageOperation & { $extractFramesAtTimestamps: {} })
        .$extractFramesAtTimestamps;
    return {
      type: "extractFramesAtTimestamps",
      height: ext.$height,
      width: ext.$width,
      timestamp: ext.$timestamp,
    };
  }
}

function convertImageToDocumentOperation(_op: ImageToDocumentOperation) {
  return { type: "createPdf" };
}

function convertDicomToImageOperation(op: DicomToImageOperation) {
  return {
    type: "renderImageLayer",
    layerNumber: op.$renderImageLayer.$layerNumber,
    height: op.$renderImageLayer.$height,
    width: op.$renderImageLayer.$width,
  };
}

function convertDocumentToDocumentOperation(op: DocumentToDocumentOperation) {
  if ("$slicePdfRange" in op && op.$slicePdfRange != null) {
    return {
      type: "slicePdfRange",
      startPageInclusive: op.$slicePdfRange.$startPageInclusive,
      endPageExclusive: op.$slicePdfRange.$endPageExclusive,
      strictlyEnforceEndPage: op.$slicePdfRange.$strictlyEnforceEndPage,
    };
  } else {
    return { type: "convertDocument" };
  }
}

function convertDocumentToImageOperation(op: DocumentToImageOperation) {
  if ("$renderPage" in op && op.$renderPage != null) {
    return {
      type: "renderPage",
      pageNumber: op.$renderPage.$pageNumber,
      height: op.$renderPage.$height,
      width: op.$renderPage.$width,
    };
  } else {
    const bb =
      (op as DocumentToImageOperation & { $renderPageToFitBoundingBox: {} })
        .$renderPageToFitBoundingBox;
    return {
      type: "renderPageToFitBoundingBox",
      pageNumber: bb.$pageNumber,
      width: bb.$width,
      height: bb.$height,
    };
  }
}

function convertImageToEmbeddingOperation(op: ImageToEmbeddingOperation) {
  return {
    type: "generateEmbedding",
    modelId: op.$generateEmbedding.$modelId,
  };
}

function convertDocumentToTextOperation(op: DocumentToTextOperation) {
  if ("$extractAllText" in op) {
    return { type: "extractAllText" };
  } else if ("$extractTableOfContents" in op) {
    return { type: "extractTableOfContents" };
  } else if ("$getPdfPageDimensions" in op) {
    return { type: "getPdfPageDimensions" };
  } else if ("$extractFormFields" in op) {
    return { type: "extractFormFields" };
  } else if (
    "$extractUnstructuredTextFromPage" in op
    && op.$extractUnstructuredTextFromPage != null
  ) {
    return {
      type: "extractUnstructuredTextFromPage",
      pageNumber: op.$extractUnstructuredTextFromPage.$pageNumber,
    };
  } else if (
    "$extractTextFromPagesToArray" in op
    && op.$extractTextFromPagesToArray != null
  ) {
    return {
      type: "extractTextFromPagesToArray",
      startPage: op.$extractTextFromPagesToArray.$startPage,
      endPage: op.$extractTextFromPagesToArray.$endPage,
    };
  } else if ("$ocrOnPage" in op && op.$ocrOnPage != null) {
    return {
      type: "ocrOnPage",
      pageNumber: op.$ocrOnPage.$pageNumber,
      parameters: convertOcrParameters(op.$ocrOnPage.$parameters),
    };
  } else if ("$ocrOnPages" in op && op.$ocrOnPages != null) {
    return {
      type: "ocrOnPages",
      pageNumber: op.$ocrOnPages.$pageNumber,
      parameters: convertOcrParameters(op.$ocrOnPages.$parameters),
    };
  } else if (
    "$extractLayoutAwareContent" in op
    && op.$extractLayoutAwareContent != null
  ) {
    return {
      type: "extractLayoutAwareContent",
      parameters: convertLayoutAwareExtractionParameters(
        op.$extractLayoutAwareContent.$parameters,
      ),
    };
  } else if (
    "$extractLayoutAwareTextV2" in op
    && op.$extractLayoutAwareTextV2 != null
  ) {
    return {
      type: "extractLayoutAwareTextV2",
      pageRange: op.$extractLayoutAwareTextV2.$pageRange != null
        ? convertPageRange(op.$extractLayoutAwareTextV2.$pageRange)
        : undefined,
      config: convertDocumentTextExtractionConfig(
        op.$extractLayoutAwareTextV2.$config,
      ),
    };
  } else if ("$extractTextV2" in op && op.$extractTextV2 != null) {
    return {
      type: "extractTextV2",
      pageRange: op.$extractTextV2.$pageRange != null
        ? convertPageRange(op.$extractTextV2.$pageRange)
        : undefined,
      config: convertDocumentTextExtractionConfig(op.$extractTextV2.$config),
    };
  } else {
    const vlm = (op as DocumentToTextOperation & { $extractVlmText: {} })
      .$extractVlmText;
    return {
      type: "extractVlmText",
      llmSpec: convertLlmSpec(vlm.$llmSpec),
      preprocessingConfiguration: vlm.$preprocessingConfiguration != null
        ? convertVlmPreprocessingConfig(vlm.$preprocessingConfiguration)
        : undefined,
      imageSpec: vlm.$imageSpec != null
        ? convertImageSpec(vlm.$imageSpec)
        : undefined,
      outputFormat: vlm.$outputFormat,
      pageRange: vlm.$pageRange != null
        ? convertPageRange(vlm.$pageRange)
        : undefined,
    };
  }
}
