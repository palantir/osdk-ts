# Split Large PR Skill

**Description:** Automatically split a large, hard-to-review PR into multiple smaller, focused PRs that are easier to review and merge.

**When to use:**
- PR has 1,000+ lines of changes
- PR touches many unrelated areas
- Reviewers are struggling with the size
- You want to reduce merge risk

**Usage:**
```
/split-pr <branch-name>
```

## How It Works

### Step 1: Analyze the PR
1. Check current branch and compare to main
2. Run `git diff --stat main...current-branch` to see file changes
3. Run `git diff --numstat main...current-branch | sort -rn -k1` to find largest files
4. Categorize changes:
   - Infrastructure/setup files
   - Core functionality
   - Examples/demos
   - Tests
   - Documentation
   - Dependencies (package.json, lock files)

### Step 2: Plan the Split
Based on analysis, propose 3-4 logical groupings:
- **PR 1**: Core infrastructure (smallest, foundational)
- **PR 2**: Main functionality
- **PR 3**: Additional features/examples
- **PR 4**: Documentation + dependencies

**Key principles:**
- Each PR should be independently reviewable
- PRs should build on each other (chain dependencies)
- Smallest PR first, largest last
- Lock files go in the last PR
- Each PR should be <1,000 lines (excluding lock files)

**IMPORTANT: Ask user for approval of the split plan before proceeding!**

### Step 3: Create Branch Series
**IMPORTANT: Before committing each branch, show the user what will be committed and ask for confirmation!**
```bash
# Start from main
git checkout main && git pull

# PR 1: Core
git checkout -b user/feature-1-core
# Cherry-pick or copy specific files
git add [core files]
git commit -m "feat: [feature] - core infrastructure (1/N)"
git push -u origin user/feature-1-core

# PR 2: Build on PR 1
git checkout -b user/feature-2-main user/feature-1-core
# Add more files
git add [main files]
git commit -m "feat: [feature] - main functionality (2/N)"
git push -u origin user/feature-2-main

# PR 3: Build on PR 2
git checkout -b user/feature-3-examples user/feature-2-main
# Add examples
git add [example files]
git commit -m "feat: [feature] - examples (3/N)"
git push -u origin user/feature-3-examples

# PR 4: Build on PR 3
git checkout -b user/feature-4-docs user/feature-3-examples
# Add docs and lock files
git add [doc files and pnpm-lock.yaml]
git commit -m "feat: [feature] - documentation and dependencies (4/N)"
git push -u origin user/feature-4-docs
```

### Step 4: Create PRs with Clear Descriptions

Each PR description should have:

**Header:**
```markdown
## Summary
This is **part X of N PRs** that implement [feature].
Builds on #PREVIOUS_PR (if applicable).

This PR focuses on [specific aspect].
```

**Body:**
```markdown
## What's in this PR (~X lines)

### [Main Section]
- Item 1
- Item 2

## File Structure
```
path/to/files/
├── file1.ts (X lines)
└── file2.ts (X lines)
```

## PR Dependencies
- **Depends on:** #PREV_PR (if applicable)
- **Blocks:** Next PR in series

## Review Focus
1. [What reviewers should focus on]
2. [What can be skipped]

## Testing Checklist
- [ ] Test 1
- [ ] Test 2

## Next Steps
After this merges:
- Next PR will add [what's coming]
```

### Step 5: Add Context to Original PR

Update the original large PR with:
```markdown
# ⚠️ THIS PR HAS BEEN SUPERSEDED

This PR was **too large for effective review** (~X lines).

It has been **split into N smaller PRs** for easier review:

## 📦 New PR Series (Recommended)

| PR | Title | Size | Status | Link |
|----|-------|------|--------|------|
| **1/N** | Core | ~X lines | ✅ Ready | [#XXX](link) |
| **2/N** | Main | ~X lines | ✅ Ready | [#XXX](link) |
| **3/N** | Examples | ~X lines | ✅ Ready | [#XXX](link) |
| **4/N** | Docs | ~X lines | ✅ Ready | [#XXX](link) |

## Why Split?
- ✅ Easier to review
- ✅ Lower merge risk
- ✅ Clearer scope per PR

## Merge Order
1. #XXX (Core)
2. #XXX (Main)
3. #XXX (Examples)
4. #XXX (Docs)

**Please review the split PRs instead.**
```

## Example Split Strategy

### Common Patterns

**For a feature with examples:**
1. Core infrastructure + basic example
2. Additional examples + utilities
3. Theming/customization
4. Documentation + dependencies

**For a refactoring:**
1. Infrastructure changes
2. Core refactoring
3. Cascade updates
4. Tests + documentation

**For a new library:**
1. Core types + minimal implementation
2. Main functionality
3. Additional features
4. Examples + docs

## Tips for Success

✅ **DO:**
- **Ask user for approval before committing** (split plan and each commit)
- Keep each PR focused on one aspect
- Write clear, descriptive commit messages
- Include "part X of N" in titles
- Test each PR independently
- Make PRs build on each other (chain)
- Put lock files in the last PR
- Give size estimates in descriptions
- Highlight what to review vs skip

❌ **DON'T:**
- **Commit without user approval** - always confirm first
- Create parallel PRs that conflict
- Make PRs depend on multiple previous PRs
- Split mid-feature (each PR should be cohesive)
- Forget to exclude .env or local files
- Skip writing good descriptions
- Create >10 PRs (too many splits is confusing)

## Review Time Estimates

| PR Size | Review Time |
|---------|-------------|
| 100-300 lines | 5-10 min |
| 300-500 lines | 10-15 min |
| 500-800 lines | 15-20 min |
| 800-1000 lines | 20-30 min |
| 1000+ lines | 30+ min |

**Target:** Keep each PR in the 300-800 line range for optimal review.

## Troubleshooting

**Problem:** PRs have conflicts when merged in order
**Solution:** Rebase each PR on the previous one after merging

**Problem:** Lock file changes in multiple PRs
**Solution:** Move all lock file changes to the final PR

**Problem:** Tests fail in early PRs
**Solution:** Each PR should be functional on its own. Add minimal tests in early PRs.

**Problem:** Too many PRs (>5)
**Solution:** Combine related changes. Aim for 3-4 PRs.

---

## Template Commands

```bash
# Analyze current PR
git diff --stat main..HEAD
git diff --numstat main..HEAD | sort -rn -k1 | head -20

# Create split series
git checkout main && git pull
git checkout -b user/feature-1-core
# ... add files ...
git commit -m "feat: [feature] - core (1/4)"
git push -u origin user/feature-1-core
gh pr create --title "feat: [feature] - core (1/4)" --body "[description]" --base main

# Repeat for PRs 2-4, each based on previous
git checkout -b user/feature-2-main user/feature-1-core
# ... add files ...
git commit -m "feat: [feature] - main functionality (2/4)"
git push -u origin user/feature-2-main
gh pr create --title "feat: [feature] - main functionality (2/4)" --body "[description]" --base user/feature-1-core
```

---

**Created by:** Claude Code
**Version:** 1.1
**Last updated:** 2026-02-11
**Changelog:**
- v1.1: Added user confirmation requirement before committing
- v1.0: Initial version
