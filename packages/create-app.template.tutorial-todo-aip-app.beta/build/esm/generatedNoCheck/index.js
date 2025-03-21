export const files = new Map([["README.md.hbs", {
  type: "raw",
  body: `# {{project}}

This project was generated with [\`@osdk/create-app\`](https://www.npmjs.com/package/@osdk/create-app) and is intended to be used alongside the Developer Console tutorial for creating an AIP Logic backed To Do App against a reference Ontology.

## Developing

Run the following command or equivalent with your preferred package manager to start a local development server on \`http://localhost:8080\`:

\`\`\`sh
npm run dev
\`\`\`

Development configuration is stored in \`.env.development\`.

{{#if corsProxy}}
In order to make API requests to Foundry, a CORS proxy has been set up for local development which may be removed if the stack is configured to allow \`http://localhost:8080\` to load resources. The configured OAuth client must also allow \`http://localhost:8080/auth/callback\` as a redirect URL.
{{else}}
In order to make API requests to Foundry, CORS must be configured for the stack to allow \`http://localhost:8080\` to load resources. If this has not been configured and you are unable to request this, you can alternatively generate your project again with \`--corsProxy true\` to use a proxy for API requests during local development. The configured OAuth client must also allow \`http://localhost:8080/auth/callback\` as a redirect URL.
{{/if}}

## Deploying

Run the following command or equivalent with your preferred package manager to create a production build of your application:

\`\`\`sh
npm run build
\`\`\`

Production configuration is stored in \`.env.production\`.

If you did not fill in the URL your production application will be hosted on you will need to fill in the \`VITE_FOUNDRY_REDIRECT_URL\` in \`.env.production\`. A default test is included in \`env.test.ts\` to verify your production environment variables which you can enable by removing the skip condition or running tests with the environment variable set \`VERIFY_ENV_PRODUCTION=true\`.

In order to make API requests to Foundry, CORS must be configured for the stack to allow the production origin to load resources. This will be automatically done for you if you are using Foundry website hosting. The configured OAuth client must also allow the production origin auth callback as a redirect URL.

A \`foundry.config.json\` file is included in the root of this project to make deploying to Foundry website hosting with [\`@osdk/cli\`](https://www.npmjs.com/package/@osdk/cli) easier. If you are not using Foundry website hosting for your application you may delete this file.
`
}], [".gitignore", {
  type: "raw",
  body: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`
}], ["eslint.config.mjs", {
  "type": "base64",
  "body": "Ly8gQHRzLWNoZWNrCmltcG9ydCBlc2xpbnQgZnJvbSAiQGVzbGludC9qcyI7CmltcG9ydCB0c1BhcnNlciBmcm9tICJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyIjsKaW1wb3J0ICogYXMgaW1wb3J0UGx1Z2luIGZyb20gImVzbGludC1wbHVnaW4taW1wb3J0IjsKaW1wb3J0IGpzeEExMXlQbHVnaW4gZnJvbSAiZXNsaW50LXBsdWdpbi1qc3gtYTExeSI7CmltcG9ydCByZWFjdFBsdWdpbiBmcm9tICJlc2xpbnQtcGx1Z2luLXJlYWN0IjsKaW1wb3J0IHJlYWN0SG9va3NQbHVnaW4gZnJvbSAiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rcyI7CmltcG9ydCByZWFjdFJlZnJlc2ggZnJvbSAiZXNsaW50LXBsdWdpbi1yZWFjdC1yZWZyZXNoIjsKaW1wb3J0IGdsb2JhbHMgZnJvbSAiZ2xvYmFscyI7CmltcG9ydCB0c2VzbGludCBmcm9tICJ0eXBlc2NyaXB0LWVzbGludCI7CgpleHBvcnQgZGVmYXVsdCB0c2VzbGludC5jb25maWcoewogIGZpbGVzOiBbImVzbGludC5jb25maWcubWpzIiwgInNyYy8qKi8qLntqcyxtanMsY2pzLHRzLGpzeCx0c3h9Il0sCiAgc2V0dGluZ3M6IHsKICAgIHJlYWN0OiB7CiAgICAgIHZlcnNpb246ICJkZXRlY3QiLAogICAgfSwKCiAgICAiaW1wb3J0L3Jlc29sdmVyIjogewogICAgICBub2RlOiB7CiAgICAgICAgZXh0ZW5zaW9uczogWyIuanMiLCAiLmpzeCIsICIudHMiLCAiLnRzeCJdLAogICAgICB9LAogICAgfSwKICB9LAogIGxhbmd1YWdlT3B0aW9uczogewogICAgZ2xvYmFsczogewogICAgICAuLi5nbG9iYWxzLmJyb3dzZXIsCiAgICB9LAoKICAgIHBhcnNlcjogdHNQYXJzZXIsCiAgfSwKICBleHRlbmRzOiBbCiAgICBlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZCwKICAgIC4uLnRzZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsCiAgXSwKICBwbHVnaW5zOiB7CiAgICAicmVhY3QiOiAvKiogQHR5cGUgaW1wb3J0KCJlc2xpbnQiKS5FU0xpbnQuUGx1Z2luICovIChyZWFjdFBsdWdpbiksCiAgICAicmVhY3QtcmVmcmVzaCI6IHJlYWN0UmVmcmVzaCwKICAgICJyZWFjdC1ob29rcyI6CiAgICAgIC8qKiBAdHlwZSBpbXBvcnQoImVzbGludCIpLkVTTGludC5QbHVnaW4gKi8gKHJlYWN0SG9va3NQbHVnaW4pLAogICAgImpzeC1hMTF5IjoganN4QTExeVBsdWdpbiwKICAgICJpbXBvcnQiOiBpbXBvcnRQbHVnaW4sCiAgfSwKICBydWxlczogewogICAgLi4uKAogICAgICAvKiogQHR5cGUgaW1wb3J0KCJlc2xpbnQiKS5MaW50ZXIuUnVsZXNSZWNvcmQgKi8KICAgICAgKHJlYWN0UGx1Z2luLmNvbmZpZ3MuZmxhdD8ucmVjb21tZW5kZWQucnVsZXMpCiAgICApLAogICAgInJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzIjogImVycm9yIiwKICAgICJyZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMiOiAid2FybiIsCiAgICAuLi5qc3hBMTF5UGx1Z2luLmNvbmZpZ3MucmVjb21tZW5kZWQucnVsZXMsCiAgICAicmVhY3QtcmVmcmVzaC9vbmx5LWV4cG9ydC1jb21wb25lbnRzIjogWyJ3YXJuIiwgewogICAgICBhbGxvd0NvbnN0YW50RXhwb3J0OiB0cnVlLAogICAgfV0sCgogICAgImltcG9ydC9uYW1lZCI6ICJlcnJvciIsCiAgICAiaW1wb3J0L2RlZmF1bHQiOiAiZXJyb3IiLAogICAgImltcG9ydC9uYW1lc3BhY2UiOiAiZXJyb3IiLAogICAgImltcG9ydC9uby1kdXBsaWNhdGVzIjogImVycm9yIiwKICAgICJpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMiOiAiZXJyb3IiLAoKICAgICJyZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUiOiAib2ZmIiwKICB9LAp9KTsK"
}], ["index.html", {
  type: "raw",
  body: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/todo-aip-app.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ontology SDK Tutorial - To do AIP App</title>
  </head>
  <body>
    <div id="root-container">
      <div id="root"></div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
}], ["package.json.hbs", {
  type: "raw",
  body: `{
  "name": "{{project}}",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --report-unused-disable-directives --max-warnings 0",
    "test": "vitest run",
    "preview": "vite preview"
  },
  "dependencies": {
    "{{osdkPackage}}": "latest",
    "@osdk/client": "{{clientVersion}}",
    "@osdk/oauth": "^1.1.0",
    "react": "^18",
    "react-dom": "^18",
    "react-router-dom": "^6.23.1",
    "swr": "^2.2.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@typescript-eslint/eslint-plugin": "^8.21.0",
    "@typescript-eslint/parser": "^8.21.0",
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^9.19.0",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-jsx-a11y": "^6.10.1",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "typescript": "~5.5.4",
    "typescript-eslint": "^8.21.0",
    "vite": "^6.0.11",
    "vitest": "^3.0.5"
  }
}`
}], ["public/aip-icon.svg", {
  "type": "base64",
  "body": "PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljk5OTQ5IDFIMi4wNjE4NkMwLjQ3NzI5NCAxIC0wLjUxMzI3NiAyLjY2NjI0IDAuMjc4NTY1IDMuOTk5NjhMMi42NTQwOSA4TDAuMjc4NTY1IDEyLjAwMDNDLTAuNTEzMjc2IDEzLjMzMzggMC40NzcyOTUgMTUgMi4wNjE4NiAxNUgxMy45MzgxQzE1LjUyMjcgMTUgMTYuNTEzMyAxMy4zMzM4IDE1LjcyMTQgMTIuMDAwM0wxMy4zNDU5IDhMMTUuNzIxNCAzLjk5OTY4QzE2LjUxMzMgMi42NjYyNCAxNS41MjI3IDEgMTMuOTM4MSAxSDguMDAwNTFINy45OTk0OVpNNi4yMTcwNCAyLjAwMDA4SDIuMDYxODZDMS4yNjk1NyAyLjAwMDA4IDAuNzc0Mjg5IDIuODMzMiAxLjE3MDIxIDMuNDk5OTJMMy4yNDgzIDYuOTk5MzdMNi4yMTcwNCAyLjAwMDA4Wk0zLjI0ODMgOS4wMDA2M0wxLjE3MDIxIDEyLjUwMDFDMC43NzQyOSAxMy4xNjY4IDEuMjY5NTcgMTMuOTk5OSAyLjA2MTg2IDEzLjk5OTlINi4yMTcwNEwzLjI0ODMgOS4wMDA2M1pNOS43ODI5NiAxMy45OTk5SDEzLjkzODFDMTQuNzMwNCAxMy45OTk5IDE1LjIyNTcgMTMuMTY2OCAxNC44Mjk4IDEyLjUwMDFMMTIuNzUxNyA5LjAwMDYzTDkuNzgyOTYgMTMuOTk5OVpNMTIuMTU3NSA4TDguODkxNjQgMTMuNDk5NkM4LjQ5NTUgMTQuMTY2NyA3LjUwNDUgMTQuMTY2NyA3LjEwODM2IDEzLjQ5OTZMMy44NDI1MSA4TDcuMTA4MzYgMi41MDA0QzcuNTA0NSAxLjgzMzMxIDguNDk1NTEgMS44MzMzMSA4Ljg5MTY1IDIuNTAwNEwxMi4xNTc1IDhaTTEyLjc1MTcgNi45OTkzNkwxNC44Mjk4IDMuNDk5OTJDMTUuMjI1NyAyLjgzMzIgMTQuNzMwNCAyLjAwMDA4IDEzLjkzODEgMi4wMDAwOEg5Ljc4Mjk2TDEyLjc1MTcgNi45OTkzNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
}], ["public/todo-aip-app.svg", {
  "type": "base64",
  "body": "PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzM1NzJfNjIxOTUpIj4KPHJlY3Qgb3BhY2l0eT0iMC4xIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiM5ODgxRjMiLz4KPHJlY3QgeD0iNyIgeT0iMTEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiM3OTYxREIiLz4KPHJlY3QgeD0iNy41IiB5PSIxMS41IiB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHJ4PSIxLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxNC4zNzVDMTUuNzkgMTQuMzc1IDE1LjYwMjUgMTQuNDU3NSAxNS40Njc1IDE0LjU5MjVMMTIuMjUgMTcuODE3NUwxMC41MzI1IDE2LjA5MjVDMTAuMzk3NSAxNS45NTc1IDEwLjIxIDE1Ljg3NSAxMCAxNS44NzVDOS41ODc1IDE1Ljg3NSA5LjI1IDE2LjIxMjUgOS4yNSAxNi42MjVDOS4yNSAxNi44MzUgOS4zMzI1IDE3LjAyMjUgOS40Njc1IDE3LjE1NzVMMTEuNzE3NSAxOS40MDc1QzExLjg1MjUgMTkuNTQyNSAxMi4wNCAxOS42MjUgMTIuMjUgMTkuNjI1QzEyLjQ2IDE5LjYyNSAxMi42NDc1IDE5LjU0MjUgMTIuNzgyNSAxOS40MDc1TDE2LjUzMjUgMTUuNjU3NUMxNi42Njc1IDE1LjUyMjUgMTYuNzUgMTUuMzM1IDE2Ljc1IDE1LjEyNUMxNi43NSAxNC43MTI1IDE2LjQxMjUgMTQuMzc1IDE2IDE0LjM3NVoiIGZpbGw9IndoaXRlIi8+CjxyZWN0IG9wYWNpdHk9IjAuNSIgeD0iMjIiIHk9IjE1IiB3aWR0aD0iMTIiIGhlaWdodD0iNSIgcng9IjIuNSIgZmlsbD0iIzYzNERCRiIvPgo8cmVjdCBvcGFjaXR5PSIwLjUiIHg9IjM2IiB5PSIxNSIgd2lkdGg9IjkiIGhlaWdodD0iNSIgcng9IjIuNSIgZmlsbD0iIzYzNERCRiIvPgo8cmVjdCB4PSI3LjUiIHk9IjI4LjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgcng9IjEuNSIgZmlsbD0iI0E3OUJEQSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHJlY3QgeD0iNy41IiB5PSIyOC41IiB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHJ4PSIxLjUiIHN0cm9rZT0iI0EzOUNDMSIvPgo8cmVjdCBvcGFjaXR5PSIwLjUiIHg9IjIzIiB5PSIzMiIgd2lkdGg9IjYiIGhlaWdodD0iNSIgcng9IjIuNSIgZmlsbD0iIzYzNERCRiIvPgo8cGF0aCBvcGFjaXR5PSIwLjUiIGQ9Ik0zMSAzNC41QzMxIDMzLjExOTMgMzIuMzIyOCAzMiAzMy45NTQ1IDMySDQxLjA0NTVDNDIuNjc3MiAzMiA0NCAzMy4xMTkzIDQ0IDM0LjVDNDQgMzUuODgwNyA0Mi42NzcyIDM3IDQxLjA0NTUgMzdIMzMuOTU0NUMzMi4zMjI4IDM3IDMxIDM1Ljg4MDcgMzEgMzQuNVoiIGZpbGw9IiM2MzREQkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zNTcyXzYyMTk1Ij4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
}], ["src/AuthCallback.tsx", {
  type: "raw",
  body: `import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./client";

/**
 * Component to render at \`/auth/callback\`
 * This calls signIn() again to save the token, and then navigates the user back to the home page.
 */
function AuthCallback() {
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  // This effect conflicts with React 18 strict mode in development
  // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
  useEffect(() => {
    auth
      .signIn()
      .then(() => navigate("/", { replace: true }))
      .catch((e: unknown) => setError((e as Error).message ?? e));
  }, [navigate]);
  return <div>{error != null ? error : "Authenticating…"}</div>;
}

export default AuthCallback;
`
}], ["src/AuthenticatedRoute.tsx", {
  type: "raw",
  body: `import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "./client";

/**
 * A component that can be used to wrap routes that require authentication.
 * Nested routes may assume that a valid token is present.
 */
function AuthenticatedRoute() {
  const navigate = useNavigate();
  const [token, setToken] = useState(auth.getTokenOrUndefined());
  useEffect(() => {
    if (auth.getTokenOrUndefined() == null) {
      auth
        .refresh()
        .then(() => {
          setToken(auth.getTokenOrUndefined());
        })
        .catch(() => {
          // If we cannot refresh the token (i.e. the user is not logged in) we redirect to the login page
          navigate("/login");
        });
    }
  }, [navigate]);

  if (token == null) {
    return null;
  }

  return <Outlet />;
}

export default AuthenticatedRoute;
`
}], ["src/CreateProjectButton.module.css", {
  "type": "base64",
  "body": "LmJ1dHRvbiB7CiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKfQo="
}], ["src/CreateProjectButton.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
import css from "./CreateProjectButton.module.css";
import CreateProjectDialog from "./CreateProjectDialog";
import useProjects from "./useProjects";

interface CreateProjectButtonProps {
  onProjectCreated?: (projectId: string) => void;
}

function CreateProjectButton({ onProjectCreated }: CreateProjectButtonProps) {
  const { isLoading: isLoadingProjects, isError: isErrorProjects } =
    useProjects();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  if (isLoadingProjects || isErrorProjects) {
    return null;
  }

  return (
    <>
      <button onClick={handleOpen} className={css.button}>
        Create Project
      </button>
      <CreateProjectDialog
        isOpen={isOpen}
        onClose={handleClose}
        onProjectCreated={onProjectCreated}
      />
    </>
  );
}

export default CreateProjectButton;
`
}], ["src/CreateProjectDialog.module.css", {
  "type": "base64",
  "body": "LnByb2plY3QgewogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgZ2FwOiAxMHB4Owp9Ci5sYWJlbCB7CiAgZGlzcGxheTogZmxleDsKICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgZ2FwOiA1cHg7Cn0KCi5idXR0b24gewogIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7Cn0K"
}], ["src/CreateProjectDialog.tsx", {
  type: "raw",
  body: `import type { ChangeEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import css from "./CreateProjectDialog.module.css";

import Dialog from "./Dialog";
import useProjects from "./useProjects";

interface CreateProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectCreated?: (projectId: string) => void;
}

function CreateProjectDialog({
  isOpen,
  onClose,
  onProjectCreated,
}: CreateProjectDialogProps) {
  const { createProject } = useProjects();

  const [name, setName] = useState<string>("New project");

  const handleChangeProjectName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [],
  );

  useEffect(() => setName("New project"), [isOpen]);

  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsCreating(true);
    try {
      const projectId = await createProject(name);
      onProjectCreated?.(projectId);
    } finally {
      setIsCreating(false);
      onClose();
    }
  }, [onProjectCreated, onClose, createProject, name]);

  return (
    <Dialog
      isOpen={isOpen}
      buttons={[
        <button
          disabled={isCreating}
          onClick={onClose}
          key="cancel"
          className={css.button}
        >
          Cancel
        </button>,
        <button
          disabled={isCreating}
          onClick={handleSubmit}
          key="create"
          className={css.button}
        >
          Create project
        </button>,
      ]}
    >
      <div className={css.project}>
        <label className={css.label}>
          Project name:{" "}
          <input type="text" value={name} onChange={handleChangeProjectName} />
        </label>
      </div>
    </Dialog>
  );
}
export default CreateProjectDialog;
`
}], ["src/CreateTaskButton.module.css", {
  "type": "base64",
  "body": "LmJ1dHRvbiB7CiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKfQo="
}], ["src/CreateTaskButton.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
import css from "./CreateTaskButton.module.css";
import CreateTaskDialog from "./CreateTaskDialog";
import { IProject } from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskButtonProps {
  project: IProject;
  onTaskCreated: (taskId: string) => void;
}

function CreateTaskButton({ project, onTaskCreated }: CreateTaskButtonProps) {
  const { isLoading: isLoadingTasks, isError: isErrorTasks } = useProjectTasks(
    project,
  );

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  if (isLoadingTasks || isErrorTasks) {
    return null;
  }

  return (
    <>
      <button onClick={handleOpen} className={css.button}>Create Task</button>
      <CreateTaskDialog
        project={project}
        isOpen={isOpen}
        onClose={handleClose}
        onTaskCreated={onTaskCreated}
      />
    </>
  );
}

export default CreateTaskButton;
`
}], ["src/CreateTaskDialog.module.css", {
  "type": "base64",
  "body": "LnRhc2sgewogICAgZGlzcGxheTogZ3JpZDsKICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsKICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBtaW4tY29udGVudDsKICAgIGdhcDogMTBweDsKICAgIHdpZHRoOiA1MDBweDsKfQoubGFiZWwgewogIGRpc3BsYXk6IGZsZXg7CiAgZ2FwOiA1cHg7CiAgcmVzaXplOiBub25lOwp9CgouaW5wdXQgewogIHdpZHRoOiAzMDBweDsKICBib3JkZXI6IDFweCBzb2xpZCBncmF5OwogIGJvcmRlci1yYWRpdXM6IDVweDsKfQoKLnRleHRBcmVhIHsKICB3aWR0aDogMzAwcHg7CiAgcmVzaXplOiB2ZXJ0aWNhbDsKICBib3JkZXI6IDFweCBzb2xpZCBncmF5OwogIGJvcmRlci1yYWRpdXM6IDVweDsKICBwYWRkaW5nOiA1cHg7Cn0KCi5haXAgewogIGJhY2tncm91bmQtY29sb3I6ICM3OTYxREI7CiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKICBwYWRkaW5nOiAycHggNXB4OwogIGRpc3BsYXk6IGZsZXg7CiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKfQoKLnByb2Nlc3NpbmcgewogIGN1cnNvcjogcHJvZ3Jlc3M7Cn0KCi5pbWFnZSB7CiAgd2lkdGg6IDE2cHg7CiAgaGVpZ2h0OiAxNnB4Owp9CgouY29udGFpbmVyIHsKICBkaXNwbGF5OiBmbGV4OwogIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7CiAgZ2FwOiA1cHg7Cn0KCi5kaWFsb2dDb250YWluZXIgewogIHBvc2l0aW9uOiBmaXhlZDsKICB0b3A6IDA7CiAgcmlnaHQ6IDA7CiAgYm90dG9tOiAwOwogIGxlZnQ6IDA7CiAgZGlzcGxheTogZmxleDsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogT3B0aW9uYWw6IGZvciBkaW1tZWQgYmFja2dyb3VuZCAqLwp9CgouYnV0dG9uIHsKICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOwp9Cg=="
}], ["src/CreateTaskDialog.tsx", {
  type: "raw",
  body: `import aipLogo from "/aip-icon.svg";
import type { ChangeEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import css from "./CreateTaskDialog.module.css";
import Dialog from "./Dialog";
import { IProject } from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskDialogProps {
  project: IProject;
  isOpen: boolean;
  onClose: () => void;
  onTaskCreated: (taskId: string) => void;
}

function CreateTaskDialog(
  { project, isOpen, onClose, onTaskCreated }: CreateTaskDialogProps,
) {
  const { createTask, getRecommendedTaskDescription } = useProjectTasks(
    project,
  );

  const [name, setName] = useState<string>("New task");
  const [description, setDescription] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChangeTaskName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [],
  );

  const handleChangeTaskDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value),
    [],
  );

  const handleTaskDescriptionRecommendation = useCallback(async () => {
    setIsProcessing(true);
    const recommendedDescription = await getRecommendedTaskDescription(name);
    setDescription(recommendedDescription);
    setIsProcessing(false);
  }, [getRecommendedTaskDescription, name]);

  useEffect(() => {
    setName("New task");
    setDescription("");
  }, [isOpen]);
  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = \`\${textArea.scrollHeight}px\`;
    }
  }, [description]);

  const handleSubmit = useCallback(async () => {
    setIsCreating(true);
    try {
      const taskId = await createTask(name, description);
      if (taskId != null) {
        onTaskCreated(taskId);
      }
    } finally {
      setIsCreating(false);
      onClose();
    }
  }, [onClose, createTask, onTaskCreated, name, description]);

  return (
    <>
      {isOpen && (
        <div className={css.dialogContainer}>
          <Dialog
            isOpen={isOpen}
            buttons={[
              <button
                disabled={isCreating}
                onClick={onClose}
                key="cancel"
                className={css.button}
              >
                Cancel
              </button>,
              <button
                disabled={isCreating}
                onClick={handleSubmit}
                key="create"
                className={css.button}
              >
                Create task
              </button>,
            ]}
          >
            <div className={css.task}>
              <label className={css.label}>
                Task name:{" "}
              </label>
              <input
                type="text"
                value={name}
                onChange={handleChangeTaskName}
                className={css.input}
              />

              <label className={css.label}>
                Task description:{" "}
              </label>
              <div className={css.container}>
                <textarea
                  ref={textAreaRef}
                  value={description}
                  onChange={handleChangeTaskDescription}
                  className={css.textArea}
                  rows={2}
                />
                <button
                  disabled={isProcessing}
                  className={\`\${css.aip} \${isProcessing ? css.processing : ""}\`}
                  title="Click here to get AIP task description recommendation"
                  type="button"
                  onClick={handleTaskDescriptionRecommendation}
                >
                  <img
                    src={aipLogo}
                    alt="AIP"
                    className={css.image}
                  />
                </button>
              </div>
            </div>
          </Dialog>
        </div>
      )}
    </>
  );
}

export default CreateTaskDialog;
`
}], ["src/DeleteProjectButton.module.css", {
  "type": "base64",
  "body": "LmJ1dHRvbiB7CiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKfQo="
}], ["src/DeleteProjectButton.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
import css from "./DeleteProjectButton.module.css";
import DeleteProjectDialog from "./DeleteProjectDialog";
import useProjects, { IProject } from "./useProjects";

interface DeleteProjectButtonProps {
  project: IProject;
}

function DeleteProjectButton({ project }: DeleteProjectButtonProps) {
  const { isLoading: isLoadingProjects, isError: isErrorProjects } =
    useProjects();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  if (isLoadingProjects || isErrorProjects) {
    return null;
  }

  return (
    <>
      <button onClick={handleOpen} className={css.button}>
        Delete Project
      </button>
      <DeleteProjectDialog
        project={project}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default DeleteProjectButton;
`
}], ["src/DeleteProjectDialog.module.css", {
  "type": "base64",
  "body": "LmJ1dHRvbiB7CiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKfQo="
}], ["src/DeleteProjectDialog.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
import css from "./DeleteProjectDialog.module.css";
import Dialog from "./Dialog";
import useProjects, { IProject } from "./useProjects";

interface DeleteProjectDialogProps {
  project: IProject;
  isOpen: boolean;
  onClose: () => void;
}

function DeleteProjectDialog({
  project,
  isOpen,
  onClose,
}: DeleteProjectDialogProps) {
  const { deleteProject } = useProjects();

  const [isDeleting, setIsDeleting] = useState(false);
  const handleSubmit = useCallback(async () => {
    setIsDeleting(true);
    try {
      await deleteProject(project);
    } finally {
      setIsDeleting(false);
      onClose();
    }
  }, [deleteProject, onClose, project]);

  return (
    <Dialog
      isOpen={isOpen}
      buttons={[
        <button
          disabled={isDeleting}
          onClick={onClose}
          key="cancel"
          className={css.button}
        >
          Cancel
        </button>,
        <button
          disabled={isDeleting}
          onClick={handleSubmit}
          key="delete"
          className={css.button}
        >
          Delete
        </button>,
      ]}
    >
      Are you sure you want to delete this project?
    </Dialog>
  );
}
export default DeleteProjectDialog;
`
}], ["src/Dialog.module.css", {
  "type": "base64",
  "body": "LmJ1dHRvbnMgewogIGRpc3BsYXk6IGZsZXg7CiAgZ2FwOiAxZW07CiAgbWFyZ2luLXRvcDogMWVtOwogIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7Cn0KCi5kaWFsb2cgewogIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOwogIGJvcmRlci1yYWRpdXM6IDEwcHg7Cn0K"
}], ["src/Dialog.tsx", {
  type: "raw",
  body: `import { PropsWithChildren } from "react";
import css from "./Dialog.module.css";

interface DialogProps {
  isOpen: boolean;
  buttons?: React.ReactElement[];
}

function Dialog({ children, isOpen, buttons }: PropsWithChildren<DialogProps>) {
  return (
    <dialog open={isOpen} className={css.dialog}>
      {children}
      {buttons != null && buttons.length > 0 && (
        <div className={css.buttons}>{buttons}</div>
      )}
    </dialog>
  );
}
export default Dialog;
`
}], ["src/Home.module.css", {
  "type": "base64",
  "body": "LnR1dG9yaWFsQmFubmVyV3JhcHBlciB7CiAgZGlzcGxheTogZmxleDsKICBtYXJnaW46IDJlbTsKfQoKLnR1dG9yaWFsQmFubmVyIHsKICBmbGV4OiAxOwogIHdpZHRoOiAwOwogIGJhY2tncm91bmQ6IHJnYmEoMTIxLCA5NywgMjE5LCAwLjcpOwogIGNvbG9yOiAjZmZmZmZmOwogIGJvcmRlci1yYWRpdXM6IDFlbTsKICBwYWRkaW5nOiAxZW07CiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpOwp9CgoudHV0b3JpYWxCYW5uZXJUaXRsZSB7CiAgbWFyZ2luLXRvcDogMDsKICBmb250LXdlaWdodDogNjAwOwp9CgoucHJvamVjdFNlbGVjdCB7CiAgZGlzcGxheTogZmxleDsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGdhcDogMWVtOwogIG1hcmdpbjogMmVtOwogIGZvbnQtd2VpZ2h0OiA2MDA7Cn0KCg=="
}], ["src/Home.tsx", {
  type: "raw",
  body: `import { useCallback, useEffect, useState } from "react";
import CreateProjectButton from "./CreateProjectButton";
import DeleteProjectButton from "./DeleteProjectButton";
import css from "./Home.module.css";
import Layout from "./Layout";
import { ProjectDetails } from "./ProjectDetails";
import ProjectSelect from "./ProjectSelect";
import useProjects, { IProject } from "./useProjects";

function Home() {
  const [projectId, setProjectId] = useState<string | undefined>(undefined);
  const { projects } = useProjects();

  const project = projects?.find((p) => p.id === projectId);

  const handleSelectProject = useCallback(
    (p: IProject) => setProjectId(p.id),
    [],
  );

  useEffect(() => {
    if (project == null && projects != null && projects.length > 0) {
      setProjectId(projects[0].id);
    }
  }, [project, projects]);

  const handleOnProjectCreated = useCallback(
    (projectId: string | undefined) => {
      setProjectId(projectId);
    },
    [],
  );

  return (
    <Layout>
      <div className={css.tutorialBannerWrapper}>
        <div className={css.tutorialBanner}>
          <p className={css.tutorialBannerTitle}>
            💡 Welcome to the To Do AIP App tutorial!
          </p>
          <p>
            The application is implemented with mock in memory data.
            <br />Can you solve how to change it to use the Ontology SDK
            instead?
          </p>
        </div>
      </div>
      <div className={css.projectSelect}>
        <span>Project:</span>
        <ProjectSelect
          project={project}
          projects={projects ?? []}
          onSelectProject={handleSelectProject}
        />
        <CreateProjectButton onProjectCreated={handleOnProjectCreated} />
        {project != null && <DeleteProjectButton project={project} />}
      </div>
      {project != null && <ProjectDetails project={project} />}
    </Layout>
  );
}

export default Home;
`
}], ["src/Layout.module.css", {
  "type": "base64",
  "body": "LmhlYWRlciB7CiAgZGlzcGxheTogZmxleDsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIG1hcmdpbjogMmVtOwp9CgoubG9nbyB7CiAgaGVpZ2h0OiA0ZW07CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBtYXJnaW4tcmlnaHQ6IDFlbTsKfQoKLnRpdGxlIHsKICBmb250LXdlaWdodDogNjAwOwogIGZvbnQtc2l6ZTogMS41ZW07Cn0K"
}], ["src/Layout.tsx", {
  type: "raw",
  body: `import todoAppLogo from "/todo-aip-app.svg";
import React from "react";
import css from "./Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={css.header}>
        <img src={todoAppLogo} className={css.logo} alt="Todo App logo" />
        <div className={css.title}>
          Ontology SDK Tutorial - To Do App Powered by AIP
        </div>
      </div>
      {children}
    </>
  );
}

export default Layout;
`
}], ["src/Login.module.css", {
  "type": "base64",
  "body": "LmxvZ2luQnV0dG9uIHsKICBkaXNwbGF5OiBmbGV4OwogIGp1c3RpZnktY29udGVudDogY2VudGVyOwogIG1hcmdpbjogMmVtOwp9Cg=="
}], ["src/Login.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./client";
import Layout from "./Layout";
import css from "./Login.module.css";

function Login() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const token = auth.getTokenOrUndefined();

  const handleLogin = useCallback(async () => {
    setIsLoggingIn(true);
    try {
      // Initiate the OAuth flow, which will redirect the user to log into Foundry
      // Once the login has completed, the user will be redirected back to the route defined via the
      // FOUNDRY_REDIRECT_URL variable in .env.development
      await auth.signIn();
    } catch (e: unknown) {
      console.error(e);
      setError((e as Error).message ?? e);
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  // If the token exists but a user tries to load /login, redirect to the home page instead
  if (token != null) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Layout>
      <div className={css.loginButton}>
        <button onClick={handleLogin}>
          {isLoggingIn ? "Logging in…" : "Log in "}
        </button>
      </div>
      {error && <div>Unable to log in: {error}</div>}
    </Layout>
  );
}

export default Login;
`
}], ["src/ProjectDetails.module.css", {
  "type": "base64",
  "body": "LnByb2plY3RDYXJkIHsKICBtYXJnaW46IDJlbTsKICBwYWRkaW5nOiAwLjVlbTsKICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOwogIC8qIG1hcmdpbjogMC41ZW07ICovCiAgZ2FwOiAwLjVlbTsKICBib3JkZXItcmFkaXVzOiA1cHg7Cgp9CgoucHJvamVjdFRpdGxlIHsKICBmb250LXNpemU6IDEuNWVtOwp9CgouZGVzY3JpcHRpb24gewogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICBnYXA6IDVweDsKfQoKLmltYWdlIHsKICBoZWlnaHQ6IDE2cHg7CiAgd2lkdGg6IDE2cHg7Cn0KCi5haXAgewogIGJhY2tncm91bmQtY29sb3I6ICM3OTYxREI7CiAgY29sb3I6ICNmZmZmZmY7CiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKICBwYWRkaW5nOiAycHg7CiAgZ2FwOiAxMHB4OwogIGhlaWdodDogMzBweDsKfQoKLnByb2Nlc3NpbmcgewogIGN1cnNvcjogcHJvZ3Jlc3M7Cn0KCi5haXBUZXh0IHsKICBkaXNwbGF5OiBmbGV4OwogIGp1c3RpZnktY29udGVudDogY2VudGVyOwogIGdhcDogMTBweDsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIHBhZGRpbmc6IDAgMTBweDsKfQoKLnRleHRBcmVhIHsKICBib3JkZXI6IG5vbmU7CiAgY29sb3I6IGdyYXk7CiAgcmVzaXplOiBub25lOwogIG92ZXJmbG93OiBoaWRkZW47CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7Cn0K"
}], ["src/ProjectDetails.tsx", {
  type: "raw",
  body: `import aipLogo from "/aip-icon.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import CreateTaskButton from "./CreateTaskButton";
import css from "./ProjectDetails.module.css";
import TaskList from "./TaskList";
import useProjects, { IProject } from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

interface ProjectDetailsProps {
  project: IProject;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [projectHasTasks, setProjectHasTasks] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const { updateProjectDescription } = useProjects();
  const tasks = useProjectTasks(project).tasks;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setProjectHasTasks(tasks == null ? false : tasks.length > 0);
  }, [project, tasks]);

  const handleProjectDescriptionRecommendation = useCallback(async () => {
    if (project == null) {
      return;
    }
    setIsProcessing(true);
    await updateProjectDescription(project);
    setIsProcessing(false);
  }, [project, updateProjectDescription]);

  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = \`\${textArea.scrollHeight}px\`;
    }
  }, [project.description]);

  const handleOnTaskCreated = useCallback(() => {
    setProjectHasTasks(true);
  }, []);

  const handleOnTaskDeleted = useCallback(() => {
    if (tasks?.length === 0) {
      setProjectHasTasks(false);
    }
  }, [tasks]);

  return (
    <div className={css.projectCard} key={project.id}>
      <h1 className={css.projectTitle}>{project.name}</h1>
      {projectHasTasks && (
        <div className={css.description}>
          <textarea
            ref={textAreaRef}
            readOnly
            value={project.description}
            className={css.textArea}
          />
          <button
            disabled={isProcessing}
            className={\`\${css.aip} \${isProcessing ? css.processing : ""}\`}
            title="Click here to update project description based on AIP Logic"
            type="button"
            onClick={handleProjectDescriptionRecommendation}
          >
            <div className={css.aipText}>
              <img
                src={aipLogo}
                alt="AIP"
                className={css.image}
              />
              Get description recommendation
            </div>
          </button>
        </div>
      )}
      <TaskList project={project} onTaskDeleted={handleOnTaskDeleted} />
      <CreateTaskButton
        project={project}
        onTaskCreated={handleOnTaskCreated}
      />
    </div>
  );
}
`
}], ["src/ProjectSelect.tsx", {
  type: "raw",
  body: `import { ChangeEvent, useCallback } from "react";
import { IProject } from "./useProjects";

interface ProjectSelectProps {
  project: IProject | undefined;
  projects: IProject[];
  onSelectProject: (project: IProject) => void;
}

function ProjectSelect({
  project,
  projects,
  onSelectProject,
}: ProjectSelectProps) {
  const handleSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const nextProject = projects.find((p) => \`\${p.id}\` === e.target.value);
      if (nextProject != null) {
        onSelectProject(nextProject);
      }
    },
    [projects, onSelectProject],
  );

  return (
    <select value={project?.id} onChange={handleSelect}>
      <option hidden disabled value="">
        -- select a project --
      </option>

      {projects.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </select>
  );
}

export default ProjectSelect;
`
}], ["src/TaskList.module.css", {
  "type": "base64",
  "body": "LnRhc2tMaXN0IHsKICBsaXN0LXN0eWxlOiBub25lOwogIHBhZGRpbmc6IDA7CiAgbWFyZ2luLXRvcDogMWVtOwogIG1hcmdpbi1ib3R0b206IDFlbTsKICB3aWR0aDogMTAwJTsKfQo="
}], ["src/TaskList.tsx", {
  type: "raw",
  body: `import css from "./TaskList.module.css";
import TaskListItem from "./TaskListItem";
import { IProject } from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

interface TaskListProps {
  project: IProject;
  onTaskDeleted: (taskId: string | undefined) => void;
}

function TaskList({ project, onTaskDeleted }: TaskListProps) {
  const {
    tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
    deleteTask,
  } = useProjectTasks(project);

  if (isErrorTasks) {
    return <div className={css.taskList}>Error loading tasks!</div>;
  } else if (isLoadingTasks) {
    return null;
  }

  const data = tasks ?? [];
  if (data.length === 0) {
    return <div className={css.taskList}>No tasks found</div>;
  }

  return (
    <ul className={css.taskList}>
      {data.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          onTaskDeleted={onTaskDeleted}
        />
      ))}
    </ul>
  );
}

export default TaskList;
`
}], ["src/TaskListItem.module.css", {
  "type": "base64",
  "body": "LmxpIHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7CiAgcGFkZGluZzogNXB4OwogIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7CiAgZ2FwOiA1cHg7CiAgYm9yZGVyLXJhZGl1czogNXB4OwogIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7CiAgbWFyZ2luOiAxMHB4IDA7Cn0KCi5jaGVja2VkIHsKICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsKfQoKLmRlbGV0ZSB7CiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKICBwYWRkaW5nOiAycHg7Cn0KCi50YXNrIHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgd2lkdGg6IDEwMCU7Cn0KCi50ZXh0QXJlYSB7CiAgYm9yZGVyOiBub25lOwogIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7CiAgY29sb3I6IGdyYXk7CiAgcmVzaXplOiBub25lOwogIG92ZXJmbG93OiBoaWRkZW47CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7Cn0K"
}], ["src/TaskListItem.tsx", {
  type: "raw",
  body: `import { useCallback, useEffect, useRef, useState } from "react";
import css from "./TaskListItem.module.css";
import { ITask } from "./useProjectTasks";

interface TaskListItemProps {
  task: ITask;
  deleteTask: (task: ITask) => Promise<void>;
  onTaskDeleted: (taskId: string | undefined) => void;
}

function TaskListItem({ task, deleteTask, onTaskDeleted }: TaskListItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = useCallback(async () => {
    setIsDeleting(true);
    try {
      await deleteTask(task);
    } finally {
      onTaskDeleted(task.id);
      setIsDeleting(false);
    }
  }, [deleteTask, task, onTaskDeleted]);

  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = \`\${textArea.scrollHeight}px\`;
    }
  }, [task.description]);
  const cleanDescription = task.description?.trim();
  return (
    <li className={css.li}>
      <input
        type="checkbox"
        onChange={handleClick}
        checked={isDeleting}
        className={css.delete}
        title="Delete task"
      />
      <div className={\`\${css.task} \${isDeleting ? css.checked : ""}\`}>
        <span>{task.title}</span>
        {cleanDescription != null && (
          <textarea
            ref={textAreaRef}
            readOnly
            value={task.description}
            className={css.textArea}
            rows={1}
          />
        )}
      </div>
    </li>
  );
}

export default TaskListItem;
`
}], ["src/client.ts.hbs", {
  type: "raw",
  body: `import { createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";
import { \$ontologyRid } from "{{osdkPackage}}";

const url = import.meta.env.VITE_FOUNDRY_API_URL;
const clientId = import.meta.env.VITE_FOUNDRY_CLIENT_ID;
const redirectUrl = import.meta.env.VITE_FOUNDRY_REDIRECT_URL;
checkEnv(url, "VITE_FOUNDRY_API_URL");
checkEnv(clientId, "VITE_FOUNDRY_CLIENT_ID");
checkEnv(redirectUrl, "VITE_FOUNDRY_REDIRECT_URL");
{{#if scopes}}
const scopes = [
  {{#each scopes}}
  "{{this}}",
  {{/each}}
];
{{/if}}

function checkEnv(
  value: string | undefined,
  name: string,
): asserts value is string {
  if (value == null) {
    throw new Error(\`Missing environment variable: \${name}\`);
  }
}

/**
 * Initialize the client to interact with the Ontology SDK
 */
const auth = createPublicOauthClient(
  clientId,
  url,
  redirectUrl,
  {{#if scopes}}
  { scopes },
  {{/if}}
);

const client = createClient(
  url,
  \$ontologyRid,
  auth,
);

export { auth, client };
`
}], ["src/env.test.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgbG9hZEVudiB9IGZyb20gInZpdGUiOwppbXBvcnQgeyBleHBlY3QsIHRlc3QgfSBmcm9tICJ2aXRlc3QiOwoKY29uc3QgRU5WX1ZBUlMgPSBbCiAgIlZJVEVfRk9VTkRSWV9BUElfVVJMIiwKICAiVklURV9GT1VORFJZX0NMSUVOVF9JRCIsCiAgIlZJVEVfRk9VTkRSWV9SRURJUkVDVF9VUkwiLApdOwoKZm9yIChjb25zdCBlbnZWYXIgb2YgRU5WX1ZBUlMpIHsKICB0ZXN0LnNraXBJZihwcm9jZXNzLmVudi5WRVJJRllfRU5WX1BST0RVQ1RJT04gIT09ICJ0cnVlIikoCiAgICBgcHJvZHVjdGlvbiBlbnYgc2hvdWxkIGNvbnRhaW4gJHtlbnZWYXJ9YCwKICAgICgpID0+IHsKICAgICAgY29uc3QgZW52ID0gbG9hZEVudigicHJvZHVjdGlvbiIsIHByb2Nlc3MuY3dkKCkpOwogICAgICBleHBlY3QoZW52W2VudlZhcl0sIGAke2VudlZhcn0gc2hvdWxkIGJlIGRlZmluZWRgKS50b0JlRGVmaW5lZCgpOwogICAgICBleHBlY3QoCiAgICAgICAgZW52W2VudlZhcl0sCiAgICAgICAgYCR7ZW52VmFyfSBzaG91bGQgbm90IGNvbnRhaW4gcGxhY2Vob2xkZXIgdmFsdWVgLAogICAgICApLm5vdC50b01hdGNoKC88Lio+Lyk7CiAgICB9LAogICk7Cn0K"
}], ["src/index.css", {
  "type": "base64",
  "body": "OnJvb3QgewogIGZvbnQtZmFtaWx5OiBJbnRlciwgc3lzdGVtLXVpLCBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7CiAgbGluZS1oZWlnaHQ6IDEuNTsKICBmb250LXdlaWdodDogNDAwOwoKICBmb250LXN5bnRoZXNpczogbm9uZTsKICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OwogIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOwogIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7Cn0KCiNyb290LWNvbnRhaW5lciB7CiAgZGlzcGxheTogZmxleDsKICBmbGV4OiAxOwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7Cn0KCiNyb290IHsKICBtYXgtd2lkdGg6IDEyODBweDsKICBtYXJnaW46IDJyZW0gYXV0bzsKICBwYWRkaW5nOiAycmVtOwp9CgphIHsKICBmb250LXdlaWdodDogNTAwOwogIGNvbG9yOiAjNjQ2Y2ZmOwogIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsKfQphOmhvdmVyIHsKICBjb2xvcjogIzUzNWJmMjsKfQoKYm9keSB7CiAgbWFyZ2luOiAwOwogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICBtaW4td2lkdGg6IDMyMHB4OwogIG1pbi1oZWlnaHQ6IDEwMHZoOwp9CgpoMSB7CiAgZm9udC1zaXplOiAzLjJlbTsKICBsaW5lLWhlaWdodDogMS4xOwp9CgpidXR0b24gewogIGJvcmRlci1yYWRpdXM6IDhweDsKICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsKICBwYWRkaW5nOiAwLjZlbSAxLjJlbTsKICBmb250LXNpemU6IDFlbTsKICBmb250LXdlaWdodDogNTAwOwogIGZvbnQtZmFtaWx5OiBpbmhlcml0OwogIGN1cnNvcjogcG9pbnRlcjsKICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXM7Cn0KYnV0dG9uOmhvdmVyIHsKICBib3JkZXItY29sb3I6ICM2NDZjZmY7Cn0KYnV0dG9uOmZvY3VzLApidXR0b246Zm9jdXMtdmlzaWJsZSB7CiAgb3V0bGluZTogNHB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yOwp9CgpAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkgewogIDpyb290IHsKICAgIGNvbG9yOiAjMjEzNTQ3OwogICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsKICB9CiAgYTpob3ZlciB7CiAgICBjb2xvcjogIzc0N2JmZjsKICB9CiAgYnV0dG9uIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7CiAgfQp9Cg=="
}], ["src/main.tsx", {
  type: "raw",
  body: `import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthCallback from "./AuthCallback";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Home from "./Home";
import Login from "./Login";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AuthenticatedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      // This is the route defined in your application's redirect URL
      path: "/auth/callback",
      element: <AuthCallback />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
`
}], ["src/mocks.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgSVByb2plY3QgfSBmcm9tICIuL3VzZVByb2plY3RzIjsKaW1wb3J0IHsgSVRhc2sgfSBmcm9tICIuL3VzZVByb2plY3RUYXNrcyI7Cgpjb25zdCBwcm9qZWN0czogSVByb2plY3RbXSA9IFsKICB7CiAgICAkYXBpTmFtZTogIk1vY2tQcm9qZWN0IiwKICAgICRwcmltYXJ5S2V5OiAiMSIsCiAgICBpZDogIjEiLAogICAgbmFtZTogIk1vY2sgcHJvamVjdCIsCiAgICBkZXNjcmlwdGlvbjogIlRoaXMgaXMgYSBtb2NrIGRlc2NyaXB0aW9uIiwKICB9LAogIHsKICAgICRhcGlOYW1lOiAiTW9ja1Byb2plY3QiLAogICAgJHByaW1hcnlLZXk6ICIyIiwKICAgIGlkOiAiMiIsCiAgICBuYW1lOiAiWWV0IGFub3RoZXIgbW9jayBwcm9qZWN0IiwKICAgIGRlc2NyaXB0aW9uOiAiVGhpcyBpcyBhbm90aGVyIG1vY2sgZGVzY3JpcHRpb24iLAogIH0sCl07Cgpjb25zdCB0YXNrczogSVRhc2tbXSA9IFsKICB7CiAgICAkYXBpTmFtZTogIk1vY2tUYXNrIiwKICAgICRwcmltYXJ5S2V5OiAiMSIsCiAgICBpZDogIjEiLAogICAgdGl0bGU6ICJUcnkgdG8iLAogICAgZGVzY3JpcHRpb246ICJ0YXNrIGRlc2NyaXB0aW9uIDEiLAogICAgcHJvamVjdElkOiAiMSIsCiAgfSwKICB7CiAgICAkYXBpTmFtZTogIk1vY2tUYXNrIiwKICAgICRwcmltYXJ5S2V5OiAiMiIsCiAgICBpZDogIjIiLAogICAgdGl0bGU6ICJJbXBsZW1lbnQgdGhpcyIsCiAgICBkZXNjcmlwdGlvbjogInRhc2sgZGVzY3JpcHRpb24gMiIsCiAgICBwcm9qZWN0SWQ6ICIxIiwKICB9LAogIHsKICAgICRhcGlOYW1lOiAiTW9ja1Rhc2siLAogICAgJHByaW1hcnlLZXk6ICIzIiwKICAgIGlkOiAiMyIsCiAgICB0aXRsZTogIldpdGggdGhlIE9udG9sb2d5IFNESyEiLAogICAgZGVzY3JpcHRpb246ICJ0YXNrIGRlc2NyaXB0aW9uIDMiLAogICAgcHJvamVjdElkOiAiMSIsCiAgfSwKICB7CiAgICAkYXBpTmFtZTogIk1vY2tUYXNrIiwKICAgICRwcmltYXJ5S2V5OiAiNCIsCiAgICBpZDogIjQiLAogICAgdGl0bGU6ICJNb3JlIHRhc2tzIGhlcmUiLAogICAgZGVzY3JpcHRpb246ICJNb3JlIHRhc2sgZGVzY3JpcHRpb24iLAogICAgcHJvamVjdElkOiAiMiIsCiAgfSwKXTsKYXN5bmMgZnVuY3Rpb24gZGVsYXkoKTogUHJvbWlzZTx2b2lkPiB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PgogICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDUwMCArIE1hdGgucmFuZG9tKCkgKiAxMDAwKQogICk7Cn0KCi8vIEdvb2QgZW5vdWdoIHJhbmRvbSBpZCBmb3IgbW9ja3MKZnVuY3Rpb24gcmFuZG9tSWQoKTogc3RyaW5nIHsKICByZXR1cm4gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiAqKiAzMSl9YDsKfQoKYXN5bmMgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKTogUHJvbWlzZTxJUHJvamVjdFtdPiB7CiAgYXdhaXQgZGVsYXkoKTsKICBjb25zdCByZXN1bHQgPSBbLi4ucHJvamVjdHNdOwogIHJlc3VsdC5zb3J0KChwMSwgcDIpID0+IHAxLm5hbWUubG9jYWxlQ29tcGFyZShwMi5uYW1lKSk7CiAgcmV0dXJuIHJlc3VsdDsKfQoKYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh7CiAgbmFtZSwKfTogewogIG5hbWU6IHN0cmluZzsKICBkZXNjcmlwdGlvbj86IHN0cmluZzsKfSk6IFByb21pc2U8SVByb2plY3RbIiRwcmltYXJ5S2V5Il0+IHsKICBhd2FpdCBkZWxheSgpOwogIGNvbnN0IGlkID0gcmFuZG9tSWQoKTsKICBwcm9qZWN0cy5wdXNoKHsKICAgICRhcGlOYW1lOiAiTW9ja1Byb2plY3QiLAogICAgJHByaW1hcnlLZXk6IGlkLAogICAgaWQsCiAgICBuYW1lLAogICAgZGVzY3JpcHRpb246ICIiLAogIH0pOwogIHJldHVybiBpZDsKfQoKYXN5bmMgZnVuY3Rpb24gZ2V0UmVjb21tZW5kZWRQcm9qZWN0RGVzY3JpcHRpb24oCiAgcHJvamVjdDogSVByb2plY3QsCik6IFByb21pc2U8c3RyaW5nPiB7CiAgYXdhaXQgZGVsYXkoKTsKICBjb25zdCBwcm9qZWN0VGFza3MgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQucHJvamVjdElkID09PSBwcm9qZWN0LmlkKTsKICBpZiAocHJvamVjdFRhc2tzLmxlbmd0aCA9PT0gMCkgewogICAgdGhyb3cgbmV3IEVycm9yKCJQcm9qZWN0IGRlc2NyaXB0aW9uIHJlY29tbWVuZGF0aW9uIHJlcXVpcmVzIHRhc2tzIik7CiAgfQogIHJldHVybiBgQUlQIExvZ2ljIG1vY2sgZGVzY3JpcHRpb24gZm9yIHByb2plY3RgOwp9Cgphc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0RGVzY3JpcHRpb24oCiAgcHJvamVjdDogSVByb2plY3QsCik6IFByb21pc2U8dm9pZD4gewogIGF3YWl0IGRlbGF5KCk7CiAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IGF3YWl0IGdldFJlY29tbWVuZGVkUHJvamVjdERlc2NyaXB0aW9uKHByb2plY3QpOwp9Cgphc3luYyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHsKICBhd2FpdCBkZWxheSgpOwogIGNvbnN0IGlkeCA9IHByb2plY3RzLmZpbmRJbmRleCgocCkgPT4gcC5pZCA9PT0gaWQpOwogIGlmIChpZHggIT09IC0xKSB7CiAgICBwcm9qZWN0cy5zcGxpY2UoaWR4LCAxKTsKICB9Cn0KCmFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3RUYXNrcyhwcm9qZWN0SWQ6IHN0cmluZyk6IFByb21pc2U8SVRhc2tbXT4gewogIGF3YWl0IGRlbGF5KCk7CiAgcmV0dXJuIHRhc2tzLmZpbHRlcigodCkgPT4gdC5wcm9qZWN0SWQgPT09IHByb2plY3RJZCk7Cn0KCmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRhc2soewogIHRpdGxlLAogIGRlc2NyaXB0aW9uID0gIiIsCiAgcHJvamVjdElkLAp9OiB7CiAgdGl0bGU6IHN0cmluZzsKICBkZXNjcmlwdGlvbjogc3RyaW5nOwogIHByb2plY3RJZDogc3RyaW5nOwp9KTogUHJvbWlzZTxJVGFza1siJHByaW1hcnlLZXkiXT4gewogIGF3YWl0IGRlbGF5KCk7CiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHApID0+IHAuaWQgPT09IHByb2plY3RJZCk7CiAgaWYgKHByb2plY3QgPT0gbnVsbCkgewogICAgdGhyb3cgbmV3IEVycm9yKGBQcm9qZWN0ICR7cHJvamVjdElkfSBub3QgZm91bmQhYCk7CiAgfQogIGNvbnN0IGlkID0gcmFuZG9tSWQoKTsKICB0YXNrcy51bnNoaWZ0KHsKICAgICRhcGlOYW1lOiAiTW9ja1Rhc2siLAogICAgJHByaW1hcnlLZXk6IGlkLAogICAgaWQsCiAgICB0aXRsZSwKICAgIGRlc2NyaXB0aW9uLAogICAgcHJvamVjdElkLAogIH0pOwogIHJldHVybiBpZDsKfQoKYXN5bmMgZnVuY3Rpb24gZ2V0UmVjb21tZW5kZWRUYXNrRGVzY3JpcHRpb24oCiAgdGFza05hbWU6IHN0cmluZywKKTogUHJvbWlzZTxzdHJpbmc+IHsKICBhd2FpdCBkZWxheSgpOwogIGlmICh0YXNrTmFtZS5sZW5ndGggPT09IDApIHsKICAgIHRocm93IG5ldyBFcnJvcigiVGFzayBuYW1lIG11c3Qgbm90IGJlIGVtcHR5Iik7CiAgfQogIHJldHVybiBgTW9jayBBSVAgZGVzY3JpcHRpb24gZm9yIHRhc2tgOwp9Cgphc3luYyBmdW5jdGlvbiBkZWxldGVUYXNrKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHsKICBhd2FpdCBkZWxheSgpOwogIGNvbnN0IGlkeCA9IHRhc2tzLmZpbmRJbmRleCgodCkgPT4gdC5pZCA9PT0gaWQpOwogIGlmIChpZHggIT09IC0xKSB7CiAgICB0YXNrcy5zcGxpY2UoaWR4LCAxKTsKICB9Cn0KCmNvbnN0IE1vY2tzID0gewogIGdldFByb2plY3RzLAogIGNyZWF0ZVByb2plY3QsCiAgZ2V0UmVjb21tZW5kZWRQcm9qZWN0RGVzY3JpcHRpb24sCiAgZGVsZXRlUHJvamVjdCwKICBnZXRQcm9qZWN0VGFza3MsCiAgY3JlYXRlVGFzaywKICBkZWxldGVUYXNrLAogIGdldFJlY29tbWVuZGVkVGFza0Rlc2NyaXB0aW9uLAogIHVwZGF0ZVByb2plY3REZXNjcmlwdGlvbiwKfTsKCmV4cG9ydCBkZWZhdWx0IE1vY2tzOwo="
}], ["src/useProjectTasks.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICJyZWFjdCI7CmltcG9ydCB1c2VTV1IgZnJvbSAic3dyIjsKaW1wb3J0IE1vY2tzIGZyb20gIi4vbW9ja3MiOwppbXBvcnQgeyBJUHJvamVjdCB9IGZyb20gIi4vdXNlUHJvamVjdHMiOwoKZXhwb3J0IGludGVyZmFjZSBJVGFzayB7CiAgJGFwaU5hbWU6IHN0cmluZzsKICAkcHJpbWFyeUtleTogc3RyaW5nOwogIGlkOiBzdHJpbmc7CiAgdGl0bGU6IHN0cmluZzsKICBkZXNjcmlwdGlvbjogc3RyaW5nOwogIHByb2plY3RJZDogc3RyaW5nOwp9CgpleHBvcnQgZnVuY3Rpb24gdXNlUHJvamVjdFRhc2tzKHByb2plY3Q6IElQcm9qZWN0IHwgdW5kZWZpbmVkKSB7CiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzVmFsaWRhdGluZywgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSPElUYXNrW10+KAogICAgcHJvamVjdCAhPSBudWxsID8gYHByb2plY3RzLyR7cHJvamVjdC5pZH0vdGFza3NgIDogbnVsbCwKICAgIC8vIFRyeSB0byBpbXBsZW1lbnQgdGhpcyB3aXRoIHRoZSBPbnRvbG9neSBTREshCiAgICBhc3luYyAoKSA9PiB7CiAgICAgIGlmIChwcm9qZWN0ID09IG51bGwpIHsKICAgICAgICByZXR1cm4gW107CiAgICAgIH0KICAgICAgcmV0dXJuIE1vY2tzLmdldFByb2plY3RUYXNrcyhwcm9qZWN0LiRwcmltYXJ5S2V5KTsKICAgIH0sCiAgKTsKCiAgY29uc3QgY3JlYXRlVGFzazogKAogICAgdGl0bGU6IHN0cmluZywKICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsCiAgKSA9PiBQcm9taXNlPElUYXNrWyIkcHJpbWFyeUtleSJdIHwgdW5kZWZpbmVkPiA9IHVzZUNhbGxiYWNrKAogICAgYXN5bmMgKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpID0+IHsKICAgICAgaWYgKHByb2plY3QgPT0gbnVsbCkgewogICAgICAgIHJldHVybiB1bmRlZmluZWQ7CiAgICAgIH0KICAgICAgLy8gVHJ5IHRvIGltcGxlbWVudCB0aGlzIHdpdGggdGhlIE9udG9sb2d5IFNESyEKICAgICAgY29uc3QgaWQgPSBhd2FpdCBNb2Nrcy5jcmVhdGVUYXNrKHsKICAgICAgICB0aXRsZSwKICAgICAgICBkZXNjcmlwdGlvbiwKICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3QuJHByaW1hcnlLZXksCiAgICAgIH0pOwogICAgICBhd2FpdCBtdXRhdGUoKTsKICAgICAgcmV0dXJuIGlkOwogICAgfSwKICAgIFtwcm9qZWN0LCBtdXRhdGVdLAogICk7CgogIGNvbnN0IGRlbGV0ZVRhc2s6ICh0YXNrOiBJVGFzaykgPT4gUHJvbWlzZTx2b2lkPiA9IHVzZUNhbGxiYWNrKAogICAgYXN5bmMgKHRhc2spID0+IHsKICAgICAgaWYgKHByb2plY3QgPT0gbnVsbCkgewogICAgICAgIHJldHVybjsKICAgICAgfQogICAgICAvLyBUcnkgdG8gaW1wbGVtZW50IHRoaXMgd2l0aCB0aGUgT250b2xvZ3kgU0RLIQogICAgICBhd2FpdCBNb2Nrcy5kZWxldGVUYXNrKHRhc2suJHByaW1hcnlLZXkpOwogICAgICBhd2FpdCBtdXRhdGUoKTsKICAgIH0sCiAgICBbcHJvamVjdCwgbXV0YXRlXSwKICApOwoKICBjb25zdCBnZXRSZWNvbW1lbmRlZFRhc2tEZXNjcmlwdGlvbjogKHRhc2tOYW1lOiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nPiA9CiAgICB1c2VDYWxsYmFjaygKICAgICAgYXN5bmMgKHRhc2tOYW1lOiBzdHJpbmcpID0+IHsKICAgICAgICAvLyBUcnkgdG8gaW1wbGVtZW50IHRoaXMgd2l0aCB0aGUgT250b2xvZ3kgU0RLIQogICAgICAgIGNvbnN0IHJlY29tbWVuZGVkVGFza0Rlc2NyaXB0aW9uID0gYXdhaXQgTW9ja3MKICAgICAgICAgIC5nZXRSZWNvbW1lbmRlZFRhc2tEZXNjcmlwdGlvbih0YXNrTmFtZSk7CiAgICAgICAgYXdhaXQgbXV0YXRlKCk7CiAgICAgICAgcmV0dXJuIHJlY29tbWVuZGVkVGFza0Rlc2NyaXB0aW9uOwogICAgICB9LAogICAgICBbbXV0YXRlXSwKICAgICk7CgogIHJldHVybiB7CiAgICB0YXNrczogZGF0YSwKICAgIGlzTG9hZGluZywKICAgIGlzVmFsaWRhdGluZywKICAgIGlzRXJyb3I6IGVycm9yLAogICAgY3JlYXRlVGFzaywKICAgIGRlbGV0ZVRhc2ssCiAgICBnZXRSZWNvbW1lbmRlZFRhc2tEZXNjcmlwdGlvbiwKICB9Owp9Cg=="
}], ["src/useProjects.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICJyZWFjdCI7CmltcG9ydCB1c2VTV1IgZnJvbSAic3dyIjsKaW1wb3J0IE1vY2tzIGZyb20gIi4vbW9ja3MiOwoKZXhwb3J0IGludGVyZmFjZSBJUHJvamVjdCB7CiAgJGFwaU5hbWU6IHN0cmluZzsKICAkcHJpbWFyeUtleTogc3RyaW5nOwogIGlkOiBzdHJpbmc7CiAgbmFtZTogc3RyaW5nOwogIGRlc2NyaXB0aW9uOiBzdHJpbmc7Cn0KCmZ1bmN0aW9uIHVzZVByb2plY3RzKCkgewogIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1ZhbGlkYXRpbmcsIGVycm9yLCBtdXRhdGUgfSA9IHVzZVNXUjxJUHJvamVjdFtdPigKICAgICJwcm9qZWN0cyIsCiAgICBhc3luYyAoKSA9PiB7CiAgICAgIC8vIFRyeSB0byBpbXBsZW1lbnQgdGhpcyB3aXRoIHRoZSBPbnRvbG9neSBTREshCiAgICAgIGNvbnN0IHByb2plY3RzTGlzdDogSVByb2plY3RbXSA9IChhd2FpdCBNb2Nrcy5nZXRQcm9qZWN0cygpKS5tYXAoKAogICAgICAgIHByb2plY3QsCiAgICAgICkgPT4gKHsKICAgICAgICAkYXBpTmFtZTogcHJvamVjdC4kYXBpTmFtZSwKICAgICAgICAkcHJpbWFyeUtleTogcHJvamVjdC4kcHJpbWFyeUtleSwKICAgICAgICBpZDogcHJvamVjdC5pZCwKICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUgfHwgIiIsCiAgICAgICAgZGVzY3JpcHRpb246IHByb2plY3QuZGVzY3JpcHRpb24gfHwgIiIsCiAgICAgIH0pKTsKICAgICAgcmV0dXJuIHByb2plY3RzTGlzdDsKICAgIH0sCiAgKTsKCiAgY29uc3QgY3JlYXRlUHJvamVjdDogKAogICAgbmFtZTogc3RyaW5nLAogICkgPT4gUHJvbWlzZTxJUHJvamVjdFsiJHByaW1hcnlLZXkiXT4gPSB1c2VDYWxsYmFjaygKICAgIGFzeW5jIChuYW1lOiBzdHJpbmcpID0+IHsKICAgICAgLy8gVHJ5IHRvIGltcGxlbWVudCB0aGlzIHdpdGggdGhlIE9udG9sb2d5IFNESyEKICAgICAgY29uc3QgaWQgPSBhd2FpdCBNb2Nrcy5jcmVhdGVQcm9qZWN0KHsgbmFtZSB9KTsKICAgICAgYXdhaXQgbXV0YXRlKCk7CiAgICAgIHJldHVybiBpZDsKICAgIH0sCiAgICBbbXV0YXRlXSwKICApOwoKICBjb25zdCB1cGRhdGVQcm9qZWN0RGVzY3JpcHRpb246ICgKICAgIHByb2plY3Q6IElQcm9qZWN0LAogICkgPT4gUHJvbWlzZTx2b2lkPiA9IHVzZUNhbGxiYWNrKAogICAgYXN5bmMgKHByb2plY3QpID0+IHsKICAgICAgLy8gVHJ5IHRvIGltcGxlbWVudCB0aGlzIHdpdGggdGhlIE9udG9sb2d5IFNESyEKICAgICAgYXdhaXQgTW9ja3MudXBkYXRlUHJvamVjdERlc2NyaXB0aW9uKHByb2plY3QpOwogICAgICBhd2FpdCBtdXRhdGUoKTsKICAgIH0sCiAgICBbbXV0YXRlXSwKICApOwoKICBjb25zdCBkZWxldGVQcm9qZWN0OiAocHJvamVjdDogSVByb2plY3QpID0+IFByb21pc2U8dm9pZD4gPSB1c2VDYWxsYmFjaygKICAgIGFzeW5jIChwcm9qZWN0KSA9PiB7CiAgICAgIC8vIFRyeSB0byBpbXBsZW1lbnQgdGhpcyB3aXRoIHRoZSBPbnRvbG9neSBTREshCiAgICAgIGF3YWl0IE1vY2tzLmRlbGV0ZVByb2plY3QocHJvamVjdC4kcHJpbWFyeUtleSk7CiAgICAgIGF3YWl0IG11dGF0ZSgpOwogICAgfSwKICAgIFttdXRhdGVdLAogICk7CgogIHJldHVybiB7CiAgICBwcm9qZWN0czogZGF0YSwKICAgIGlzTG9hZGluZywKICAgIGlzVmFsaWRhdGluZywKICAgIGlzRXJyb3I6IGVycm9yLAogICAgY3JlYXRlUHJvamVjdCwKICAgIGRlbGV0ZVByb2plY3QsCiAgICB1cGRhdGVQcm9qZWN0RGVzY3JpcHRpb24sCiAgfTsKfQoKZXhwb3J0IGRlZmF1bHQgdXNlUHJvamVjdHM7Cg=="
}], ["src/vite-env.d.ts", {
  "type": "base64",
  "body": "Ly8vIDxyZWZlcmVuY2UgdHlwZXM9InZpdGUvY2xpZW50IiAvPgo="
}], ["tsconfig.json", {
  "type": "base64",
  "body": "ewogICJjb21waWxlck9wdGlvbnMiOiB7CiAgICAidGFyZ2V0IjogIkVTMjAyMCIsCiAgICAidXNlRGVmaW5lRm9yQ2xhc3NGaWVsZHMiOiB0cnVlLAogICAgImxpYiI6IFsiRVMyMDIwIiwgIkRPTSIsICJET00uSXRlcmFibGUiXSwKICAgICJtb2R1bGUiOiAiRVNOZXh0IiwKICAgICJza2lwTGliQ2hlY2siOiB0cnVlLAoKICAgIC8qIEJ1bmRsZXIgbW9kZSAqLwogICAgIm1vZHVsZVJlc29sdXRpb24iOiAiYnVuZGxlciIsCiAgICAiYWxsb3dJbXBvcnRpbmdUc0V4dGVuc2lvbnMiOiB0cnVlLAogICAgInJlc29sdmVKc29uTW9kdWxlIjogdHJ1ZSwKICAgICJpc29sYXRlZE1vZHVsZXMiOiB0cnVlLAogICAgIm5vRW1pdCI6IHRydWUsCiAgICAianN4IjogInJlYWN0LWpzeCIsCgogICAgLyogTGludGluZyAqLwogICAgInN0cmljdCI6IHRydWUsCiAgICAibm9VbnVzZWRMb2NhbHMiOiB0cnVlLAogICAgIm5vVW51c2VkUGFyYW1ldGVycyI6IHRydWUsCiAgICAibm9GYWxsdGhyb3VnaENhc2VzSW5Td2l0Y2giOiB0cnVlCiAgfSwKICAiaW5jbHVkZSI6IFsic3JjIl0sCiAgInJlZmVyZW5jZXMiOiBbeyAicGF0aCI6ICIuL3RzY29uZmlnLm5vZGUuanNvbiIgfV0KfQo="
}], ["tsconfig.node.json", {
  "type": "base64",
  "body": "ewogICJjb21waWxlck9wdGlvbnMiOiB7CiAgICAiY29tcG9zaXRlIjogdHJ1ZSwKICAgICJza2lwTGliQ2hlY2siOiB0cnVlLAogICAgIm1vZHVsZSI6ICJFU05leHQiLAogICAgIm1vZHVsZVJlc29sdXRpb24iOiAiYnVuZGxlciIsCiAgICAiYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0cyI6IHRydWUKICB9LAogICJpbmNsdWRlIjogWyJ2aXRlLmNvbmZpZy50cyJdCn0K"
}], ["vite.config.ts.hbs", {
  type: "raw",
  body: `import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    {{#if corsProxy}}
    proxy: {
      "^(/multipass/api|/api)": {
        target: "{{foundryUrl}}",
        changeOrigin: true,
        secure: true,
      },
    },
    {{/if}}
  },
});
`
}]]);
//# sourceMappingURL=index.js.map