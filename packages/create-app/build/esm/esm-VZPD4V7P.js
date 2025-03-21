// ../create-app.template.tutorial-todo-app.beta/build/esm/generatedNoCheck/index.js
var files = /* @__PURE__ */ new Map([["README.md.hbs", {
  type: "raw",
  body: `# {{project}}

This project was generated with [\`@osdk/create-app\`](https://www.npmjs.com/package/@osdk/create-app) and is intended to be used alongside the Developer Console tutorial for creating a To Do App against a reference Ontology.

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
    <link rel="icon" type="image/svg+xml" href="/todo-app.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ontology SDK Tutorial - Todo App</title>
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
}], ["public/todo-app.svg", {
  "type": "base64",
  "body": "PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMTYiIGZpbGw9IiNGQkIzNjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOCA4MlY5NEg0MFY4MkgyOFpNMjIgNzBINDZDNDkuMyA3MCA1MiA3Mi43IDUyIDc2VjEwMEM1MiAxMDMuMyA0OS4zIDEwNiA0NiAxMDZIMjJDMTguNyAxMDYgMTYgMTAzLjMgMTYgMTAwVjc2QzE2IDcyLjcgMTguNyA3MCAyMiA3MFpNNzYgMzRIMTA2QzEwOS4zIDM0IDExMiAzNi43IDExMiA0MEMxMTIgNDMuMyAxMDkuMyA0NiAxMDYgNDZINzZDNzIuNyA0NiA3MCA0My4zIDcwIDQwQzcwIDM2LjcgNzIuNyAzNCA3NiAzNFpNNTIgMjJDNTUuMyAyMiA1OCAyNC43IDU4IDI4QzU4IDI5LjY4IDU3LjM0IDMxLjE4IDU2LjI2IDMyLjI2TDM4LjI2IDU2LjI2QzM3LjE4IDU3LjM0IDM1LjY4IDU4IDM0IDU4QzMyLjMyIDU4IDMwLjgyIDU3LjM0IDI5Ljc0IDU2LjI2TDE3Ljc0IDQ0LjI2QzE2LjY2IDQzLjE4IDE2IDQxLjY4IDE2IDQwQzE2IDM2LjcgMTguNyAzNCAyMiAzNEMyMy42OCAzNCAyNS4xOCAzNC42NiAyNi4yNiAzNS43NEwzNCA0My41NEw0Ny43NCAyMy43NEM0OC44MiAyMi42NiA1MC4zMiAyMiA1MiAyMlpNNzYgODJIMTA2QzEwOS4zIDgyIDExMiA4NC43IDExMiA4OEMxMTIgOTEuMyAxMDkuMyA5NCAxMDYgOTRINzZDNzIuNyA5NCA3MCA5MS4zIDcwIDg4QzcwIDg0LjcgNzIuNyA4MiA3NiA4MloiIGZpbGw9IiM3NzQ1MEQiLz4KPC9zdmc+Cg=="
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
  return <div>{error != null ? error : "Authenticating\u2026"}</div>;
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
}], ["src/CreateProjectButton.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
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
      <button onClick={handleOpen}>Create Project</button>
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
}], ["src/CreateProjectDialog.tsx", {
  type: "raw",
  body: `import { ChangeEvent, useCallback, useEffect, useState } from "react";
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
  const handleChange = useCallback(
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
        <button disabled={isCreating} onClick={onClose} key="cancel">
          Cancel
        </button>,
        <button disabled={isCreating} onClick={handleSubmit} key="create">
          Create project
        </button>,
      ]}
    >
      <label>
        Project name: <input type="text" value={name} onChange={handleChange} />
      </label>
    </Dialog>
  );
}
export default CreateProjectDialog;
`
}], ["src/CreateTaskButton.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
import CreateTaskDialog from "./CreateTaskDialog";
import { IProject } from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskButtonProps {
  project: IProject;
}

function CreateTaskButton({ project }: CreateTaskButtonProps) {
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
      <button onClick={handleOpen}>Create Task</button>
      <CreateTaskDialog
        project={project}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default CreateTaskButton;
`
}], ["src/CreateTaskDialog.tsx", {
  type: "raw",
  body: `import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Dialog from "./Dialog";
import { IProject } from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskDialogProps {
  project: IProject;
  isOpen: boolean;
  onClose: () => void;
}

function CreateTaskDialog({ project, isOpen, onClose }: CreateTaskDialogProps) {
  const { createTask } = useProjectTasks(project);

  const [name, setName] = useState<string>("New task");
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [],
  );

  useEffect(() => setName("New task"), [isOpen]);

  const [isCreating, setIsCreating] = useState(false);
  const handleSubmit = useCallback(async () => {
    setIsCreating(true);
    try {
      await createTask(name);
    } finally {
      setIsCreating(false);
      onClose();
    }
  }, [onClose, createTask, name]);

  return (
    <Dialog
      isOpen={isOpen}
      buttons={[
        <button disabled={isCreating} onClick={onClose} key="cancel">
          Cancel
        </button>,
        <button disabled={isCreating} onClick={handleSubmit} key="create">
          Create task
        </button>,
      ]}
    >
      <label>
        Task name: <input type="text" value={name} onChange={handleChange} />
      </label>
    </Dialog>
  );
}
export default CreateTaskDialog;
`
}], ["src/DeleteProjectButton.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
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
      <button onClick={handleOpen}>Delete Project</button>
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
}], ["src/DeleteProjectDialog.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
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
        <button disabled={isDeleting} onClick={onClose} key="cancel">
          Cancel
        </button>,
        <button disabled={isDeleting} onClick={handleSubmit} key="delete">
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
  "body": "LmJ1dHRvbnMgewogIGRpc3BsYXk6IGZsZXg7CiAgZ2FwOiAxZW07CiAgbWFyZ2luLXRvcDogMWVtOwp9CgouZGlhbG9nIHsKICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsKICBib3JkZXItcmFkaXVzOiAxMHB4Owp9"
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
  "body": "LnR1dG9yaWFsQmFubmVyV3JhcHBlciB7CiAgZGlzcGxheTogZmxleDsKICBtYXJnaW46IDJlbTsKfQoKLnR1dG9yaWFsQmFubmVyIHsKICBmbGV4OiAxOwogIHdpZHRoOiAwOwogIGJhY2tncm91bmQ6IGhzbCgzNSwgMTAwJSwgNzAlKTsKICBib3JkZXItcmFkaXVzOiAxZW07CiAgcGFkZGluZzogMWVtOwogIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTsKfQoKLnR1dG9yaWFsQmFubmVyVGl0bGUgewogIG1hcmdpbi10b3A6IDA7CiAgZm9udC13ZWlnaHQ6IDYwMDsKfQoKLnByb2plY3RTZWxlY3QgewogIGRpc3BsYXk6IGZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBnYXA6IDFlbTsKICBtYXJnaW46IDJlbTsKICBmb250LXdlaWdodDogNjAwOwp9CgoucHJvamVjdENhcmQgewogIG1hcmdpbjogMmVtOwp9CgoucHJvamVjdFRpdGxlIHsKICBmb250LXNpemU6IDEuNWVtOwp9Cg=="
}], ["src/Home.tsx", {
  type: "raw",
  body: `import { useCallback, useEffect, useState } from "react";
import CreateProjectButton from "./CreateProjectButton";
import CreateTaskButton from "./CreateTaskButton";
import DeleteProjectButton from "./DeleteProjectButton";
import css from "./Home.module.css";
import Layout from "./Layout";
import ProjectSelect from "./ProjectSelect";
import TaskList from "./TaskList";
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

  return (
    <Layout>
      <div className={css.tutorialBannerWrapper}>
        <div className={css.tutorialBanner}>
          <p className={css.tutorialBannerTitle}>
            \u{1F4A1} Welcome to To Do app tutorial!
          </p>
          <p>
            The To Do App is implemented with mock in-memory data.
            <br />Can you solve how to switch it to use the Ontology SDK
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
        <CreateProjectButton onProjectCreated={setProjectId} />
        {project != null && <DeleteProjectButton project={project} />}
      </div>
      {project != null && (
        <div className={css.projectCard} key={project.id}>
          <h1 className={css.projectTitle}>{project.name}</h1>
          <TaskList project={project} />
          <CreateTaskButton project={project} />
        </div>
      )}
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
  body: `import todoAppLogo from "/todo-app.svg";
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
        <div className={css.title}>Ontology SDK Tutorial - Todo App</div>
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
          {isLoggingIn ? "Logging in\u2026" : "Log in "}
        </button>
      </div>
      {error && <div>Unable to log in: {error}</div>}
    </Layout>
  );
}

