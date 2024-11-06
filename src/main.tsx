import "reflect-metadata";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/css/global.css";
import { Toaster } from "@shadcn/ui/toaster.tsx";
import {
  RouterProvider,
} from "react-router-dom";
import { routerLinks } from "./route";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routerLinks} />
    <Toaster />
  </QueryClientProvider>
);