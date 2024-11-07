import "reflect-metadata";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/css/global.css";
import {
  RouterProvider,
} from "react-router-dom";
import { routerLinks } from "./route";
import 'leaflet/dist/leaflet.css';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routerLinks} />
    <Toaster position="bottom-right" richColors />
  </QueryClientProvider>
);
