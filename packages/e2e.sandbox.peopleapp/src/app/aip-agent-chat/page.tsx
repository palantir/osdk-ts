import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import { useState } from "react";
import { H1 } from "../../components/headers.js";
import { platformClient } from "../../foundryClient.js";

const SYSTEM_PROMPT = "You are a concise assistant. Keep answers short.";
const AVAILABLE_MODELS = [
  "GPT_4o",
  "AnthropicClaude_4_6_Sonnet",
  "Gemini_2_5_Pro",
];

export function AipAgentChatPage() {
  const [model, setModel] = useState<string>("GPT_4o");

  return (
    <div className="w-full max-w-2xl flex flex-col h-[70vh]">
      <H1>AipAgentChat</H1>
      <AipAgentChat
        client={platformClient}
        model={model}
        availableModels={AVAILABLE_MODELS}
        onModelChange={setModel}
        system={SYSTEM_PROMPT}
      />
    </div>
  );
}
