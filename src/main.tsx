import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found!");
}
