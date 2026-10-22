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
import { CopyCommand } from "@/components/copy-command";
import { withBasePath } from "@/lib/site";
import {
  ArrowRight,
  Blocks,
  Bot,
  Gauge,
  KeyRound,
  LayoutGrid,
  Rocket,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType, ReactNode } from "react";

const startHere = [
  {
    href: "/quickstart",
    icon: Rocket,
    title: "Quickstart",
    description: "Scaffold a React app wired to your Ontology in five minutes.",
  },
  {
    href: "/react/objects",
    icon: Workflow,
    title: "React SDK",
    description:
      "Load objects, follow links, and apply actions with cached, reactive hooks.",
  },
  {
    href: "/components",
    icon: LayoutGrid,
    title: "Components",
    description:
      "Drop in tables, filters, forms, and media viewers that understand your data.",
  },
];

const more = [
  {
    href: "/authentication",
    icon: KeyRound,
    title: "Authentication",
    description: "Sign users in with OAuth and pass tokens to the client.",
  },
  {
    href: "/concepts/caching",
    icon: Blocks,
    title: "How caching works",
    description: "One normalized cache keeps every component in sync.",
  },
  {
    href: "/devtools",
    icon: Gauge,
    title: "Devtools",
    description:
      "Inspect queries, cache entries, and actions in your running app.",
  },
  {
    href: "/ai/llms",
    icon: Bot,
    title: "Use these docs with AI",
    description:
      "llms.txt, Markdown for every page, and one-click copy for agents.",
  },
];

export default function HomePage() {
  return (
    <main className="relative isolate flex w-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(50%_70%_at_50%_0%,color-mix(in_oklab,var(--color-fd-primary)_16%,transparent),transparent_70%)]"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-24">
        <section className="flex flex-col items-start gap-6 pt-20 pb-16 md:pt-28">
          <Link
            href="/ai/llms"
            className="inline-flex items-center gap-2 rounded-full border bg-fd-card px-3 py-1 text-xs font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground"
          >
            <span className="size-1.5 rounded-full bg-fd-primary" />
            Every page is available as Markdown for AI tools
            <ArrowRight className="size-3" />
          </Link>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Build on the Ontology with TypeScript.
          </h1>
          <p className="max-w-2xl text-lg text-fd-muted-foreground text-pretty">
            The Ontology SDK gives you typed access to your Foundry objects,
            links, actions, and functions, plus React hooks and components that
            keep every screen in sync.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/quickstart"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-fd-primary px-4 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              Get started
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/overview"
              className="inline-flex h-10 items-center rounded-lg border bg-fd-card px-4 text-sm font-medium transition-colors hover:bg-fd-accent"
            >
              What is OSDK?
            </Link>
            <CopyCommand command="npx @osdk/create-app@latest" />
          </div>
        </section>

        <Section title="Start here">
          <div className="grid gap-4 md:grid-cols-3">
            {startHere.map((item) => <FeatureCard key={item.href} {...item} />)}
          </div>
        </Section>

        <Section title="Go further">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((item) => (
              <FeatureCard key={item.href} {...item} compact />
            ))}
          </div>
        </Section>

        <Section title="Built for AI assistants">
          <div className="grid gap-4 rounded-2xl border bg-fd-card p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium">
                Give your coding agent the whole SDK in one request.
              </p>
              <p className="text-sm text-fd-muted-foreground">
                Every page has a Markdown version, a copy button, and an
                &ldquo;Open in ChatGPT, Claude, or Cursor&rdquo; menu. The full
                docs are published as plain text for tools that read llms.txt.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={withBasePath("/llms.txt")}
                className="inline-flex h-9 items-center rounded-lg border px-3 font-mono text-xs transition-colors hover:bg-fd-accent"
              >
                /llms.txt
              </a>
              <a
                href={withBasePath("/llms-full.txt")}
                className="inline-flex h-9 items-center rounded-lg border px-3 font-mono text-xs transition-colors hover:bg-fd-accent"
              >
                /llms-full.txt
              </a>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-5 pt-12">
      <h2 className="text-sm font-medium tracking-wide text-fd-muted-foreground uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

function FeatureCard({
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
