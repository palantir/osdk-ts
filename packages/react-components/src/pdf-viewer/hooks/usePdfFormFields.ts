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

import type { PDFDocumentProxy } from "pdfjs-dist";
import type { EventBus, PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ANNOTATION_LAYER_RENDERED_EVENT } from "../constants.js";
import type { PdfFormFieldValue } from "../types.js";

/** Get the viewer's container element (typed loosely by pdf.js). */
function getViewerContainer(viewer: PDFViewer): HTMLElement | undefined {
  return (viewer as { container?: HTMLElement }).container;
}

/** Internal metadata for a single form field annotation. */
interface FieldEntry {
  fieldName: string;
  fieldType: "text" | "checkbox" | "radiobutton" | "combobox" | "listbox";
  exportValues: string | undefined;
  page: number;
}

export interface UsePdfFormFieldsOptions {
  pdfViewerRef: RefObject<PDFViewer | null>;
  eventBusRef: RefObject<EventBus | null>;
  document: PDFDocumentProxy | undefined;
  formData?: Record<string, PdfFormFieldValue>;
  onFormSubmit?: (data: Record<string, PdfFormFieldValue>) => void;
  onFormChange?: (fieldName: string, value: PdfFormFieldValue) => void;
}

export interface UsePdfFormFieldsResult {
  /** Whether the loaded PDF contains interactive form fields. */
  hasFormFields: boolean;
  /** Collect all current form field values and invoke onFormSubmit. */
  submitFormData: () => void;
}

/**
 * Normalizes a pdf.js field object type string to a simplified form type.
 * @internal Exported for testing.
 */
export function normalizeFieldType(
  type: string,
): "text" | "checkbox" | "radiobutton" | "combobox" | "listbox" {
  switch (type) {
    case "checkbox":
    case "radiobutton":
    case "combobox":
    case "listbox":
      return type;
    default:
      return "text";
  }
}

/**
 * Converts a pdf.js annotationStorage value to a consumer-friendly PdfFormFieldValue.
 * @internal Exported for testing.
 */
export function toFormFieldValue(
  storageValue: unknown,
  fieldType: "text" | "checkbox" | "radiobutton" | "combobox" | "listbox",
): PdfFormFieldValue {
  if (fieldType === "checkbox") {
    if (typeof storageValue === "boolean") {
      return storageValue;
    }
    // pdf.js stores checkbox as the export value when checked, "Off" when unchecked
    return storageValue !== "Off" && storageValue !== false;
  }
  if (fieldType === "radiobutton") {
    return typeof storageValue === "string" ? storageValue : "";
  }
  if (typeof storageValue === "string") {
    return storageValue;
  }
  if (Array.isArray(storageValue)) {
    return storageValue.map(String);
  }
  return "";
}

/**
 * Converts a consumer PdfFormFieldValue to a pdf.js annotationStorage value.
 * @internal Exported for testing.
 */
export function toStorageValue(
  formValue: PdfFormFieldValue,
  fieldType: "text" | "checkbox" | "radiobutton" | "combobox" | "listbox",
): unknown {
  if (fieldType === "checkbox") {
    if (typeof formValue === "boolean") {
      return formValue;
    }
    return formValue !== "Off" && formValue !== "";
  }
  return formValue;
}

/**
 * Hook that manages interactive PDF form fields.
 * Builds a field metadata map, pre-populates initial values,
 * listens for field changes, and collects values on submit.
 */
