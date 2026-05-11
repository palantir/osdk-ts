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

import React from "react";
import { styled } from "storybook/theming";
import type { ExtractedColor } from "./types.js";

interface PaletteGridProps {
  palette: ExtractedColor[];
}

const Grid = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  padding: "0.5em 0",
});

const SwatchWrapper = styled.div({
  textAlign: "center",
});

const Swatch = styled.div<{ color: string }>(({ color }) => ({
  width: 40,
  height: 40,
  borderRadius: 4,
  border: "1px solid rgba(0,0,0,0.1)",
  backgroundColor: color,
  transition: "transform 150ms ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const SwatchLabel = styled.div(({ theme }) => ({
  fontSize: 9,
  fontFamily: theme.typography.fonts.mono,
  color: theme.color.mediumdark,
  textAlign: "center",
  marginTop: 3,
}));

const EmptyMessage = styled.div(({ theme }) => ({
  color: theme.color.mediumdark,
  fontSize: 12,
  padding: "0.5em 0",
}));

export function PaletteGrid({ palette }: PaletteGridProps): React.ReactElement {
  if (palette.length === 0) {
    return (
      <EmptyMessage>
        No colors extracted yet. Upload an image or paste a URL above.
      </EmptyMessage>
    );
  }

  return (
    <Grid>
      {palette.map((color) => (
        <SwatchWrapper key={color.hex}>
          <Swatch
            color={color.hex}
            title={`${color.hex} (${
              Math.round(color.luminance * 100)
            }% luminance)`}
          />
          <SwatchLabel>{color.hex}</SwatchLabel>
        </SwatchWrapper>
      ))}
    </Grid>
  );
}
