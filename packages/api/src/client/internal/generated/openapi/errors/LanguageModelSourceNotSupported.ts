import { LanguageModelSource } from "../components/LanguageModelSource";

/** */
export interface LanguageModelSourceNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "LanguageModelSourceNotSupported";
    errorInstanceId: string;
    parameters: {
        source: LanguageModelSource;
    };
}
