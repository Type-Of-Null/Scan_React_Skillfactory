 
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="sm:w-[1440px] min-h-screen max-sm:h-[3518px] bg-white flex flex-col">
			<Header />
      <Main />
			<Footer />
    </div>
  );
}
