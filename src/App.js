import "./App.scss";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import HeaderS from "./components/HeaderS";
import { useRecoilState } from "recoil";
import { $HeaderModal } from "./store";
import HeaderModal from "./components/HeaderModal";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      casheTime: Infinity,
    },
  },
});

function App() {
  const [clicked] = useRecoilState($HeaderModal);
  console.log(clicked);
  return (
    <div className="app col-12">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Toaster
            position="top-right"
            reverseOrder={false}
            containerStyle={{
              
              height:"auto"
            }}
            gutter={0}
          />

          <Header />
          <HeaderS />
          {clicked === 1 ? <HeaderModal /> : null}
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/About" element={<AboutMe />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/Contact" element={<ContactMe />} />
              <Route path="*" element={<h1>This Page Is Not Found</h1>} />
            </Route>
          </Routes>
          <Outlet />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
