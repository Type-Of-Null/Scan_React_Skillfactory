import React from "react";
import Header from "./Header";
import Promo from "./Promo";

export default function MainPage() {
  return (
    <div className="absolute w-[1440px] h-[2867px] bg-white" >
      <Header />
			<Promo />
    </div>
  );
}
