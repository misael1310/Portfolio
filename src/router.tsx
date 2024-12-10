import { BrowserRouter, Routes, Route } from "react-router";
import PostPage from "./pages/PostPage/PostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import { MainLayout } from "./layouts/MainLayout.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
