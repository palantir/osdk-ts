import { dirname } from "node:path";
import { fileURLToPath } from "node:url";


export function neverOptimizeFunction(f) {
    %NeverOptimizeFunction(f);
    return f;
}

// dprint-ignore-file
export function gc(iters=1) {
    const initialMemory = process.memoryUsage();
    return new Promise((resolve, reject) => {
        let count = 0;
    
        function gcAndCheck() {
          setImmediate(() => {
            count++;
            global.gc();
            // %CollectGarbage('');
            // const curMemory = process.memoryUsage();
            // if (curMemory.rss < initialMemory.rss) {
            //     resolve();
            // }
            //  else 
             if (count < iters) {
              gcAndCheck();
            } else {
                resolve();
            }
          });
        }
    
        gcAndCheck();
      });
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // %CollectGarbage('all');
    // globalThis.gc();
    // globalThis.gc();
    // globalThis.gc();
    // globalThis.gc();
    // globalThis.gc();
    // globalThis.gc();
    // globalThis.gc();
    // globalThis.gc();
    // globalThis.gc();
    // globalThis.gc();

}

export function now() {
    return %DateCurrentTime(); //process.hrtime.bigint();
}

export function debugPrint(a) {
    %DebugPrint(a);
}

/**
 * @template T
 * @param {() => T} a
 * @returns {{result: T, time: number}}
 */
export function timeIt(a) {
    const start = process.hrtime.bigint();

    const result = a();

    const end = process.hrtime.bigint();

    return {
        result,
        time: Number((Number(end - start) / 1_000_000).toFixed(2))
    }
}

export function fixDirname(x) {
    x.dirname = dirname(fileURLToPath(x.url));
}




import { getOneMessage, sendMessage } from "execa";
import deepEqual from "fast-deep-equal";
import invariant from "tiny-invariant";
import { setTimeout } from "node:timers/promises";

export async function createMemoryTest(fn) {
    
  const msg = await getOneMessage();
  invariant(deepEqual(msg, { "type": "start" }));

await gc(100);
// await setTimeout(200);
// await gc();
  
  const initialMemory = process.memoryUsage();
  const start = process.hrtime.bigint();
  const result = await fn();
  const end = process.hrtime.bigint();
  await gc(100);
//   await setTimeout(200);
//   await gc();
  const finalMemory = process.memoryUsage();

  const outMsg = {
    type: "result",
    time: Number((Number(end - start) / 1_000_000).toFixed(2)),
    heapUsed: finalMemory.heapUsed - initialMemory.heapUsed,
    rss: finalMemory.rss - initialMemory.rss,
  };


  await sendMessage(outMsg);

  return {
    result,
    outMsg,
  };
}

neverOptimizeFunction(createMemoryTest)