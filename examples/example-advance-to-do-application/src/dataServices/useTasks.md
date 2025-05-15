# useTasks Hook Documentation

## Overview

The `useTasks` hook is a custom React hook that manages tasks associated with a specific project in the Todo application. It leverages the Object SDK (OSDK) to fetch task data, associate it with user information, and provide real-time updates through subscriptions. The hook is designed to work with SWR (Stale-While-Revalidate) for efficient data fetching, caching, and state management.

This hook is particularly useful for components that need to display and manage tasks within the context of a specific project, handling both the data fetching and the relationships between tasks and users who created or are assigned to them.

## External Packages Used

### useSWR

**Purpose**: Data fetching, caching, and state management library
**Why it's used here**:
- Provides automatic caching of fetched task data
- Handles loading and error states for better UX
- Offers built-in mutation capabilities for updating data
- Reduces unnecessary network requests through smart revalidation strategies

### @tutorial-advance-to-do-application/sdk

**Purpose**: Application-specific SDK with predefined OSDK types
**Why it's used here**:
- Provides the `OsdkITask` interface representing the task data model
- Ensures type safety when working with task objects
- Enables OSDK query capabilities through the client

### @osdk/foundry.admin

**Purpose**: Admin utilities for Foundry applications
**Why it's used here**:
- Provides the `User` type definition needed for user information
- Enables integration with the admin-level functionality
- Supports user information retrieval

### lodash

**Purpose**: Utility library with helper functions
**Why it's used here**:
- Used for `_.uniq()` to deduplicate user IDs before batch fetching
- Improves performance by reducing redundant user detail requests
- Simplifies data transformation operations

## Technical Concepts

### OSDK Query Building Pattern

The hook demonstrates the OSDK query building pattern for fetching tasks associated with a specific project:

```typescript
const tasksPage = await client(OsdkITask).where({
    projectId: { $eq: project.$primaryKey },
}).fetchPage({
    $orderBy: { "dueDate": "desc", "status": "asc" }, 
});
```

This pattern:
- Creates a query targeting the `OsdkITask` interface
- Filters tasks to only include those associated with the specified project
- Orders results by due date (descending) and status (ascending)
- Returns a paginated result with the matching tasks

### Data Association Strategy

Rather than using runtime derived properties, this hook employs a client-side data association approach:

```typescript
// Get the user details for the createdBy field
const createdByIds = _.uniq(tasksPage.data.map((task) => task.createdBy as string));
const createdByUserList = await getBatchUserDetails(createdByIds);
// Get the user details for the assignedTo field
const assignedToIds = _.uniq(tasksPage.data.map((task) => task.assignedTo as string));
const assignedToUserList = await getBatchUserDetails(assignedToIds);
const tasksList: ITask[] = tasksPage.data.map((task) => ({
    osdkTask: task,
    assignedTo: assignedToUserList[task.assignedTo as string],
    createdBy: createdByUserList[task.createdBy as string],
}));
```

This approach:
1. Extracts unique user IDs from task properties using `_.uniq()`
2. Fetches user details in batch operations to minimize API calls
3. Creates a new data structure that combines task data with related user information
4. Transforms OSDK objects into application-specific data structures

### Real-Time Data Subscription

The hook implements OSDK's subscription mechanism to provide real-time updates to task data:

```typescript
const subscription = client(OsdkITask)
    .where({
        projectId: { $eq: project.$primaryKey },
    })
    .subscribe(
        {
            onChange(update) {
                // Handle changes to the task set
            },
            onSuccessfulSubscription() {
                // Handle successful subscription
            },
            onError(err) {
                // Handle subscription errors
            },
            onOutOfDate() {
                // Handle out-of-date notifications
            },
        },
    );
```

This pattern:
- Creates a live subscription to task changes filtered by project
- Handles different update types (additions, updates, removals)
- Updates the local data cache when changes occur
- Provides error handling and lifecycle management for the subscription

## Hook Structure

### Interface Definition

```typescript
export interface ITask {
    osdkTask: OsdkITask.OsdkInstance;
    createdBy: User;
    assignedTo: User;
}
```

This interface:
- Wraps the raw `OsdkITask.OsdkInstance` data with additional context
- Associates full `User` objects for both the creator and assignee
- Creates a unified data structure that's ready for UI display

### Data Fetching

