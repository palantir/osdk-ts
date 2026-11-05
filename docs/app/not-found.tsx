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
import { baseOptions } from "@/lib/layout";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-start justify-center gap-4 px-6 py-24">
        <p className="font-mono text-sm text-fd-primary">404</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          This page does not exist.
        </h1>
        <p className="text-fd-muted-foreground">
          It may have moved when the docs were reorganized. Search with
          <kbd className="mx-1 rounded border px-1.5 py-0.5 font-mono text-xs">
            ⌘K
          </kbd>
          or start from the overview.
        </p>
        <Link
          href="/overview"
          className="inline-flex h-10 items-center rounded-lg bg-fd-primary px-4 text-sm font-medium text-fd-primary-foreground"
        >
          Go to the overview
        </Link>
      </main>
    </HomeLayout>
  );
}
