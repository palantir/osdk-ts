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

import React from "react";
import { createRoot, type Root } from "react-dom/client";
import { InspectorBanner } from "./components/InspectorBanner.js";
import { InspectorOverlay } from "./components/InspectorOverlay.js";
import { createInspectorController } from "./inspectorController.js";
import type {
  InspectedComponent,
  InspectorController,
  InspectorState as InspectorControllerState,
} from "./types.js";

export interface ClickToInspectOptions {
  containerElement?: HTMLElement;
  renderTarget?: HTMLElement;
  onSelect?: (component: InspectedComponent) => void;
  onActivate?: () => void;
  onDeactivate?: () => void;
}

export interface InspectorState {
  active: boolean;
  hoveredElement: HTMLElement | null;
  hoveredComponentId: string | null;
  selectedComponentId: string | null;
}

export class ClickToInspectSystem {
  private state: InspectorState = {
    active: false,
    hoveredElement: null,
    hoveredComponentId: null,
    selectedComponentId: null,
  };

  private readonly options: ClickToInspectOptions;
  private inspectorController: InspectorController | null = null;
  private bannerContainer: HTMLDivElement | null = null;
  private bannerRoot: Root | null = null;
  private overlayContainer: HTMLDivElement | null = null;
  private overlayRoot: Root | null = null;
  private stateUnsubscribe: (() => void) | null = null;
  private eventHandlers: Map<
    string,
    { eventType: string; handler: EventListener }
  > = new Map();

  constructor(options: ClickToInspectOptions = {}) {
    this.options = options;
    this.setupKeyboardShortcuts();
  }

  activate(): void {
    if (this.state.active) {
      return;
    }

    this.state.active = true;

    this.inspectorController = createInspectorController({
      containerElement: this.options.containerElement,
      eventHandlers: {
        onActivate: () => {
          this.options.onActivate?.();
        },
        onDeactivate: () => {
          this.deactivate();
        },
        onSelect: (component: InspectedComponent) => {
          this.handleComponentSelected(component);
        },
        onHover: (component: InspectedComponent | null) => {
          if (component) {
            this.state.hoveredComponentId = component.name;
          } else {
            this.state.hoveredComponentId = null;
          }
        },
      },
    });

    this.inspectorController.activate();

    this.showOverlay();
    this.showBanner();
    this.setCursor("crosshair");
  }

  private showOverlay(): void {
    const renderTarget = this.options.renderTarget ?? document.body;

    if (!this.overlayContainer) {
      this.overlayContainer = document.createElement("div");
      this.overlayContainer.id = "osdk-inspector-overlay";
      this.overlayContainer.setAttribute("data-osdk-devtools-ignore", "");
      renderTarget.appendChild(this.overlayContainer);
      this.overlayRoot = createRoot(this.overlayContainer);
    }

    if (this.inspectorController) {
      this.stateUnsubscribe = this.inspectorController.subscribe(
        (controllerState) => {
          this.renderOverlay(controllerState);
        },
      );

      this.renderOverlay(this.inspectorController.getState());
    }
  }

  private renderOverlay(controllerState: InspectorControllerState): void {
    if (!this.overlayRoot) {
      return;
    }

    this.overlayRoot.render(
      React.createElement(InspectorOverlay, {
        state: controllerState,
      }),
    );
  }

  private hideOverlay(): void {
    if (this.stateUnsubscribe) {
      this.stateUnsubscribe();
      this.stateUnsubscribe = null;
    }

    if (this.overlayRoot) {
      this.overlayRoot.render(
        React.createElement(InspectorOverlay, {
          state: {
            mode: "inactive",
            mouseX: -9999,
            mouseY: -9999,
            hoveredElement: null,
            selectedElement: null,
            frozenElement: null,
            inspectedComponent: null,
            selectionBounds: null,
            labelPosition: null,
            labelStatus: "idle",
            viewportVersion: 0,
          },
        }),
      );
    }
  }

  private showBanner(): void {
    const renderTarget = this.options.renderTarget ?? document.body;

    if (!this.bannerContainer) {
      this.bannerContainer = document.createElement("div");
      this.bannerContainer.id = "osdk-inspector-banner";
      renderTarget.appendChild(this.bannerContainer);
      this.bannerRoot = createRoot(this.bannerContainer);
    }

    this.bannerRoot?.render(
      React.createElement(InspectorBanner, { visible: true }),
    );
  }

  private hideBanner(): void {
    if (this.bannerRoot) {
      this.bannerRoot.render(
        React.createElement(InspectorBanner, { visible: false }),
      );
    }
  }

  private handleComponentSelected(component: InspectedComponent): void {
    this.state.selectedComponentId = component.name;
    this.options.onSelect?.(component);
    this.deactivate();
  }

  deactivate(): void {
    if (!this.state.active) {
      return;
    }

    this.state.active = false;

    this.hideOverlay();

    if (this.inspectorController) {
      this.inspectorController.destroy();
      this.inspectorController = null;
    }

    this.hideBanner();
    this.setCursor("default");
    this.clearHover();

    this.options.onDeactivate?.();
  }

  toggle(): void {
    if (this.state.active) {
      this.deactivate();
    } else {
      this.activate();
    }
  }

  private setupKeyboardShortcuts(): void {
    const existing = this.eventHandlers.get("keydown-global");
    if (existing) {
      window.removeEventListener(existing.eventType, existing.handler, true);
      this.eventHandlers.delete("keydown-global");
    }

    const handler = (e: Event) => {
      const keyEvent = e as KeyboardEvent;

      if (
        (keyEvent.ctrlKey || keyEvent.metaKey) && keyEvent.shiftKey
        && keyEvent.key === "C"
      ) {
        keyEvent.preventDefault();
        keyEvent.stopPropagation();
        this.toggle();
      }

      if (keyEvent.key === "Escape" && this.state.active) {
        keyEvent.preventDefault();
        keyEvent.stopPropagation();
        this.deactivate();
      }
    };

    window.addEventListener("keydown", handler, true);
    this.eventHandlers.set("keydown-global", { eventType: "keydown", handler });
  }

  private clearHover(): void {
    this.state.hoveredElement = null;
    this.state.hoveredComponentId = null;
  }

  private setCursor(cursor: string): void {
    document.body.style.cursor = cursor;
  }

  dispose(): void {
    this.deactivate();

    for (const { eventType, handler } of this.eventHandlers.values()) {
      window.removeEventListener(eventType, handler, true);
    }
    this.eventHandlers.clear();

    if (this.bannerRoot) {
      this.bannerRoot.unmount();
      this.bannerRoot = null;
    }
    if (this.bannerContainer) {
      this.bannerContainer.remove();
      this.bannerContainer = null;
    }

    if (this.overlayRoot) {
      this.overlayRoot.unmount();
      this.overlayRoot = null;
    }
    if (this.overlayContainer) {
      this.overlayContainer.remove();
      this.overlayContainer = null;
    }
  }

  getState(): InspectorState {
    return { ...this.state };
  }
}
