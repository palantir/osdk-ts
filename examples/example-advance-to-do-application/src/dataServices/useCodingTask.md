# useCodingTask Hook Documentation

## Overview

The `useCodingTask` hook is a custom React hook that provides functionality for fetching and managing coding task data in the Todo application. It enriches the basic task data with user information and metadata.

## External Packages Used

### useSWR

**Purpose**: Data fetching, caching, and state management
**Why it's used here**:

- Provides an elegant way to fetch and cache coding task data
- Handles loading and error states automatically
- Offers built-in revalidation strategies
- Simplifies data access with conditional fetching

### @osdk/client

**Purpose**: Ontology SDK client for interacting with a backend data service
**Why it's used here**:

- Provides type-safe interfaces for data models
- Enables structured data queries and metadata access
- Offers error handling capabilities for data fetching operations

### @tutorial-advance-to-do-application/sdk

**Purpose**: Application-specific SDK with predefined data types
**Why it's used here**:

- Contains the data model specific to coding tasks (osdkCodingTask)
- Provides typed access to coding task properties

## Task Enrichment

### User Data Enrichment

The `useCodingTask` hook enriches coding task data by:

1. Fetching the basic coding task using the primary key from the parent task
2. Retrieving user information for both the creator and assignee
3. Combining these data sources into a unified structure for easy consumption

This enrichment pattern allows components to:

- Display user information directly without additional API calls
- Maintain a consistent data structure across different task types
- Preserve type safety with TypeScript interfaces

## Hook Structure

### Interface Definition

```typescript
interface CodingTaskEnriched {
  osdkCodingTask: osdkCodingTask.OsdkInstance;
  createdBy: User;
  assignedTo: User;
}
```

This interface combines the SDK's coding task instance with user objects for the task creator and assignee.

### Data Fetching

The hook uses SWR's data fetching capabilities with a custom fetcher function that:

1. Queries for the specific coding task using the parent task's primary key
2. Fetches user details for the task's creator and assignee using `getBatchUserDetails`
3. Combines the data into the `CodingTaskEnriched` structure

### Metadata Access

In addition to task data, the hook:

- Fetches object type metadata using `client.fetchMetadata(osdkCodingTask)`
- Makes this metadata available to components for dynamic UI rendering
- Stores metadata in a separate state to avoid unnecessary re-renders

### Return Value

```typescript
{
  codingTask: CodingTaskEnriched | undefined;  // The enriched coding task (undefined if not loaded)
  isLoading: boolean;                          // True during initial data loading
  isValidating: boolean;                       // True during background revalidation
  isError: any;                                // Error object if the request failed
  metadata: ObjectMetadata | undefined;        // Metadata about the coding task object type
}
```

## Usage Example

```tsx
function CodingTaskDetails({ task }) {
  const { codingTask, isLoading, metadata } = useCodingTask(task);
  
  if (isLoading) return <div>Loading coding task details...</div>;
  if (!codingTask) return <div>No coding task found</div>;
  
  return (
    <div className="coding-task-details">
      <h2>{codingTask.osdkCodingTask.title}</h2>
      
      <div className="metadata-section">
        <h3>Task Metadata</h3>
        <div>Object Type: {metadata?.displayName || "Coding Task"}</div>
      </div>
      
      <div className="code-section">
        <h3>Code Requirements</h3>
        <div className="language-badge">{codingTask.osdkCodingTask.language}</div>
        <pre>
          <code>{codingTask.osdkCodingTask.codeSnippet}</code>
        </pre>
      </div>
      
      <div className="people-section">
        <h3>People</h3>
        <div className="assigned-to">
          <span>Assigned to: </span>
          <span>{codingTask.assignedTo?.displayName || "Unassigned"}</span>
        </div>
        <div className="created-by">
          <span>Created by: </span>
          <span>{codingTask.createdBy?.displayName || "Unknown"}</span>
        </div>
      </div>
    </div>
  );
}
```

## Key Technical Points

- Uses React's `useCallback` for memoizing functions to prevent unnecessary re-renders
- Leverages SWR's caching to reduce redundant API calls
- Implements component-specific data fetching tied to the parent task ID
- Provides access to both data and metadata for rich UI experiences
- Type-safe through the use of TypeScript and the OSDK
- Efficiently retrieves user data via batch requests through `useAdmin`
