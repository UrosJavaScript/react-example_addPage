import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";

import AllPages from "./pages/AllPages";
import FavoritPage from  "./pages/FavoritPage";
import NewPage from "./pages/NewPage";

function App() {
  return <Layout>
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/favorit-page" element={<FavoritPage />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
  </Layout>;
}


export default App;