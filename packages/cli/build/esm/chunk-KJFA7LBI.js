import { init_esm_shims } from './chunk-VHOQB2JW.js';
import path2 from 'node:path';
import process from 'node:process';
import fs, { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';

// ../../node_modules/.pnpm/find-up@7.0.0/node_modules/find-up/index.js
init_esm_shims();

// ../../node_modules/.pnpm/locate-path@7.2.0/node_modules/locate-path/index.js
init_esm_shims();

// ../../node_modules/.pnpm/p-locate@6.0.0/node_modules/p-locate/index.js
init_esm_shims();

// ../../node_modules/.pnpm/p-limit@4.0.0/node_modules/p-limit/index.js
init_esm_shims();

// ../../node_modules/.pnpm/yocto-queue@1.0.0/node_modules/yocto-queue/index.js
init_esm_shims();
var Node = class {
  value;
  next;
  constructor(value) {
    this.value = value;
  }
};
var Queue = class {
  #head;
  #tail;
  #size;
  constructor() {
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.#head) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }
    this.#size++;
  }
  dequeue() {
    const current = this.#head;
    if (!current) {
      return;
    }
    this.#head = this.#head.next;
    this.#size--;
    return current.value;
  }
  clear() {
    this.#head = undefined;
    this.#tail = undefined;
    this.#size = 0;
  }
  get size() {
    return this.#size;
  }
  *[Symbol.iterator]() {
    let current = this.#head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};

// ../../node_modules/.pnpm/p-limit@4.0.0/node_modules/p-limit/index.js
function pLimit(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }
  const queue = new Queue();
  let activeCount = 0;
  const next = () => {
    activeCount--;
    if (queue.size > 0) {
      queue.dequeue()();
    }
  };
  const run = async (fn, resolve, args) => {
    activeCount++;
    const result = (async () => fn(...args))();
    resolve(result);
    try {
      await result;
    } catch {
    }
    next();
  };
  const enqueue = (fn, resolve, args) => {
    queue.enqueue(run.bind(undefined, fn, resolve, args));
    (async () => {
      await Promise.resolve();
      if (activeCount < concurrency && queue.size > 0) {
        queue.dequeue()();
      }
    })();
  };
  const generator = (fn, ...args) => new Promise((resolve) => {
    enqueue(fn, resolve, args);
  });
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value: () => {
        queue.clear();
      }
    }
  });
  return generator;
}

// ../../node_modules/.pnpm/p-locate@6.0.0/node_modules/p-locate/index.js
var EndError = class extends Error {
  constructor(value) {
    super();
    this.value = value;
  }
};
var testElement = async (element, tester) => tester(await element);
var finder = async (element) => {
  const values = await Promise.all(element);
  if (values[1] === true) {
    throw new EndError(values[0]);
  }
  return false;
};
async function pLocate(iterable, tester, {
  concurrency = Number.POSITIVE_INFINITY,
  preserveOrder = true
} = {}) {
  const limit = pLimit(concurrency);
  const items = [...iterable].map((element) => [element, limit(testElement, element, tester)]);
  const checkLimit = pLimit(preserveOrder ? 1 : Number.POSITIVE_INFINITY);
  try {
    await Promise.all(items.map((element) => checkLimit(finder, element)));
  } catch (error) {
    if (error instanceof EndError) {
      return error.value;
    }
    throw error;
  }
}

// ../../node_modules/.pnpm/locate-path@7.2.0/node_modules/locate-path/index.js
var typeMappings = {
  directory: "isDirectory",
  file: "isFile"
};
function checkType(type) {
  if (Object.hasOwnProperty.call(typeMappings, type)) {
    return;
  }
  throw new Error(`Invalid type specified: ${type}`);
}
var matchType = (type, stat) => stat[typeMappings[type]]();
var toPath = (urlOrPath) => urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
async function locatePath(paths, {
  cwd = process.cwd(),
  type = "file",
  allowSymlinks = true,
  concurrency,
  preserveOrder
} = {}) {
  checkType(type);
  cwd = toPath(cwd);
  const statFunction = allowSymlinks ? promises.stat : promises.lstat;
  return pLocate(paths, async (path_) => {
    try {
      const stat = await statFunction(path2.resolve(cwd, path_));
      return matchType(type, stat);
    } catch {
      return false;
    }
  }, {
    concurrency,
    preserveOrder
  });
}
function locatePathSync(paths, {
  cwd = process.cwd(),
  type = "file",
  allowSymlinks = true
} = {}) {
  checkType(type);
  cwd = toPath(cwd);
  const statFunction = allowSymlinks ? fs.statSync : fs.lstatSync;
  for (const path_ of paths) {
    try {
      const stat = statFunction(path2.resolve(cwd, path_), {
        throwIfNoEntry: false
      });
      if (!stat) {
        continue;
      }
      if (matchType(type, stat)) {
        return path_;
      }
    } catch {
    }
  }
}

