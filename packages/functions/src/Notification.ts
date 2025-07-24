/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  InterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/client";

export interface Notification {
  platformNotification: PlatformNotification;
  emailNotification: EmailNotification;
}

// Details for notifications sent via email.
export interface EmailNotification {
  subject: string;
  body: string;
  links: NotificationLink[];
}

// Details for notifications displayed in Foundry.
export interface PlatformNotification {
  heading: string;
  content: string;
  links: NotificationLink[];
}

// Notification Link Types
export interface NotificationLink {
  label: string;
  linkTarget: NotificationLinkTarget;
}

export interface RidLinkTarget {
  type: "rid";
  rid: string;
}

export interface ObjectLinkTarget<
  T extends ObjectTypeDefinition | InterfaceDefinition =
    | ObjectTypeDefinition
    | InterfaceDefinition,
> {
  type: "object";
  object: Osdk.Instance<T>;
}

export interface UrlLinkTarget {
  type: "url";
  url: string;
}

export type NotificationLinkTarget =
  | RidLinkTarget
  | ObjectLinkTarget
  | UrlLinkTarget;
