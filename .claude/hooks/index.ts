#!/usr/bin/env pnpm exec bun
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

/*
MIT License

Copyright (c) 2024 Anthropic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* eslint-disable no-console */

import { $ } from "bun";
import type {
  NotificationHandler,
  PostToolUseHandler,
  PreCompactHandler,
  PreToolUseHandler,
  StopHandler,
  SubagentStopHandler,
  UserPromptSubmitHandler,
} from "./lib";
import { runHook } from "./lib";
import { saveSessionData } from "./session";

// PreToolUse handler - called before Claude uses any tool
// This handler can block tool execution by returning a deny decision
const preToolUse: PreToolUseHandler = async (payload) => {
  // Save session data (optional - remove if not needed)
  await saveSessionData(
    "PreToolUse",
    { ...payload, hook_type: "PreToolUse" } as const,
  );

  return {}; // Empty object means continue with default behavior
};

// PostToolUse handler - called after Claude uses a tool
const postToolUse: PostToolUseHandler = async (payload) => {
  // Save session data (optional - remove if not needed)
  await saveSessionData(
    "PostToolUse",
    { ...payload, hook_type: "PostToolUse" } as const,
  );

  // Format files
  if (payload.tool_name === "Write" && payload.tool_response) {
    console.log(
      "Attempting to format the file",
      payload.tool_response.filePath,
    );

    const { exitCode } =
      await $`pnpm exec dprint --log-level=debug fmt ${payload.tool_response.filePath}`
        .nothrow();

    if (exitCode === 0) {
      console.log(
        "✅ File formatting successfully!",
        payload.tool_response.filePath,
      );
    } else if (exitCode === 14) {
      console.log(
        `⚠️  Warning: ${payload.tool_response.filePath} is not processed by dprint`,
      );
    } else {
      console.error("❌  Formatting failed:", exitCode);
      throw new Error(`Failed to format ${payload.tool_response.filePath}`);
    }
  }

  return {}; // Return empty object to continue normally
};

// Notification handler - receive Claude's notifications
const notification: NotificationHandler = async (payload) => {
  await saveSessionData(
    "Notification",
    { ...payload, hook_type: "Notification" } as const,
  );

  return {}; // Return empty object to continue normally
};

// Stop handler - called when Claude stops
const stop: StopHandler = async (payload) => {
  await saveSessionData("Stop", { ...payload, hook_type: "Stop" } as const);

  return {}; // Return empty object to continue normally
};

// SubagentStop handler - called when a Claude subagent (Task tool) stops
const subagentStop: SubagentStopHandler = async (payload) => {
  await saveSessionData(
    "SubagentStop",
    { ...payload, hook_type: "SubagentStop" } as const,
  );

  // Add your custom subagent cleanup logic here
  // Note: Be careful with stop_hook_active to avoid infinite loops
  if (payload.stop_hook_active) {
    console.log(
      "⚠️  Stop hook is already active, skipping additional processing",
    );
  }

  return {}; // Return empty object to continue normally
};

// UserPromptSubmit handler - called when the user submits a prompt
const userPromptSubmit: UserPromptSubmitHandler = async (payload) => {
  await saveSessionData(
    "UserPromptSubmit",
    { ...payload, hook_type: "UserPromptSubmit" } as const,
  );

  // console.log(`💬 User prompt: ${payload.prompt}`);

  const contextFiles: string[] = [];
  return contextFiles.length > 0 ? { contextFiles } : {};
};

// PreCompact handler - called before Claude compacts the conversation
const preCompact: PreCompactHandler = async (payload) => {
  await saveSessionData(
    "PreCompact",
    { ...payload, hook_type: "PreCompact" } as const,
  );

  // Example: Log compact events
  console.log(`🗜️  Compact triggered: ${payload.trigger}`);

  // Example: Block automatic compaction during critical operations
  if (payload.trigger === "auto") {
    // You could check if critical operations are in progress
    // For now, we'll allow all compactions
    console.log("📋 Allowing automatic compaction");
  }

  return {}; // Empty object means allow compaction
};

// Run the hook with our handlers
runHook({
  preToolUse,
  postToolUse,
  notification,
  stop,
  subagentStop,
  userPromptSubmit,
  preCompact,
});
