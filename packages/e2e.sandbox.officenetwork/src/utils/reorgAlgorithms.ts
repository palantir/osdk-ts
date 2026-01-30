import type { Employee, Office } from "../generatedNoCheck2/index.js";
import type { EmployeeChange, ReorgConfig } from "../hooks/useReorgState.js";

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function generateChanges(
  employees: Employee.OsdkInstance[],
  offices: Office.OsdkInstance[],
  config: ReorgConfig,
): Map<number, EmployeeChange> {
  switch (config.algorithm) {
    case "shuffle":
      return generateShuffleChanges(employees, offices, config);
    case "swap":
      return generateSwapChanges(employees, offices, config);
    case "consolidate":
      return generateConsolidateChanges(employees, offices, config);
    case "manual":
    default:
      return generateManualChanges(employees);
  }
}

function generateManualChanges(
  employees: Employee.OsdkInstance[],
): Map<number, EmployeeChange> {
  const changes = new Map<number, EmployeeChange>();
  employees.forEach((employee) => {
    changes.set(employee.employeeNumber, {
      targetOfficeId: employee.primaryOfficeId,
    });
  });
  return changes;
}

function generateShuffleChanges(
  employees: Employee.OsdkInstance[],
  offices: Office.OsdkInstance[],
  config: ReorgConfig,
): Map<number, EmployeeChange> {
  const changes = new Map<number, EmployeeChange>();

  if (offices.length === 0) return changes;

  const officesWithPk = offices.filter((
    o,
  ): o is typeof o & { primaryKey_: string } => o.primaryKey_ != null);
  if (officesWithPk.length === 0) return changes;

  const officeIds = officesWithPk.map((o) => o.primaryKey_);
  const currentCounts = new Map<string, number>();
  const targetCounts = new Map<string, number>();

  officesWithPk.forEach((o) => {
    currentCounts.set(o.primaryKey_, 0);
    targetCounts.set(o.primaryKey_, 0);
  });

  employees.forEach((e) => {
    if (e.primaryOfficeId) {
      const count = currentCounts.get(e.primaryOfficeId) ?? 0;
      currentCounts.set(e.primaryOfficeId, count + 1);
    }
  });

  const shuffledEmployees = shuffleArray(employees);

  for (const employee of shuffledEmployees) {
    const currentOfficeId = employee.primaryOfficeId;

    const availableOffices = officeIds.filter((officeId) => {
      if (!config.constraints.keepHeadcountBalanced) return true;

      const targetCount = targetCounts.get(officeId) ?? 0;
      const originalCount = currentCounts.get(officeId) ?? 0;
      const tolerance = config.constraints.headcountTolerance;

      return targetCount < originalCount + tolerance;
    });

    if (availableOffices.length === 0) {
      changes.set(employee.employeeNumber, {
        targetOfficeId: currentOfficeId ?? undefined,
      });
      if (currentOfficeId) {
        targetCounts.set(
          currentOfficeId,
          (targetCounts.get(currentOfficeId) ?? 0) + 1,
        );
      }
      continue;
    }

    const otherOffices = availableOffices.filter((id) =>
      id !== currentOfficeId
    );
    const targetOfficeId = otherOffices.length > 0
      ? otherOffices[Math.floor(Math.random() * otherOffices.length)]
      : availableOffices[Math.floor(Math.random() * availableOffices.length)];

    changes.set(employee.employeeNumber, { targetOfficeId });
    targetCounts.set(
      targetOfficeId,
      (targetCounts.get(targetOfficeId) ?? 0) + 1,
    );
  }

  return changes;
}

function generateSwapChanges(
  employees: Employee.OsdkInstance[],
  _offices: Office.OsdkInstance[],
  config: ReorgConfig,
): Map<number, EmployeeChange> {
  const changes = new Map<number, EmployeeChange>();

  const [officeA, officeB] = config.swapOfficeIds ?? [];
  if (!officeA || !officeB) return changes;

  employees.forEach((employee) => {
    if (employee.primaryOfficeId === officeA) {
      changes.set(employee.employeeNumber, { targetOfficeId: officeB });
    } else if (employee.primaryOfficeId === officeB) {
      changes.set(employee.employeeNumber, { targetOfficeId: officeA });
    }
  });

  return changes;
}

function generateConsolidateChanges(
  employees: Employee.OsdkInstance[],
  _offices: Office.OsdkInstance[],
  config: ReorgConfig,
): Map<number, EmployeeChange> {
  const changes = new Map<number, EmployeeChange>();

  const targetOfficeId = config.consolidateOfficeId;
  if (!targetOfficeId) return changes;

  employees.forEach((employee) => {
    if (employee.primaryOfficeId !== targetOfficeId) {
      changes.set(employee.employeeNumber, { targetOfficeId });
    }
  });

  return changes;
}
