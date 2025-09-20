/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

export interface HandlebarsAST {
  type: "Program";
  body: Statement[];
  loc?: SourceLocation;
}

export type Statement =
  | MustacheStatement
  | BlockStatement
  | PartialStatement
  | ContentStatement
  | CommentStatement;

export interface MustacheStatement {
  type: "MustacheStatement";
  path: PathExpression | SubExpression;
  params: Expression[];
  hash?: Hash;
  escaped: boolean;
  loc?: SourceLocation;
}

export interface BlockStatement {
  type: "BlockStatement";
  path: PathExpression;
  params: Expression[];
  hash?: Hash;
  program: Program;
  inverse?: Program;
  loc?: SourceLocation;
}

export interface PartialStatement {
  type: "PartialStatement";
  name: PathExpression | SubExpression;
  params: Expression[];
  hash?: Hash;
  indent: string;
  strip: StripFlags;
  loc?: SourceLocation;
}

export interface ContentStatement {
  type: "ContentStatement";
  value: string;
  original: string;
  loc?: SourceLocation;
}

export interface CommentStatement {
  type: "CommentStatement";
  value: string;
  strip: StripFlags;
  loc?: SourceLocation;
}

export interface Program {
  type: "Program";
  body: Statement[];
  blockParams?: string[];
  loc?: SourceLocation;
}

export type Expression =
  | SubExpression
  | PathExpression
  | Literal;

export interface SubExpression {
  type: "SubExpression";
  path: PathExpression;
  params: Expression[];
  hash?: Hash;
  loc?: SourceLocation;
}

export interface PathExpression {
  type: "PathExpression";
  data: boolean;
  depth: number;
  parts: string[];
  original: string;
  loc?: SourceLocation;
}

export type Literal =
  | StringLiteral
  | BooleanLiteral
  | NumberLiteral
  | UndefinedLiteral
  | NullLiteral;

export interface StringLiteral {
  type: "StringLiteral";
  value: string;
  original: string;
  loc?: SourceLocation;
}

export interface BooleanLiteral {
  type: "BooleanLiteral";
  value: boolean;
  original: boolean;
  loc?: SourceLocation;
}

export interface NumberLiteral {
  type: "NumberLiteral";
  value: number;
  original: number;
  loc?: SourceLocation;
}

export interface UndefinedLiteral {
  type: "UndefinedLiteral";
  loc?: SourceLocation;
}

export interface NullLiteral {
  type: "NullLiteral";
  loc?: SourceLocation;
}

export interface Hash {
  type: "Hash";
  pairs: HashPair[];
  loc?: SourceLocation;
}

export interface HashPair {
  type: "HashPair";
  key: string;
  value: Expression;
  loc?: SourceLocation;
}

export interface StripFlags {
  open: boolean;
  close: boolean;
}

export interface SourceLocation {
  source?: string;
  start: Position;
  end: Position;
}

export interface Position {
  line: number;
  column: number;
}

export type ASTNode =
  | HandlebarsAST
  | Statement
  | Expression
  | Program
  | Hash
  | HashPair;
