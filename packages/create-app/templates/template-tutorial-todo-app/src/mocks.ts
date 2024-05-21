export interface MockProject {
  __apiName: string;
  __primaryKey: string;
  id: string;
  name: string;
  tasks: MockTask[];
}

export interface MockTask {
  __apiName: string;
  __primaryKey: string;
  id: string;
  title: string;
}

const projects: MockProject[] = [
  {
    __apiName: "MockProject",
    __primaryKey: "1",
    id: "1",
    name: "Fake Project",
    tasks: [
      {
        __apiName: "MockTask",
        __primaryKey: "1",
        id: "1",
        title: "Try to",
      },
      {
        __apiName: "MockTask",
        __primaryKey: "2",
        id: "2",
        title: "Implement this",
      },
      {
        __apiName: "MockTask",
        __primaryKey: "3",
        id: "3",
        title: "With the Ontology SDK!",
      },
    ],
  },
  {
    __apiName: "MockProject",
    __primaryKey: "2",
    id: "2",
    name: "Yet Another Fake Project",
    tasks: [
      {
        __apiName: "MockTask",
        __primaryKey: "4",
        id: "4",
        title: "More tasks here",
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

async function getProjects(): Promise<MockProject[]> {
  await delay();
  const result = [...projects];
  result.sort((p1, p2) => p1.name.localeCompare(p2.name));
  return result;
}

async function createProject({
  name,
}: {
  name: string;
}): Promise<MockTask["__primaryKey"]> {
  await delay();
  const id = randomId();
  projects.push({
    __apiName: "MockProject",
    __primaryKey: id,
    id,
    name,
    tasks: [],
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

async function createTask({
  title,
  projectId,
}: {
  title: string;
  projectId: string;
}): Promise<MockTask["__primaryKey"]> {
  await delay();
  const project = projects.find((p) => p.id === projectId);
  if (project == null) {
    throw new Error(`Project ${projectId} not found!`);
  }
  const id = randomId();
  project.tasks.unshift({ __apiName: "MockTask", __primaryKey: id, id, title });
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

const Mocks = {
  getProjects,
  createProject,
  deleteProject,
  createTask,
  deleteTask,
};

export default Mocks;
