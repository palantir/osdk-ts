#!/usr/bin/env node

/**
 * Validation script for rule files
 */

import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const RULES_DIR = join(__dirname, "../rules");

interface ValidationError {
  file: string;
  error: string;
}

const errors: ValidationError[] = [];

function validateRule(filename: string) {
  // Skip template and sections files
  if (filename.startsWith("_")) {
    return;
  }

  const filepath = join(RULES_DIR, filename);
  const fileContent = readFileSync(filepath, "utf-8");

  try {
    const { data, content } = matter(fileContent);

    // Check required frontmatter fields
    if (!data.title) {
      errors.push({ file: filename, error: "Missing 'title' in frontmatter" });
    }

    if (!data.impact) {
      errors.push({ file: filename, error: "Missing 'impact' in frontmatter" });
    } else {
      const validImpacts = ["CRITICAL", "HIGH", "MEDIUM-HIGH", "MEDIUM", "LOW-MEDIUM", "LOW"];
      if (!validImpacts.includes(data.impact)) {
        errors.push({
          file: filename,
          error: `Invalid impact level: ${data.impact}. Must be one of: ${validImpacts.join(", ")}`,
        });
      }
    }

    if (!data.tags) {
      errors.push({ file: filename, error: "Missing 'tags' in frontmatter" });
    }

    // Check content has both Incorrect and Correct sections
    if (!content.includes("## Incorrect")) {
      errors.push({ file: filename, error: "Missing '## Incorrect' section" });
    }

    if (!content.includes("## Correct")) {
      errors.push({ file: filename, error: "Missing '## Correct' section" });
    }

    // Check for code blocks
    const codeBlockCount = (content.match(/```/g) || []).length;
    if (codeBlockCount < 4) {
      errors.push({
        file: filename,
        error: "Should have at least 2 code examples (Incorrect and Correct)",
      });
    }

    // Check that filename matches prefix from sections
    const validPrefixes = [
      "hook-",
      "loading-",
      "action-",
      "provider-",
      "query-",
      "ts-",
      "component-",
      "advanced-",
    ];

    const hasValidPrefix = validPrefixes.some((prefix) => filename.startsWith(prefix));
    if (!hasValidPrefix) {
      errors.push({
        file: filename,
        error: `Filename should start with one of: ${validPrefixes.join(", ")}`,
      });
    }
  } catch (error) {
    errors.push({
      file: filename,
      error: `Failed to parse: ${error instanceof Error ? error.message : String(error)}`,
    });
  }
}

function validate() {
  const files = readdirSync(RULES_DIR).filter((f) => f.endsWith(".md"));

  console.log(`🔍 Validating ${files.length} rule files...\n`);

  for (const file of files) {
    validateRule(file);
  }

  if (errors.length === 0) {
    console.log("✅ All rule files are valid!");
    return;
  }

  console.error(`❌ Found ${errors.length} validation errors:\n`);
  for (const { file, error } of errors) {
    console.error(`  ${file}: ${error}`);
  }

  process.exit(1);
}

validate();
