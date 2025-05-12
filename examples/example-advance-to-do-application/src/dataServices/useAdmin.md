# useAdmin Hook Documentation

## Overview
The `useAdmin` hook is a custom React hook that provides functionality for fetching and managing user data from the Foundry Admin API. It leverages the SWR (Stale-While-Revalidate) library for efficient data fetching and caching.

## External Packages Used

### useSWR
**Purpose**: Data fetching, caching, and state management  
**Why it's used here**:  
- Provides an elegant way to fetch and cache user data  
- Handles loading and error states automatically  
- Offers built-in revalidation strategies  
- Simplifies data access with the `cache` and `mutate` functions  

### @osdk/foundry.admin
**Purpose**: Foundry Admin SDK for interacting with user-related services  
**Why it's used here**:  
- Provides type-safe interfaces for user data (User)  
- Includes functions for user operations (getCurrent, profilePicture, getBatch)  
- Enables structured authentication and user management  

## Hook Structure

### Interface Definition
```typescript
interface UserDetails {
  [key: string]: User;
}
```
This interface represents a mapping of user IDs to User objects, enabling efficient user lookup by ID.

### Data Fetching
The hook uses SWR's data fetching capabilities with the following components:
1. `getCurrentUserDetails`: Fetches the current authenticated user
2. `getCurrentProfilePictureUrl`: Retrieves a user's profile picture and converts it to a blob URL
3. Primary SWR hook that manages the current user state
4. `getBatchUserDetails`: Efficiently fetches multiple users at once with caching

### Caching Strategy
The hook implements a sophisticated caching approach:
- Individual users are cached with keys like `user-${userId}`
- Existing cached users are retrieved from the SWR cache
- Only uncached users trigger new API requests
- The cache is updated with new user data after fetching

### Return Value
```typescript
{
  users: UserDetails | undefined;         // Object containing all fetched users
  currentUser: User | undefined;          // The currently logged-in user
  isLoading: boolean;                     // Loading state
  isValidating: boolean;                  // Validation state
  isError: Error | undefined;             // Error state if any
  getBatchUserDetails: (userIds: string[]) => Promise<UserDetails>; // Function to fetch multiple users
  getCurrentProfilePictureUrl: (user: User) => Promise<string>;     // Function to get a user's profile picture URL
}
```

## Usage Example
```typescript
import useAdmin from '../dataServices/useAdmin';
import { useState, useEffect } from 'react';

function UserProfile() {
  const { currentUser, isLoading, getCurrentProfilePictureUrl } = useAdmin();
  const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser) {
      getCurrentProfilePictureUrl(currentUser)
        .then(url => setProfilePicUrl(url));
    }
  }, [currentUser, getCurrentProfilePictureUrl]);

  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {profilePicUrl && <img src={profilePicUrl} alt="Profile" />}
      <h1>{currentUser?.displayName}</h1>
      <p>Email: {currentUser?.email}</p>
    </div>
  );
}

function CollaboratorsList({ userIds }) {
  const { getBatchUserDetails, isLoading } = useAdmin();
  const [users, setUsers] = useState({});
  
  useEffect(() => {
    if (userIds.length > 0) {
      getBatchUserDetails(userIds)
        .then(fetchedUsers => setUsers(fetchedUsers));
    }
  }, [userIds, getBatchUserDetails]);
  
  if (isLoading) return <div>Loading collaborators...</div>;
  
  return (
    <div>
      <h2>Collaborators</h2>
      <ul>
        {Object.values(users).map(user => (
          <li key={user.id}>{user.displayName}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Key Technical Points
- Uses React's `useCallback` for memoizing functions to prevent unnecessary re-renders
- Leverages SWR's caching to reduce redundant API calls
- Implements blob URL creation for profile pictures using URL.createObjectURL
- Provides a batch fetching capability for efficient user data retrieval
- Type-safe through the use of TypeScript and the Foundry Admin SDK
- Takes advantage of SWR's cache for optimized user data management
