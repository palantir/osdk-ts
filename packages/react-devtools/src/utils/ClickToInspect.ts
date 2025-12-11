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

import type {
  ComponentContextCapture,
  Fiber,
} from "./ComponentContextCapture.js";
import type { ComponentPrimitiveDiscovery } from "./ComponentPrimitiveDiscovery.js";
import type { ComponentQueryRegistry } from "./ComponentQueryRegistry.js";

export interface InspectorState {
  active: boolean;
  hoveredElement: HTMLElement | null;
  hoveredComponentId: string | null;
  selectedComponentId: string | null;
}

export interface HighlightOptions {
  hasHooks?: boolean;
  componentName?: string;
  hookCount?: number;
}

export class InspectorOverlay {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private tooltip: HTMLDivElement;
  private dimOverlay: HTMLDivElement;
  private calloutBanner: HTMLDivElement;
  private animationFrame: number | null = null;

  constructor() {
    this.canvas = this.createCanvas();
    this.ctx = this.canvas.getContext("2d")!;
    this.tooltip = this.createTooltip();
    this.dimOverlay = this.createDimOverlay();
    this.calloutBanner = this.createCalloutBanner();
  }

  private createCanvas(): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "2147483640"; // Lower than modal
    canvas.style.display = "none";

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    this.ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);

    return canvas;
  }

  private createTooltip(): HTMLDivElement {
    const tooltip = document.createElement("div");
    tooltip.style.position = "fixed";
    tooltip.style.background = "rgba(0, 0, 0, 0.9)";
    tooltip.style.color = "white";
    tooltip.style.padding = "8px 12px";
    tooltip.style.borderRadius = "4px";
    tooltip.style.fontSize = "12px";
    tooltip.style.fontFamily = "monospace";
    tooltip.style.pointerEvents = "none";
    tooltip.style.zIndex = "2147483641"; // Lower than modal but above canvas
    tooltip.style.display = "none";
    tooltip.style.whiteSpace = "nowrap";

    return tooltip;
  }

  private createDimOverlay(): HTMLDivElement {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    overlay.style.pointerEvents = "none";
    overlay.style.zIndex = "2147483639"; // Lower than canvas and modal
    overlay.style.display = "none";

    return overlay;
  }

  private createCalloutBanner(): HTMLDivElement {
    const banner = document.createElement("div");
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "50%";
    banner.style.transform = "translateX(-50%)";
    banner.style.background =
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    banner.style.color = "white";
    banner.style.padding = "12px 24px";
    banner.style.borderRadius = "0 0 8px 8px";
    banner.style.fontSize = "14px";
    banner.style.fontWeight = "600";
    banner.style.fontFamily = "system-ui, -apple-system, sans-serif";
    banner.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
    banner.style.pointerEvents = "none";
    banner.style.zIndex = "2147483641"; // Lower than modal but above canvas
    banner.style.display = "none";
    banner.style.textAlign = "center";
    banner.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2L3 6V10C3 14.5 6.5 18.5 10 19.5C13.5 18.5 17 14.5 17 10V6L10 2Z"
                stroke="white" stroke-width="1.5" fill="rgba(255,255,255,0.2)"/>
        </svg>
        <span>Click on a component to inspect its OSDK hooks</span>
        <kbd style="background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 3px; font-size: 12px; margin-left: 8px;">ESC</kbd>
        <span style="font-size: 12px; opacity: 0.9;">to exit</span>
      </div>
    `;

    return banner;
  }

  show(): void {
    if (!this.canvas.parentElement) {
      document.body.appendChild(this.dimOverlay);
      document.body.appendChild(this.canvas);
      document.body.appendChild(this.tooltip);
      document.body.appendChild(this.calloutBanner);
    }

    this.dimOverlay.style.display = "block";
    this.canvas.style.display = "block";
    this.calloutBanner.style.display = "block";
    this.startAnimation();
  }

  hide(): void {
    this.dimOverlay.style.display = "none";
    this.canvas.style.display = "none";
    this.tooltip.style.display = "none";
    this.calloutBanner.style.display = "none";
    this.stopAnimation();
  }

  highlight(element: HTMLElement, options: HighlightOptions = {}): void {
    if (!this.ctx) return;

    const rect = element.getBoundingClientRect();

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.strokeStyle = options.hasHooks ? "#0066ff" : "#999999";
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(rect.left, rect.top, rect.width, rect.height);

    this.ctx.fillStyle = options.hasHooks
      ? "rgba(0, 102, 255, 0.1)"
      : "rgba(153, 153, 153, 0.1)";
    this.ctx.fillRect(rect.left, rect.top, rect.width, rect.height);

    if (options.componentName) {
      this.tooltip.textContent =
        `${options.componentName} (${options.hookCount} hooks)`;
      this.tooltip.style.display = "block";
      this.tooltip.style.left = `${rect.left}px`;
      this.tooltip.style.top = `${rect.top - 30}px`;
    } else {
      this.tooltip.style.display = "none";
    }
  }

  clearHighlight(): void {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.tooltip.style.display = "none";
  }

  private startAnimation(): void {
    let alpha = 0.1;
    let direction = 1;

    const animate = () => {
      alpha += 0.02 * direction;

      if (alpha >= 0.3) direction = -1;
      if (alpha <= 0.1) direction = 1;

      this.animationFrame = requestAnimationFrame(animate);
    };

    this.animationFrame = requestAnimationFrame(animate);
  }

  private stopAnimation(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  dispose(): void {
    this.stopAnimation();
    this.dimOverlay.remove();
    this.canvas.remove();
    this.tooltip.remove();
    this.calloutBanner.remove();
  }
}

export class DOMToFiberMapper {
  findFiberForDOM(element: HTMLElement): Fiber | null {
    // Try multiple strategies to find the fiber node

    // Strategy 1: Check for React internal properties on the element
    for (const key in element) {
      if (
        key.startsWith("__reactFiber$")
        || key.startsWith("__reactInternalInstance$")
      ) {
        return (element as any)[key];
      }
    }

    // Strategy 2: Use React DevTools hook if available
    const hook = (globalThis as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (hook?.rendererInterfaces?.size) {
      for (const renderer of hook.rendererInterfaces.values()) {
        if (renderer.findFiberByHostInstance) {
          try {
            const fiber = renderer.findFiberByHostInstance(element);
            if (fiber) return fiber;
          } catch (e) {
            // Continue to next strategy
          }
        }
      }
    }

    // Strategy 3: Walk up the DOM tree to find a fiber
    let current: HTMLElement | null = element;
    while (current && current !== document.body) {
      for (const key in current) {
        if (
          key.startsWith("__reactFiber$")
          || key.startsWith("__reactInternalInstance$")
        ) {
          return (current as any)[key];
        }
      }
      current = current.parentElement;
    }

    return null;
  }

  findComponentFiber(fiber: Fiber): Fiber | null {
    let current: Fiber | null = fiber;
    let depth = 0;
    const maxDepth = 50; // Prevent infinite loops

    while (current && depth < maxDepth) {
      // Look for function components or class components
      if (
        typeof current.type === "function"
        && current.type.name !== "Anonymous"
        // Skip internal React components
        && !current.type.name.startsWith("_")
        // Skip React.Fragment and similar
        && current.type.name !== "Fragment"
      ) {
        return current;
      }

      current = current.return;
      depth++;
    }

    return null;
  }

  /**
   * Find the outermost DOM element associated with a component fiber.
   * This gives us the bounding box of the entire component.
   */
  findComponentBoundingElement(fiber: Fiber): HTMLElement | null {
    // For host components (DOM elements), stateNode is the actual DOM node
    if (
      typeof fiber.type === "string" && fiber.stateNode instanceof HTMLElement
    ) {
      return fiber.stateNode;
    }

    // For function/class components, we need to find their host children
    // Walk down the fiber tree to find the first host component
    const hostElement = this.findFirstHostElement(fiber);
    if (hostElement) {
      return hostElement;
    }

    return null;
  }

  private findFirstHostElement(fiber: Fiber): HTMLElement | null {
    let current: Fiber | null = fiber;
    const visited = new Set<Fiber>();

    while (current && !visited.has(current)) {
      visited.add(current);

      // If this is a host component (DOM element), return it
      if (
        typeof current.type === "string"
        && current.stateNode instanceof HTMLElement
      ) {
        return current.stateNode;
      }

      // Try child first
      if (current.child) {
        current = current.child;
        continue;
      }

      // Try sibling
      if (current.sibling) {
        current = current.sibling;
        continue;
      }

      // Go back up and try parent's sibling
      while (current && !current.sibling) {
        if (current === fiber) break; // Don't go above our starting point
        current = current.return;
      }

      if (current && current !== fiber) {
        current = current.sibling;
      } else {
        break;
      }
    }

    return null;
  }

  getFiberId(fiber: Fiber): string {
    // Try to create a stable ID
    if (fiber._debugID) {
      return `fiber-${fiber._debugID}`;
    }

    // Use component name + some unique identifier
    const name = this.getComponentName(fiber);
    const stateNode = fiber.stateNode;
    if (stateNode && typeof stateNode === "object") {
      return `${name}-${Math.random().toString(36).substring(2, 11)}`;
    }

    return `fiber-${Math.random().toString(36).substring(2, 11)}`;
  }

  getComponentName(fiber: Fiber): string {
    if (typeof fiber.type === "function") {
      return fiber.type.displayName || fiber.type.name || "Anonymous";
    }
    if (typeof fiber.type === "string") {
      return fiber.type;
    }
    return "Unknown";
  }
}

export interface DevToolsBridge {
  send(message: any): void;
}

export class ClickToInspectSystem {
  private state: InspectorState = {
    active: false,
    hoveredElement: null,
    hoveredComponentId: null,
    selectedComponentId: null,
  };

  private overlay: InspectorOverlay;
  private domToFiberMap: DOMToFiberMapper;
  private eventHandlers: Map<string, EventListener> = new Map();

  constructor(
    private registry: ComponentQueryRegistry,
    private primitiveDiscovery?: ComponentPrimitiveDiscovery,
    private devToolsBridge?: DevToolsBridge,
    private componentContext?: ComponentContextCapture,
  ) {
    this.overlay = new InspectorOverlay();
    this.domToFiberMap = new DOMToFiberMapper();
    this.setupKeyboardShortcuts();
  }

  activate(): void {
    if (this.state.active) return;

    this.state.active = true;
    this.overlay.show();
    this.attachEventListeners();
    this.setCursor("crosshair");

    this.devToolsBridge?.send({
      type: "INSPECTOR_ACTIVATED",
    });
  }

  deactivate(): void {
    if (!this.state.active) return;

    this.state.active = false;
    this.overlay.hide();
    this.detachEventListeners();
    this.setCursor("default");
    this.clearHover();

    // Emit event for UI to listen
    window.dispatchEvent(new CustomEvent("inspector-deactivated"));

    this.devToolsBridge?.send({
      type: "INSPECTOR_DEACTIVATED",
    });
  }

  toggle(): void {
    if (this.state.active) {
      this.deactivate();
    } else {
      this.activate();
    }
  }

  private setupKeyboardShortcuts(): void {
    const handler = (e: Event) => {
      const keyEvent = e as KeyboardEvent;

      // Ctrl/Cmd + Shift + C to toggle
      if (
        (keyEvent.ctrlKey || keyEvent.metaKey) && keyEvent.shiftKey
        && keyEvent.key === "C"
      ) {
        keyEvent.preventDefault();
        keyEvent.stopPropagation();
        this.toggle();
      }

      // Escape to deactivate
      if (keyEvent.key === "Escape" && this.state.active) {
        keyEvent.preventDefault();
        keyEvent.stopPropagation();
        this.deactivate();
      }
    };

    // Use capture phase to ensure we get the event first
    window.addEventListener("keydown", handler, true);
    this.eventHandlers.set("keydown-global", handler);
  }

  private attachEventListeners(): void {
    const mouseMoveHandler = (e: Event) =>
      this.handleMouseMove(e as MouseEvent);
    const clickHandler = (e: Event) => this.handleClick(e as MouseEvent);

    window.addEventListener("mousemove", mouseMoveHandler, true);
    window.addEventListener("click", clickHandler, true);

    this.eventHandlers.set("mousemove", mouseMoveHandler);
    this.eventHandlers.set("click", clickHandler);
  }

  private detachEventListeners(): void {
    for (const [event, handler] of this.eventHandlers) {
      // Don't remove the global keyboard handler
      if (event === "keydown-global") continue;

      window.removeEventListener(event as any, handler as any, true);
    }
  }

  private handleMouseMove(e: MouseEvent): void {
    if (!this.state.active) return;

    const element = document.elementFromPoint(
      e.clientX,
      e.clientY,
    ) as HTMLElement;
    if (!element || element === this.state.hoveredElement) return;

    this.clearHover();

    const fiber = this.domToFiberMap.findFiberForDOM(element);
    if (!fiber) {
      this.state.hoveredElement = element;
      this.overlay.highlight(element);
      return;
    }

    const componentFiber = this.domToFiberMap.findComponentFiber(fiber);
    if (!componentFiber) {
      this.state.hoveredElement = element;
      this.overlay.highlight(element);
      return;
    }

    const componentName = this.domToFiberMap.getComponentName(componentFiber);

    // Use ComponentContextCapture for stable IDs when available
    const componentId = this.componentContext
      ? this.componentContext.getComponentIdForFiber(componentFiber)
      : this.domToFiberMap.getFiberId(componentFiber);

    const bindings = this.registry.getComponentBindings(componentId);

    // Find the actual bounding element for this component
    const boundingElement = this.domToFiberMap.findComponentBoundingElement(
      componentFiber,
    );
    const elementToHighlight = boundingElement || element;

    if (bindings.length === 0) {
      this.state.hoveredElement = elementToHighlight;
      this.overlay.highlight(elementToHighlight, {
        hasHooks: false,
        componentName,
      });
      return;
    }

    this.state.hoveredElement = elementToHighlight;
    this.state.hoveredComponentId = componentId;
    this.overlay.highlight(elementToHighlight, {
      hasHooks: true,
      componentName: bindings[0].componentName,
      hookCount: bindings.length,
    });
  }

  private handleClick(e: MouseEvent): void {
    if (!this.state.active) return;

    e.preventDefault();
    e.stopPropagation();

    const element = document.elementFromPoint(
      e.clientX,
      e.clientY,
    ) as HTMLElement;
    if (!element) return;

    const fiber = this.domToFiberMap.findFiberForDOM(element);
    if (!fiber) return;

    const componentFiber = this.domToFiberMap.findComponentFiber(fiber);
    if (!componentFiber) return;

    // Use ComponentContextCapture for stable IDs when available
    const componentId = this.componentContext
      ? this.componentContext.getComponentIdForFiber(componentFiber)
      : this.domToFiberMap.getFiberId(componentFiber);

    this.state.selectedComponentId = componentId;

    // Discover primitives if discovery system is available
    if (this.primitiveDiscovery) {
      const primitives = this.primitiveDiscovery.discoverPrimitives(
        componentFiber,
      );

      // Emit custom event for UI to listen to
      window.dispatchEvent(
        new CustomEvent("primitives-discovered", {
          detail: {
            componentId: primitives.componentId,
            primitives,
          },
        }),
      );
    }

    this.devToolsBridge?.send({
      type: "COMPONENT_SELECTED",
      payload: {
        componentId: this.state.selectedComponentId,
        bindings: this.registry.getComponentBindings(
          this.state.selectedComponentId,
        ),
      },
    });

    this.deactivate();
  }

  private clearHover(): void {
    this.state.hoveredElement = null;
    this.state.hoveredComponentId = null;
    this.overlay.clearHighlight();
  }

  private setCursor(cursor: string): void {
    document.body.style.cursor = cursor;
  }

  dispose(): void {
    this.deactivate();

    // Remove all event listeners including keyboard shortcuts
    for (const [event, handler] of this.eventHandlers) {
      window.removeEventListener(event as any, handler as any, true);
    }
    this.eventHandlers.clear();

    this.overlay.dispose();
  }

  getState(): InspectorState {
    return { ...this.state };
  }
}
