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
"use client";

import { buttonVariants } from "fumadocs-ui/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "fumadocs-ui/components/ui/popover";
import { ChevronDown, ExternalLink, Text } from "lucide-react";
import type { ReactNode } from "react";
import { BrandIcon } from "./brand-icon";
import ChatGptIcon from "./icons/chatgpt.svg";
import ClaudeIcon from "./icons/claude.svg";
import CursorIcon from "./icons/cursor.svg";
import GithubIcon from "./icons/github.svg";

interface PageActionItem {
  title: string;
  href: string;
  icon: ReactNode;
}

export function OpenPageMenu({
  markdownUrl,
  githubUrl,
  pageUrl,
}: {
  markdownUrl: string;
  githubUrl: string;
  pageUrl: string;
}) {
  const prompt = `Read ${pageUrl}, I want to ask questions about it.`;
  const items: PageActionItem[] = [
    {
      title: "Open in GitHub",
      href: githubUrl,
      icon: <BrandIcon icon={GithubIcon} />,
    },
    { title: "View as Markdown", href: markdownUrl, icon: <Text /> },
    {
      title: "Open in ChatGPT",
      href: `https://chatgpt.com/?${new URLSearchParams({
        prompt,
        hints: "search",
      })}`,
      icon: <BrandIcon icon={ChatGptIcon} />,
    },
    {
      title: "Open in Claude",
      href: `https://claude.ai/new?${new URLSearchParams({ q: prompt })}`,
      icon: <BrandIcon icon={ClaudeIcon} />,
    },
    {
      title: "Open in Cursor",
      href: `https://cursor.com/link/prompt?${new URLSearchParams({
        text: prompt,
      })}`,
      icon: <BrandIcon icon={CursorIcon} />,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger
        className={`${
          buttonVariants({ variant: "secondary", size: "sm" })
        } gap-2 data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground`}
      >
        Open
        <ChevronDown className="size-3.5 text-fd-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg p-2 text-sm hover:bg-fd-accent hover:text-fd-accent-foreground [&_svg]:size-4"
          >
            {item.icon}
            {item.title}
            <ExternalLink className="ms-auto size-3.5 text-fd-muted-foreground" />
          </a>
        ))}
      </PopoverContent>
    </Popover>
  );
}
