import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-redbery.svg";
import './mainPage.css'
import logoBG from '../../assets/images/LOGO-401.svg';

function MainPage() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen relative flex justify-center items-center">
      <header className="border-[#1A1A1A] border-b py-[26px] absolute">
        <img src={logo} alt="logo-redberry"  />
      </header>
      <section className="">
        <button onClick={() => navigate('/personal')} className="container">რეზიუმეს დამატება</button>
        <img src={logoBG} alt="logo-agecy" className="logo-agency mix-blend-multiply absolute" />
      </section>
    </main>
  );
}

export default MainPage;
