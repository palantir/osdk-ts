import { useOsdkAction } from "@osdk/react/experimental";
import React from "react";
import { Button } from "./Button.js";
import { $Actions, Todo } from "./generatedNoCheck2/index.js";
import { H2 } from "./H2.js";
import { InlineSpinner } from "./InlineSpinner.js";

export default function ValidateActionDemo() {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [validationMessage, setValidationMessage] = React.useState<string>("");

  const {
    applyAction,
    isPending,
    error,
    isValidating,
    validateAction,
    validationResult,
  } = useOsdkAction($Actions.createTodo);

  // Use effect to update message when validation result changes
  React.useEffect(() => {
    if (validationResult) {
      if (validationResult.result === "VALID") {
        setValidationMessage("✅ Action is valid!");
      } else if (validationResult.result === "INVALID") {
        const failedParams: string[] = [];
        for (
          const [name, constraint] of Object.entries(
            validationResult.parameters || {},
          )
        ) {
          if (constraint.result === "INVALID") {
            failedParams.push(name);
          }
        }

        const failedCriteria = validationResult.submissionCriteria
          ?.filter(criteria => criteria.result === "INVALID")
          .map(criteria =>
            criteria.configuredFailureMessage || "Failed criteria"
          )
          || [];

        setValidationMessage(
          `❌ Validation failed: ${
            [...failedParams, ...failedCriteria].join(", ") || "Invalid action"
          }`,
        );
      }
    }
  }, [validationResult]);

  const handleValidate = React.useCallback(async () => {
    setValidationMessage("Validating...");

    try {
      await validateAction({
        is_complete: false,
        Todo: todoTitle,
        location: "0,0",
      });
    } catch (err) {
      setValidationMessage(`❌ Validation error: ${err}`);
    }
  }, [todoTitle, validateAction]);

  const handleSubmit = React.useCallback(async () => {
    if (!todoTitle.trim()) {
      setValidationMessage("❌ Title cannot be empty");
      return;
    }

    try {
      await applyAction({
        is_complete: false,
        Todo: todoTitle,
        location: "0,0",
        $optimisticUpdate: (b) => {
          const id = "TMP " + window.crypto.randomUUID();
          b.createObject(Todo, id, {
            title: todoTitle,
            id,
            isComplete: false,
            location: undefined,
          });
        },
      });

      // Reset on success
      setTodoTitle("");
      setValidationMessage("✅ Todo created successfully!");
    } catch (err) {
      setValidationMessage(`❌ Error creating todo: ${err}`);
    }
  }, [todoTitle, applyAction]);

  return (
    <>
      <H2>
        Validate Action Demo
        <InlineSpinner isLoading={isPending || isValidating} />
      </H2>

      <div className="mb-4">
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
            setValidationMessage(""); // Clear message on input change
          }}
          placeholder="Enter todo title"
          disabled={isPending || isValidating}
          aria-disabled={isPending || isValidating}
          className="py-2 px-2 mr-4 mb-2 border-gray-500 rounded-lg text-sm border-2 w-full
            disabled:opacity-90
            disabled:pointer-events-none 
            disabled:border-gray-200
            focus:border-blue-500 focus:ring-blue-500"
        />

        <div className="flex gap-2 mb-2">
          <Button
            onClick={handleValidate}
            disabled={isPending || isValidating || !todoTitle.trim()}
          >
            {isValidating ? "Validating..." : "Validate"}
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={isPending || isValidating || !todoTitle.trim()}
          >
            {isPending ? "Creating..." : "Create Todo"}
          </Button>
        </div>

        {validationMessage && (
          <div
            className={`text-sm ${
              validationMessage.includes("✅")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {validationMessage}
          </div>
        )}

        {error && (
          <div className="error mt-2">
            <pre className="text-xs">{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}

        {validationResult && (
          <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
            <strong>Validation Result:</strong>
            <pre>{JSON.stringify(validationResult, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="text-xs text-gray-600 mt-4">
        <p>This demo shows the new validateAction functionality:</p>
        <ul className="list-disc list-inside mt-1">
          <li>
            Enter a todo title and click &quot;Validate&quot; to check if the
            action is valid
          </li>
          <li>The validation runs without performing the action</li>
          <li>isValidating state shows when validation is in progress</li>
          <li>validationResult contains the validation response</li>
          <li>
            Multiple validations can be triggered - new ones cancel previous
            ones
          </li>
        </ul>
      </div>
    </>
  );
}
