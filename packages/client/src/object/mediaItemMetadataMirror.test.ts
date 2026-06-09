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
  AffineTransform as ApiAffineTransform,
  AudioDecodeFormat as ApiAudioDecodeFormat,
  AudioMediaItemMetadata as ApiAudioMediaItemMetadata,
  AudioSpecification as ApiAudioSpecification,
  BandInfo as ApiBandInfo,
  ColorInterpretation as ApiColorInterpretation,
  CommonDicomDataElements as ApiCommonDicomDataElements,
  CoordinateReferenceSystem as ApiCoordinateReferenceSystem,
  DataType as ApiDataType,
  DicomDataElementKey as ApiDicomDataElementKey,
  DicomMediaItemMetadata as ApiDicomMediaItemMetadata,
  DicomMediaType as ApiDicomMediaType,
  DicomMetaInformation as ApiDicomMetaInformation,
  DicomMetaInformationV1 as ApiDicomMetaInformationV1,
  Dimensions as ApiDimensions,
  DocumentDecodeFormat as ApiDocumentDecodeFormat,
  DocumentMediaItemMetadata as ApiDocumentMediaItemMetadata,
  EmailAttachment as ApiEmailAttachment,
  EmailDecodeFormat as ApiEmailDecodeFormat,
  EmailMediaItemMetadata as ApiEmailMediaItemMetadata,
  FlipAxis as ApiFlipAxis,
  GcpList as ApiGcpList,
  GeoMetadata as ApiGeoMetadata,
  GpsMetadata as ApiGpsMetadata,
  GroundControlPoint as ApiGroundControlPoint,
  Group as ApiGroup,
  GroupWrapper as ApiGroupWrapper,
  ImageAttributeDomain as ApiImageAttributeDomain,
  ImageAttributeKey as ApiImageAttributeKey,
  ImageryDecodeFormat as ApiImageryDecodeFormat,
  ImageryMediaItemMetadata as ApiImageryMediaItemMetadata,
  Mailbox as ApiMailbox,
  MailboxOrGroup as ApiMailboxOrGroup,
  MailboxWrapper as ApiMailboxWrapper,
  MediaItemMetadata as ApiMediaItemMetadata,
  Modality as ApiModality,
  Model3dDecodeFormat as ApiModel3dDecodeFormat,
  Model3dMediaItemMetadata as ApiModel3dMediaItemMetadata,
  Model3dType as ApiModel3dType,
  Orientation as ApiOrientation,
  PaletteInterpretation as ApiPaletteInterpretation,
  RotationAngle as ApiRotationAngle,
  SpreadsheetDecodeFormat as ApiSpreadsheetDecodeFormat,
  SpreadsheetMediaItemMetadata as ApiSpreadsheetMediaItemMetadata,
  UnitInterpretation as ApiUnitInterpretation,
  UntypedMediaItemMetadata as ApiUntypedMediaItemMetadata,
  VideoDecodeFormat as ApiVideoDecodeFormat,
  VideoMediaItemMetadata as ApiVideoMediaItemMetadata,
  VideoSpecification as ApiVideoSpecification,
} from "@osdk/api";
import type {
  AffineTransform as PlatformAffineTransform,
  AudioDecodeFormat as PlatformAudioDecodeFormat,
  AudioMediaItemMetadata as PlatformAudioMediaItemMetadata,
  AudioSpecification as PlatformAudioSpecification,
  BandInfo as PlatformBandInfo,
  ColorInterpretation as PlatformColorInterpretation,
  CommonDicomDataElements as PlatformCommonDicomDataElements,
  CoordinateReferenceSystem as PlatformCoordinateReferenceSystem,
  DataType as PlatformDataType,
  DicomDataElementKey as PlatformDicomDataElementKey,
  DicomMediaItemMetadata as PlatformDicomMediaItemMetadata,
  DicomMediaType as PlatformDicomMediaType,
  DicomMetaInformation as PlatformDicomMetaInformation,
  DicomMetaInformationV1 as PlatformDicomMetaInformationV1,
  Dimensions as PlatformDimensions,
  DocumentDecodeFormat as PlatformDocumentDecodeFormat,
  DocumentMediaItemMetadata as PlatformDocumentMediaItemMetadata,
  EmailAttachment as PlatformEmailAttachment,
  EmailDecodeFormat as PlatformEmailDecodeFormat,
  EmailMediaItemMetadata as PlatformEmailMediaItemMetadata,
  FlipAxis as PlatformFlipAxis,
  GcpList as PlatformGcpList,
  GeoMetadata as PlatformGeoMetadata,
  GpsMetadata as PlatformGpsMetadata,
  GroundControlPoint as PlatformGroundControlPoint,
  Group as PlatformGroup,
  GroupWrapper as PlatformGroupWrapper,
  ImageAttributeDomain as PlatformImageAttributeDomain,
  ImageAttributeKey as PlatformImageAttributeKey,
  ImageryDecodeFormat as PlatformImageryDecodeFormat,
  ImageryMediaItemMetadata as PlatformImageryMediaItemMetadata,
  Mailbox as PlatformMailbox,
  MailboxOrGroup as PlatformMailboxOrGroup,
  MailboxWrapper as PlatformMailboxWrapper,
  MediaItemMetadata as PlatformMediaItemMetadata,
  Modality as PlatformModality,
  Model3dDecodeFormat as PlatformModel3dDecodeFormat,
  Model3dMediaItemMetadata as PlatformModel3dMediaItemMetadata,
  Model3dType as PlatformModel3dType,
  Orientation as PlatformOrientation,
  PaletteInterpretation as PlatformPaletteInterpretation,
  RotationAngle as PlatformRotationAngle,
  SpreadsheetDecodeFormat as PlatformSpreadsheetDecodeFormat,
  SpreadsheetMediaItemMetadata as PlatformSpreadsheetMediaItemMetadata,
  UnitInterpretation as PlatformUnitInterpretation,
  UntypedMediaItemMetadata as PlatformUntypedMediaItemMetadata,
  VideoDecodeFormat as PlatformVideoDecodeFormat,
  VideoMediaItemMetadata as PlatformVideoMediaItemMetadata,
  VideoSpecification as PlatformVideoSpecification,
} from "@osdk/foundry.mediasets";
import { describe, expectTypeOf, it } from "vitest";

