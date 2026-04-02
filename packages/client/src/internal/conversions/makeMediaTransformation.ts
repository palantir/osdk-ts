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
  DocumentToDocumentOperation,
  DocumentToImageOperation,
  DocumentToTextOperation,
  EmailToAttachmentOperation,
  EmailToTextOperation,
  ImageOperation,
  ImageToDocumentOperation,
  ImageToEmbeddingOperation,
  ImageToTextOperation,
  MediaTransformation,
  SpreadsheetToTextOperation,
  VideoOperation,
  VideoToArchiveOperation,
  VideoToAudioOperation,
  VideoToImageOperation,
  VideoToTextOperation,
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
    } as Transformation;
  } else if ("$video" in transformation && transformation.$video != null) {
    const t = transformation.$video;
    return {
      type: "video",
      encoding: { type: t.$encoding },
      operation: convertVideoOperation(t.$operation),
    } as Transformation;
  } else if ("$audio" in transformation && transformation.$audio != null) {
    return {
      type: "audio",
      operation: convertAudioOperation(transformation.$audio.$operation),
    } as Transformation;
  } else if (
    "$emailToText" in transformation && transformation.$emailToText != null
  ) {
    return {
      type: "emailToText",
      operation: convertEmailToTextOperation(
        transformation.$emailToText.$operation,
      ),
    } as Transformation;
  } else if (
    "$spreadsheetToText" in transformation
    && transformation.$spreadsheetToText != null
  ) {
    return {
      type: "spreadsheetToText",
      operation: convertSpreadsheetToTextOperation(
        transformation.$spreadsheetToText.$operation,
      ),
    } as Transformation;
  } else if (
    "$videoToAudio" in transformation && transformation.$videoToAudio != null
  ) {
    const t = transformation.$videoToAudio;
    return {
      type: "videoToAudio",
      encoding: convertAudioEncoding(t.$encoding),
      operation: convertVideoToAudioOperation(t.$operation),
    } as Transformation;
  } else if (
    "$audioToText" in transformation && transformation.$audioToText != null
  ) {
    return {
      type: "audioToText",
      operation: convertAudioToTextOperation(
        transformation.$audioToText.$operation,
      ),
    } as Transformation;
  } else if (
    "$emailToAttachment" in transformation
    && transformation.$emailToAttachment != null
  ) {
    return {
      type: "emailToAttachment",
      operation: convertEmailToAttachmentOperation(
        transformation.$emailToAttachment.$operation,
      ),
    } as Transformation;
  } else if (
    "$videoToArchive" in transformation
    && transformation.$videoToArchive != null
  ) {
    const t = transformation.$videoToArchive;
    return {
      type: "videoToArchive",
      encoding: { type: t.$encoding },
      operation: convertVideoToArchiveOperation(t.$operation),
    } as Transformation;
  } else if (
    "$videoToText" in transformation && transformation.$videoToText != null
  ) {
    return {
      type: "videoToText",
      operation: convertVideoToTextOperation(
        transformation.$videoToText.$operation,
      ),
    } as Transformation;
  } else if (
    "$imageToText" in transformation && transformation.$imageToText != null
  ) {
    return {
      type: "imageToText",
      operation: convertImageToTextOperation(
        transformation.$imageToText.$operation,
      ),
    } as Transformation;
  } else if (
    "$videoToImage" in transformation && transformation.$videoToImage != null
  ) {
    const t = transformation.$videoToImage;
    return {
      type: "videoToImage",
      encoding: { type: t.$encoding },
      operation: convertVideoToImageOperation(t.$operation),
    } as Transformation;
  } else if (
    "$imageToDocument" in transformation
    && transformation.$imageToDocument != null
  ) {
    return {
      type: "imageToDocument",
      operation: convertImageToDocumentOperation(
        transformation.$imageToDocument.$operation,
      ),
    } as Transformation;
  } else if (
    "$dicomToImage" in transformation && transformation.$dicomToImage != null
  ) {
    const t = transformation.$dicomToImage;
    return {
      type: "dicomToImage",
      encoding: { type: t.$encoding },
      operation: convertDicomToImageOperation(t.$operation),
    } as Transformation;
  } else if (
    "$documentToDocument" in transformation
    && transformation.$documentToDocument != null
  ) {
    const t = transformation.$documentToDocument;
    return {
      type: "documentToDocument",
      encoding: { type: t.$encoding },
      operation: convertDocumentToDocumentOperation(t.$operation),
    } as Transformation;
  } else if (
    "$documentToImage" in transformation
    && transformation.$documentToImage != null
  ) {
    const t = transformation.$documentToImage;
    return {
      type: "documentToImage",
      encoding: { type: t.$encoding },
      operation: convertDocumentToImageOperation(t.$operation),
    } as Transformation;
  } else if (
    "$imageToEmbedding" in transformation
    && transformation.$imageToEmbedding != null
  ) {
    return {
      type: "imageToEmbedding",
      operation: convertImageToEmbeddingOperation(
        transformation.$imageToEmbedding.$operation,
      ),
    } as Transformation;
  } else if (
    "$documentToText" in transformation
    && transformation.$documentToText != null
  ) {
    return {
      type: "documentToText",
      operation: convertDocumentToTextOperation(
        transformation.$documentToText.$operation,
      ),
    } as Transformation;
  }

  throw new Error("Unknown media transformation type");
}

