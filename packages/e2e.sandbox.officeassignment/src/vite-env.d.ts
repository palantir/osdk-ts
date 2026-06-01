/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FOUNDRY_URL: string;
  readonly VITE_FOUNDRY_CLIENT_ID: string;
  readonly VITE_FOUNDRY_REDIRECT_URL: string;
  /** Optional user token for local dev (exposed via the FOUNDRY_ envPrefix in vite.config). */
  readonly FOUNDRY_USER_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
