import "./App.scss";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="col-12">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="*" element={<h1>This Page Is Not Found</h1>} />
          </Route>
        </Routes>
        <Outlet/>
      </BrowserRouter>
    </div>
  );
}

export default App;
