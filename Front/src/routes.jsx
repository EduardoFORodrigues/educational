import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/login.jsx";
import List from "./Components/List/list.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}
