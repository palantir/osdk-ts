/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { consola } from "../consola.js";
import { green } from "../highlight.js";
import { type Template, TEMPLATES } from "../templates.js";

export async function promptTemplate(
  parsed: { template?: string; beta?: boolean },
): Promise<Template> {
  let useBeta = parsed.beta ?? false;
  let template = TEMPLATES.find((t) =>
    t.id === parsed.template || t.id === `template-${parsed.template}`
  );
  if (template == null) {
    const availableTemplates = TEMPLATES.filter(template =>
      template.hidden !== true
      && (useBeta
        ? template.isBeta === true
        // isBeta could be null
        : !template.isBeta)
    );

    if (availableTemplates.length === 0) {
      throw new Error("No available templates found for the selected options.");
    }
    const templateId = (await consola.prompt(
      parsed.template != null
        ? `The provided template ${
          green(
            parsed.template,
          )
        } is invalid please select a framework:`
        : "Select a framework:",
      {
        type: "select",
        options: availableTemplates.map((
          template,
        ) => ({
          value: template.id,
          label: template.label,
        })),
        // Types for "select" are wrong the value is returned rather than the option object
        // https://github.com/unjs/consola/pull/238
      },
    )) as unknown as string;

    template = TEMPLATES.find((t) => t.id === templateId);
    if (template == null) {
      throw new Error(`Template ${templateId} should be found`);
    }
  }

  return template;
}
