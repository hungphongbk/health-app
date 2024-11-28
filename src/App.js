// src/App.js
import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import MyRecord from "./pages/MyRecord";
import TopMyPage from "./pages/TopMyPage";
import Component1 from "./pages/Component1";
import Web1280Column from "./pages/Web1280Column";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/top-my-page":
        title = "Top My Page";
        metaDescription = "Welcome to the top my page.";
        break;
      case "/my-record":
        title = "My Record";
        metaDescription = "View your personal records.";
        break;
      case "/component":
        title = "Component";
        metaDescription = "Component details.";
        break;
      case "/column":
        title = "Column";
        metaDescription = "Read our latest columns.";
        break;
      default:
        title = "App";
        metaDescription = "Welcome to our app.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/top-my-page" />} />
        <Route path="top-my-page" element={<TopMyPage />} />
        <Route path="my-record" element={<MyRecord />} />
        <Route path="component" element={<Component1 />} />
        <Route path="column" element={<Web1280Column />} />
      </Route>
    </Routes>
  );
}

export default App;