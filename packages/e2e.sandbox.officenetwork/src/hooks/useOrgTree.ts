import { useLinks } from "@osdk/react/experimental";
import React from "react";
import type { Employee } from "../generatedNoCheck2/index.js";

export interface OrgTreeNode {
  employee: Employee.OsdkInstance;
  reports: OrgTreeNode[];
  isLoading: boolean;
  isExpanded: boolean;
}

interface UseOrgTreeResult {
  tree: OrgTreeNode | null;
  totalCount: number;
  maxDepth: number;
  isLoading: boolean;
  toggleExpand: (employeeNumber: number) => void;
}

function useReportsLevel(
  employee: Employee.OsdkInstance | undefined,
  enabled: boolean,
): { reports: Employee.OsdkInstance[] | undefined; isLoading: boolean } {
  const { links, isLoading } = useLinks(employee, "peeps", { enabled });
  return { reports: links, isLoading };
}

export function useOrgTree(
  employee: Employee.OsdkInstance | null,
  maxDepth: number = 3,
): UseOrgTreeResult {
  const [expandedNodes, setExpandedNodes] = React.useState<Set<number>>(
    new Set(),
  );

  const level0 = useReportsLevel(employee ?? undefined, !!employee);

  const level1Employees = React.useMemo(() => {
    if (!level0.reports) return [];
    return level0.reports.filter(r => expandedNodes.has(r.employeeNumber));
  }, [level0.reports, expandedNodes]);

  const level1a = useReportsLevel(
    level1Employees[0],
    !!level1Employees[0] && maxDepth >= 2,
  );
  const level1b = useReportsLevel(
    level1Employees[1],
    !!level1Employees[1] && maxDepth >= 2,
  );
  const level1c = useReportsLevel(
    level1Employees[2],
    !!level1Employees[2] && maxDepth >= 2,
  );
  const level1d = useReportsLevel(
    level1Employees[3],
    !!level1Employees[3] && maxDepth >= 2,
  );
  const level1e = useReportsLevel(
    level1Employees[4],
    !!level1Employees[4] && maxDepth >= 2,
  );
  const level1f = useReportsLevel(
    level1Employees[5],
    !!level1Employees[5] && maxDepth >= 2,
  );
  const level1g = useReportsLevel(
    level1Employees[6],
    !!level1Employees[6] && maxDepth >= 2,
  );
  const level1h = useReportsLevel(
    level1Employees[7],
    !!level1Employees[7] && maxDepth >= 2,
  );

  const level1Results = React.useMemo(
    () => [
      level1a,
      level1b,
      level1c,
      level1d,
      level1e,
      level1f,
      level1g,
      level1h,
    ],
    [level1a, level1b, level1c, level1d, level1e, level1f, level1g, level1h],
  );
  const MAX_EXPANDED_REPORTS = level1Results.length;

  const tree = React.useMemo((): OrgTreeNode | null => {
    if (!employee || !level0.reports) return null;

    const buildNode = (
      emp: Employee.OsdkInstance,
      reports: Employee.OsdkInstance[] | undefined,
      isLoading: boolean,
      depth: number,
    ): OrgTreeNode => {
      const isExpanded = expandedNodes.has(emp.employeeNumber);

      let childNodes: OrgTreeNode[] = [];
      if (reports && isExpanded && depth < maxDepth) {
        childNodes = reports.map(r => {
          const level1Index = level1Employees.findIndex(e =>
            e.employeeNumber === r.employeeNumber
          );
          const level1Result =
            level1Index >= 0 && level1Index < MAX_EXPANDED_REPORTS
              ? level1Results[level1Index]
              : undefined;

          return buildNode(
            r,
            level1Result?.reports,
            level1Result?.isLoading ?? false,
            depth + 1,
          );
        });
      }

      return {
        employee: emp,
        reports: childNodes,
        isLoading,
        isExpanded,
      };
    };

    const rootReports = level0.reports.map(r => {
      const level1Index = level1Employees.findIndex(e =>
        e.employeeNumber === r.employeeNumber
      );
      const level1Result =
        level1Index >= 0 && level1Index < MAX_EXPANDED_REPORTS
          ? level1Results[level1Index]
          : undefined;

      return buildNode(
        r,
        level1Result?.reports,
        level1Result?.isLoading ?? false,
        1,
      );
    });

    return {
      employee,
      reports: rootReports,
      isLoading: level0.isLoading,
      isExpanded: true,
    };
  }, [
    employee,
    level0.reports,
    level0.isLoading,
    expandedNodes,
    level1Employees,
    level1Results,
    maxDepth,
  ]);

  const countNodes = React.useCallback((node: OrgTreeNode | null): number => {
    if (!node) return 0;
    return 1 + node.reports.reduce((sum, r) => sum + countNodes(r), 0);
  }, []);

  const getMaxDepth = React.useCallback(
    (node: OrgTreeNode | null, current: number = 1): number => {
      if (!node || node.reports.length === 0) return current;
      return Math.max(...node.reports.map(r => getMaxDepth(r, current + 1)));
    },
    [],
  );

  const toggleExpand = React.useCallback((employeeNumber: number) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(employeeNumber)) {
        next.delete(employeeNumber);
      } else {
        next.add(employeeNumber);
      }
      return next;
    });
  }, []);

  const totalCount = Math.max(0, countNodes(tree) - 1);
  const currentMaxDepth = tree ? getMaxDepth(tree) : 0;
  const isLoading = level0.isLoading || level1Results.some(r => r.isLoading);

  return {
    tree,
    totalCount,
    maxDepth: currentMaxDepth,
    isLoading,
    toggleExpand,
  };
}
