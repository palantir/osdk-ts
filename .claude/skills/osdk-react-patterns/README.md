# OSDK React Patterns Skill

Best practices and patterns for building applications with @osdk/react, compiled from project conventions and organized by impact level.

## Overview

This skill provides a structured knowledge base of React patterns specific to the OSDK TypeScript SDK. It uses the organizational approach from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) but contains OSDK-specific patterns extracted from the project's [CLAUDE.md](../../../CLAUDE.md).

## Usage

This skill is **automatically loaded** when working with React code in the osdk-ts repository. The patterns are embedded in [SKILL.md](SKILL.md) and will guide all React development.

You can also manually reference it:

```bash
/osdk-react-patterns
```

## Pattern Categories

Patterns are organized by impact level:

### CRITICAL Impact
- **Keep components rendering during loading states** - Prevents UI flashing
- **Never conditionally call React hooks** - Prevents React crashes

### HIGH Impact
- **Never use 'any' without explicit user permission** - Maintains type safety
- **Understand that OSDK hooks may have data while loading** - Smooth UX during revalidation
- **Use useOsdkAction for calling actions** - Proper action handling

### MEDIUM Impact
- **Put components in their own files** - Code organization and maintainability

## File Structure

```
osdk-react-patterns/
├── rules/                      # Individual pattern files
│   ├── _template.md           # Template for new patterns
│   ├── _sections.md           # Category definitions
│   ├── hook-*.md              # Hook usage patterns (CRITICAL)
│   ├── loading-*.md           # Loading state patterns (CRITICAL/HIGH)
│   ├── action-*.md            # Action patterns (HIGH)
│   ├── ts-*.md                # TypeScript patterns (HIGH)
│   ├── component-*.md         # Component structure patterns (MEDIUM)
│   └── ...
├── src/
│   ├── build.ts               # Compiles rules into AGENTS.md
│   └── validate.ts            # Validates rule file format
├── SKILL.md                   # Skill definition (includes compiled patterns)
├── AGENTS.md                  # Compiled patterns (auto-generated)
├── README.md                  # This file
├── package.json
└── tsconfig.json
```

## Adding New Patterns

### 1. Create a new rule file

Use the template as a starting point:

```bash
cp rules/_template.md rules/category-your-pattern-name.md
```

Valid category prefixes (from [_sections.md](rules/_sections.md)):
- `hook-` - Hook usage patterns (CRITICAL)
- `loading-` - Loading state patterns (HIGH)
- `action-` - Action patterns (HIGH)
- `provider-` - Provider setup (MEDIUM-HIGH)
- `query-` - Query patterns (MEDIUM)
- `ts-` - TypeScript patterns (MEDIUM)
- `component-` - Component structure (LOW-MEDIUM)
- `advanced-` - Advanced techniques (LOW)

### 2. Write the pattern

Fill in the template with:
- **Frontmatter**: title, impact, impactDescription (optional), tags
- **Content**:
  - Brief explanation
  - `## Incorrect` section with anti-pattern example
  - `## Correct` section with recommended pattern
  - Optional `## References` section

### 3. Build and validate

```bash
pnpm build    # Compile into AGENTS.md and update SKILL.md
pnpm validate # Check all rules are valid
pnpm dev      # Build + validate
```

### 4. Test the skill

The updated patterns are immediately available to Claude after building.

## Pattern Format

Each pattern file follows this structure:

```markdown
---
title: Pattern Name Here
impact: CRITICAL | HIGH | MEDIUM-HIGH | MEDIUM | LOW-MEDIUM | LOW
impactDescription: Optional quantified benefit
tags: tag1, tag2, tag3
---

# Pattern Name Here

**Impact**: LEVEL - Brief description

Explanation of why this pattern matters.

## Incorrect

\`\`\`tsx
// Anti-pattern example
\`\`\`

**Why this is wrong**: Explanation

## Correct

\`\`\`tsx
// Recommended pattern
\`\`\`

**Why this is better**: Explanation

## References

- [Link to docs](path)
```

## Validation Rules

The validation script checks:
- ✅ Required frontmatter fields (title, impact, tags)
- ✅ Valid impact levels
- ✅ Both "Incorrect" and "Correct" sections present
- ✅ At least 2 code blocks (one for each example)
- ✅ Filename matches a valid prefix

## Build Process

1. **build.ts** reads all `*.md` files in `rules/` (except `_*.md`)
2. Parses frontmatter and content using `gray-matter`
3. Groups patterns by impact level
4. Sorts alphabetically within each level
5. Generates `AGENTS.md` with all patterns
6. AGENTS.md content is appended to SKILL.md for Claude to read

## Inspiration

This organizational structure is inspired by:
- [vercel-labs/agent-skills/react-best-practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices)

Key learnings adopted:
- Individual rule files for easy maintenance
- Structured frontmatter with impact levels
- Incorrect/Correct example format
- Automated compilation into single reference document
- Validation to ensure consistency

## Related

- [document-component skill](../document-component/) - Generates component documentation
- [CLAUDE.md](../../../CLAUDE.md) - Project-wide best practices
- [OSDK React docs](../../../docs/react/) - Full React documentation

## Maintenance

To keep patterns up-to-date:
1. Review patterns when React or OSDK conventions change
2. Add new patterns as best practices emerge
3. Run `pnpm build` after any changes to rule files
4. Consider impact levels - focus on CRITICAL and HIGH patterns first
