import useSWR, { mutate, State, useSWRConfig } from "swr";
import client from "../client";
import { User } from "@osdk/foundry.admin";
import { getCurrent, profilePicture, getBatch } from "@osdk/foundry.admin/User";
import { useCallback } from "react";

interface UserDetails {
  [key: string]: User;
}

function useAdmin() {
  const { cache } = useSWRConfig();

  const getCurrentUserDetails = useCallback(
    async () => {
      const user: User = await getCurrent(client);
      return {
        "currentUser": user
      };
    }, []
  );
  const getCurrentProfilePictureUrl: (user: User) => Promise<string> =
    useCallback(
      async (user) => {
        const profilePictureResponse = await profilePicture(client, user.id)
        const blob = await profilePictureResponse.blob();
        return URL.createObjectURL(blob);
      }, []
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
      }, [cache]
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