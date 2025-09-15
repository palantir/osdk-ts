/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import Handlebars from "handlebars";

/**
 * Extracts all variables used in a handlebars template using Handlebars' native parsing
 * This includes standard handlebars variables and special cases like {variable}
 * Preserves block indicators (#, ^, /) in the variable names
 * 
 * @param {string} template The template string to analyze
 * @returns {string[]} Array of unique variable names found in the template
 */
export function extractHandlebarsVariables(template) {
  // Fix braces in packageName first to ensure consistent parsing
  const fixedTemplate = template.replace(/\{\s+\{\{packageName\}\}\s+\}/g, "{{packageName}}");
  
  const variables = new Set();
  
  // Use Handlebars AST to parse the template
  const ast = Handlebars.parse(fixedTemplate);
  
  // Function to recursively traverse the AST
  function traverseAst(node) {
    if (!node) return;
    
    // Process by node type
    switch (node.type) {
      case "MustacheStatement":
        // Regular variables like {{variable}}
        if (node.path.original) {
          variables.add(node.path.original);
        }
        break;
      
      case "BlockStatement":
        // Block statements like {{#variable}}...{{/variable}}
        if (node.path.original) {
          if (node.inverse && !node.program) {
            // Inverted block like {{^variable}}...{{/variable}}
            // This has only inverse content, no program content
            variables.add("^" + node.path.original);
            // Add the block closing
            variables.add("/" + node.path.original);
          } else if (node.program && !node.inverse) {
            // Standard block like {{#variable}}...{{/variable}}
            // This has only program content, no inverse content
            variables.add("#" + node.path.original);
            // Add the block closing
            variables.add("/" + node.path.original);
          } else if (node.program && node.inverse) {
            // Block with else like {{#variable}}...{{else}}...{{/variable}}
            // This has both program and inverse content
            variables.add("#" + node.path.original);
            // Add the block closing
            variables.add("/" + node.path.original);
            // Note: We don't add ^ for blocks with {{else}} since they're not pure inverted blocks
          }
        }
        
        // Process block contents
        traverseAst(node.program);
        
        // Process inverse program ({{else}} section)
        if (node.inverse) {
          traverseAst(node.inverse);
        }
        break;
      
      case "Program":
        // Process all statements in a program
        node.body.forEach((subNode) => traverseAst(subNode));
        break;
      
      case "ContentStatement":
        // Plain content, nothing to do
        break;
      
      case "PartialStatement":
        // Partials like {{> partial}}
        if (node.name.original) {
          variables.add(node.name.original);
        }
        break;
        
      case "SubExpression":
        // Sub-expressions
        if (node.path.original) {
          variables.add(node.path.original);
        }
        
        // Process params
        if (node.params) {
          node.params.forEach((param) => traverseAst(param));
        }
        break;
      
      case "PathExpression":
        // Path expressions
        if (node.original) {
          variables.add(node.original);
        }
        break;
    }
  }
  
  // Start traversing the AST
  traverseAst(ast);
  
  // Additionally capture {variable} style variables which aren't Handlebars syntax
  const bracedVarRegex = /\{([a-zA-Z0-9_.]+)\}/g;
  let match;
  while ((match = bracedVarRegex.exec(fixedTemplate)) != null) {
    variables.add(match[1]);
  }
  
  // Return all variables as an array
  return Array.from(variables);
}