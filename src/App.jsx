import Main from "./components/MainPage/MainPageBody";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth/Auth";
import Error from "./components/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/auth", element: <Auth /> },
	{ path: "*", element: <Error />},
];
export default function App() {
  return (
    <div className="sm:w-[1440px] min-h-screen max-sm:h-[3518px] bg-white flex flex-col">
			<BrowserRouter>
			<Header />
					<Routes>
						{routesData.map((route, index) => (
							<Route key={index} path={route.path} element={route.element} />
						))}
					</Routes>
			<Footer />
			</BrowserRouter>
    <div
      id="App"
      className="flex min-h-screen flex-col bg-white w-full max-sm:w-auto"
    >
      <BrowserRouter>
        <Header />
        <main className="flex-1 max-sm:overflow-auto">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