// ─── Encoding converters ────────────────────────────────────────────────────

function convertAudioEncoding(encoding: AudioEncoding) {
  if (typeof encoding === "string") {
    return { type: encoding };
  }
  return {
    type: "wav" as const,
    sampleRate: encoding.$wav.$sampleRate,
    audioChannelLayout: encoding.$wav.$audioChannelLayout != null
      ? {
        type: "numberOfChannels" as const,
        numberOfChannels: encoding.$wav.$audioChannelLayout.$numberOfChannels,
      }
      : undefined,
  };
}

// ─── Operation converters ───────────────────────────────────────────────────

function convertImageOperation(op: ImageOperation) {
  if ("$resize" in op && op.$resize != null) {
    return {
      type: "resize" as const,
      width: op.$resize.$width,
      height: op.$resize.$height,
      autoOrient: op.$resize.$autoOrient,
    };
  } else if (
    "$resizeToFitBoundingBox" in op && op.$resizeToFitBoundingBox != null
  ) {
    return {
      type: "resizeToFitBoundingBox" as const,
      width: op.$resizeToFitBoundingBox.$width,
      height: op.$resizeToFitBoundingBox.$height,
    };
  } else if ("$rotate" in op && op.$rotate != null) {
    return {
      type: "rotate" as const,
      angle: op.$rotate.$angle,
    };
  } else if ("$crop" in op && op.$crop != null) {
    return {
      type: "crop" as const,
      xOffset: op.$crop.$xOffset,
      yOffset: op.$crop.$yOffset,
      width: op.$crop.$width,
      height: op.$crop.$height,
    };
  } else if ("$grayscale" in op) {
    return { type: "grayscale" as const };
  } else if ("$tile" in op && op.$tile != null) {
    return {
      type: "tile" as const,
      zoom: op.$tile.$zoom,
      x: op.$tile.$x,
      y: op.$tile.$y,
    };
  }
  throw new Error("Unknown image operation");
}

function convertVideoOperation(op: VideoOperation) {
  if ("$transcode" in op) {
    return { type: "transcode" as const };
  } else if ("$chunk" in op && op.$chunk != null) {
    return {
      type: "chunk" as const,
      chunkDurationMilliseconds: op.$chunk.$chunkDurationMilliseconds,
      chunkIndex: op.$chunk.$chunkIndex,
    };
  }
  throw new Error("Unknown video operation");
}

function convertAudioOperation(op: AudioOperation) {
  if ("$channel" in op && op.$channel != null) {
    return {
      type: "channel" as const,
      encodeFormat: convertAudioEncoding(op.$channel.$encodeFormat),
      channel: op.$channel.$channel,
    };
  } else if ("$chunk" in op && op.$chunk != null) {
    return {
      type: "chunk" as const,
      encodeFormat: convertAudioEncoding(op.$chunk.$encodeFormat),
      chunkDurationMilliseconds: op.$chunk.$chunkDurationMilliseconds,
      chunkIndex: op.$chunk.$chunkIndex,
    };
  } else if ("$convert" in op && op.$convert != null) {
    return {
      type: "convert" as const,
      encodeFormat: convertAudioEncoding(op.$convert.$encodeFormat),
    };
  }
  throw new Error("Unknown audio operation");
}

function convertVideoToAudioOperation(op: VideoToAudioOperation) {
  if ("$extractAudio" in op) {
    return { type: "extractAudio" as const };
  }
  throw new Error("Unknown videoToAudio operation");
}

