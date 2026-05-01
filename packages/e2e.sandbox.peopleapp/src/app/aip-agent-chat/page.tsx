import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import { H1 } from "../../components/headers.js";
import { platformClient } from "../../foundryClient.js";

const AVAILABLE_MODELS = ["gpt-4o", "gpt-5.4"];

export function AipAgentChatPage() {
  return (
    <div className="w-full max-w-2xl flex flex-col h-[70vh]">
      <H1>AipAgentChat</H1>
      <AipAgentChat
        client={platformClient}
        availableModels={AVAILABLE_MODELS}
      />
    </div>
  );
}
