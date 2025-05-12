# useLearningTask Hook Documentation

## Overview

The `useLearningTask` hook is a custom React hook that provides functionality for fetching and managing learning task data in the Todo application. It enriches basic task data with user information, media content, and metadata.

## External Packages Used

### useSWR

**Purpose**: Data fetching, caching, and state management
**Why it's used here**:

- Provides an elegant way to fetch and cache learning task data
- Handles loading and error states automatically
- Offers built-in revalidation strategies
- Supports conditional revalidation with custom options

### @osdk/client

**Purpose**: Ontology SDK client for interacting with a backend data service
**Why it's used here**:

- Provides type-safe interfaces for data models and error handling
- Enables structured data queries with Result types
- Supports media content retrieval and metadata access

### @tutorial-advance-to-do-application/sdk

**Purpose**: Application-specific SDK with predefined data types
**Why it's used here**:

- Contains the data model specific to learning tasks (osdkLearningTask)
- Provides typed access to learning task properties and media references

## Media Handling

### MediaType Enum

The hook defines an enum to categorize different types of media:

```typescript
export enum MediaType {
    PDF = "PDF",
    IMAGE = "IMAGE",
    LINK = "LINK",
    VIDEO = "VIDEO",
    NONE = "NONE"
}
```

### Media Content Retrieval

The hook handles different scenarios for accessing learning content:

1. **External Links**: Uses the task's `contentUrl` property when media is hosted externally
2. **Embedded Media**: Processes the `mediaReference` to:
   - Fetch the binary content using `fetchContents()`
   - Convert it to a Blob object
   - Create a blob URL using `URL.createObjectURL()`
   - Determine the media type from the MIME type
3. **No Media**: Handles cases where no learning content is available

This approach provides a unified way to access different types of learning content, simplifying the component implementation.

## Hook Structure

### Interface Definition

```typescript
interface LearningTaskEnriched {
  osdkLearningTask: osdkLearningTask.OsdkInstance;
  mediaUrl: string;
  createdBy: User;
  assignedTo: User;
  mediaType: MediaType;
}
```

This interface combines the SDK's learning task instance with user objects, media URL, and detected media type.

### Data Fetching

The hook uses SWR's data fetching capabilities with a custom fetcher function that:

1. Queries for the specific learning task using `fetchOneWithErrors` for robust error handling
2. Processes media content based on the task configuration
3. Fetches user details for the task's creator and assignee
4. Determines the media type using the `getMediaTypeFromMimeType` helper function
5. Combines all data into the `LearningTaskEnriched` structure

### Error Handling

The hook implements robust error handling using `Result` types:

- Checks for errors in the fetch result
- Throws appropriate exceptions for error cases
- Provides meaningful error messages to the UI

### Return Value

```typescript
{
  learningTask: LearningTaskEnriched | undefined;  // The enriched learning task (undefined if not loaded)
  isLoading: boolean;                               // True during initial data loading
  isValidating: boolean;                            // True during background revalidation
  isError: any;                                     // Error object if the request failed
  metadata: ObjectMetadata | undefined;             // Metadata about the learning task object type
}
```

## Usage Example

```tsx
import useLearningTask, { MediaType } from '../dataServices/useLearningTask';

function LearningTaskViewer({ task }) {
  const { learningTask, isLoading, metadata } = useLearningTask(task);
  
  if (isLoading) return <div>Loading learning materials...</div>;
  if (!learningTask) return <div>No learning content available</div>;
  
  // Render different media types appropriately
  const renderMedia = () => {
    switch (learningTask.mediaType) {
      case MediaType.PDF:
        return (
          <div className="pdf-viewer">
            <iframe 
              src={`${learningTask.mediaUrl}#toolbar=0`} 
              title="PDF Content"
              width="100%" 
              height="500px"
            />
          </div>
        );
      case MediaType.IMAGE:
        return (
          <div className="image-viewer">
            <img 
              src={learningTask.mediaUrl} 
              alt="Learning content" 
              className="learning-image"
            />
          </div>
        );
      case MediaType.VIDEO:
        return (
          <div className="video-player">
            <video 
              src={learningTask.mediaUrl} 
              controls 
              width="100%"
            />
          </div>
        );
      case MediaType.LINK:
        return (
          <div className="external-link">
            <a 
              href={learningTask.mediaUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Open learning resource
            </a>
          </div>
        );
      default:
        return <div>No media content available</div>;
    }
  };
  
  return (
    <div className="learning-task-viewer">
      <h2>{learningTask.osdkLearningTask.title}</h2>
      
      <div className="content-section">
        <div className="content-type-badge">{learningTask.mediaType}</div>
        {renderMedia()}
      </div>
      
      <div className="description-section">
        <h3>Description</h3>
        <p>{learningTask.osdkLearningTask.description || "No description provided"}</p>
      </div>
      
      <div className="people-section">
        <div className="assigned-to">
          <span>Assigned to: </span>
          <span>{learningTask.assignedTo?.displayName || "Unassigned"}</span>
        </div>
        <div className="created-by">
          <span>Created by: </span>
          <span>{learningTask.createdBy?.displayName || "Unknown"}</span>
        </div>
      </div>
    </div>
  );
}
```

## Key Technical Points

- Uses React's `useCallback` for memoizing functions to prevent unnecessary re-renders
- Leverages SWR's caching with custom revalidation options to optimize performance
- Implements blob URL management for binary media content
- Provides smart media type detection from MIME types
- Handles multiple content delivery mechanisms (embedded and linked)
- Type-safe through the use of TypeScript and Result types for error handling
- Efficiently retrieves user data via batch requests through `useAdmin`