function convertAudioToTextOperation(op: AudioToTextOperation) {
  if ("$transcribe" in op && op.$transcribe != null) {
    return {
      type: "transcribe" as const,
      language: op.$transcribe.$language,
      diarize: op.$transcribe.$diarize,
      outputFormat: op.$transcribe.$outputFormat,
      performanceMode: op.$transcribe.$performanceMode,
    };
  } else if ("$waveform" in op && op.$waveform != null) {
    return {
      type: "waveform" as const,
      peaksPerSecond: op.$waveform.$peaksPerSecond,
    };
  }
  throw new Error("Unknown audioToText operation");
}

function convertEmailToTextOperation(op: EmailToTextOperation) {
  if ("$getEmailBody" in op && op.$getEmailBody != null) {
    return {
      type: "getEmailBody" as const,
      outputFormat: op.$getEmailBody.$outputFormat,
    };
  }
  throw new Error("Unknown emailToText operation");
}

function convertEmailToAttachmentOperation(op: EmailToAttachmentOperation) {
  if ("$getEmailAttachment" in op && op.$getEmailAttachment != null) {
    return {
      type: "getEmailAttachment" as const,
      mimeType: op.$getEmailAttachment.$mimeType,
      attachmentIndex: op.$getEmailAttachment.$attachmentIndex,
    };
  }
  throw new Error("Unknown emailToAttachment operation");
}

function convertSpreadsheetToTextOperation(op: SpreadsheetToTextOperation) {
  if ("$convertSheetToJson" in op && op.$convertSheetToJson != null) {
    return {
      type: "convertSheetToJson" as const,
      sheetName: op.$convertSheetToJson.$sheetName,
    };
  }
  throw new Error("Unknown spreadsheetToText operation");
}

function convertVideoToArchiveOperation(op: VideoToArchiveOperation) {
  if ("$extractSceneFrames" in op && op.$extractSceneFrames != null) {
    return {
      type: "extractSceneFrames" as const,
      encoding: { type: op.$extractSceneFrames.$encoding },
      sceneScore: op.$extractSceneFrames.$sceneScore,
    };
  }
  throw new Error("Unknown videoToArchive operation");
}

function convertVideoToTextOperation(op: VideoToTextOperation) {
  if (
    "$getTimestampsForSceneFrames" in op
    && op.$getTimestampsForSceneFrames != null
  ) {
    return {
      type: "getTimestampsForSceneFrames" as const,
      sceneScore: op.$getTimestampsForSceneFrames.$sceneScore,
    };
  }
  throw new Error("Unknown videoToText operation");
}

function convertImageToTextOperation(op: ImageToTextOperation) {
  if (
    "$extractLayoutAwareContent" in op
    && op.$extractLayoutAwareContent != null
  ) {
    return {
      type: "extractLayoutAwareContent" as const,
      parameters: op.$extractLayoutAwareContent.$parameters,
    };
  } else if ("$ocr" in op && op.$ocr != null) {
    return {
      type: "ocr" as const,
      parameters: op.$ocr.$parameters,
    };
  }
  throw new Error("Unknown imageToText operation");
}

function convertVideoToImageOperation(op: VideoToImageOperation) {
  if ("$extractFirstFrame" in op && op.$extractFirstFrame != null) {
    return {
      type: "extractFirstFrame" as const,
      height: op.$extractFirstFrame.$height,
      width: op.$extractFirstFrame.$width,
    };
  } else if (
    "$extractFramesAtTimestamps" in op
    && op.$extractFramesAtTimestamps != null
  ) {
    return {
      type: "extractFramesAtTimestamps" as const,
      height: op.$extractFramesAtTimestamps.$height,
      width: op.$extractFramesAtTimestamps.$width,
      timestamp: op.$extractFramesAtTimestamps.$timestamp,
    };
  }
  throw new Error("Unknown videoToImage operation");
}

function convertImageToDocumentOperation(op: ImageToDocumentOperation) {
  if ("$createPdf" in op) {
    return { type: "createPdf" as const };
  }
  throw new Error("Unknown imageToDocument operation");
}

function convertDicomToImageOperation(op: DicomToImageOperation) {
  if ("$renderImageLayer" in op && op.$renderImageLayer != null) {
    return {
      type: "renderImageLayer" as const,
      layerNumber: op.$renderImageLayer.$layerNumber,
      height: op.$renderImageLayer.$height,
      width: op.$renderImageLayer.$width,
    };
  }
  throw new Error("Unknown dicomToImage operation");
}

