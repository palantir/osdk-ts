# OSDK React Pattern Sections

## Section Categories

Sections are organized by their importance and impact on @osdk/react applications.

### 1. CRITICAL - Hook Usage (prefix: `hook-`)
**Impact**: CRITICAL - Incorrect hook usage leads to bugs, crashes, or data inconsistencies

Patterns for correctly using @osdk/react hooks:
- Hook call patterns
- Conditional hook usage
- Hook dependencies
- Hook composition

### 2. HIGH - Loading States (prefix: `loading-`)
**Impact**: HIGH - Affects user experience and can cause UI flashing

Patterns specific to @osdk/react's unique loading behavior:
- Rendering during loading
- Handling revalidation
- Optimistic updates
- Data availability during reload

### 3. HIGH - Actions (prefix: `action-`)
**Impact**: HIGH - Incorrect action handling leads to bugs and poor UX

Patterns for calling and managing OSDK actions:
- Action invocation
- Error handling
- State updates after actions
- Optimistic updates

### 4. MEDIUM-HIGH - Provider Setup (prefix: `provider-`)
**Impact**: MEDIUM-HIGH - Incorrect setup prevents hooks from working

Patterns for configuring OSDK providers:
- OsdkProvider2 setup
- Client configuration
- Context usage
- Multiple providers

### 5. MEDIUM - Query Patterns (prefix: `query-`)
**Impact**: MEDIUM - Affects data fetching efficiency

Patterns for efficient data querying:
- Object vs collection queries
- Filtering and pagination
- Cache management
- Aggregations

### 6. MEDIUM - TypeScript (prefix: `ts-`)
**Impact**: MEDIUM - Type safety and developer experience

TypeScript-specific patterns:
- Type inference
- Generic usage
- Avoiding `any`
- Type guards

### 7. LOW-MEDIUM - Component Structure (prefix: `component-`)
**Impact**: LOW-MEDIUM - Code organization and maintainability

General React component patterns:
- Component composition
- File organization
- Props patterns
- Separation of concerns

### 8. LOW - Advanced (prefix: `advanced-`)
**Impact**: LOW - Specialized patterns for edge cases

Advanced techniques requiring careful implementation:
- Direct client usage
- Custom hooks
- Performance optimizations
- Complex state management
