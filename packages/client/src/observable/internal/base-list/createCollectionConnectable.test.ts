/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Osdk } from "@osdk/api";
import type { Employee } from "@osdk/client.test.ontology";
import { BehaviorSubject } from "rxjs";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { Status } from "../../ObservableClient/common.js";
import type { CacheKey } from "../CacheKey.js";
import type { ObjectCacheKey } from "../object/ObjectCacheKey.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import type { Subjects } from "../Subjects.js";
import {
  createClientMockHelper,
  mockObserver,
  waitForCall,
} from "../testUtils.js";
import { createCollectionConnectable as actualCreateCollectionConnectable } from "./createCollectionConnectable.js";

// Test payload type for our collection
interface TestPayload {
  data: any[] | undefined;
  status: Status;
  isOptimistic: boolean;
  lastUpdated: number;
  count: number;
}

// Mock object instances for testing
const mockEmployee1: Osdk.Instance<Employee> & ObjectHolder = {
  $apiName: "Employee",
  $primaryKey: 1,
  $objectType: "Employee",
  $title: "Employee 1",
  employeeId: 1,
  fullName: "John Doe",
} as any;

const mockEmployee2: Osdk.Instance<Employee> & ObjectHolder = {
  $apiName: "Employee",
  $primaryKey: 2,
  $objectType: "Employee",
  $title: "Employee 2",
  employeeId: 2,
  fullName: "Jane Smith",
} as any;

const mockEmployee3: Osdk.Instance<Employee> & ObjectHolder = {
  $apiName: "Employee",
  $primaryKey: 3,
  $objectType: "Employee",
  $title: "Employee 3",
  employeeId: 3,
  fullName: "Bob Johnson",
} as any;