The hook employs a multi-step data retrieval strategy:

1. Fetch task data filtered by project ID:
   ```typescript
   const tasksPage = await client(OsdkITask).where({
       projectId: { $eq: project.$primaryKey },
   }).fetchPage({
       $orderBy: { "dueDate": "desc", "status": "asc" }, 
   });
   ```

2. Extract unique user IDs and fetch user details:
   ```typescript
   const createdByIds = _.uniq(tasksPage.data.map((task) => task.createdBy as string));
   const createdByUserList = await getBatchUserDetails(createdByIds);
   ```

3. Transform and combine the data:
   ```typescript
   const tasksList: ITask[] = tasksPage.data.map((task) => ({
       osdkTask: task,
       assignedTo: assignedToUserList[task.assignedTo as string],
       createdBy: createdByUserList[task.createdBy as string],
   }));
   ```

4. Cache and return the result through SWR:
   ```typescript
   const { data, isLoading, isValidating, error, mutate } = useSWR<ITask[]>(
     ["tasks", project.$primaryKey],
     fetcher,
     { revalidateOnFocus: false }
   );
   ```

### Metadata Handling

The hook also fetches and provides metadata about the task object type:

```typescript
const getObjectTypeMetadata = useCallback(async () => {
  const objectTypeMetadata = await client.fetchMetadata(OsdkITask);
  setMetadata(objectTypeMetadata);
}, []);
```

This metadata can be used by UI components to access display names, descriptions, and other ontology information about the task type.

### Subscription Management

For real-time updates, the hook:
1. Creates a subscription to task changes filtered by project
2. Handles different update types:
   - For added or updated tasks, it fetches the associated user details and updates the cache
   - For removed tasks, it filters them out of the local cache
3. Provides error handling for subscription events

### Return Value

```typescript
return {
  tasks: data ?? [],
  isLoading,
  isValidating,
  isError: error,
  metadata,
};
```

The hook returns:
- `tasks`: An array of task objects with associated user information
- `isLoading`: Boolean indicating if the initial data fetch is in progress
- `isValidating`: Boolean indicating if a background revalidation is happening
- `isError`: Any error that occurred during data fetching
- `metadata`: Object type metadata for UI customization

## Usage Example

```typescript
import React from 'react';
import useTasks from '../dataServices/useTasks';
import { IProject } from '../dataServices/useProjects';

function TaskList({ project }: { project: IProject }) {
  const { tasks, isLoading, isError, metadata } = useTasks(project);
  
  if (isLoading) return <div>Loading tasks...</div>;
  if (isError) return <div>Error loading tasks: {isError.message}</div>;
  
  return (
    <div className="task-list">
      <h2>Tasks for {project.name}</h2>
      <table>
        <thead>
          <tr>
            <th>{metadata?.propertyMetadata?.title?.displayName || 'Title'}</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Assigned To</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.osdkTask.$primaryKey}>
              <td>{task.osdkTask.title}</td>
              <td>{task.osdkTask.status}</td>
              <td>
                {task.osdkTask.dueDate 
                  ? new Date(task.osdkTask.dueDate).toLocaleDateString() 
                  : 'Not set'}
              </td>
              <td>{task.assignedTo?.displayName || 'Unassigned'}</td>
              <td>{task.createdBy?.displayName || 'Unknown'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {tasks.length === 0 && <p>No tasks found for this project.</p>}
    </div>
  );
}
```

## Key Technical Points

- Uses OSDK's query builder pattern to create type-safe queries for task data
- Implements client-side data association for linking tasks with user information
- Leverages SWR's caching to optimize data fetching and reduce API calls
- Employs real-time subscriptions to keep task data up-to-date
- Uses metadata to provide ontology-aware UI components
- Optimizes user data fetching by deduplicating IDs and using batch requests

## Edge Cases and Limitations

- The subscription implementation unsubscribes immediately after setting up, which means real-time updates may not work correctly
- When receiving updates via subscription, the user information fetching creates a potential race condition
- Error handling for user data fetching could be improved, as failures might lead to incomplete task information
- No pagination handling is implemented for large task collections
- The hook doesn't provide direct methods for creating, updating, or deleting tasks
- The subscription only handles individual task updates and doesn't account for bulk changes
- There's no mechanism to retry failed user data fetches
- Without proper memoization of the dependency arrays, there's potential for infinite re-renders
