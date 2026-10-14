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

/**/
export interface CreateCompletionEndpoint {
  input: ModelCompletionInputType;
}
export interface CreateDocumentExtractionEndpoint {
  input: ModelDocumentInformationExtractionInputType;
}
export interface CreateEmbeddingEndpoint {
  input: ModelEmbeddingsInputType;
}
export interface CreateTranscriptionEndpoint {
  input: ModelTranscriptionInputType;
}
export interface CreateTranslationEndpoint {
  input: ModelTranslationInputType;
}
export type LanguageModelApiName = string;
export interface LanguageModelServiceEndpoint_createCompletion {
  type: "createCompletion";
  createCompletion: CreateCompletionEndpoint;
}

export interface LanguageModelServiceEndpoint_streamCompletionChunk {
  type: "streamCompletionChunk";
  streamCompletionChunk: StreamCompletionChunkEndpoint;
}

export interface LanguageModelServiceEndpoint_createEmbedding {
  type: "createEmbedding";
  createEmbedding: CreateEmbeddingEndpoint;
}

export interface LanguageModelServiceEndpoint_createTranslation {
  type: "createTranslation";
  createTranslation: CreateTranslationEndpoint;
}

export interface LanguageModelServiceEndpoint_createTranscription {
  type: "createTranscription";
  createTranscription: CreateTranscriptionEndpoint;
}

export interface LanguageModelServiceEndpoint_createDocumentExtraction {
  type: "createDocumentExtraction";
  createDocumentExtraction: CreateDocumentExtractionEndpoint;
}
export type LanguageModelServiceEndpoint =
  | LanguageModelServiceEndpoint_createCompletion
  | LanguageModelServiceEndpoint_streamCompletionChunk
  | LanguageModelServiceEndpoint_createEmbedding
  | LanguageModelServiceEndpoint_createTranslation
  | LanguageModelServiceEndpoint_createTranscription
  | LanguageModelServiceEndpoint_createDocumentExtraction;

/**
 * Locator which identifies a language model that is meant to be executed by the language model service.
 */
export interface LanguageModelServiceLocator {
  endpoint: LanguageModelServiceEndpoint;
  languageModelApiName: LanguageModelApiName;
}
export type ModelCompletionInputType =
  | "GPT_CHAT_COMPLETION"
  | "GPT_WITH_VISION_COMPLETION"
  | "CONTROLLED_SCHEMA"
  | "CHAT_CONTROLLED_SCHEMA"
  | "GENERIC_CHAT_COMPLETION"
  | "GENERIC_COMPLETION"
  | "GENERIC_VISION_COMPLETION";

/**
 * TBD refers to the models produced by https://github.palantir.build/tbd/tbdp-nlp
 */
export type ModelDocumentInformationExtractionInputType =
  "TBD_DOCUMENT_INFORMATION_EXTRACTION";
export type ModelEmbeddingsInputType =
  | "GENERIC_EMBEDDINGS"
  | "DIMENSION_SPECIFIC_EMBEDDINGS";
export type ModelTranscriptionInputType = "WHISPER_TRANSCRIPTION";
export type ModelTranslationInputType =
  | "GENERIC_TRANSLATION"
  | "HELSINKI_TRANSLATION";
export interface StreamCompletionChunkEndpoint {
  input: ModelCompletionInputType;
}
