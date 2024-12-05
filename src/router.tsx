import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import PostPage from "./pages/PostPage/PostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/post/:id" element={<PostPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
