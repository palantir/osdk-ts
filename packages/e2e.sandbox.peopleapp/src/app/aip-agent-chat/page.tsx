import type { AipAgentChatContextItem } from "@osdk/react-components/experimental/aip-agent-chat";
import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import { platformClient } from "../../foundryClient.js";
import { Employee, Office } from "../../generatedNoCheck2/index.js";

const AVAILABLE_MODELS = ["gpt-4o", "gpt-5.4", "non-existent-model"];
const CONTEXT_ITEMS: ReadonlyArray<AipAgentChatContextItem> = [
  { type: "objectType", objectType: Employee },
  { type: "objectType", objectType: Office },
];

export function AipAgentChatPage() {
  return (
    <div className="w-full max-w-2xl flex flex-col h-[70vh]">
      <AipAgentChat
        client={platformClient}
        availableModels={AVAILABLE_MODELS}
        contextItems={CONTEXT_ITEMS}
      />
    </div>
  );
}
