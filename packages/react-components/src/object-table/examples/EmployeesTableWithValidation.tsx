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

import React from "react";
import { ObjectTable } from "../ObjectTable.js";
import type { ColumnDefinition } from "../ObjectTableApi.js";

// Example assuming an Employee object type
interface Employee {
  employeeId: number;
  name: string;
  email: string;
  salary: number;
  department: string;
  phoneNumber?: string;
}

// Example validation functions
const validateEmail = async (value: unknown): Promise<boolean> => {
  if (typeof value !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

const validateSalary = async (value: unknown): Promise<boolean> => {
  if (typeof value !== "number") return false;
  // Example: Salary must be between 0 and 1,000,000
  return value >= 0 && value <= 1000000;
};

const validatePhoneNumber = async (value: unknown): Promise<boolean> => {
  if (!value || typeof value !== "string") return true; // Optional field
  // Example: Simple US phone number validation
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  return phoneRegex.test(value);
};

export function EmployeesTableWithValidation() {
  const columnDefinitions: ColumnDefinition<any>[] = [
    {
      locator: { type: "property", id: "employeeId" },
      editable: false,
      width: 100,
    },
    {
      locator: { type: "property", id: "name" },
      editable: true,
      width: 200,
    },
    {
      locator: { type: "property", id: "email" },
      editable: true,
      width: 250,
      validate: validateEmail,
      onValidationError: (error) => {
        if (error.type === "validate") {
          return "Please enter a valid email address (e.g., user@example.com)";
        }
        return error.error;
      },
    },
    {
      locator: { type: "property", id: "salary" },
      editable: true,
      width: 150,
      validate: validateSalary,
      onValidationError: (error) => {
        if (error.type === "validate") {
          return "Salary must be between $0 and $1,000,000";
        }
        return error.error;
      },
    },
    {
      locator: { type: "property", id: "department" },
      editable: true,
      width: 200,
    },
    {
      locator: { type: "property", id: "phoneNumber" },
      editable: true,
      width: 150,
      validate: validatePhoneNumber,
      onValidationError: (error) => {
        if (error.type === "validate") {
          return "Phone number must be in format: 123-456-7890";
        }
        return error.error;
      },
    },
  ];

  const handleCellValueChanged = (event: any) => {
    console.log("Cell value changed:", event);
    // Here you would typically call an action to update the employee
  };

  const handleSubmitEdits = async (edits: any[]) => {
    console.log("Submitting edits:", edits);
    // Here you would typically call an action to batch update employees
    // For example:
    // await $updateEmployees.applyAction({ updates: edits });
  };

  return (
    <ObjectTable
      objectType={Employee as any}
      columnDefinitions={columnDefinitions}
      enableEditModeByDefault={true}
      onCellValueChanged={handleCellValueChanged}
      onSubmitEdits={handleSubmitEdits}
    />
  );
}

// Advanced example with async validation (e.g., checking uniqueness)
const validateUniqueEmail = async (value: unknown): Promise<boolean> => {
  if (typeof value !== "string") return false;
  
  // Simulate an API call to check if email is unique
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real scenario, you would check against existing emails
      const existingEmails = ["john@example.com", "jane@example.com"];
      resolve(!existingEmails.includes(value));
    }, 500);
  });
};

// Example with custom validation based on other fields
export function EmployeesTableWithAdvancedValidation() {
  const columnDefinitions: ColumnDefinition<any>[] = [
    {
      locator: { type: "property", id: "email" },
      editable: true,
      width: 250,
      validate: validateUniqueEmail,
      onValidationError: (error) => {
        if (error.type === "validate") {
          return "This email is already in use. Please choose a different one.";
        }
        return error.error;
      },
    },
    // ... other columns
  ];

  return (
    <ObjectTable
      objectType={Employee as any}
      columnDefinitions={columnDefinitions}
      enableEditModeByDefault={true}
    />
  );
}