import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import PointsTable from "./pages/PointsTable";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<AdminPanel />} />
          <Route path="/pointsTable" element={<PointsTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