/**
 * Pins the `@osdk/api` `MediaItemMetadata` mirror to the platform shape exposed by
 * `@osdk/foundry.mediasets`. If the platform schema changes (a field added, removed, made
 * optional, an enum value added, a nested type restructured), these assertions fail at
 * `typecheck` time and the mirror must be updated.
 *
 * The mirror exists so `@osdk/api` doesn't take a runtime / declaration dep on
 * `@osdk/foundry.mediasets`. The verify lives here in `@osdk/client` (which already depends on
 * both) and turns the maintenance burden from "silent drift over time" into "loud build break".
 */
describe("MediaItemMetadata mirror", () => {
  it("matches the platform union", () => {
    expectTypeOf<ApiMediaItemMetadata>()
      .toEqualTypeOf<PlatformMediaItemMetadata>();
  });

  describe("variant interfaces", () => {
    it("DocumentMediaItemMetadata", () => {
      expectTypeOf<ApiDocumentMediaItemMetadata>()
        .toEqualTypeOf<PlatformDocumentMediaItemMetadata>();
    });
    it("ImageryMediaItemMetadata", () => {
      expectTypeOf<ApiImageryMediaItemMetadata>()
        .toEqualTypeOf<PlatformImageryMediaItemMetadata>();
    });
    it("AudioMediaItemMetadata", () => {
      expectTypeOf<ApiAudioMediaItemMetadata>()
        .toEqualTypeOf<PlatformAudioMediaItemMetadata>();
    });
    it("VideoMediaItemMetadata", () => {
      expectTypeOf<ApiVideoMediaItemMetadata>()
        .toEqualTypeOf<PlatformVideoMediaItemMetadata>();
    });
    it("DicomMediaItemMetadata", () => {
      expectTypeOf<ApiDicomMediaItemMetadata>()
        .toEqualTypeOf<PlatformDicomMediaItemMetadata>();
    });
    it("EmailMediaItemMetadata", () => {
      expectTypeOf<ApiEmailMediaItemMetadata>()
        .toEqualTypeOf<PlatformEmailMediaItemMetadata>();
    });
    it("Model3dMediaItemMetadata", () => {
      expectTypeOf<ApiModel3dMediaItemMetadata>()
        .toEqualTypeOf<PlatformModel3dMediaItemMetadata>();
    });
    it("SpreadsheetMediaItemMetadata", () => {
      expectTypeOf<ApiSpreadsheetMediaItemMetadata>()
        .toEqualTypeOf<PlatformSpreadsheetMediaItemMetadata>();
    });
    it("UntypedMediaItemMetadata", () => {
      expectTypeOf<ApiUntypedMediaItemMetadata>()
        .toEqualTypeOf<PlatformUntypedMediaItemMetadata>();
    });
  });

  describe("format enums", () => {
    it("AudioDecodeFormat", () => {
      expectTypeOf<ApiAudioDecodeFormat>()
        .toEqualTypeOf<PlatformAudioDecodeFormat>();
    });
    it("VideoDecodeFormat", () => {
      expectTypeOf<ApiVideoDecodeFormat>()
        .toEqualTypeOf<PlatformVideoDecodeFormat>();
    });
    it("DocumentDecodeFormat", () => {
      expectTypeOf<ApiDocumentDecodeFormat>()
        .toEqualTypeOf<PlatformDocumentDecodeFormat>();
    });
    it("SpreadsheetDecodeFormat", () => {
      expectTypeOf<ApiSpreadsheetDecodeFormat>()
        .toEqualTypeOf<PlatformSpreadsheetDecodeFormat>();
    });
    it("ImageryDecodeFormat", () => {
      expectTypeOf<ApiImageryDecodeFormat>()
        .toEqualTypeOf<PlatformImageryDecodeFormat>();
    });
    it("EmailDecodeFormat", () => {
      expectTypeOf<ApiEmailDecodeFormat>()
        .toEqualTypeOf<PlatformEmailDecodeFormat>();
    });
    it("DicomMediaType", () => {
      expectTypeOf<ApiDicomMediaType>()
        .toEqualTypeOf<PlatformDicomMediaType>();
    });
    it("Model3dDecodeFormat", () => {
      expectTypeOf<ApiModel3dDecodeFormat>()
        .toEqualTypeOf<PlatformModel3dDecodeFormat>();
    });
    it("Model3dType", () => {
      expectTypeOf<ApiModel3dType>().toEqualTypeOf<PlatformModel3dType>();
    });
  });

  describe("audio / video / imagery support", () => {
    it("AudioSpecification", () => {
      expectTypeOf<ApiAudioSpecification>()
        .toEqualTypeOf<PlatformAudioSpecification>();
    });
    it("VideoSpecification", () => {
      expectTypeOf<ApiVideoSpecification>()
        .toEqualTypeOf<PlatformVideoSpecification>();
    });
    it("Dimensions", () => {
      expectTypeOf<ApiDimensions>().toEqualTypeOf<PlatformDimensions>();
    });
    it("BandInfo", () => {
      expectTypeOf<ApiBandInfo>().toEqualTypeOf<PlatformBandInfo>();
    });
    it("DataType", () => {
      expectTypeOf<ApiDataType>().toEqualTypeOf<PlatformDataType>();
    });
    it("ColorInterpretation", () => {
      expectTypeOf<ApiColorInterpretation>()
        .toEqualTypeOf<PlatformColorInterpretation>();
    });
    it("PaletteInterpretation", () => {
      expectTypeOf<ApiPaletteInterpretation>()
        .toEqualTypeOf<PlatformPaletteInterpretation>();
    });
    it("UnitInterpretation", () => {
      expectTypeOf<ApiUnitInterpretation>()
        .toEqualTypeOf<PlatformUnitInterpretation>();
    });
    // ImageAttributeDomain / ImageAttributeKey are `LooselyBrandedString<...>` on the
    // platform side and plain `string` on ours. The brand carries no runtime distinction
    // (it's a structurally-optional phantom field), so mutual assignability is the
    // meaningful drift check rather than strict structural equality.
    it("ImageAttributeDomain", () => {
      expectTypeOf<ApiImageAttributeDomain>()
        .toExtend<PlatformImageAttributeDomain>();
      expectTypeOf<PlatformImageAttributeDomain>()
        .toExtend<ApiImageAttributeDomain>();
    });
    it("ImageAttributeKey", () => {
      expectTypeOf<ApiImageAttributeKey>()
        .toExtend<PlatformImageAttributeKey>();
      expectTypeOf<PlatformImageAttributeKey>()
        .toExtend<ApiImageAttributeKey>();
    });
    it("GeoMetadata", () => {
      expectTypeOf<ApiGeoMetadata>().toEqualTypeOf<PlatformGeoMetadata>();
    });
    it("CoordinateReferenceSystem", () => {
      expectTypeOf<ApiCoordinateReferenceSystem>()
        .toEqualTypeOf<PlatformCoordinateReferenceSystem>();
    });
    it("AffineTransform", () => {
      expectTypeOf<ApiAffineTransform>()
        .toEqualTypeOf<PlatformAffineTransform>();
    });
    it("GcpList", () => {
      expectTypeOf<ApiGcpList>().toEqualTypeOf<PlatformGcpList>();
    });
    it("GroundControlPoint", () => {
      expectTypeOf<ApiGroundControlPoint>()
        .toEqualTypeOf<PlatformGroundControlPoint>();
    });
    it("GpsMetadata", () => {
      expectTypeOf<ApiGpsMetadata>().toEqualTypeOf<PlatformGpsMetadata>();
    });
    it("Orientation", () => {
      expectTypeOf<ApiOrientation>().toEqualTypeOf<PlatformOrientation>();
    });
    it("RotationAngle", () => {
      expectTypeOf<ApiRotationAngle>()
        .toEqualTypeOf<PlatformRotationAngle>();
    });
    it("FlipAxis", () => {
      expectTypeOf<ApiFlipAxis>().toEqualTypeOf<PlatformFlipAxis>();
    });
  });

  describe("DICOM support", () => {
    it("DicomMetaInformation", () => {
      expectTypeOf<ApiDicomMetaInformation>()
        .toEqualTypeOf<PlatformDicomMetaInformation>();
    });
    it("DicomMetaInformationV1", () => {
      expectTypeOf<ApiDicomMetaInformationV1>()
        .toEqualTypeOf<PlatformDicomMetaInformationV1>();
    });
    it("CommonDicomDataElements", () => {
      expectTypeOf<ApiCommonDicomDataElements>()
        .toEqualTypeOf<PlatformCommonDicomDataElements>();
    });
    // `LooselyBrandedString<...>` on platform, plain `string` on ours
    it("DicomDataElementKey", () => {
      expectTypeOf<ApiDicomDataElementKey>()
        .toExtend<PlatformDicomDataElementKey>();
      expectTypeOf<PlatformDicomDataElementKey>()
        .toExtend<ApiDicomDataElementKey>();
    });
    it("Modality", () => {
      expectTypeOf<ApiModality>().toEqualTypeOf<PlatformModality>();
    });
  });

  describe("email support", () => {
    it("Mailbox", () => {
      expectTypeOf<ApiMailbox>().toEqualTypeOf<PlatformMailbox>();
    });
    it("MailboxWrapper", () => {
      expectTypeOf<ApiMailboxWrapper>()
        .toEqualTypeOf<PlatformMailboxWrapper>();
    });
    it("Group", () => {
      expectTypeOf<ApiGroup>().toEqualTypeOf<PlatformGroup>();
    });
    it("GroupWrapper", () => {
      expectTypeOf<ApiGroupWrapper>()
        .toEqualTypeOf<PlatformGroupWrapper>();
    });
    it("MailboxOrGroup", () => {
      expectTypeOf<ApiMailboxOrGroup>()
        .toEqualTypeOf<PlatformMailboxOrGroup>();
    });
    it("EmailAttachment", () => {
      expectTypeOf<ApiEmailAttachment>()
        .toEqualTypeOf<PlatformEmailAttachment>();
    });
  });
});
