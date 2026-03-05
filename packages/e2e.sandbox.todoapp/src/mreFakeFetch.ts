/**
 * Fake fetch for the skip-sort-on-append MRE.
 *
 * Intercepts the OSDK client's HTTP calls and returns controlled Todo data
 * with server-style nulls-first ordering (like Postgres/Foundry), so the
 * bug is reproducible without a real Foundry stack.
 *
 * Handles:
 *   GET  .../objectTypes/Todo/fullMetadata  → Todo type metadata
 *   POST .../objectSets/loadObjects         → paginated todos (nulls-first)
 */

// -- Fake Todo data (server sorts nulls-first for ASC) -------------------------

interface FakeTodo {
  pk: string;
  title: string | null;
}

const RAW_TODOS: FakeTodo[] = [
  { pk: "1", title: null },
  { pk: "2", title: "Alpha" },
  { pk: "3", title: null },
  { pk: "4", title: "Beta" },
  { pk: "5", title: "Charlie" },
  { pk: "6", title: null },
  { pk: "7", title: "Delta" },
  { pk: "8", title: "Echo" },
  { pk: "9", title: null },
  { pk: "10", title: "Foxtrot" },
  { pk: "11", title: "Golf" },
  { pk: "12", title: null },
  { pk: "13", title: "Hotel" },
  { pk: "14", title: "India" },
  { pk: "15", title: null },
];

/** Server sort: nulls-first for ASC (Postgres/Foundry behavior). */
function serverSortNullsFirst(items: FakeTodo[]): FakeTodo[] {
  return [...items].sort((a, b) => {
    if (a.title == null && b.title == null) return 0;
    if (a.title == null) return -1;
    if (b.title == null) return 1;
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  });
}

const SORTED_TODOS = serverSortNullsFirst(RAW_TODOS);

// -- Wire-format responses -----------------------------------------------------

const TODO_FULL_METADATA = {
  objectType: {
    apiName: "Todo",
    displayName: "Todo",
    pluralDisplayName: "Todos",
    icon: { type: "blueprint", color: "#4C90F0", name: "confirm" },
    primaryKey: "id",
    properties: {
      id: {
        dataType: { type: "string" },
        rid: "rid.id",
        typeClasses: [],
      },
      title: {
        dataType: { type: "string" },
        rid: "rid.title",
        typeClasses: [],
      },
      isComplete: {
        dataType: { type: "boolean" },
        rid: "rid.isComplete",
        typeClasses: [],
      },
    },
    rid: "ri.ontology.main.object-type.a3fcfef9-ec11-4f2d-8a4c-dc010de837bf",
    status: "EXPERIMENTAL",
    titleProperty: "title",
  },
  linkTypes: [],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

function todoToWire(todo: FakeTodo) {
  return {
    __rid: `ri.phonograph2-objects.main.object.mre-todo-${todo.pk}`,
    __primaryKey: todo.pk,
    __apiName: "Todo",
    id: todo.pk,
    title: todo.title,
    isComplete: false,
  };
}

function buildLoadObjectsResponse(pageSize: number, pageToken?: string) {
  const startIndex = pageToken ? parseInt(pageToken, 10) : 0;
  const page = SORTED_TODOS.slice(startIndex, startIndex + pageSize);
  const nextStart = startIndex + pageSize;
  const hasMore = nextStart < SORTED_TODOS.length;

  return {
    data: page.map(todoToWire),
    nextPageToken: hasMore ? String(nextStart) : undefined,
    totalCount: String(SORTED_TODOS.length),
  };
}

// -- Fake fetch ----------------------------------------------------------------

export const mreFakeFetch: typeof fetch = (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  const url = typeof input === "string"
    ? input
    : input instanceof URL
    ? input.toString()
    : input.url;

  // GET .../objectTypes/Todo/fullMetadata
  if (url.includes("/objectTypes/Todo/fullMetadata")) {
    return Promise.resolve(json(TODO_FULL_METADATA));
  }

  // POST .../objectSets/loadObjects
  if (url.includes("/objectSets/loadObjects") && init?.method === "POST") {
    const body = JSON.parse(init.body as string);
    const pageSize: number = body.pageSize ?? 10;
    const pageToken: string | undefined = body.pageToken;
    return Promise.resolve(json(buildLoadObjectsResponse(pageSize, pageToken)));
  }

  // Fallback — return 404 for anything else (interfaces, etc.)
  return Promise.resolve(new Response("Not found", { status: 404 }));
};

function json(data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
