import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backButton from "../../assets/images/backButton.svg";
import "../Registration/Registration.css";
import emailIcon from "../../assets/images/material-symbols_alternate-email.svg";
import phoneIcon from "../../assets/images/phone.svg";
import logoRedberry from "../../assets/images/logo-redberry.svg";




function Registration({
  data,
  setData,
  clearState,
  handleImageChange,
  renderImage,
  inputRef
}) {

  const navigate = useNavigate();




  return (
    <div className="flex min-h-screen relative">
      <section className="bg-slate-100 w-3/5 gap-10 px-36 py-12">
        <Link to="/">
          <img
            onClick={clearState}
            src={backButton}
            alt="backButton"
            className="absolute left-12"
          />
        </Link>
        <header className="mb-20 flex flex-row items-center justify-between w-full border-b-2 border-black">
          <h2 className="mb-3 text-2xl font-bold">პირადი ინფო</h2>
          <h4 className="text-xl font-normal">1/3</h4>
        </header>
        <form>
        <div className="flex gap-14 justify-between mb-14">
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-base" htmlFor="name">
              სახელი
            </label>
            <input
              value={data.name}
              onChange={(e) =>
                setData((props) => {
                  return {
                    ...props,
                    name: e.target.value,
                  };
                })
              }
              className="textinput w-[370px]"
              type="text"
              name="name"
              id="name"
            />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-base" htmlFor="surname">
              გვარი
            </label>
            <input
              value={data.surname}
              onChange={(e) =>
                setData((props) => {
                  return {
                    ...props,
                    surname: e.target.value,
                  };
                })
              }
              className="textinput w-[370px] min-w-[200px]"
              type="text"
              name="surname"
              id="surname"
            />
            <p className="mt-2">მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className="flex flex-row mb-8">
          <label htmlFor="">პირადი ფოტოს ატვირთვა</label>
          <label htmlFor="photo" className="imageInput"> დამატება
            <input className="hidden" onChange={handleImageChange} type="file" id="photo" name="photo" />
          </label>
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="about_me">ჩემ შესახებ (არასავალდებულო)</label>
          <textarea
            placeholder="ზოგადი ინფო შენ შესახებ"
            value={data.about_me}
            onChange={(e) =>
              setData((props) => {
                return {
                  ...props,
                  about_me: e.target.value,
                };
              })
            }
            className="px-4 py-1 resize-none border border-[#BCBCBC]"
            name="about_me"
            id="about_me"
            cols="10"
            rows="4"
          ></textarea>
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-medium text-base" htmlFor="email">
            ელ.ფოსტა
          </label>
          <input
            placeholder="youremailadress@redberry.ge"
            value={data.email}
            onChange={(e) =>
              setData((props) => {
                return {
                  ...props,
                  email: e.target.value,
                };
              })
            }
            className="textinput"
            type="email"
            name="email"
            id="email"
          />
          <p className="mt-2">უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </div>
        <div className="flex flex-col  mb-8">
          <label className="mb-2 font-medium text-base" htmlFor="phone_number">
            მობილურის ნომერი
          </label>
          <input
            placeholder="+995 xxx xx xx xx"
            value={data.phone_number}
            onChange={(e) =>
              setData((props) => {
                return {
                  ...props,
                  phone_number: e.target.value,
                };
              })
            }
            className="textinput"
            type="number"
            name="phone_number"
            id="phone_number"
          />
          <p className="mt-2">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </p>
        </div>
        </form>
        <div className="buttons flex flex-row justify-between">
          <button className="invisible">უკან</button>
          <button onClick={() => navigate("/experience")}>შემდეგი</button>
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
        <img
          src={logoRedberry}
          className="absolute bottom-11 left-20 w-10 h-10"
          alt="smallIcon"
        />
      </section>
    </div>
  );
}

export default Registration;
