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

import { useOsdkObjects, usePrefetch } from "@osdk/react/experimental";
import React from "react";
import { Employee, Office, Todo } from "../generatedNoCheck2/index.js";
import { H2 } from "./headers.js";

interface PrefetchMetrics {
  totalPrefetches: number;
  objectPrefetches: number;
  listPrefetches: number;
  lastPrefetchTime: number | null;
  averagePrefetchTime: number;
}

export function PrefetchDemo() {
  const { prefetchObject, prefetchList, prefetchMultiple } = usePrefetch();
  const [metrics, setMetrics] = React.useState<PrefetchMetrics>({
    totalPrefetches: 0,
    objectPrefetches: 0,
    listPrefetches: 0,
    lastPrefetchTime: null,
    averagePrefetchTime: 0,
  });
  const [selectedPattern, setSelectedPattern] = React.useState<string>("hover");
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const [prefetchStatus, setPrefetchStatus] = React.useState<string>("");

  // Track prefetch times
  const prefetchTimesRef = React.useRef<number[]>([]);

  const updateMetrics = (type: "object" | "list", duration: number) => {
    prefetchTimesRef.current.push(duration);
    setMetrics((prev) => {
      const newTotal = prev.totalPrefetches + 1;
      const newAverage =
        prefetchTimesRef.current.reduce((a, b) => a + b, 0) /
        prefetchTimesRef.current.length;

      return {
        totalPrefetches: newTotal,
        objectPrefetches: type === "object" ? prev.objectPrefetches + 1 : prev.objectPrefetches,
        listPrefetches: type === "list" ? prev.listPrefetches + 1 : prev.listPrefetches,
        lastPrefetchTime: duration,
        averagePrefetchTime: Math.round(newAverage),
      };
    });
  };

  // Demo data - fetch some employees for demo purposes
  const employees = useOsdkObjects(Employee, {
    pageSize: 5,
    // Demonstrate prefetch prop usage
    prefetch:
      selectedPattern === "pageload"
        ? [
            // Prefetch all offices on page load
            {
              type: Office,
              where: {},
              pageSize: 50,
            },
            // Prefetch todos as well
            {
              type: Todo,
              where: {},
              pageSize: 20,
            },
          ]
        : [],
  });

  // Pattern 1: Hover-based prefetch
  const handleHoverPrefetch = async (employeeId: number | string) => {
    const startTime = performance.now();
    setPrefetchStatus(`Prefetching employee ${employeeId}...`);

    try {
      await prefetchObject(Employee, employeeId);
      const duration = Math.round(performance.now() - startTime);
      updateMetrics("object", duration);
      setPrefetchStatus(`Prefetched employee ${employeeId} in ${duration}ms`);
    } catch (error) {
      setPrefetchStatus(`Failed to prefetch employee ${employeeId}`);
    }
  };

  // Pattern 2: Bulk prefetch
  const handleBulkPrefetch = async () => {
    const startTime = performance.now();
    setPrefetchStatus("Starting bulk prefetch...");

    try {
      const queries = [
        // Prefetch multiple object types
        {
          type: "list" as const,
          options: {
            type: Employee,
            where: {},
            pageSize: 50,
          },
        },
        {
          type: "list" as const,
          options: {
            type: Office,
            where: {},
            pageSize: 20,
          },
        },
        // Prefetch specific objects
        ...(employees.data?.slice(0, 3).map((emp) => ({
          type: "object" as const,
          options: {
            apiName: Employee,
            pk: emp.$primaryKey,
          },
        })) ?? []),
      ];

      await prefetchMultiple(queries);
      const duration = Math.round(performance.now() - startTime);

      // Update metrics for bulk operation
      setMetrics((prev) => ({
        ...prev,
        totalPrefetches: prev.totalPrefetches + queries.length,
        objectPrefetches: prev.objectPrefetches + (employees.data?.slice(0, 3).length ?? 0),
        listPrefetches: prev.listPrefetches + 2,
        lastPrefetchTime: duration,
        averagePrefetchTime: duration,
      }));

      setPrefetchStatus(`Bulk prefetch completed in ${duration}ms (${queries.length} queries)`);
    } catch (error) {
      setPrefetchStatus("Bulk prefetch failed");
    }
  };

  // Pattern 3: Sequential prefetch
  const handleSequentialPrefetch = async () => {
    const startTime = performance.now();
    setPrefetchStatus("Starting sequential prefetch...");

    try {
      // First, prefetch employees
      await prefetchList({
        type: Employee,
        where: { department: "Engineering" },
        pageSize: 10,
      });

      setPrefetchStatus("Prefetched engineers, now fetching offices...");

      // Then, prefetch offices
      await prefetchList({
        type: Office,
        where: {},
        pageSize: 10,
      });

      const duration = Math.round(performance.now() - startTime);
      updateMetrics("list", duration);
      updateMetrics("list", 0); // Count both operations
      setPrefetchStatus(`Sequential prefetch completed in ${duration}ms`);
    } catch (error) {
      setPrefetchStatus("Sequential prefetch failed");
    }
  };

  // Pattern 4: Conditional prefetch based on user interaction
  const handleConditionalPrefetch = async (department: string) => {
    const startTime = performance.now();
    setPrefetchStatus(`Prefetching employees in ${department}...`);

    try {
      await prefetchList({
        type: Employee,
        where: { department },
        pageSize: 20,
      });

      const duration = Math.round(performance.now() - startTime);
      updateMetrics("list", duration);
      setPrefetchStatus(`Prefetched ${department} employees in ${duration}ms`);
    } catch (error) {
      setPrefetchStatus(`Failed to prefetch ${department} employees`);
    }
  };

  return (
    <div className="p-4">
      <H2>Prefetch Demo & Performance Testing</H2>

      {/* Pattern Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Select Prefetch Pattern:</label>
        <select
          value={selectedPattern}
          onChange={(e) => setSelectedPattern(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="hover">Hover-based Prefetch</option>
          <option value="bulk">Bulk Prefetch</option>
          <option value="sequential">Sequential Prefetch</option>
          <option value="conditional">Conditional Prefetch</option>
          <option value="pageload">Page Load Prefetch</option>
        </select>
      </div>

      {/* Pattern Demonstrations */}
      <div className="mb-6 p-4 bg-gray-50 rounded">
        {selectedPattern === "hover" && (
          <div>
            <h3 className="font-semibold mb-2">Hover-based Prefetch</h3>
            <p className="text-sm text-gray-600 mb-3">
              Hover over employees to prefetch their data
            </p>
            <div className="space-y-2">
              {employees.data?.slice(0, 5).map((emp) => (
                <div
                  key={emp.$primaryKey}
                  className="p-2 bg-white rounded cursor-pointer hover:bg-blue-50"
                  onMouseEnter={() => {
                    setHoveredItem(String(emp.$primaryKey));
                    handleHoverPrefetch(emp.$primaryKey);
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {emp.fullName} - {emp.department}
                  {hoveredItem === String(emp.$primaryKey) && (
                    <span className="ml-2 text-xs text-blue-600">(prefetching...)</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedPattern === "bulk" && (
          <div>
            <h3 className="font-semibold mb-2">Bulk Prefetch</h3>
            <p className="text-sm text-gray-600 mb-3">
              Prefetch multiple resources at once
            </p>
            <button
              onClick={handleBulkPrefetch}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Execute Bulk Prefetch
            </button>
          </div>
        )}

        {selectedPattern === "sequential" && (
          <div>
            <h3 className="font-semibold mb-2">Sequential Prefetch</h3>
            <p className="text-sm text-gray-600 mb-3">
              Prefetch resources one after another
            </p>
            <button
              onClick={handleSequentialPrefetch}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Execute Sequential Prefetch
            </button>
          </div>
        )}

        {selectedPattern === "conditional" && (
          <div>
            <h3 className="font-semibold mb-2">Conditional Prefetch</h3>
            <p className="text-sm text-gray-600 mb-3">
              Prefetch based on user selection
            </p>
            <div className="space-x-2">
              {["Engineering", "Sales", "Marketing", "HR"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => handleConditionalPrefetch(dept)}
                  className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                >
                  Prefetch {dept}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedPattern === "pageload" && (
          <div>
            <h3 className="font-semibold mb-2">Page Load Prefetch</h3>
            <p className="text-sm text-gray-600">
              Offices and Todos are being prefetched automatically via the prefetch prop
            </p>
            <div className="mt-2 p-2 bg-green-50 rounded text-sm">
              This pattern uses the prefetch prop in useOsdkObjects to automatically prefetch
              related data when the component mounts.
            </div>
          </div>
        )}
      </div>

      {/* Status Display */}
      {prefetchStatus && (
        <div className="mb-4 p-3 bg-yellow-50 rounded">
          <span className="text-sm font-medium">Status: </span>
          <span className="text-sm">{prefetchStatus}</span>
        </div>
      )}

      {/* Performance Metrics */}
      <div className="mt-6 p-4 bg-white border rounded">
        <h3 className="font-semibold mb-3">Performance Metrics</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Total Prefetches:</span>
            <span className="ml-2 font-medium">{metrics.totalPrefetches}</span>
          </div>
          <div>
            <span className="text-gray-600">Object Prefetches:</span>
            <span className="ml-2 font-medium">{metrics.objectPrefetches}</span>
          </div>
          <div>
            <span className="text-gray-600">List Prefetches:</span>
            <span className="ml-2 font-medium">{metrics.listPrefetches}</span>
          </div>
          <div>
            <span className="text-gray-600">Last Prefetch Time:</span>
            <span className="ml-2 font-medium">
              {metrics.lastPrefetchTime ? `${metrics.lastPrefetchTime}ms` : "N/A"}
            </span>
          </div>
          <div>
            <span className="text-gray-600">Average Time:</span>
            <span className="ml-2 font-medium">
              {metrics.averagePrefetchTime ? `${metrics.averagePrefetchTime}ms` : "N/A"}
            </span>
          </div>
          <div>
            <span className="text-gray-600">Cache Benefit:</span>
            <span className="ml-2 font-medium text-green-600">
              {metrics.totalPrefetches > 0
                ? `~${metrics.totalPrefetches * metrics.averagePrefetchTime}ms saved`
                : "N/A"}
            </span>
          </div>
        </div>
      </div>

      {/* Usage Guide */}
      <div className="mt-6 p-4 bg-blue-50 rounded">
        <h3 className="font-semibold mb-2">Prefetch Patterns Guide</h3>
        <ul className="text-sm space-y-1 list-disc list-inside">
          <li>
            <strong>Hover-based:</strong> Prefetch data when users hover over items they might
            click
          </li>
          <li>
            <strong>Bulk:</strong> Prefetch multiple resources at once for better performance
          </li>
          <li>
            <strong>Sequential:</strong> Chain prefetch operations when order matters
          </li>
          <li>
            <strong>Conditional:</strong> Prefetch based on user actions or context
          </li>
          <li>
            <strong>Page Load:</strong> Automatically prefetch common data on component mount
          </li>
        </ul>
      </div>
    </div>
  );
}