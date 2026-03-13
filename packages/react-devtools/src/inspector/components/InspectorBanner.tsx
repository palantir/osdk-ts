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

export interface InspectorBannerProps {
  visible: boolean;
}

const bannerStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  padding: "12px 24px",
  borderRadius: "0 0 8px 8px",
  fontSize: "14px",
  fontWeight: 600,
  fontFamily: "system-ui, -apple-system, sans-serif",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  pointerEvents: "none",
  zIndex: 2147483648,
  textAlign: "center",
  transition: "opacity 150ms ease-out, transform 150ms ease-out",
};

const containerStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const kbdStyles: React.CSSProperties = {
  background: "rgba(0, 0, 0, 0.3)",
  padding: "2px 6px",
  borderRadius: "3px",
  fontSize: "12px",
  marginLeft: "8px",
};

const hintStyles: React.CSSProperties = {
  fontSize: "12px",
  opacity: 0.9,
};

export const InspectorBanner: React.FC<InspectorBannerProps> = (
  { visible },
) => {
  if (!visible) return null;

  return (
    <div style={bannerStyles}>
      <div style={containerStyles}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2L3 6V10C3 14.5 6.5 18.5 10 19.5C13.5 18.5 17 14.5 17 10V6L10 2Z"
            stroke="white"
            strokeWidth="1.5"
            fill="rgba(255,255,255,0.2)"
          />
        </svg>
        <span>Click on a component to inspect its OSDK hooks</span>
        <kbd style={kbdStyles}>ESC</kbd>
        <span style={hintStyles}>to exit</span>
      </div>
    </div>
  );
};
