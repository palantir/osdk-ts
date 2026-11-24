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

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

export function FeatureCard({
  href,
  icon: Icon,
  title,
  description,
  compact = false,
}: {
  href: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-xl border bg-fd-card p-5 transition-colors hover:border-fd-primary/40 hover:bg-fd-accent/40"
    >
      <span className="flex size-9 items-center justify-center rounded-lg border bg-fd-background text-fd-primary">
        <Icon className="size-4" />
      </span>
      <span className="flex items-center gap-1.5 font-medium">
        {title}
        <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
      <span
        className={compact
          ? "text-sm text-fd-muted-foreground"
          : "text-sm text-fd-muted-foreground md:text-[0.9375rem]"}
      >
        {description}
      </span>
    </Link>
  );
}
