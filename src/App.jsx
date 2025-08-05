import Main from "./components/MainPage/MainPageBody";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth/Auth";
import Error from "./components/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/auth", element: <Auth /> },
  { path: "*", element: <Error /> },
	{path: "/search", element: <Search/>}
];

export default function App() {
  return (
    <div className="flex min-h-screen min-w-[320px] flex-col">
      <BrowserRouter>
        <Header />
        <div className="flex-grow flex flex-col max-md:justify-center max-md:items-center">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
