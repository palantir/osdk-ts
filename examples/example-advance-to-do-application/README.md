# Advanced Todo Application with OSDK

This project demonstrates advanced features of the Ontology SDK (OSDK) using a Todo application as a practical example. The application allows users to manage projects and tasks with support for specialized task types (coding and learning tasks), real-time updates, media content, and advanced data querying techniques.

## Table of Contents

- [Advanced Todo Application with OSDK](#advanced-todo-application-with-osdk)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Project Architecture](#project-architecture)
    - [React Routing](#react-routing)
      - [Routing Configuration](#routing-configuration)
    - [OAuth and OSDK Client Configuration](#oauth-and-osdk-client-configuration)
      - [The OsdkProvider Component](#the-osdkprovider-component)
      - [Authentication Configuration](#authentication-configuration)
      - [Usage in Components](#usage-in-components)
  - [Configuration](#configuration)
    - [Environment Files](#environment-files)
    - [Meta Tags Configuration in `index.html`](#meta-tags-configuration-in-indexhtml)
      - [Meta Tags Breakdown](#meta-tags-breakdown)
    - [Key Configuration Variables](#key-configuration-variables)
    - [Development vs. Production Configuration](#development-vs-production-configuration)
      - [Development Environment](#development-environment)
      - [Production Environment](#production-environment)
  - [Key OSDK Features Demonstrated](#key-osdk-features-demonstrated)
    - [1. Interfaces and Polymorphic Task Types](#1-interfaces-and-polymorphic-task-types)
    - [2. Media Content (MediaSets)](#2-media-content-mediasets)
    - [3. Runtime Derived Properties (RDP)](#3-runtime-derived-properties-rdp)
    - [4. Metadata-Driven UI](#4-metadata-driven-ui)
    - [5. Real-Time Data with Subscriptions](#5-real-time-data-with-subscriptions)
    - [6. Efficient User Data Handling](#6-efficient-user-data-handling)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Deployment](#deployment)
  - [Architecture](#architecture)
  - [Learn More](#learn-more)

## Overview

This application was built using:

- React 18 with TypeScript
- Vite as the build tool
- OSDK (Ontology SDK) for backend connectivity
- SWR for data fetching and caching

The Todo application demonstrates:

- Project and task management
- User authentication and profile management
- Specialized task types through interfaces
- Media content handling with MediaSets
- Real-time data updates through subscriptions
- Dynamic UI based on ontology metadata
- User activity analytics

## Project Architecture

### React Routing

This application uses React Router for client-side routing. The routing configuration is set up in the main application entry point.

#### Routing Configuration

The application uses `createBrowserRouter` from React Router with a simple configuration:

```tsx
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth/callback",
      element: <AuthCallback />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OsdkProvider client={client}>
      <RouterProvider router={router} />,
    </OsdkProvider>
  </StrictMode>
);
```

The routes are:

- `/`: The main application home page
- `/auth/callback`: Handles OAuth authentication callbacks

Authentication is managed through the OSDK OAuth client, which redirects unauthenticated users to the login page automatically.

### OAuth and OSDK Client Configuration

#### The OsdkProvider Component

The application uses the `OsdkProvider` component from the `@osdk/react` package to provide authentication context and client access throughout the component tree. This follows the React context pattern, making OAuth authentication and OSDK client operations available without prop drilling.

```tsx
import { OsdkProvider } from "@osdk/react";
import client from "./client";

// In the application's root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OsdkProvider client={client}>
      <RouterProvider router={router} />
    </OsdkProvider>
  </StrictMode>
);
```

#### Authentication Configuration

The client is configured in a separate `client.ts` file that handles:

1. **OAuth Authentication Setup**: Configures the authentication flow using OSDK's OAuth client
2. **Client Initialization**: Sets up the OSDK client with the authenticated user session
3. **Configuration Parameters**: Retrieves foundry URL, client ID, redirect URL and other OAuth parameters from meta tags

The OAuth client handles:

- Authentication redirect flows
- Token acquisition and refresh
- Session management
- Appropriate scopes for API access

#### Usage in Components

Components can access the authenticated OSDK client using the useOsdk hook:

```typescript
import { useOsdk } from '@osdk/react';

function MyComponent() {
  const { client } = useOsdk();
  
  const fetchData = useCallback(async () => {
    const tasksPage = await client(OsdkITask).where({
        projectId: { $eq: project.$primaryKey },
    }).fetchPage({
        $orderBy: { "dueDate": "desc", "status": "asc" }, 
    });
    // Process and return the data
  }, [client, project.$primaryKey]);
  
  // Rest of the component
}
```

This pattern ensures that:

1. Authentication is handled centrally at the application root
2. Components only access data the authenticated user is authorized to see
3. OAuth token refresh occurs automatically
4. API requests include the proper authentication headers

## Configuration

This application uses environment variables for configuration, allowing for different settings between development and production environments. Configuration values are primarily applied through meta tags in the HTML, which are then read by the `client.ts` file.

### Environment Files

The application uses the following environment files:

- `.env` - Base environment variables used in all environments
- `.env.development` - Development-specific variables (used with `npm run dev`)
- `.env.production` - Production-specific variables (used with `npm run build`)

### Meta Tags Configuration in `index.html`

The application uses meta tags in `index.html` to dynamically configure the OSDK client. This approach avoids hardcoding sensitive information directly into JavaScript code.

```html
<meta name="osdk-clientId" content="%VITE_FOUNDRY_CLIENT_ID%" />
<meta name="osdk-redirectUrl" content="%VITE_FOUNDRY_REDIRECT_URL%" />
<meta name="osdk-foundryUrl" content="%VITE_FOUNDRY_API_URL%" />
<meta name="osdk-ontologyRid" content="%VITE_FOUNDRY_ONTOLOGY_RID%" />
```

#### Meta Tags Breakdown

- **`osdk-clientId`**: OAuth client ID for authentication
- **`osdk-redirectUrl`**: URL for redirect after successful authentication
- **`osdk-foundryUrl`**: Base URL of the Foundry API
- **`osdk-ontologyRid`**: Resource identifier for the application's ontology

### Key Configuration Variables

```

# Authentication settings
VITE_FOUNDRY_CLIENT_ID=your-client-id
VITE_FOUNDRY_REDIRECT_URL=http://localhost:3000/
VITE_FOUNDRY_API_URL=https://my-foundry-instance.palantirfoundry.com
VITE_FOUNDRY_ONTOLOGY_RID=ri.ontology.main.ontology.12345678-abcd-1234-efgh-1234567890ab
```

### Development vs. Production Configuration

#### Development Environment

The development environment typically uses:

- Local development server with hot module replacement
- Integration with a development or staging Foundry instance

Example `.env.development`:

```
VITE_FOUNDRY_CLIENT_ID=your-dev-client-id
VITE_FOUNDRY_REDIRECT_URL=http://localhost:3000/
VITE_FOUNDRY_API_URL=https://dev-foundry.palantirfoundry.com
VITE_FOUNDRY_ONTOLOGY_RID=ri.ontology.main.ontology.dev-12345
```

#### Production Environment

The production environment uses:

- Production Foundry instance
- Optimized builds with minimized code
- Stricter security settings

Example `.env.production`:

```
VITE_FOUNDRY_CLIENT_ID=your-prod-client-id
VITE_FOUNDRY_REDIRECT_URL=https://your-production-domain.com/
VITE_FOUNDRY_API_URL=https://prod-foundry.palantirfoundry.com
VITE_FOUNDRY_ONTOLOGY_RID=ri.ontology.main.ontology.prod-67890
```

## Key OSDK Features Demonstrated

### 1. Interfaces and Polymorphic Task Types

The application uses OSDK interfaces to implement polymorphic task types:

- `ITask`: Base interface for all tasks
- `osdkCodingTask`: Implementation for coding-related tasks
- `osdkLearningTask`: Implementation for learning tasks with media content

```typescript
// Task details component decides which concrete implementation to render
if (task.osdkTask.$objectType === "osdkCodingTask") {
    return <TaskDetailsCoding task={task} />;
}
if (task.osdkTask.$objectType === "osdkLearningTask") {
    return <TaskDetailsLearning task={task} />;
}
```

### 2. Media Content (MediaSets)

The application demonstrates working with binary content through MediaSets:

```typescript
// Fetching and displaying media content from MediaSets
const response = await learningTask.mediaReference.fetchContents();
const blob: Blob | undefined = await response.blob();
const mediaUrl = blob ? URL.createObjectURL(blob) : "";

// Getting media metadata
const mediaTypeResp = await learningTask.mediaReference.fetchMetadata();
```

Media rendering is handled dynamically based on media type:

- PDF documents with embedded viewer
- Images with responsive display
- Videos with player controls
- Links to external resources

### 3. Runtime Derived Properties (RDP)

The application uses RDPs to efficiently calculate aggregate statistics at the server level:

```typescript
.withProperties({
  "numberOfTasks": (baseObjectSet) =>
    baseObjectSet.pivotTo("osdkTodoTask").aggregate("$count"),
  "numberOfCompletedTasks": (baseObjectSet) =>
    baseObjectSet.pivotTo("osdkTodoTask").where({
      "status": { $eq: "COMPLETED" },
    }).aggregate("$count"),
  // Additional statistics...
})
```

This demonstrates how to:

- Calculate metrics server-side to minimize data transfer
- Use relationship traversal with `pivotTo`
- Apply filtering with `where` conditions
- Perform aggregations with `aggregate`

### 4. Metadata-Driven UI

The application accesses and uses ontology metadata to create dynamic UIs:

```typescript
const getObjectTypeMetadata = useCallback(async () => {
  const objectTypeMetadata = await client.fetchMetadata(OsdkITask);
  setMetadata(objectTypeMetadata);
}, []);
```

This metadata is used to:

- Display ontology-defined property names
- Show object type descriptions
- Create context-aware user interfaces
- Support future ontology changes without code changes

### 5. Real-Time Data with Subscriptions

The application implements real-time updates using OSDK subscriptions:

```typescript
const subscription = client(OsdkITask)
  .where({ projectId: { $eq: project.$primaryKey } })
  .subscribe({
    onChange(update) {
      // Handle real-time updates
    },
    onSuccessfulSubscription() { /* ... */ },
    onError(err) { /* ... */ },
    onOutOfDate() { /* ... */ },
  });
```

This provides:

- Live updates when tasks are created, modified, or deleted
- Efficient updates that only refresh changed data
- Error handling for subscription issues

### 6. Efficient User Data Handling

The application demonstrates batch fetching and caching of user data:

```typescript
const getBatchUserDetails = useCallback(async (userIds: string[]) => {
    const cachedUsers: UserDetails = {};
    const usersToFetch: string[] = [];

    userIds.forEach((userId) => {
      const cachedUser: State<unknown, unknown> | undefined = cache.get(`user-${userId}`);
      if (cachedUser && cachedUser.data) {
        cachedUsers[userId] = cachedUser.data as User;
      } else {
        usersToFetch.push(userId);
      }
    });

    if (usersToFetch.length > 0) {
      const usersRequest = await getBatch(client, usersToFetch.map((userId) => ({ userId })));
      Object.entries(usersRequest.data).forEach(([userId, user]) => {
        cachedUsers[userId] = user;
        mutate(`user-${userId}`, user, { revalidate: false });
      });
    }
    return cachedUsers;
  }, [cache]);
```

## Getting Started

### Prerequisites

- Node.js 18+
- NPM 8+
- Access to a Foundry instance with the Todo ontology deployed

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd advance-to-do-application-repo
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables
   - For local development, update `.env.development`
   - For production, update `.env.production`

4. Start the development server

```bash
npm run dev
```

### Deployment

Deploy to Foundry website hosting by tagging a release:

```bash
git tag <x.y.z>
git push origin tag <x.y.z>
```

## Architecture

The application follows a modern React architecture with:

- **Data Service Hooks**: Encapsulate OSDK interactions (`useProjects`, `useTasks`, etc.)
- **UI Components**: Focused on presentation and user interaction
- **SWR for Data Management**: Handles caching, revalidation, and background updates
- **Component-Specific Logic**: Each component has access to exactly the data it needs

## Learn More

For more information about OSDK and the advanced features used in this application:

- [OSDK Documentation](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)
- [SWR Documentation](https://swr.vercel.app/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
