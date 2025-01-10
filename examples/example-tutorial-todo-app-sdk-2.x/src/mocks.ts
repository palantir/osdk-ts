import { IProject, ITask } from "./useProjects";

const projects: IProject[] = [
  {
    $apiName: "MockProject",
    $primaryKey: "1",
    id: "1",
    name: "Mock project"
  },
  {
    $apiName: "MockProject",
    $primaryKey: "2",
    id: "2",
    name: "Yet another mock project",
  },
];

const tasks: ITask[] = [
    {
      $apiName: "MockTask",
      $primaryKey: "1",
      id: "1",
      title: "Try to",
      projectId: "1",
    },
    {
      $apiName: "MockTask",
      $primaryKey: "2",
      id: "2",
      title: "Implement this",
      projectId: "1",
    },
    {
      $apiName: "MockTask",
      $primaryKey: "3",
      id: "3",
      title: "With the Ontology SDK!",
      projectId: "1",
    },
    {
      $apiName: "MockTask",
      $primaryKey: "4",
      id: "4",
      title: "More tasks here",
      projectId: "2",
    },
  ]


async function delay(): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(), 500 + Math.random() * 1000)
  );
}

// Good enough random id for mocks
function randomId(): string {
  return `${Math.floor(Math.random() * 2 ** 31)}`;
}

async function getProjects(): Promise<IProject[]> {
  await delay();
  const result = [...projects];
  result.sort((p1, p2) => p1.name.localeCompare(p2.name));
  return result;
}

async function createProject({
  name,
}: {
  name: string;
}): Promise<IProject["$primaryKey"]> {
  await delay();
  const id = randomId();
  projects.push({
    $apiName: "MockProject",
    $primaryKey: id,
    id,
    name,
  });
  return id;
}

async function deleteProject(id: string): Promise<void> {
  await delay();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx !== -1) {
    projects.splice(idx, 1);
  }
}

async function getProjectTasks(projectId: string): Promise<ITask[]> {
  await delay();
  return tasks.filter((t) => t.projectId === projectId);
}

async function createTask({
  title,
  projectId,
}: {
  title: string;
  projectId: string;
}): Promise<ITask["$primaryKey"]> {
  await delay();
  const task = tasks.find((t) => t.projectId === projectId);
  if (task == null) {
    throw new Error(`Project ${projectId} not found!`);
  }
  const id = randomId();
  tasks.unshift({ $apiName: "MockTask", $primaryKey: id, id, title, projectId });
  return id;
}

async function deleteTask(id: string): Promise<void> {
  await delay();
  const idx = tasks.findIndex((t) => t.projectId === id);
  if (idx !== -1) {
      tasks.splice(idx, 1);
    }
}

const Mocks = {
  getProjects,
  createProject,
  deleteProject,
  getProjectTasks,
  createTask,
  deleteTask,
};

export default Mocks;
