import { LocalDate } from "@fake/sdk";
import { Project, Task } from "@fake/sdk/ontology/objects";

interface MockProject {
  id: number;
  name: string;
  tasks: MockTask[];
}

interface MockTask {
  id: number;
  name: string;
}

const projects: MockProject[] = [
  {
    id: 1,
    name: "Fake Project",
    tasks: [
      {
        id: 1,
        name: "Try to",
      },
      {
        id: 2,
        name: "Implement this",
      },
      {
        id: 3,
        name: "With the Ontology SDK!",
      },
    ],
  },
  {
    id: 2,
    name: "Yet Another Fake Project",
    tasks: [
      {
        id: 4,
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

async function getProjects(): Promise<Project[]> {
  await delay();
  const result = [...projects];
  result.sort((p1, p2) => p1.name.localeCompare(p2.name));
  return result.map(project);
}

async function createProject({
  id,
  name,
}: {
  id: number;
  name: string;
}): Promise<void> {
  await delay();
  projects.push({ id, name, tasks: [] });
}

async function deleteProject(id: number): Promise<void> {
  await delay();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx !== -1) {
    console.log(projects);
    projects.splice(idx, 1);
    console.log(projects);
  }
}

async function createTask({
  id,
  name,
  projectId,
}: {
  id: number;
  name: string;
  projectId: number;
}): Promise<void> {
  await delay();
  const project = projects.find((p) => p.id === projectId);
  if (project != null) {
    project.tasks.unshift({ id, name });
  }
}

async function deleteTask(id: number): Promise<void> {
  await delay();
  for (const project of projects) {
    const idx = project.tasks.findIndex((t) => t.id === id);
    if (idx !== -1) {
      project.tasks.splice(idx, 1);
    }
  }
}

function project(mockProject: MockProject): Project {
  return {
    __apiName: "Project",
    __primaryKey: mockProject.id,
    __rid: `${mockProject.id}`,
    id: mockProject.id,
    name: mockProject.name,
    task: {
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
  };
}

function task(mockProject: MockProject, mockTask: MockTask): Task {
  return {
    __apiName: "Task",
    __primaryKey: mockTask.id,
    __rid: `${mockTask.id}`,
    id: mockTask.id,
    name: mockTask.name,
    startDate: LocalDate.now(),
    endDate: LocalDate.now().plusWeeks(1),
    status: "Open",
    projectId: mockProject.id,
    project: {
      get: async () => ({
        type: "ok",
        value: project(mockProject),
      }),
    },
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
