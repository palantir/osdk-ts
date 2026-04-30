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
  ObjectOrInterfaceDefinition,
  ObjectSet,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
} from "@osdk/api";
import type * as React from "react";

/**
 * Props for `<ObjectView>`. Exactly one input mode must be provided:
 *
 * - `{ objectType, primaryKey }` — the component fetches the object by primary key.
 * - `{ objectSet }` — the component uses the first object in the set.
 * - `{ object }` — caller provides a pre-fetched OSDK instance; the component still
 *   fetches the layout configuration internally. For full decoupling from OSDK and
 *   from the layout configuration service, use `<BaseObjectView>` directly.
 *
 * `objectType` + `primaryKey` is a documented exception to the package's one-required-prop
 * guideline because identifying a single object intrinsically requires both pieces.
 */
export type ObjectViewProps<Q extends ObjectOrInterfaceDefinition> =
  | ObjectViewByPrimaryKeyProps<Q>
  | ObjectViewByObjectSetProps<Q>
  | ObjectViewByInstanceProps<Q>;

interface SharedObjectViewProps<Q extends ObjectOrInterfaceDefinition> {
  /**
   * Whether the object header (icon, title, type, favorite, primary action) is shown.
   *
   * @default true
   */
  enableHeader?: boolean;

  /**
   * Override the default header rendering. Receives the loaded object;
   * return a `ReactNode` to replace the header entirely.
   *
   * If undefined, the default header from the object's layout configuration is rendered.
   */
  renderHeader?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
  ) => React.ReactNode;

  /**
   * Override the rendering of an individual property cell.
   *
   * If undefined for a given property, the default type-aware rendering from the object's
   * layout configuration is used.
   *
   * @param propertyKey The key of the property being rendered
   * @param value The current property value
   * @param object The full object instance, in case the renderer needs sibling property values
   */
  renderProperty?: (
    propertyKey: PropertyKeys<Q>,
    value: unknown,
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
  ) => React.ReactNode;

  /**
   * Called after the object has been fetched and is ready to render.
   *
   * The default rendering still runs whether or not this listener is provided. Useful for
   * analytics, scroll-to-top, or other side effects that should fire when the displayed
   * object changes.
   *
   * @param object The newly loaded object instance
   */
  onObjectLoaded?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
  ) => void;

  /**
   * Called when fetching the object fails. The default error UI still renders.
   *
   * @param error The error thrown by the underlying fetch
   */
  onObjectLoadError?: (error: Error) => void;

  className?: string;
}

interface ObjectViewByPrimaryKeyProps<Q extends ObjectOrInterfaceDefinition>
  extends SharedObjectViewProps<Q>
{
  /**
   * The object or interface type of the object to display.
   */
  objectType: Q;

  /**
   * The primary key of the object to display.
   */
  primaryKey: PrimaryKeyType<Q>;

  objectSet?: never;
  object?: never;
}

interface ObjectViewByObjectSetProps<Q extends ObjectOrInterfaceDefinition>
  extends SharedObjectViewProps<Q>
{
  /**
   * An object set containing the object to display. The first object in the set is used.
   * If the set is empty, the component renders the default empty state.
   */
  objectSet: ObjectSet<Q>;

  objectType?: never;
  primaryKey?: never;
  object?: never;
}

interface ObjectViewByInstanceProps<Q extends ObjectOrInterfaceDefinition>
  extends SharedObjectViewProps<Q>
{
  /**
   * A pre-fetched OSDK object instance. When provided, the component skips the object
   * fetch but still loads the layout configuration internally.
   *
   * For full decoupling from OSDK and from the layout configuration service, use
   * `<BaseObjectView>` directly with primitive props.
   */
  object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>;

  objectType?: never;
  primaryKey?: never;
  objectSet?: never;
}
