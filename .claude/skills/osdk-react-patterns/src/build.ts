#!/usr/bin/env node

/**
 * Build script that compiles individual rule files into AGENTS.md
 * Inspired by vercel-labs/agent-skills
 */

import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface Rule {
  id: string;
  title: string;
  impact: string;
  impactDescription?: string;
  tags: string[];
  content: string;
}

const RULES_DIR = join(__dirname, "../rules");
const AGENTS_OUTPUT_FILE = join(__dirname, "../AGENTS.md");
const SKILL_OUTPUT_FILE = join(__dirname, "../SKILL.md");

function parseRule(filename: string): Rule | null {
  // Skip template and sections files
  if (filename.startsWith("_")) {
    return null;
  }

  const filepath = join(RULES_DIR, filename);
  const fileContent = readFileSync(filepath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    id: filename.replace(".md", ""),
    title: data.title,
    impact: data.impact,
    impactDescription: data.impactDescription,
    tags: data.tags ? data.tags.split(",").map((t: string) => t.trim()) : [],
    content: content.trim(),
  };
}

function buildAgentsFile() {
  const files = readdirSync(RULES_DIR).filter((f) => f.endsWith(".md"));

  const rules = files
    .map(parseRule)
    .filter((rule): rule is Rule => rule !== null)
    .sort((a, b) => a.title.localeCompare(b.title));

  let output = `# OSDK React Patterns

Best practices and patterns for building applications with @osdk/react.

**Auto-generated**: This file is generated from individual rule files in \`rules/\`. To regenerate, run \`pnpm build\` in this directory.
**Total patterns**: ${rules.length}

---

`;

  // Group rules by impact level
  const impactLevels = ["CRITICAL", "HIGH", "MEDIUM-HIGH", "MEDIUM", "LOW-MEDIUM", "LOW"];

  for (const impact of impactLevels) {
    const rulesAtLevel = rules.filter((r) => r.impact === impact);
    if (rulesAtLevel.length === 0) continue;

    output += `## ${impact} Impact Patterns\n\n`;

    for (const rule of rulesAtLevel) {
      output += `### ${rule.title}\n\n`;
      output += `**Impact**: ${rule.impact}`;
      if (rule.impactDescription) {
        output += ` - ${rule.impactDescription}`;
      }
      output += "\n\n";

      if (rule.tags.length > 0) {
        output += `**Tags**: ${rule.tags.join(", ")}\n\n`;
      }

      output += rule.content + "\n\n";
      output += "---\n\n";
    }
  }

  writeFileSync(AGENTS_OUTPUT_FILE, output, "utf-8");
  console.log(`✅ Built AGENTS.md with ${rules.length} patterns`);

  // Build SKILL.md with frontmatter
  const skillOutput = `---
name: osdk-react-patterns
description: Reference best practices and patterns for @osdk/react applications. Use when working with React components, hooks, or need guidance on OSDK patterns.
allowed-tools: Read
argument-hint: none
---

# OSDK React Patterns Skill

This skill provides comprehensive best practices for building applications with @osdk/react.

## When This Skill is Invoked

This skill is automatically loaded when you work on React code in the osdk-ts repository. The patterns below should guide all React development involving OSDK.

---

${output}`;

  writeFileSync(SKILL_OUTPUT_FILE, skillOutput, "utf-8");
  console.log(`✅ Built SKILL.md with ${rules.length} patterns`);
}

try {
  buildAgentsFile();
} catch (error) {
  console.error("❌ Build failed:", error);
  process.exit(1);
}
