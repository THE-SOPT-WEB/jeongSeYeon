import { BrowserRouter, Route, Routes } from "react-router-dom";
import Awards from "../pages/Awards";
import Tournament from "../pages/Tournament";
import ErrorPage from "../pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Tournament />} />
        <Route path="/awards/:id" element={<Awards />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
