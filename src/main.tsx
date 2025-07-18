import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import "./index.css";
import App from "./App";

// ✅ رابط وهمي فقط للتجربة
const convex = new ConvexReactClient("https://dummy.convex.cloud");

createRoot(document.getElementById("root")!).render(
  <ConvexAuthProvider client={convex}>
    <App />
  </ConvexAuthProvider>,
);
