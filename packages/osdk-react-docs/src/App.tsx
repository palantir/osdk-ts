/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../../react-docs-components/src/styles/documentation.css";

import { Card, NonIdealState } from "@blueprintjs/core";
import { OSDK_SNIPPETS_SPEC } from "@osdk/docs-spec-sdk";
import {
  ActionTypeDocumentation,
  InterfaceTypeDocumentation,
  ObjectTypeDocumentation,
  QueryTypeDocumentation,
} from "@osdk/react-docs-components";
import { TYPESCRIPT_OSDK_SNIPPETS } from "@osdk/typescript-sdk-docs";
import type { ReactElement } from "react";
import React from "react";
import { Route as RouteComponent, Routes as RoutesComponent, useParams } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { ontology } from "./ontology";

// Type cast to work around React 18/19 type conflicts
const Routes = RoutesComponent as unknown as React.ComponentType<{ children: React.ReactNode }>;
const Route = RouteComponent as unknown as React.ComponentType<{ path: string; element: ReactElement }>;

function ObjectTypePage() {
  const { apiName } = useParams<{ apiName: string }>();

  if (!apiName) {
    return <NonIdealState icon="cube" title="No object type selected" />;
  }

  return (
    <ObjectTypeDocumentation
      documentation={TYPESCRIPT_OSDK_SNIPPETS}
      ontology={ontology}
      spec={OSDK_SNIPPETS_SPEC}
      objectTypeApiName={apiName}
    />
  );
}

function ActionTypePage() {
  const { apiName } = useParams<{ apiName: string }>();

  if (!apiName) {
    return <NonIdealState icon="flash" title="No action type selected" />;
  }

  return (
    <ActionTypeDocumentation
      documentation={TYPESCRIPT_OSDK_SNIPPETS}
      ontology={ontology}
      spec={OSDK_SNIPPETS_SPEC}
      actionTypeApiName={apiName}
    />
  );
}

function QueryTypePage() {
  const { apiName } = useParams<{ apiName: string }>();

  if (!apiName) {
    return <NonIdealState icon="function" title="No query type selected" />;
  }

  return (
    <QueryTypeDocumentation
      documentation={TYPESCRIPT_OSDK_SNIPPETS}
      ontology={ontology}
      spec={OSDK_SNIPPETS_SPEC}
      queryTypeApiName={apiName}
    />
  );
}

function InterfaceTypePage() {
  const { apiName } = useParams<{ apiName: string }>();

  if (!apiName) {
    return <NonIdealState icon="diagram-tree" title="No interface type selected" />;
  }

  return (
    <InterfaceTypeDocumentation
      documentation={TYPESCRIPT_OSDK_SNIPPETS}
      ontology={ontology}
      spec={OSDK_SNIPPETS_SPEC}
      interfaceTypeApiName={apiName}
    />
  );
}

function WelcomePage() {
  return (
    <div className="welcome-page">
      <Card elevation={1} className="welcome-card">
        <NonIdealState
          icon="manual"
          title="Welcome to the Ontology Explorer"
          description="Select an object type, action, query, or interface from the sidebar to view its documentation."
        />
      </Card>
    </div>
  );
}

export function App() {
  return (
    <div className="app-layout">
      <Sidebar ontology={ontology} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/objects/:apiName" element={<ObjectTypePage />} />
          <Route path="/actions/:apiName" element={<ActionTypePage />} />
          <Route path="/queries/:apiName" element={<QueryTypePage />} />
          <Route path="/interfaces/:apiName" element={<InterfaceTypePage />} />
        </Routes>
      </main>
    </div>
  );
}
