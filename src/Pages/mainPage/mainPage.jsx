import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-redbery.svg";
import './mainPage.css'
import logoBG from '../../assets/images/LOGO-401.svg';

function MainPage() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen relative flex justify-center items-center">
      <header className="py-[26px] absolute top-6 left-16">
        <img src={logo} alt="logo-redberry"  />
      </header>
        <hr className="border w-[1780px] absolute top-28 left-16 border-black"/>
      <section className="">
        <button onClick={() => navigate('/personal')} className="container">რეზიუმეს დამატება</button>
        <img src={logoBG} alt="logo-agecy" className="logo-agency mix-blend-multiply absolute" />
      </section>
    </main>
  );
}

export default MainPage;
