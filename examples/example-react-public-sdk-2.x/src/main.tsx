import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { OsdkProvider } from "@osdk/react";
import client from "@/client";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import { router } from "@/router";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <OsdkProvider client={client}>
        <RouterProvider router={router} />
      </OsdkProvider>
    </Suspense>
  </ErrorBoundary>,
);