// ../../node_modules/.pnpm/unicorn-magic@0.1.0/node_modules/unicorn-magic/node.js
init_esm_shims();
function toPath2(urlOrPath) {
  return urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
}

// ../../node_modules/.pnpm/path-exists@5.0.0/node_modules/path-exists/index.js
init_esm_shims();
async function pathExists(path3) {
  try {
    await promises.access(path3);
    return true;
  } catch {
    return false;
  }
}
function pathExistsSync(path3) {
  try {
    fs.accessSync(path3);
    return true;
  } catch {
    return false;
  }
}

// ../../node_modules/.pnpm/find-up@7.0.0/node_modules/find-up/index.js
var findUpStop = Symbol("findUpStop");
async function findUpMultiple(name, options = {}) {
  let directory = path2.resolve(toPath2(options.cwd) ?? "");
  const {
    root
  } = path2.parse(directory);
  const stopAt = path2.resolve(directory, toPath2(options.stopAt ?? root));
  const limit = options.limit ?? Number.POSITIVE_INFINITY;
  const paths = [name].flat();
  const runMatcher = async (locateOptions) => {
    if (typeof name !== "function") {
      return locatePath(paths, locateOptions);
    }
    const foundPath = await name(locateOptions.cwd);
    if (typeof foundPath === "string") {
      return locatePath([foundPath], locateOptions);
    }
    return foundPath;
  };
  const matches = [];
  while (true) {
    const foundPath = await runMatcher({
      ...options,
      cwd: directory
    });
    if (foundPath === findUpStop) {
      break;
    }
    if (foundPath) {
      matches.push(path2.resolve(directory, foundPath));
    }
    if (directory === stopAt || matches.length >= limit) {
      break;
    }
    directory = path2.dirname(directory);
  }
  return matches;
}
function findUpMultipleSync(name, options = {}) {
  let directory = path2.resolve(toPath2(options.cwd) ?? "");
  const {
    root
  } = path2.parse(directory);
  const stopAt = path2.resolve(directory, toPath2(options.stopAt) ?? root);
  const limit = options.limit ?? Number.POSITIVE_INFINITY;
  const paths = [name].flat();
  const runMatcher = (locateOptions) => {
    if (typeof name !== "function") {
      return locatePathSync(paths, locateOptions);
    }
    const foundPath = name(locateOptions.cwd);
    if (typeof foundPath === "string") {
      return locatePathSync([foundPath], locateOptions);
    }
    return foundPath;
  };
  const matches = [];
  while (true) {
    const foundPath = runMatcher({
      ...options,
      cwd: directory
    });
    if (foundPath === findUpStop) {
      break;
    }
    if (foundPath) {
      matches.push(path2.resolve(directory, foundPath));
    }
    if (directory === stopAt || matches.length >= limit) {
      break;
    }
    directory = path2.dirname(directory);
  }
  return matches;
}
async function findUp(name, options = {}) {
  const matches = await findUpMultiple(name, {
    ...options,
    limit: 1
  });
  return matches[0];
}
function findUpSync(name, options = {}) {
  const matches = findUpMultipleSync(name, {
    ...options,
    limit: 1
  });
  return matches[0];
}

export { findUp, findUpMultiple, findUpMultipleSync, findUpStop, findUpSync, pathExists, pathExistsSync };
//# sourceMappingURL=chunk-KJFA7LBI.js.map
//# sourceMappingURL=chunk-KJFA7LBI.js.map