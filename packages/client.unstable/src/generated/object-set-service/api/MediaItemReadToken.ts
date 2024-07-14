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

/**
 * A token that can be used to access the media item. This token is only valid for a limited time and can be used to access the media item without authentication repeatedly during the lifetime of the token.
 * This token will only be present if explicitly requested by the client by setting  `referenceSigningOptions.signMediaReferences` to true in the endpoints that support it.
 * This token can only be generated for media items that are backed by a media set view datasource.
 * This token will not be generated for media items in arrays.
 * NOTE: This token is generated for the calling user and should not be shared.
 */
export type MediaItemReadToken = string;
