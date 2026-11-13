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
import { foundryDocsUrl } from "@/lib/site";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function FoundryDocsLinks({
  links,
}: {
  links: { title: string; path: string }[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:ms-auto">
      <span className="text-xs font-medium text-fd-muted-foreground">
        Foundry docs
      </span>
      {links.map((link) => (
        <a
          key={link.path}
          href={foundryDocsUrl(link.path)}
          rel="noreferrer noopener"
          target="_blank"
          className={`${
            buttonVariants({ variant: "secondary", size: "sm" })
          } gap-1.5`}
        >
          {link.title}
          <ArrowUpRight className="size-3.5 text-fd-muted-foreground" />
        </a>
      ))}
    </div>
  );
}