export default Login;
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
  "body": "LnRhc2tMaXN0IHsKICBsaXN0LXN0eWxlOiBub25lOwogIHBhZGRpbmc6IDA7CiAgbWFyZ2luLXRvcDogMWVtOwogIG1hcmdpbi1ib3R0b206IDFlbTsKfQo="
}], ["src/TaskList.tsx", {
  type: "raw",
  body: `import css from "./TaskList.module.css";
import TaskListItem from "./TaskListItem";
import { IProject } from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

interface TaskListProps {
  project: IProject;
}

function TaskList({ project }: TaskListProps) {
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
        <TaskListItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default TaskList;
`
}], ["src/TaskListItem.module.css", {
  "type": "base64",
  "body": "LmxhYmVsIHsKICBtYXJnaW4tbGVmdDogMC41ZW07Cn0KCi5jaGVja2VkIHsKICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsKfQoKLmRlbGV0ZSB7CiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsKICBwYWRkaW5nOiAycHg7Cn0KCg=="
}], ["src/TaskListItem.tsx", {
  type: "raw",
  body: `import { useCallback, useState } from "react";
import css from "./TaskListItem.module.css";
import { ITask } from "./useProjectTasks";

interface TaskListItemProps {
  task: ITask;
  deleteTask: (task: ITask) => Promise<void>;
}

function TaskListItem({ task, deleteTask }: TaskListItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleClick = useCallback(async () => {
    setIsDeleting(true);
    try {
      await deleteTask(task);
    } finally {
      setIsDeleting(false);
    }
  }, [deleteTask, task]);

  return (
    <li>
      <label
        className={\`\${css.label} \${isDeleting ? css.checked : ""}\`}
        htmlFor={\`\${task.id}\`}
      >
        <input
          type="checkbox"
          onChange={handleClick}
          checked={isDeleting}
          className={css.delete}
          title="Delete task"
        />
        {task.title}
      </label>
    </li>
  );
}

export default TaskListItem;
`
}], ["src/client.ts.hbs", {
  type: "raw",
  body: `import { createClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";
import { $ontologyRid } from "{{osdkPackage}}";

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
  $ontologyRid,
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
  "body": "aW1wb3J0IHsgSVByb2plY3QgfSBmcm9tICIuL3VzZVByb2plY3RzIjsKaW1wb3J0IHsgSVRhc2sgfSBmcm9tICIuL3VzZVByb2plY3RUYXNrcyI7Cgpjb25zdCBwcm9qZWN0czogSVByb2plY3RbXSA9IFsKICB7CiAgICAkYXBpTmFtZTogIk1vY2tQcm9qZWN0IiwKICAgICRwcmltYXJ5S2V5OiAiMSIsCiAgICBpZDogIjEiLAogICAgbmFtZTogIk1vY2sgcHJvamVjdCIsCiAgfSwKICB7CiAgICAkYXBpTmFtZTogIk1vY2tQcm9qZWN0IiwKICAgICRwcmltYXJ5S2V5OiAiMiIsCiAgICBpZDogIjIiLAogICAgbmFtZTogIllldCBhbm90aGVyIG1vY2sgcHJvamVjdCIsCiAgfSwKXTsKCmNvbnN0IHRhc2tzOiBJVGFza1tdID0gWwogIHsKICAgICRhcGlOYW1lOiAiTW9ja1Rhc2siLAogICAgJHByaW1hcnlLZXk6ICIxIiwKICAgIGlkOiAiMSIsCiAgICB0aXRsZTogIlRyeSB0byIsCiAgICBwcm9qZWN0SWQ6ICIxIiwKICB9LAogIHsKICAgICRhcGlOYW1lOiAiTW9ja1Rhc2siLAogICAgJHByaW1hcnlLZXk6ICIyIiwKICAgIGlkOiAiMiIsCiAgICB0aXRsZTogIkltcGxlbWVudCB0aGlzIiwKICAgIHByb2plY3RJZDogIjEiLAogIH0sCiAgewogICAgJGFwaU5hbWU6ICJNb2NrVGFzayIsCiAgICAkcHJpbWFyeUtleTogIjMiLAogICAgaWQ6ICIzIiwKICAgIHRpdGxlOiAiV2l0aCB0aGUgT250b2xvZ3kgU0RLISIsCiAgICBwcm9qZWN0SWQ6ICIxIiwKICB9LAogIHsKICAgICRhcGlOYW1lOiAiTW9ja1Rhc2siLAogICAgJHByaW1hcnlLZXk6ICI0IiwKICAgIGlkOiAiNCIsCiAgICB0aXRsZTogIk1vcmUgdGFza3MgaGVyZSIsCiAgICBwcm9qZWN0SWQ6ICIyIiwKICB9LApdOwoKYXN5bmMgZnVuY3Rpb24gZGVsYXkoKTogUHJvbWlzZTx2b2lkPiB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PgogICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDUwMCArIE1hdGgucmFuZG9tKCkgKiAxMDAwKQogICk7Cn0KCi8vIEdvb2QgZW5vdWdoIHJhbmRvbSBpZCBmb3IgbW9ja3MKZnVuY3Rpb24gcmFuZG9tSWQoKTogc3RyaW5nIHsKICByZXR1cm4gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiAqKiAzMSl9YDsKfQoKYXN5bmMgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKTogUHJvbWlzZTxJUHJvamVjdFtdPiB7CiAgYXdhaXQgZGVsYXkoKTsKICBjb25zdCByZXN1bHQgPSBbLi4ucHJvamVjdHNdOwogIHJlc3VsdC5zb3J0KChwMSwgcDIpID0+IHAxLm5hbWUubG9jYWxlQ29tcGFyZShwMi5uYW1lKSk7CiAgcmV0dXJuIHJlc3VsdDsKfQoKYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh7CiAgbmFtZSwKfTogewogIG5hbWU6IHN0cmluZzsKfSk6IFByb21pc2U8SVByb2plY3RbIiRwcmltYXJ5S2V5Il0+IHsKICBhd2FpdCBkZWxheSgpOwogIGNvbnN0IGlkID0gcmFuZG9tSWQoKTsKICBwcm9qZWN0cy5wdXNoKHsKICAgICRhcGlOYW1lOiAiTW9ja1Byb2plY3QiLAogICAgJHByaW1hcnlLZXk6IGlkLAogICAgaWQsCiAgICBuYW1lLAogIH0pOwogIHJldHVybiBpZDsKfQoKYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7CiAgYXdhaXQgZGVsYXkoKTsKICBjb25zdCBpZHggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHApID0+IHAuaWQgPT09IGlkKTsKICBpZiAoaWR4ICE9PSAtMSkgewogICAgcHJvamVjdHMuc3BsaWNlKGlkeCwgMSk7CiAgfQp9Cgphc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0VGFza3MocHJvamVjdElkOiBzdHJpbmcpOiBQcm9taXNlPElUYXNrW10+IHsKICBhd2FpdCBkZWxheSgpOwogIHJldHVybiB0YXNrcy5maWx0ZXIoKHQpID0+IHQucHJvamVjdElkID09PSBwcm9qZWN0SWQpOwp9Cgphc3luYyBmdW5jdGlvbiBjcmVhdGVUYXNrKHsKICB0aXRsZSwKICBwcm9qZWN0SWQsCn06IHsKICB0aXRsZTogc3RyaW5nOwogIHByb2plY3RJZDogc3RyaW5nOwp9KTogUHJvbWlzZTxJVGFza1siJHByaW1hcnlLZXkiXT4gewogIGF3YWl0IGRlbGF5KCk7CiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHQpID0+IHQucHJvamVjdElkID09PSBwcm9qZWN0SWQpOwogIGlmICh0YXNrID09IG51bGwpIHsKICAgIHRocm93IG5ldyBFcnJvcihgUHJvamVjdCAke3Byb2plY3RJZH0gbm90IGZvdW5kIWApOwogIH0KICBjb25zdCBpZCA9IHJhbmRvbUlkKCk7CiAgdGFza3MudW5zaGlmdCh7CiAgICAkYXBpTmFtZTogIk1vY2tUYXNrIiwKICAgICRwcmltYXJ5S2V5OiBpZCwKICAgIGlkLAogICAgdGl0bGUsCiAgICBwcm9qZWN0SWQsCiAgfSk7CiAgcmV0dXJuIGlkOwp9Cgphc3luYyBmdW5jdGlvbiBkZWxldGVUYXNrKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHsKICBhd2FpdCBkZWxheSgpOwogIGNvbnN0IGlkeCA9IHRhc2tzLmZpbmRJbmRleCgodCkgPT4gdC5wcm9qZWN0SWQgPT09IGlkKTsKICBpZiAoaWR4ICE9PSAtMSkgewogICAgdGFza3Muc3BsaWNlKGlkeCwgMSk7CiAgfQp9Cgpjb25zdCBNb2NrcyA9IHsKICBnZXRQcm9qZWN0cywKICBjcmVhdGVQcm9qZWN0LAogIGRlbGV0ZVByb2plY3QsCiAgZ2V0UHJvamVjdFRhc2tzLAogIGNyZWF0ZVRhc2ssCiAgZGVsZXRlVGFzaywKfTsKCmV4cG9ydCBkZWZhdWx0IE1vY2tzOwo="
}], ["src/useProjectTasks.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICJyZWFjdCI7CmltcG9ydCB1c2VTV1IgZnJvbSAic3dyIjsKaW1wb3J0IE1vY2tzIGZyb20gIi4vbW9ja3MiOwppbXBvcnQgeyBJUHJvamVjdCB9IGZyb20gIi4vdXNlUHJvamVjdHMiOwoKZXhwb3J0IGludGVyZmFjZSBJVGFzayB7CiAgJGFwaU5hbWU6IHN0cmluZzsKICAkcHJpbWFyeUtleTogc3RyaW5nOwogIGlkOiBzdHJpbmc7CiAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDsKICBwcm9qZWN0SWQ6IHN0cmluZzsKfQoKZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2plY3RUYXNrcyhwcm9qZWN0OiBJUHJvamVjdCB8IHVuZGVmaW5lZCkgewogIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1ZhbGlkYXRpbmcsIGVycm9yLCBtdXRhdGUgfSA9IHVzZVNXUjxJVGFza1tdPigKICAgIHByb2plY3QgIT0gbnVsbCA/IGBwcm9qZWN0cy8ke3Byb2plY3QuaWR9L3Rhc2tzYCA6IG51bGwsCiAgICAvLyBUcnkgdG8gaW1wbGVtZW50IHRoaXMgd2l0aCB0aGUgT250b2xvZ3kgU0RLIQogICAgYXN5bmMgKCkgPT4gewogICAgICBpZiAocHJvamVjdCA9PSBudWxsKSB7CiAgICAgICAgcmV0dXJuIFtdOwogICAgICB9CiAgICAgIHJldHVybiAoYXdhaXQgTW9ja3MuZ2V0UHJvamVjdFRhc2tzKHByb2plY3QuJHByaW1hcnlLZXkpKTsKICAgIH0sCiAgKTsKCiAgY29uc3QgY3JlYXRlVGFzazogKAogICAgdGl0bGU6IHN0cmluZywKICApID0+IFByb21pc2U8SVRhc2tbIiRwcmltYXJ5S2V5Il0gfCB1bmRlZmluZWQ+ID0gdXNlQ2FsbGJhY2soCiAgICBhc3luYyAodGl0bGUpID0+IHsKICAgICAgaWYgKHByb2plY3QgPT0gbnVsbCkgewogICAgICAgIHJldHVybiB1bmRlZmluZWQ7CiAgICAgIH0KICAgICAgLy8gVHJ5IHRvIGltcGxlbWVudCB0aGlzIHdpdGggdGhlIE9udG9sb2d5IFNESyEKICAgICAgY29uc3QgaWQgPSBhd2FpdCBNb2Nrcy5jcmVhdGVUYXNrKHsKICAgICAgICB0aXRsZSwKICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3QuJHByaW1hcnlLZXksCiAgICAgIH0pOwogICAgICBhd2FpdCBtdXRhdGUoKTsKICAgICAgcmV0dXJuIGlkOwogICAgfSwKICAgIFtwcm9qZWN0LCBtdXRhdGVdLAogICk7CgogIGNvbnN0IGRlbGV0ZVRhc2s6ICh0YXNrOiBJVGFzaykgPT4gUHJvbWlzZTx2b2lkPiA9IHVzZUNhbGxiYWNrKAogICAgYXN5bmMgKHRhc2spID0+IHsKICAgICAgaWYgKHByb2plY3QgPT0gbnVsbCkgewogICAgICAgIHJldHVybjsKICAgICAgfQogICAgICAvLyBUcnkgdG8gaW1wbGVtZW50IHRoaXMgd2l0aCB0aGUgT250b2xvZ3kgU0RLIQogICAgICBhd2FpdCBNb2Nrcy5kZWxldGVUYXNrKHRhc2suJHByaW1hcnlLZXkpOwogICAgICBhd2FpdCBtdXRhdGUoKTsKICAgIH0sCiAgICBbcHJvamVjdCwgbXV0YXRlXSwKICApOwoKICByZXR1cm4gewogICAgdGFza3M6IGRhdGEsCiAgICBpc0xvYWRpbmcsCiAgICBpc1ZhbGlkYXRpbmcsCiAgICBpc0Vycm9yOiBlcnJvciwKICAgIGNyZWF0ZVRhc2ssCiAgICBkZWxldGVUYXNrLAogIH07Cn0K"
}], ["src/useProjects.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICJyZWFjdCI7CmltcG9ydCB1c2VTV1IgZnJvbSAic3dyIjsKaW1wb3J0IE1vY2tzIGZyb20gIi4vbW9ja3MiOwoKZXhwb3J0IGludGVyZmFjZSBJUHJvamVjdCB7CiAgJGFwaU5hbWU6IHN0cmluZzsKICAkcHJpbWFyeUtleTogc3RyaW5nOwogIGlkOiBzdHJpbmc7CiAgbmFtZTogc3RyaW5nOwp9CgpmdW5jdGlvbiB1c2VQcm9qZWN0cygpIHsKICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNWYWxpZGF0aW5nLCBlcnJvciwgbXV0YXRlIH0gPSB1c2VTV1I8SVByb2plY3RbXT4oCiAgICAicHJvamVjdHMiLAogICAgYXN5bmMgKCkgPT4gewogICAgICAvLyBUcnkgdG8gaW1wbGVtZW50IHRoaXMgd2l0aCB0aGUgT250b2xvZ3kgU0RLIQogICAgICBjb25zdCBwcm9qZWN0c0xpc3Q6IElQcm9qZWN0W10gPSAoYXdhaXQgTW9ja3MuZ2V0UHJvamVjdHMoKSkubWFwKCgKICAgICAgICBwcm9qZWN0LAogICAgICApID0+ICh7CiAgICAgICAgJGFwaU5hbWU6IHByb2plY3QuJGFwaU5hbWUsCiAgICAgICAgJHByaW1hcnlLZXk6IHByb2plY3QuJHByaW1hcnlLZXksCiAgICAgICAgaWQ6IHByb2plY3QuaWQsCiAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lIHx8ICIiLAogICAgICB9KSk7CiAgICAgIHJldHVybiBwcm9qZWN0c0xpc3Q7CiAgICB9LAogICk7CgogIGNvbnN0IGNyZWF0ZVByb2plY3Q6IChuYW1lOiBzdHJpbmcpID0+IFByb21pc2U8SVByb2plY3RbIiRwcmltYXJ5S2V5Il0+ID0KICAgIHVzZUNhbGxiYWNrKAogICAgICBhc3luYyAobmFtZSkgPT4gewogICAgICAgIC8vIFRyeSB0byBpbXBsZW1lbnQgdGhpcyB3aXRoIHRoZSBPbnRvbG9neSBTREshCiAgICAgICAgY29uc3QgaWQgPSBhd2FpdCBNb2Nrcy5jcmVhdGVQcm9qZWN0KHsgbmFtZSB9KTsKICAgICAgICBhd2FpdCBtdXRhdGUoKTsKICAgICAgICByZXR1cm4gaWQ7CiAgICAgIH0sCiAgICAgIFttdXRhdGVdLAogICAgKTsKCiAgY29uc3QgZGVsZXRlUHJvamVjdDogKHByb2plY3Q6IElQcm9qZWN0KSA9PiBQcm9taXNlPHZvaWQ+ID0gdXNlQ2FsbGJhY2soCiAgICBhc3luYyAocHJvamVjdCkgPT4gewogICAgICAvLyBUcnkgdG8gaW1wbGVtZW50IHRoaXMgd2l0aCB0aGUgT250b2xvZ3kgU0RLIQogICAgICBhd2FpdCBNb2Nrcy5kZWxldGVQcm9qZWN0KHByb2plY3QuJHByaW1hcnlLZXkpOwogICAgICBhd2FpdCBtdXRhdGUoKTsKICAgIH0sCiAgICBbbXV0YXRlXSwKICApOwoKICByZXR1cm4gewogICAgcHJvamVjdHM6IGRhdGEsCiAgICBpc0xvYWRpbmcsCiAgICBpc1ZhbGlkYXRpbmcsCiAgICBpc0Vycm9yOiBlcnJvciwKICAgIGNyZWF0ZVByb2plY3QsCiAgICBkZWxldGVQcm9qZWN0LAogIH07Cn0KCmV4cG9ydCBkZWZhdWx0IHVzZVByb2plY3RzOwo="
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

export { files };
//# sourceMappingURL=esm-VZPD4V7P.js.map
//# sourceMappingURL=esm-VZPD4V7P.js.map