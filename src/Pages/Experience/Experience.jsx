import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backButton from "../../assets/images/backButton.svg";
import "../Experience/Experience.css";
import emailIcon from "../../assets/images/material-symbols_alternate-email.svg";
import phoneIcon from "../../assets/images/phone.svg";
import logoRedberry from "../../assets/images/logo-redberry.svg";

function Experience({ data, setData,renderImage,clearState }) {

  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen relative">
      <section className="bg-slate-100 w-3/5 gap-10 px-36 py-12">
        <Link to="/">
          <img onClick={clearState} src={backButton} alt="backButton" className="absolute left-12" />
        </Link>
        <header className="mb-20 flex flex-row items-center justify-between w-full border-b-2 border-black">
          <h2 className="mb-3 text-2xl font-bold">გამოცდილება</h2>
          <h4 className="text-xl font-normal">2/3</h4>
        </header>
        <div className="flex flex-col gap-8 justify-between mb-8">
          <form className="flex flex-col">
            <label className=" font-medium text-base" htmlFor="name">
              თანამდებობა
            </label>
            <input
            value={data.experiences[0].position}
              onChange={(e) => {
                const clone = data.experiences[0].position = e.target.value;
                setData((props)=>{
                  return{
                    ...props,
                  clone
                  }
                });
              }}
              className="textinput w-full my-2"
              type="text"
              name="name"
            />
            <p>მინიმუმ 2 სიმბოლო</p>
          </form>
          <form className="flex flex-col">
            <label className=" font-medium text-base" htmlFor="surname">
              დამსაქმებელი
            </label>
            <input
            value={data.experiences[0].employer}
              onChange={(e) => {
                const clone = data.experiences[0].employer = e.target.value;
                setData((props)=>{
                  return{
                    ...props,
                  clone
                  }
                });
              }}
              className="textinput w-full my-2"
              type="text"
              name="surname"
            />
            <p>მინიმუმ სიმბოლო</p>
          </form>
        </div>
        <div className="flex flex-row gap-14 justify-between mb-8 ">
          <form>
            <label htmlFor="startDate">დაწყების რიცხვი</label>
            <input
            value={data.experiences[0].start_date}
              onChange={(e) => {
                const clone = data.experiences[0].start_date = e.target.value;
                setData((props)=>{
                  return{
                    ...props,
                  clone
                  }
                });
              }}
              className="textinput w-full"
              type="date"
              name="startDate"
            />
          </form>
          <form>
            <label htmlFor="startDate">დამთავრების რიცხვი</label>
            <input
            value={data.experiences[0].due_date}
              onChange={(e) => {
                const clone = data.experiences[0].due_date = e.target.value;
                setData((props)=>{
                  return{
                    ...props,
                  clone
                  }
                });
              }}
              className="textinput w-full"
              type="date"
              name="startDate"
            />
          </form>
        </div>
        <form className="flex flex-col">
          <label htmlFor="description">აღწერა</label>
          <textarea
          value={data.experiences[0].description}
            onChange={(e) => {
              const clone = data.experiences[0].description = e.target.value;
              setData((props)=>{
                return{
                  ...props,
                clone
                }
              });
            }}
            className="px-4 py-1 resize-none border border-[#BCBCBC]"
            name="description"
            id=""
            cols="10"
            rows="4"
          ></textarea>
        </form>
        <hr className="h-px mt-14 mb-8 border-0" />
        <button className="moreexperiencebutton mb-5">
          მეტი გამოცდილების დამატება
        </button>
        <div className="buttons flex flex-row justify-between">
          <button onClick={() => navigate("/personal")}>უკან</button>
          <button onClick={() => navigate("/education")}>შემდეგი</button>
        </div>
      </section>

      <section className="w-2/5 p-20 relative">
        <div className="flex gap-5 mb-4">
          <h1 className="font-bols text-4xl text-[#F93B1D]">{data.name}</h1>
          <h1 className="font-bols text-4xl text-[#F93B1D]">{data.surname}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            {data.email && <img className="w-5" src={emailIcon} alt="" />}
            <p className="font-normal text-lg">{data.email}</p>
          </div>
          <div className="flex gap-2 items-center">
            {data.phone_number && (
              <img className="w-5" src={phoneIcon} alt="" />
            )}
            <p className="font-normal text-lg">{data.phone_number}</p>
          </div>
        </div>
        <div className="mt-8">
          {data.about_me && (
            <h2 className=" font-bold text-lg text-[#F93B1D]">ჩემს შესახებ</h2>
          )}
          <p className="break-words w-8/12 font-normal text-base">
            {data.about_me}
          </p>
        </div>
        {renderImage()}
        <hr className="mt-5 mb-6" />
       {data.experiences.map(({position,employer,start_date,due_date,description})=>{
        return (
          <div>
          {data.experiences && (
            <h2 className=" font-bold text-lg text-[#F93B1D]">გამოცდილება</h2>
          )}
          <div className="flex mt-4">
            {position && (
              <h1 className="text-[#1A1A1A] font-medium text-base leading-5">
                {position},&nbsp;
              </h1>
            )}
            {employer && (
              <span className="text-[#1A1A1A] font-medium text-base leading-5">
                {employer}
              </span>
            )}
          </div>
          <div className="dates flex mb-4">
            {start_date && (
              <p className="text-[#909090] text-base font-normal italic">
                {start_date}&nbsp;-
              </p>
            )}
            {due_date && (
              <p className="text-[#909090] text-base font-normal italic">
                &nbsp;{due_date}
              </p>
            )}
          </div>
          {description && (
            <p className="font-normal text-base capitalize leading-6 text-black">
              {description}
            </p>
          )}
        </div>
        )
       })}

        <img
          src={logoRedberry}
          className="absolute bottom-11 left-20 w-10 h-10"
          alt="smallIcon"
        />
      </section>
    </div>
  );
}

export default Experience;
