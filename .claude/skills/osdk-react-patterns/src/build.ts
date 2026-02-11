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
const OUTPUT_FILE = join(__dirname, "../AGENTS.md");

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

**Generated on**: ${new Date().toISOString()}
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

  writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(`✅ Built AGENTS.md with ${rules.length} patterns`);
}

try {
  buildAgentsFile();
} catch (error) {
  console.error("❌ Build failed:", error);
  process.exit(1);
}
