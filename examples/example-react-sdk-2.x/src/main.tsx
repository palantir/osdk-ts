import { OsdkProvider2 } from "@osdk/react/experimental";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import client from "@/client";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import { router } from "@/router";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <OsdkProvider2 client={client}>
        <RouterProvider router={router} />
      </OsdkProvider2>
    </Suspense>
  </ErrorBoundary>,
);
