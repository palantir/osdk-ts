/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FOUNDRY_URL: string;
  readonly VITE_FOUNDRY_CLIENT_ID: string;
  readonly VITE_FOUNDRY_CLIENT_SECRET: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
