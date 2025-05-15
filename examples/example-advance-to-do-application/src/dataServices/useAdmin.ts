import useSWR, { mutate, useSWRConfig } from "swr";
import type { State } from "swr";
import { useOsdkClient } from "@osdk/react";
import { getCurrent, profilePicture, getBatch } from "@osdk/foundry.admin/User";
import { useCallback } from "react";
import type { User } from "@osdk/foundry.admin";

interface UserDetails {
  [key: string]: User;
}

function useAdmin() {
  const client = useOsdkClient();
  const { cache } = useSWRConfig();

  const getCurrentUserDetails = useCallback(
    async () => {
      const user: User = await getCurrent(client);
      return {
        "currentUser": user
      };
    }, [client]
  );
  const getCurrentProfilePictureUrl: (user: User) => Promise<string> =
    useCallback(
      async (user) => {
        const profilePictureResponse = await profilePicture(client, user.id)
        const blob = await profilePictureResponse.blob();
        return URL.createObjectURL(blob);
      }, [client]
    );

  const { data, isLoading, isValidating, error } = useSWR<UserDetails>(
    "currentUser",
    getCurrentUserDetails,
    { revalidateOnFocus: false }
  );

  const getBatchUserDetails: (userIds: string[]) => Promise<UserDetails> =
    useCallback(async (userIds) => {
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
      }, [cache, client]
    );

  return {
    users: data,
    currentUser: data != null ? data["currentUser"]: undefined,
    isLoading,
    isValidating,
    isError: error,
    getBatchUserDetails,
    getCurrentProfilePictureUrl
  };
}

export default useAdmin;