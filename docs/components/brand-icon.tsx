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

import type { StaticImageData } from "next/image";

export function BrandIcon({ icon }: { icon: StaticImageData }) {
  return (
    <span
      aria-hidden={true}
      className="size-4 shrink-0 bg-current [mask-size:contain] [mask-repeat:no-repeat]"
      style={{ maskImage: `url(${icon.src})` }}
    />
  );
}
