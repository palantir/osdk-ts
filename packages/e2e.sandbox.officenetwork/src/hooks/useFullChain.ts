import { useLinks } from "@osdk/react/experimental";
import React from "react";
import type { Employee } from "../generatedNoCheck2/index.js";

interface ChainNode {
  employee: Employee.OsdkInstance;
  isLoading: boolean;
}

interface UseFullChainResult {
  chain: ChainNode[];
  isLoading: boolean;
  isComplete: boolean;
  depth: number;
}

function useChainLevel(
  employee: Employee.OsdkInstance | undefined,
  enabled: boolean,
): { manager: Employee.OsdkInstance | undefined; isLoading: boolean } {
  const { links, isLoading } = useLinks(employee, "lead", { enabled });
  return { manager: links?.[0], isLoading };
}

export function useFullChain(
  employee: Employee.OsdkInstance | null,
): UseFullChainResult {
  const [chain, setChain] = React.useState<ChainNode[]>([]);

  const level0 = useChainLevel(employee ?? undefined, !!employee);
  const level1 = useChainLevel(
    level0.manager,
    !!level0.manager
      && level0.manager.employeeNumber !== employee?.employeeNumber,
  );
  const level2 = useChainLevel(
    level1.manager,
    !!level1.manager
      && level1.manager.employeeNumber !== level0.manager?.employeeNumber,
  );
  const level3 = useChainLevel(
    level2.manager,
    !!level2.manager
      && level2.manager.employeeNumber !== level1.manager?.employeeNumber,
  );
  const level4 = useChainLevel(
    level3.manager,
    !!level3.manager
      && level3.manager.employeeNumber !== level2.manager?.employeeNumber,
  );
  const level5 = useChainLevel(
    level4.manager,
    !!level4.manager
      && level4.manager.employeeNumber !== level3.manager?.employeeNumber,
  );

  React.useEffect(() => {
    if (!employee) {
      setChain([]);
      return;
    }

    const newChain: ChainNode[] = [
      { employee, isLoading: level0.isLoading },
    ];

    const levels = [
      { manager: level0.manager, isLoading: level1.isLoading },
      { manager: level1.manager, isLoading: level2.isLoading },
      { manager: level2.manager, isLoading: level3.isLoading },
      { manager: level3.manager, isLoading: level4.isLoading },
      { manager: level4.manager, isLoading: level5.isLoading },
      { manager: level5.manager, isLoading: false },
    ];

    for (let i = 0; i < levels.length; i++) {
      const { manager, isLoading } = levels[i];
      if (!manager) break;

      const prevEmployee = newChain[newChain.length - 1]?.employee;
      if (manager.employeeNumber === prevEmployee?.employeeNumber) {
        break;
      }

      newChain.push({ employee: manager, isLoading });
    }

    setChain(newChain);
  }, [
    employee,
    level0.manager,
    level0.isLoading,
    level1.manager,
    level1.isLoading,
    level2.manager,
    level2.isLoading,
    level3.manager,
    level3.isLoading,
    level4.manager,
    level4.isLoading,
    level5.manager,
    level5.isLoading,
  ]);

  const isLoading = level0.isLoading || level1.isLoading || level2.isLoading
    || level3.isLoading || level4.isLoading || level5.isLoading;

  const lastNode = chain[chain.length - 1];
  const lastEmployee = lastNode?.employee;
  const isTopOfChain = lastEmployee !== undefined && (
    lastEmployee.leadEmployeeNumber === lastEmployee.employeeNumber
    || lastEmployee.leadEmployeeNumber === undefined
    || lastEmployee.leadEmployeeNumber == null
    || lastEmployee.jobTitle?.toLowerCase().includes("ceo")
    || lastEmployee.jobTitle?.toLowerCase().includes("chief executive")
  );
  const reachedMaxDepth = chain.length >= 6;
  const isComplete = !isLoading && chain.length > 0
    && (isTopOfChain || reachedMaxDepth);

  return {
    chain,
    isLoading,
    isComplete,
    depth: chain.length,
  };
}
