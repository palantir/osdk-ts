/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FOUNDRY_URL: string;
  readonly VITE_FOUNDRY_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
