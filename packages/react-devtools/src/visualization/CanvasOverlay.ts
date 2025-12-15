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

export interface Point {
  x: number;
  y: number;
}

interface Animation {
  type: "pulse" | "flow";
  startTime: number;
  duration: number;
  draw: (progress: number) => void;
}

export class CanvasOverlaySystem {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animations = new Map<string, Animation>();
  private animationFrameId: number | null = null;
  private isRunning = false;

  start(): void {
    if (this.isRunning) return;

    this.canvas = this.createCanvas();
    this.ctx = this.canvas.getContext("2d");

    if (!this.ctx) {
      throw new Error("Failed to get 2D context from canvas");
    }

    this.isRunning = true;
    this.startAnimationLoop();
  }

  stop(): void {
    if (!this.isRunning) return;

    this.isRunning = false;

    if (this.animationFrameId != null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }

    this.canvas = null;
    this.ctx = null;
    this.animations.clear();
  }

  private createCanvas(): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "999999";

    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;

    document.body.appendChild(canvas);
    return canvas;
  }

  pulse(rect: DOMRect, color: string, duration: number): void {
    if (!this.isRunning || !this.ctx) return;

    const id = `pulse-${Date.now()}-${Math.random()}`;
    const dpr = devicePixelRatio;

    this.animations.set(id, {
      type: "pulse",
      startTime: Date.now(),
      duration,
      draw: (progress: number) => {
        if (!this.ctx) return;

        const alpha = 0.3 * (1 - progress);
        const scale = 1 + 0.1 * progress;

        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2 * dpr;
        this.ctx.globalAlpha = alpha;

        const centerX = (rect.left + rect.width / 2) * dpr;
        const centerY = (rect.top + rect.height / 2) * dpr;
        const w = rect.width * scale * dpr;
        const h = rect.height * scale * dpr;

        this.ctx.strokeRect(
          centerX - w / 2,
          centerY - h / 2,
          w,
          h,
        );

        this.ctx.restore();
      },
    });
  }

  flowArrow(
    from: Point,
    to: Point,
    color: string,
    duration: number,
  ): void {
    if (!this.isRunning || !this.ctx) return;

    const id = `flow-${Date.now()}-${Math.random()}`;
    const dpr = devicePixelRatio;

    this.animations.set(id, {
      type: "flow",
      startTime: Date.now(),
      duration,
      draw: (progress: number) => {
        if (!this.ctx) return;

        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 3 * dpr;
        this.ctx.globalAlpha = 1 - progress;

        const fromX = from.x * dpr;
        const fromY = from.y * dpr;
        const toX = to.x * dpr;
        const toY = to.y * dpr;

        const x = fromX + (toX - fromX) * progress;
        const y = fromY + (toY - fromY) * progress;

        this.ctx.beginPath();
        this.ctx.moveTo(fromX, fromY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();

        const angle = Math.atan2(toY - fromY, toX - fromX);
        const arrowSize = 10 * dpr;

        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(
          x - arrowSize * Math.cos(angle - Math.PI / 6),
          y - arrowSize * Math.sin(angle - Math.PI / 6),
        );
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(
          x - arrowSize * Math.cos(angle + Math.PI / 6),
          y - arrowSize * Math.sin(angle + Math.PI / 6),
        );
        this.ctx.stroke();

        this.ctx.restore();
      },
    });
  }

  private startAnimationLoop(): void {
    const animate = () => {
      if (!this.isRunning || !this.ctx || !this.canvas) return;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const now = Date.now();
      const toDelete: string[] = [];

      for (const [id, animation] of this.animations) {
        const elapsed = now - animation.startTime;
        const progress = Math.min(elapsed / animation.duration, 1);

        animation.draw(progress);

        if (progress >= 1) {
          toDelete.push(id);
        }
      }

      for (const id of toDelete) {
        this.animations.delete(id);
      }

      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  getActiveAnimationCount(): number {
    return this.animations.size;
  }

  clearAnimations(): void {
    this.animations.clear();
  }
}
