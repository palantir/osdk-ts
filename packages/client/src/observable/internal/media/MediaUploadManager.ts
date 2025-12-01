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

import type { MediaReference } from "@osdk/api";

export interface UploadState {
  progress: number; // 0-100
  isUploading: boolean;
  error?: Error;
  abortController?: AbortController;
}

export interface UploadHandle {
  promise: Promise<MediaReference>;
  abort: () => void;
  onProgress: (callback: (progress: number) => void) => () => void;
}

export interface MediaUploadManager {
  startUpload(key: string): UploadState;
  updateProgress(key: string, progress: number): void;
  completeUpload(key: string): void;
  failUpload(key: string, error: Error): void;
  abortUpload(key: string): void;
  getUploadState(key: string): UploadState | undefined;
  addProgressListener(
    key: string,
    callback: (progress: number) => void,
  ): () => void;
  clear(): void;
}

/**
 * Creates a media upload manager for tracking upload state and progress
 */
export function createMediaUploadManager(): MediaUploadManager {
  const uploadStates = new Map<string, UploadState>();
  const progressListeners = new Map<string, Set<(progress: number) => void>>();
  const cleanupTimers = new Map<string, NodeJS.Timeout>();

  /**
   * Notify all progress listeners for a key
   */
  function notifyProgressListeners(key: string, progress: number): void {
    const listeners = progressListeners.get(key);
    if (listeners) {
      listeners.forEach((callback) => callback(progress));
    }
  }

  /**
   * Start tracking an upload
   */
  function startUpload(key: string): UploadState {
    const state: UploadState = {
      progress: 0,
      isUploading: true,
      abortController: new AbortController(),
    };

    uploadStates.set(key, state);
    return state;
  }

  /**
   * Update upload progress
   */
  function updateProgress(key: string, progress: number): void {
    const state = uploadStates.get(key);
    if (state) {
      state.progress = Math.min(100, Math.max(0, progress));
      notifyProgressListeners(key, state.progress);
    }
  }

  /**
   * Mark upload as complete
   */
  function completeUpload(key: string): void {
    const state = uploadStates.get(key);
    if (state) {
      state.isUploading = false;
      state.progress = 100;
      notifyProgressListeners(key, 100);
    }

    // Cancel any existing cleanup timer
    const existingTimer = cleanupTimers.get(key);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    // Clean up after a delay
    const timer = setTimeout(() => {
      uploadStates.delete(key);
      progressListeners.delete(key);
      cleanupTimers.delete(key);
    }, 5000);

    cleanupTimers.set(key, timer);
  }

  /**
   * Mark upload as failed
   */
  function failUpload(key: string, error: Error): void {
    const state = uploadStates.get(key);
    if (state) {
      state.isUploading = false;
      state.error = error;
    }

    // Cancel any existing cleanup timer
    const existingTimer = cleanupTimers.get(key);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    // Clean up failed uploads after a longer delay to allow error inspection
    const timer = setTimeout(() => {
      uploadStates.delete(key);
      progressListeners.delete(key);
      cleanupTimers.delete(key);
    }, 30000); // Keep error state for 30 seconds

    cleanupTimers.set(key, timer);
  }

  /**
   * Abort an upload
   */
  function abortUpload(key: string): void {
    const state = uploadStates.get(key);
    if (state?.abortController) {
      state.abortController.abort();
      state.isUploading = false;
      uploadStates.delete(key);
      progressListeners.delete(key);
    }

    // Cancel any cleanup timer
    const existingTimer = cleanupTimers.get(key);
    if (existingTimer) {
      clearTimeout(existingTimer);
      cleanupTimers.delete(key);
    }
  }

  /**
   * Get current upload state
   */
  function getUploadState(key: string): UploadState | undefined {
    return uploadStates.get(key);
  }

  /**
   * Add a progress listener
   */
  function addProgressListener(
    key: string,
    callback: (progress: number) => void,
  ): () => void {
    if (!progressListeners.has(key)) {
      progressListeners.set(key, new Set());
    }

    const listeners = progressListeners.get(key);
    if (!listeners) {
      // This shouldn't happen given the check above, but handle it safely
      return () => {};
    }

    listeners.add(callback);

    // Return unsubscribe function
    return () => {
      listeners.delete(callback);
      if (listeners.size === 0) {
        progressListeners.delete(key);
      }
    };
  }

  /**
   * Clean up all uploads
   */
  function clear(): void {
    // Abort all active uploads
    for (const state of uploadStates.values()) {
      if (state.abortController) {
        state.abortController.abort();
      }
    }

    // Clear all cleanup timers
    for (const timer of cleanupTimers.values()) {
      clearTimeout(timer);
    }

    uploadStates.clear();
    progressListeners.clear();
    cleanupTimers.clear();
  }

  return {
    startUpload,
    updateProgress,
    completeUpload,
    failUpload,
    abortUpload,
    getUploadState,
    addProgressListener,
    clear,
  };
}
