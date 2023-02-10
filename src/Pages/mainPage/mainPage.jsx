import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-redbery.svg";
import './mainPage.css'
import logoBG from '../../assets/images/LOGO-401.svg';



function MainPage() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col">
              <img src={logoBG} alt="logo-agecy" className="logo-agency mix-blend-multiply absolute" />
      <header className="layout-wrap header">
        <div className="logo-area">
          <img src={logo} alt="logo-redberry" className="mb-4"  />
        </div>
          </header>
      <section className="flex flex-1 justify-center items-center">
      <button onClick={() => navigate('/personal')} className="container">რეზიუმეს დამატება</button>
      </section>
    </main>
  )
}


export default MainPage;
