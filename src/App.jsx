 
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import Error from "./components/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const routesData = [
	{ path: "/", element: <Main /> },
	{ path: "/auth", element: <Auth /> },
	{ path: "*", element: <Error /> },
	// { path: "/search", element: <Search /> },
	// { path: "/result", element: <SearchResult /> },
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
    </div>
  );
}
