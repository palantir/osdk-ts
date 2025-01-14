import { IProject } from "./useProjects";
import { ITask } from "./useProjectTasks";

const projects: IProject[] = [
  {
    $apiName: "MockProject",
    $primaryKey: "1",
    id: "1",
    name: "Mock project",
    description: "This is a mock description",
  },
  {
    $apiName: "MockProject",
    $primaryKey: "2",
    id: "2",
    name: "Yet another mock project",
    description: "This is another mock description",
  },
];

const tasks: ITask[] = [
  {
    $apiName: "MockTask",
    $primaryKey: "1",
    id: "1",
    title: "Try to",
    description: "task description 1",
    projectId: "1",
  },
  {
    $apiName: "MockTask",
    $primaryKey: "2",
    id: "2",
    title: "Implement this",
    description: "task description 2",
    projectId: "1",
  },
  {
    $apiName: "MockTask",
    $primaryKey: "3",
    id: "3",
    title: "With the Ontology SDK!",
    description: "task description 3",
    projectId: "1",
  },
  {
    $apiName: "MockTask",
    $primaryKey: "4",
    id: "4",
    title: "More tasks here",
    description: "More task description",
    projectId: "2",
  },
];
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
  description?: string;
}): Promise<IProject["$primaryKey"]> {
  await delay();
  const id = randomId();
  projects.push({
    $apiName: "MockProject",
    $primaryKey: id,
    id,
    name,
    description: "",
  });
  return id;
}

async function getRecommendedProjectDescription(
  project: IProject,
): Promise<string> {
  await delay();
  const projectTasks = tasks.filter((t) => t.projectId === project.id);
  if (projectTasks.length === 0) {
    throw new Error("Project description recommendation requires tasks");
  }
  return `AIP Logic mock description for project`;
}

async function updateProjectDescription(
  project: IProject,
): Promise<void> {
  await delay();
  project.description = await getRecommendedProjectDescription(project);
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
  description = "",
  projectId,
}: {
  title: string;
  description: string;
  projectId: string;
}): Promise<ITask["$primaryKey"]> {
  await delay();
  const project = projects.find((p) => p.id === projectId);
  if (project == null) {
    throw new Error(`Project ${projectId} not found!`);
  }
  const id = randomId();
  tasks.unshift({
    $apiName: "MockTask",
    $primaryKey: id,
    id,
    title,
    description,
    projectId,
  });
  return id;
}

async function getRecommendedTaskDescription(
  taskName: string,
): Promise<string> {
  await delay();
  if (taskName.length === 0) {
    throw new Error("Task name must not be empty");
  }
  return `Mock AIP description for task`;
}

async function deleteTask(id: string): Promise<void> {
  await delay();
  const idx = tasks.findIndex((t) => t.id === id);
  if (idx !== -1) {
    tasks.splice(idx, 1);
  }
}

const Mocks = {
  getProjects,
  createProject,
  getRecommendedProjectDescription,
  deleteProject,
  getProjectTasks,
  createTask,
  deleteTask,
  getRecommendedTaskDescription,
  updateProjectDescription,
};

export default Mocks;
