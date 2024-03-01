import { LocalDate } from "@fake/sdk";
import { TodoProject, TodoTask } from "@fake/sdk/ontology/objects";

interface MockProject {
  id: string;
  name: string;
  tasks: MockTask[];
}

interface MockTask {
  id: string;
  name: string;
}

const projects: MockProject[] = [
  {
    id: "1",
    name: "Fake Project",
    tasks: [
      {
        id: "1",
        name: "Try to",
      },
      {
        id: "2",
        name: "Implement this",
      },
      {
        id: "3",
        name: "With the Ontology SDK!",
      },
    ],
  },
  {
    id: "2",
    name: "Yet Another Fake Project",
    tasks: [
      {
        id: "4",
        name: "More tasks here",
      },
    ],
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

async function getProjects(): Promise<TodoProject[]> {
  await delay();
  const result = [...projects];
  result.sort((p1, p2) => p1.name.localeCompare(p2.name));
  return result.map(project);
}

async function createProject({
  name,
}: {
  name: string;
}): Promise<TodoProject["__primaryKey"]> {
  await delay();
  const id = randomId();
  projects.push({ id, name, tasks: [] });
  return id;
}

async function deleteProject(id: string): Promise<void> {
  await delay();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx !== -1) {
    projects.splice(idx, 1);
  }
}

async function createTask({
  name,
  projectId,
}: {
  name: string;
  projectId: string;
}): Promise<TodoTask["__primaryKey"]> {
  await delay();
  const project = projects.find((p) => p.id === projectId);
  if (project == null) {
    throw new Error(`Project ${projectId} not found!`);
  }
  const id = randomId();
  project.tasks.unshift({ id, name });
  return id;
}

async function deleteTask(id: string): Promise<void> {
  await delay();
  for (const project of projects) {
    const idx = project.tasks.findIndex((t) => t.id === id);
    if (idx !== -1) {
      project.tasks.splice(idx, 1);
    }
  }
}

function project(mockProject: MockProject): TodoProject {
  return {
    __apiName: "TodoProject",
    __primaryKey: mockProject.id,
    __rid: `${mockProject.id}`,
    id: mockProject.id,
    name: mockProject.name,
    todoTasks: {
      all: async () => ({
        type: "ok",
        value: mockProject.tasks.map((mockTask) => task(mockProject, mockTask)),
      }),
      get: async () => ({
        type: "error",
        error: {
          errorType: "UNKNOWN",
          errorName: "UnknownError",
          originalError: "",
          name: "Error",
          message: "Not implemented!",
        },
      }),
      page: async () => ({
        type: "error",
        error: {
          errorType: "UNKNOWN",
          errorName: "UnknownError",
          originalError: "",
          name: "Error",
          message: "Not implemented!",
        },
      }),
    },
    budget: undefined,
    description: undefined,
    document: undefined,
  };
}

function task(mockProject: MockProject, mockTask: MockTask): TodoTask {
  return {
    __apiName: "TodoTask",
    __primaryKey: mockTask.id,
    __rid: `${mockTask.id}`,
    id: mockTask.id,
    title: mockTask.name,
    startDate: LocalDate.now(),
    dueDate: LocalDate.now().plusWeeks(1),
    status: "IN PROGRESS",
    projectId: mockProject.id,
    todoProject: {
      get: async () => ({
        type: "ok",
        value: project(mockProject),
      }),
    },
    description: undefined,
    assignedTo: undefined,
    createdAt: undefined,
    createdBy: undefined,
  };
}

const Mocks = {
  getProjects,
  createProject,
  deleteProject,
  createTask,
  deleteTask,
};

export default Mocks;
