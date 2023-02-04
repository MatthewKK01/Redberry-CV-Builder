import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./images/logo-redbery.svg";
import './mainPage.css'
import logoBG from './images/LOGO-401.svg';

function MainPage() {
  return (
    <main className="min-h-screen relative flex justify-center items-center">
      <header className="border-[#1A1A1A] border-b py-[26px] absolute">
        <img src={logo} alt="logo-redberry"  />
      </header>
      <section className="">
        <div className="container">
        <Link to='/registration'>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Link>
        </div>
        <img src={logoBG} alt="logo-agecy" className="logo-agency mix-blend-multiply absolute" />
      </section>
    </main>
  );
}

export default MainPage;
