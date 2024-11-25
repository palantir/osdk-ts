// Read configuration from EXPO Environment Variables
const foundry_url = process.env.EXPO_PUBLIC_FOUNDRY_URL;
const client_id = process.env.EXPO_PUBLIC_CLIENT_ID;

checkEnv(foundry_url, "EXPO_PUBLIC_FOUNDRY_URL");
checkEnv(client_id, "EXPO_PUBLIC_CLIENT_ID");

function checkEnv(
  value: string | undefined,
  name: string,
): asserts value is string {
  if (value == null) {
    throw new Error(`Missing environment variable: ${name}`);
  }
}

export const FOUNDRY_URL = foundry_url;
export const CLIENT_ID = client_id;
