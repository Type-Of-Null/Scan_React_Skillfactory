import Main from './components/MainPage/MainPageBody';
import Header from './components/Header';
import Footer from './components/Footer';
import Auth from './components/Auth/Auth';
import Error from './components/ErrorPage';
import Search from './components/Search/Search';
import Result from './components/ResultSearch/Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const routes = [
  { path: '/', element: <Main /> },
  { path: '/auth', element: <Auth /> },
  { path: '*', element: <Error /> },
  { path: '/search', element: <Search /> },
  { path: '/result', element: <Result /> },
];

export default function App() {
  return (
    <div className="flex min-h-screen min-w-[320px] flex-col">
      <BrowserRouter>
        <Header />
        <div className="flex flex-grow flex-col max-md:items-center max-md:justify-center">
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