describe("createCollectionConnectable", () => {
  let mockSubjects: Subjects;
  let createPayload: ReturnType<typeof vi.fn>;
  let mockListCacheKey: CacheKey<any, any, any, any>;

  beforeEach(() => {
    const { client } = createClientMockHelper();

    mockSubjects = {
      get: vi.fn(),
    } as any;

    // Mock cache key for list
    mockListCacheKey = {
      type: "list",
      otherKeys: ["Employee", {}, {}],
    } as CacheKey<any, any, any, any>;

    // Create payload function that mimics real usage
    createPayload = vi.fn((params) => ({
      data: params.resolvedData,
      status: params.status,
      isOptimistic: params.isOptimistic,
      lastUpdated: params.lastUpdated,
      count: params.resolvedData?.length ?? 0,
    }));
  });

  describe("basic functionality", () => {
    it("should create a connectable observable with resolved data", async () => {
      // Mock object cache keys
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const objectKey2: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 2, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      // Create subject payload with mock data
      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1, objectKey2],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      // Mock store.getSubject to return object observables
      vi.mocked(mockSubjects.get).mockImplementation((cacheKey: any) => {
        if (cacheKey === objectKey1) {
          return new BehaviorSubject({
            cacheKey: objectKey1,
            value: mockEmployee1,
            status: "loaded",
            lastUpdated: Date.now(),
            isOptimistic: false,
          } as any);
        }
        if (cacheKey === objectKey2) {
          return new BehaviorSubject({
            cacheKey: objectKey2,
            value: mockEmployee2,
            status: "loaded",
            lastUpdated: Date.now(),
            isOptimistic: false,
          } as any);
        }
        return new BehaviorSubject(undefined as any);
      }) as any;

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      // Connect and subscribe
      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      // Wait for the observable to emit
      await waitForCall(observer);

      // Verify the result
      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1, mockEmployee2],
          status: "loaded",
          isOptimistic: false,
          count: 2,
        }),
      );

      subscription.unsubscribe();
    });

    it("should handle empty data correctly", async () => {
      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [],
          status: "loaded",
          isOptimistic: false,
          count: 0,
        }),
      );

      subscription.unsubscribe();
    });

    it("should handle null/undefined data", async () => {
      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: null as any,
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: undefined,
          status: "loaded",
          isOptimistic: false,
          count: 0,
        }),
      );

      subscription.unsubscribe();
    });
  });

  describe("optimistic updates", () => {
    it("should propagate optimistic flag correctly", async () => {
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1],
        },
        status: "loading",
        lastUpdated: Date.now(),
        isOptimistic: true, // This is an optimistic update
      };

      const subject = new BehaviorSubject(subjectPayload);

      vi.mocked(mockSubjects.get).mockReturnValue(
        new BehaviorSubject({
          cacheKey: objectKey1,
          value: mockEmployee1,
          status: "loaded",
          lastUpdated: Date.now(),
          isOptimistic: false,
        } as any),
      );

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1],
          status: "loading",
          isOptimistic: true, // Should preserve optimistic flag
          count: 1,
        }),
      );

      subscription.unsubscribe();
    });
  });

  describe("status transitions", () => {
    it("should handle different status values", async () => {
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const basePayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1],
        },
        status: "init",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(basePayload);

      vi.mocked(mockSubjects.get).mockReturnValue(
        new BehaviorSubject({
          cacheKey: objectKey1,
          value: mockEmployee1,
          status: "loaded",
          lastUpdated: Date.now(),
          isOptimistic: false,
        } as any),
      );

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      // Wait for initial emission
      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1],
          status: "init",
          isOptimistic: false,
          count: 1,
        }),
      );

      observer.next.mockClear();

      // Test transition to loading
      subject.next({
        ...basePayload,
        status: "loading",
        lastUpdated: Date.now(),
      });

      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1],
          status: "loading",
          isOptimistic: false,
          count: 1,
        }),
      );

      subscription.unsubscribe();
    });
  });

  describe("multiple objects", () => {
    it("should handle multiple objects in collection", async () => {
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const objectKey2: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 2, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const objectKey3: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 3, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1, objectKey2, objectKey3],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      // Mock store.getSubject for all three objects
      vi.mocked(mockSubjects.get).mockImplementation((cacheKey: any) => {
        if (cacheKey === objectKey1) {
          return new BehaviorSubject({
            cacheKey: objectKey1,
            value: mockEmployee1,
            status: "loaded",
            lastUpdated: Date.now(),
            isOptimistic: false,
          } as any);
        }
        if (cacheKey === objectKey2) {
          return new BehaviorSubject({
            cacheKey: objectKey2,
            value: mockEmployee2,
            status: "loaded",
            lastUpdated: Date.now(),
            isOptimistic: false,
          } as any);
        }
        if (cacheKey === objectKey3) {
          return new BehaviorSubject({
            cacheKey: objectKey3,
            value: mockEmployee3,
            status: "loaded",
            lastUpdated: Date.now(),
            isOptimistic: false,
          } as any);
        }
        return new BehaviorSubject(undefined as any);
      }) as any;

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1, mockEmployee2, mockEmployee3],
          status: "loaded",
          isOptimistic: false,
          count: 3,
        }),
      );

      subscription.unsubscribe();
    });

    it("should handle objects being added/removed from collection", async () => {
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const objectKey2: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 2, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      // Start with one object
      const initialPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(initialPayload);

      vi.mocked(mockSubjects.get).mockImplementation((cacheKey: any) => {
        if (cacheKey === objectKey1) {
          return new BehaviorSubject({
            cacheKey: objectKey1,
            value: mockEmployee1,
            status: "loaded",
            lastUpdated: Date.now(),
            isOptimistic: false,
          } as any);
        }
        if (cacheKey === objectKey2) {
          return new BehaviorSubject({
            cacheKey: objectKey2,
            value: mockEmployee2,
            status: "loaded",
            lastUpdated: Date.now(),
            isOptimistic: false,
          } as any);
        }
        return new BehaviorSubject(undefined as any);
      }) as any;

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      // First check - single object
      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1],
          count: 1,
        }),
      );

      observer.next.mockClear();

      // Add second object
      subject.next({
        ...initialPayload,
        value: {
          data: [objectKey1, objectKey2],
        },
        lastUpdated: Date.now(),
      });

      // Second check - two objects
      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1, mockEmployee2],
          count: 2,
        }),
      );

      subscription.unsubscribe();
    });
  });

  describe("subscription behavior", () => {
    it("should support multiple subscribers", async () => {
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      vi.mocked(mockSubjects.get).mockReturnValue(
        new BehaviorSubject({
          cacheKey: objectKey1,
          value: mockEmployee1,
          status: "loaded",
          lastUpdated: Date.now(),
          isOptimistic: false,
        } as any),
      );

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer1 = mockObserver<TestPayload>();
      const observer2 = mockObserver<TestPayload>();

      connectable.subscribe(observer1);
      connectable.subscribe(observer2);

      await waitForCall(observer1);
      await waitForCall(observer2);

      // Both observers should receive the data
      expect(observer1.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1],
          count: 1,
        }),
      );

      expect(observer2.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1],
          count: 1,
        }),
      );

      subscription.unsubscribe();
    });

    it("should use ReplaySubject behavior (last value replayed)", async () => {
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      vi.mocked(mockSubjects.get).mockReturnValue(
        new BehaviorSubject({
          cacheKey: objectKey1,
          value: mockEmployee1,
          status: "loaded",
          lastUpdated: Date.now(),
          isOptimistic: false,
        } as any),
      );

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer1 = mockObserver<TestPayload>();

      // Subscribe first observer
      connectable.subscribe(observer1);

      await waitForCall(observer1);
      expect(observer1.next).toHaveBeenCalledTimes(1);
      observer1.next.mockClear();

      // Subscribe second observer after first has already received data
      const observer2 = mockObserver<TestPayload>();
      connectable.subscribe(observer2);

      await waitForCall(observer2);

      // Second observer should immediately receive the last value (ReplaySubject behavior)
      expect(observer2.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1],
          count: 1,
        }),
      );

      // First observer should not receive additional calls
      expect(observer1.next).not.toHaveBeenCalled();

      subscription.unsubscribe();
    });
  });

  describe("error handling", () => {
    it("should not emit when an object subject has not yet been hydrated", async () => {
      // Reproduces a bug where the first non-loading emission of useOsdkObjects
      // contained sparse `Array(N)` of `undefined`. The cause: when the list
      // cache key emits with new ObjectCacheKeys before each object's subject
      // has been populated with a real value, combineLatest synchronously emits
      // an array whose slots are `undefined`. The fix is to wait for every
      // inner subject to have a real value before emitting upstream.
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      // Object subject starts in init state (value: undefined). It is later
      // populated with the real ObjectHolder.
      const objectSubject = new BehaviorSubject({
        cacheKey: objectKey1,
        value: undefined,
        status: "init",
        lastUpdated: 0,
        isOptimistic: false,
      } as any);
      vi.mocked(mockSubjects.get).mockReturnValue(objectSubject);

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      // Yield once for any pending microtasks/asapScheduler - at this point
      // no real emission should have happened because the object's subject is
      // still in init state.
      await new Promise<void>(resolve => setTimeout(resolve, 10));

      expect(observer.next).not.toHaveBeenCalled();

      // Now hydrate the object subject - this should trigger a single emission
      // with the real value.
      objectSubject.next({
        cacheKey: objectKey1,
        value: mockEmployee1,
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      } as any);

      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1],
          status: "loaded",
          count: 1,
        }),
      );

      // Verify no emission ever included an undefined slot.
      for (const call of observer.next.mock.calls) {
        const payload = call[0] as TestPayload;
        if (Array.isArray(payload.data)) {
          expect(payload.data).not.toContain(undefined);
        }
      }

      subscription.unsubscribe();
    });

    it("should not emit a sparse array when only some object subjects are hydrated", async () => {
      // Stronger version of the prior test: list has multiple objects, only
      // some have been populated. We must wait for all of them.
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };
      const objectKey2: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 2, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };
      const objectKey3: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 3, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1, objectKey2, objectKey3],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      const objectSubject1 = new BehaviorSubject({
        cacheKey: objectKey1,
        value: mockEmployee1,
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      } as any);
      const objectSubject2 = new BehaviorSubject({
        cacheKey: objectKey2,
        value: undefined,
        status: "init",
        lastUpdated: 0,
        isOptimistic: false,
      } as any);
      const objectSubject3 = new BehaviorSubject({
        cacheKey: objectKey3,
        value: undefined,
        status: "init",
        lastUpdated: 0,
        isOptimistic: false,
      } as any);

      vi.mocked(mockSubjects.get).mockImplementation((cacheKey: any) => {
        if (cacheKey === objectKey1) return objectSubject1;
        if (cacheKey === objectKey2) return objectSubject2;
        if (cacheKey === objectKey3) return objectSubject3;
        return new BehaviorSubject(undefined as any);
      }) as any;

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      // Object 1 is already loaded but 2 and 3 are not; we should not emit.
      await new Promise<void>(resolve => setTimeout(resolve, 10));
      expect(observer.next).not.toHaveBeenCalled();

      // Hydrate the remaining objects.
      objectSubject2.next({
        cacheKey: objectKey2,
        value: mockEmployee2,
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      } as any);
      objectSubject3.next({
        cacheKey: objectKey3,
        value: mockEmployee3,
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      } as any);

      await waitForCall(observer);

      expect(observer.next).toHaveBeenCalledWith(
        expect.objectContaining({
          data: [mockEmployee1, mockEmployee2, mockEmployee3],
          status: "loaded",
          count: 3,
        }),
      );

      for (const call of observer.next.mock.calls) {
        const payload = call[0] as TestPayload;
        if (Array.isArray(payload.data)) {
          expect(payload.data).not.toContain(undefined);
        }
      }

      subscription.unsubscribe();
    });

    it("should pass through subsequent undefined values once a subject has hydrated", async () => {
      // Once a subject has emitted a real value, later transitions to
      // undefined (e.g. an object being deleted from the cache) must propagate
      // upstream so the list stays consistent. Otherwise skipWhile would hide
      // deletions entirely.
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      const objectSubject = new BehaviorSubject({
        cacheKey: objectKey1,
        value: mockEmployee1,
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      } as any);

      vi.mocked(mockSubjects.get).mockReturnValue(objectSubject);

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        createPayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      await waitForCall(observer);

      expect(observer.next).toHaveBeenLastCalledWith(
        expect.objectContaining({
          data: [mockEmployee1],
          count: 1,
        }),
      );

      observer.next.mockClear();

      // Simulate a deletion: the subject still exists and stays at "loaded"
      // status but its value transitions to undefined.
      objectSubject.next({
        cacheKey: objectKey1,
        value: undefined,
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      } as any);

      await waitForCall(observer);

      expect(observer.next).toHaveBeenLastCalledWith(
        expect.objectContaining({
          data: [undefined],
          count: 1,
        }),
      );

      subscription.unsubscribe();
    });

    it("should handle createPayload function throwing errors", async () => {
      const objectKey1: ObjectCacheKey = {
        type: "object",
        otherKeys: ["Employee", 1, undefined],
        __cacheKey: {} as ObjectCacheKey["__cacheKey"],
      };

      const subjectPayload: SubjectPayload<typeof mockListCacheKey> = {
        cacheKey: mockListCacheKey,
        value: {
          data: [objectKey1],
        },
        status: "loaded",
        lastUpdated: Date.now(),
        isOptimistic: false,
      };

      const subject = new BehaviorSubject(subjectPayload);

      vi.mocked(mockSubjects.get).mockReturnValue(
        new BehaviorSubject({
          cacheKey: objectKey1,
          value: mockEmployee1,
          status: "loaded",
          lastUpdated: Date.now(),
          isOptimistic: false,
        } as any),
      );

      // Mock createPayload to throw an error
      const errorThrowingCreatePayload = vi.fn(() => {
        throw new Error("Test error in createPayload");
      });

      const connectable = actualCreateCollectionConnectable(
        subject,
        mockSubjects,
        errorThrowingCreatePayload,
      );

      const subscription = connectable.connect();
      const observer = mockObserver<TestPayload>();

      connectable.subscribe(observer);

      await waitForCall(observer.error);

      // Should call the error handler
      expect(observer.error).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "Test error in createPayload",
        }),
      );

      subscription.unsubscribe();
    });
  });
});
