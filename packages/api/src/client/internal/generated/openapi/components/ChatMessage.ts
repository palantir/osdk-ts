import { ChatMessageRole } from "./ChatMessageRole";

export interface ChatMessage {
    role: ChatMessageRole;
    content?: string;
}
