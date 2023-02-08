import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import backButton from "../../assets/images/backButton.svg";
import "../Registration/Registration.css";
import emailIcon from "../../assets/images/material-symbols_alternate-email.svg";
import phoneIcon from "../../assets/images/phone.svg";
import logoRedberry from "../../assets/images/logo-redberry.svg";

function Registration({ data, setData,clearState }) {

  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  useEffect(() => {
    if (imageFile) {
      setImageUrl(URL.createObjectURL(imageFile));
    }

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageFile]);

  const renderImage = () => {
    if (!imageUrl) {
      return null;
    }
    return (
      <img
        className="absolute top-[75px] right-[48px] rounded-full w-64 h-64"
        src={imageUrl}
        alt="Preview"
      />
    );
  };

  return (
    <div className="flex min-h-screen relative">
      <section className="bg-slate-100 w-3/5 gap-10 px-36 py-12">
        <Link to="/">
          <img onClick={clearState} src={backButton} alt="backButton" className="absolute left-12" />
        </Link>
        <header className="mb-20 flex flex-row items-center justify-between w-full border-b-2 border-black">
          <h2 className="mb-3 text-2xl font-bold">პირადი ინფო</h2>
          <h4 className="text-xl font-normal">1/3</h4>
        </header>
        <div className="flex gap-14 justify-between mb-14">
          <form className="flex flex-col">
            <label className="mb-2 font-medium text-base" htmlFor="name">
              სახელი
            </label>
            <input
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
            />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </form>
          <form className="flex flex-col">
            <label className="mb-2 font-medium text-base" htmlFor="surname">
              გვარი
            </label>
            <input
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
            />
            <p className="mt-2">მინიმუმ 2 ასო, ქართული ასოები</p>
          </form>
        </div>
        <div className="flex flex-row mb-8">
          <label htmlFor="photo">პირადი ფოტოს ატვირთვა</label>
          <label htmlFor="">
            <input onChange={handleFileChange} type="file" name="photo" />
          </label>
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="about">ჩემ შესახებ (არასავალდებულო)</label>
          <textarea
            onChange={(e) =>
              setData((props) => {
                return {
                  ...props,
                  about_me: e.target.value,
                };
              })
            }
            className="px-4 py-1 resize-none border border-[#BCBCBC]"
            name="about"
            id=""
            cols="10"
            rows="4"
          ></textarea>
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-medium text-base" htmlFor="email">
            ელ.ფოსტა
          </label>
          <input
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
          />
          <p className="mt-2">უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </div>
        <div className="flex flex-col  mb-8">
          <label className="mb-2 font-medium text-base" htmlFor="phone">
            მობილურის ნომერი
          </label>
          <input
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
            name="phone"
          />
          <p className="mt-2">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </p>
        </div>
        <div className="buttons flex flex-row justify-between">
          <button className="invisible">უკან</button>
          <button onClick={() => navigate('/experience')}>შემდეგი</button>
        </div>
      </section>
      <section className="w-2/5 p-20 relative">
        <div className="flex gap-5 mb-4">
          <h1 className="font-bols text-4xl text-[#F93B1D]">
            {data.name}
          </h1>
          <h1 className="font-bols text-4xl text-[#F93B1D]">{data.surname}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            {data.email && <img className="w-5" src={emailIcon} alt="" />}
            <p className="font-normal text-lg">{data.email}</p>
          </div>
          <div className="flex gap-2 items-center">
            {data.phone_number && <img className="w-5" src={phoneIcon} alt="" />}
            <p className="font-normal text-lg">{data.phone_number}</p>
          </div>
        </div>
        <div className="mt-8">
          {data.about_me && (
            <h2 className=" font-bold text-lg text-[#F93B1D]">ჩემს შესახებ</h2>
          )}
          <p className="break-words w-8/12 font-normal text-base">{data.about_me}</p>
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