export function usePdfFormFields({
  pdfViewerRef,
  eventBusRef,
  document,
  formData,
  onFormSubmit,
  onFormChange,
}: UsePdfFormFieldsOptions): UsePdfFormFieldsResult {
  const [hasFormFields, setHasFormFields] = useState(false);

  // Stable refs for callbacks
  const onFormSubmitRef = useRef(onFormSubmit);
  const onFormChangeRef = useRef(onFormChange);
  const formDataRef = useRef(formData);

  useEffect(
    function syncCallbackRefs() {
      onFormSubmitRef.current = onFormSubmit;
      onFormChangeRef.current = onFormChange;
      formDataRef.current = formData;
    },
    [onFormSubmit, onFormChange, formData],
  );

  // Map from annotation ID -> field metadata
  const fieldMapRef = useRef<Map<string, FieldEntry>>(new Map());
  // Reverse map from field name -> annotation IDs
  const nameToIdsRef = useRef<Map<string, string[]>>(new Map());

  // Effect 1: Build field metadata map when document loads
  useEffect(
    function buildFieldMap() {
      const doc = document;
      if (doc == null) {
        fieldMapRef.current.clear();
        nameToIdsRef.current.clear();
        setHasFormFields(false);
        return;
      }

      let cancelled = false;

      void doc.getFieldObjects().then((fieldObjects) => {
        if (cancelled || fieldObjects == null) {
          setHasFormFields(false);
          return;
        }

        const fieldMap = new Map<string, FieldEntry>();
        const nameToIds = new Map<string, string[]>();

        for (const [fieldName, objects] of Object.entries(fieldObjects)) {
          const ids: string[] = [];
          for (const obj of objects) {
            const typedObj = obj as {
              id?: string;
              type?: string;
              exportValues?: string;
              page?: number;
            };
            if (typedObj.id == null) continue;

            const fieldType = normalizeFieldType(typedObj.type ?? "text");
            fieldMap.set(typedObj.id, {
              fieldName,
              fieldType,
              exportValues: typedObj.exportValues,
              page: typedObj.page ?? 0,
            });
            ids.push(typedObj.id);
          }
          if (ids.length > 0) {
            nameToIds.set(fieldName, ids);
          }
        }

        fieldMapRef.current = fieldMap;
        nameToIdsRef.current = nameToIds;
        setHasFormFields(fieldMap.size > 0);
      });

      return () => {
        cancelled = true;
      };
    },
    [document],
  );

  // Populates form fields from formData into both annotation storage and DOM elements.
  // Scoped to the viewer container to avoid conflicts with multiple viewer instances.
  const populateFields = useCallback(() => {
    const data = formDataRef.current;
    const doc = document;
    const pdfViewer = pdfViewerRef.current;
    if (data == null || doc == null || pdfViewer == null) return;
    if (fieldMapRef.current.size === 0) return;

    const storage = doc.annotationStorage;
    const container = getViewerContainer(pdfViewer);

    for (const [fieldName, value] of Object.entries(data)) {
      const ids = nameToIdsRef.current.get(fieldName);
      if (ids == null) continue;

      for (const id of ids) {
        const entry = fieldMapRef.current.get(id);
        if (entry == null) continue;

        // Also update the DOM element directly (scoped to viewer container)
        const el = container?.querySelector(
          `[data-element-id="${CSS.escape(id)}"]`,
        );

        if (entry.fieldType === "radiobutton") {
          // Radio buttons: each ID is a separate option. Check the one
          // whose export value matches, uncheck the others.
          // Use exportValues if defined, otherwise fall back to the DOM
          // element's value attribute (mirrors handleFieldChange logic).
          const optionValue =
            entry.exportValues ??
            (el instanceof HTMLInputElement ? el.value : undefined);
          const isSelected = optionValue === String(value);
          storage.setValue(id, {
            value: isSelected ? (entry.exportValues ?? String(value)) : "Off",
          });
          if (el instanceof HTMLInputElement) {
            el.checked = isSelected;
          }
        } else {
          const storageVal = toStorageValue(value, entry.fieldType);
          storage.setValue(id, { value: storageVal });

          if (el == null) continue;

          if (
            entry.fieldType === "checkbox" &&
            el instanceof HTMLInputElement
          ) {
            el.checked =
              typeof storageVal === "boolean"
                ? storageVal
                : storageVal !== "Off";
          } else if (el instanceof HTMLSelectElement) {
            el.value = String(value);
          } else if (
            el instanceof HTMLInputElement ||
            el instanceof HTMLTextAreaElement
          ) {
            el.value = String(value);
          }
        }
      }
    }
  }, [document, pdfViewerRef]);

  // Effect 2: Populate initial form data when annotation layers render
  useEffect(
    function populateFormData() {
      const eventBus = eventBusRef.current;
      if (eventBus == null || document == null || formDataRef.current == null) {
        return;
      }

      // Attempt population immediately in case the field map was built
      // after the annotation layer already rendered (race condition fix).
      populateFields();

      const onAnnotationLayerRendered = () => {
        populateFields();
      };

      eventBus.on(ANNOTATION_LAYER_RENDERED_EVENT, onAnnotationLayerRendered);

      return () => {
        eventBus.off(
          ANNOTATION_LAYER_RENDERED_EVENT,
          onAnnotationLayerRendered,
        );
      };
    },
    [eventBusRef, document, hasFormFields, populateFields],
  );

  // Effect 3: Listen for field changes via MutationObserver + event listeners
  useEffect(
    function listenForFieldChanges() {
      const pdfViewer = pdfViewerRef.current;
      if (pdfViewer == null || document == null) {
        return;
      }

      // Get the viewer's container element
      const container = getViewerContainer(pdfViewer);
      if (container == null) return;

      const listeners = new Map<Element, () => void>();

      function handleFieldChange(
        el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
      ) {
        const id = el.getAttribute("data-element-id");
        if (id == null) return;

        const entry = fieldMapRef.current.get(id);
        if (entry == null) return;

        let value: PdfFormFieldValue;
        if (entry.fieldType === "checkbox" && el instanceof HTMLInputElement) {
          value = el.checked;
        } else if (
          entry.fieldType === "radiobutton" &&
          el instanceof HTMLInputElement
        ) {
          // For radio buttons, the value is the button's export value when selected
          value = el.checked ? (entry.exportValues ?? el.value) : "";
        } else {
          value = el.value;
        }

        onFormChangeRef.current?.(entry.fieldName, value);
      }

      function attachListeners(root: Node) {
        const elements = (root as Element).querySelectorAll?.(
          ".annotationLayer input, .annotationLayer select, .annotationLayer textarea",
        );
        if (elements == null) return;

        for (const el of elements) {
          if (listeners.has(el)) continue;

          const handler = () => {
            handleFieldChange(
              el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
            );
          };
          el.addEventListener("input", handler);
          el.addEventListener("change", handler);
          listeners.set(el, handler);
        }
      }

      // Attach to any elements already in the DOM
      attachListeners(container);

      // Watch for new form elements being added (pages render lazily)
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node instanceof Element) {
              attachListeners(node);
            }
          }
        }
      });

      observer.observe(container, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
        for (const [el, handler] of listeners) {
          el.removeEventListener("input", handler);
          el.removeEventListener("change", handler);
        }
        listeners.clear();
      };
    },
    [pdfViewerRef, document],
  );

  // Callback: collect all form data and invoke onFormSubmit
  const submitFormData = useCallback(() => {
    const doc = document;
    if (doc == null) return;

    const storage = doc.annotationStorage;
    const allValues = storage.getAll() as Record<string, unknown> | null;
    const result: Record<string, PdfFormFieldValue> = {};

    // Track which radio group has been resolved
    const resolvedRadios = new Set<string>();

    for (const [id, entry] of fieldMapRef.current) {
      const { fieldName, fieldType } = entry;

      // For radio buttons, only process each group once
      if (fieldType === "radiobutton") {
        if (resolvedRadios.has(fieldName)) continue;
        resolvedRadios.add(fieldName);

        // Find the selected radio in the group
        const groupIds = nameToIdsRef.current.get(fieldName) ?? [];
        let selectedValue = "";
        for (const radioId of groupIds) {
          const stored = allValues?.[radioId];
          const val =
            stored != null && typeof stored === "object" && "value" in stored
              ? (stored as { value: unknown }).value
              : stored;
          if (val === true || (typeof val === "string" && val !== "Off")) {
            const radioEntry = fieldMapRef.current.get(radioId);
            selectedValue = radioEntry?.exportValues ?? String(val);
            break;
          }
        }
        result[fieldName] = selectedValue;
        continue;
      }

      const stored = allValues?.[id];
      const rawValue =
        stored != null && typeof stored === "object" && "value" in stored
          ? (stored as { value: unknown }).value
          : stored;

      // Skip if we already have a value for this field name (e.g. duplicate IDs)
      if (fieldName in result) continue;

      result[fieldName] = toFormFieldValue(rawValue, fieldType);
    }

    onFormSubmitRef.current?.(result);
  }, [document]);

  return {
    hasFormFields,
    submitFormData,
  };
}