function convertDocumentToDocumentOperation(op: DocumentToDocumentOperation) {
  if ("$slicePdfRange" in op && op.$slicePdfRange != null) {
    return {
      type: "slicePdfRange" as const,
      startPageInclusive: op.$slicePdfRange.$startPageInclusive,
      endPageExclusive: op.$slicePdfRange.$endPageExclusive,
      strictlyEnforceEndPage: op.$slicePdfRange.$strictlyEnforceEndPage,
    };
  } else if ("$convertDocument" in op) {
    return { type: "convertDocument" as const };
  }
  throw new Error("Unknown documentToDocument operation");
}

function convertDocumentToImageOperation(op: DocumentToImageOperation) {
  if ("$renderPage" in op && op.$renderPage != null) {
    return {
      type: "renderPage" as const,
      pageNumber: op.$renderPage.$pageNumber,
      height: op.$renderPage.$height,
      width: op.$renderPage.$width,
    };
  } else if (
    "$renderPageToFitBoundingBox" in op
    && op.$renderPageToFitBoundingBox != null
  ) {
    return {
      type: "renderPageToFitBoundingBox" as const,
      pageNumber: op.$renderPageToFitBoundingBox.$pageNumber,
      width: op.$renderPageToFitBoundingBox.$width,
      height: op.$renderPageToFitBoundingBox.$height,
    };
  }
  throw new Error("Unknown documentToImage operation");
}

function convertImageToEmbeddingOperation(op: ImageToEmbeddingOperation) {
  if ("$generateEmbedding" in op && op.$generateEmbedding != null) {
    return {
      type: "generateEmbedding" as const,
      modelId: op.$generateEmbedding.$modelId,
    };
  }
  throw new Error("Unknown imageToEmbedding operation");
}

function convertDocumentToTextOperation(op: DocumentToTextOperation) {
  if ("$extractAllText" in op) {
    return { type: "extractAllText" as const };
  } else if ("$extractTableOfContents" in op) {
    return { type: "extractTableOfContents" as const };
  } else if ("$getPdfPageDimensions" in op) {
    return { type: "getPdfPageDimensions" as const };
  } else if ("$extractFormFields" in op) {
    return { type: "extractFormFields" as const };
  } else if (
    "$extractUnstructuredTextFromPage" in op
    && op.$extractUnstructuredTextFromPage != null
  ) {
    return {
      type: "extractUnstructuredTextFromPage" as const,
      pageNumber: op.$extractUnstructuredTextFromPage.$pageNumber,
    };
  } else if (
    "$extractTextFromPagesToArray" in op
    && op.$extractTextFromPagesToArray != null
  ) {
    return {
      type: "extractTextFromPagesToArray" as const,
      startPage: op.$extractTextFromPagesToArray.$startPage,
      endPage: op.$extractTextFromPagesToArray.$endPage,
    };
  } else if ("$ocrOnPage" in op && op.$ocrOnPage != null) {
    return {
      type: "ocrOnPage" as const,
      pageNumber: op.$ocrOnPage.$pageNumber,
      parameters: op.$ocrOnPage.$parameters,
    };
  } else if ("$ocrOnPages" in op && op.$ocrOnPages != null) {
    return {
      type: "ocrOnPages" as const,
      pageNumber: op.$ocrOnPages.$pageNumber,
      parameters: op.$ocrOnPages.$parameters,
    };
  } else if (
    "$extractLayoutAwareContent" in op
    && op.$extractLayoutAwareContent != null
  ) {
    return {
      type: "extractLayoutAwareContent" as const,
      parameters: op.$extractLayoutAwareContent.$parameters,
    };
  } else if (
    "$extractLayoutAwareTextV2" in op
    && op.$extractLayoutAwareTextV2 != null
  ) {
    return {
      type: "extractLayoutAwareTextV2" as const,
      pageRange: op.$extractLayoutAwareTextV2.$pageRange,
      config: op.$extractLayoutAwareTextV2.$config,
    };
  } else if ("$extractTextV2" in op && op.$extractTextV2 != null) {
    return {
      type: "extractTextV2" as const,
      pageRange: op.$extractTextV2.$pageRange,
      config: op.$extractTextV2.$config,
    };
  } else if ("$extractVlmText" in op && op.$extractVlmText != null) {
    return {
      type: "extractVlmText" as const,
      llmSpec: op.$extractVlmText.$llmSpec,
      preprocessingConfiguration:
        op.$extractVlmText.$preprocessingConfiguration,
      imageSpec: op.$extractVlmText.$imageSpec,
      outputFormat: op.$extractVlmText.$outputFormat,
      pageRange: op.$extractVlmText.$pageRange,
    };
  }
  throw new Error("Unknown documentToText operation");
}
