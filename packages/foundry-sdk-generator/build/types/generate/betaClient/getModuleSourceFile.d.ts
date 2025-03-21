import type { Project, SourceFile, StringLiteral } from "ts-morph";
export declare function getModuleSourceFile(project: Project, node: StringLiteral): SourceFile | undefined;
export declare function withoutTrailingIndex(filePath: string): string;
