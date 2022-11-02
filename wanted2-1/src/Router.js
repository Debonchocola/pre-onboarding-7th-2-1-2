import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Main from "./pages/main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
