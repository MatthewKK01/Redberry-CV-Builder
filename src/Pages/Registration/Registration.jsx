import React, { useState,useEffect } from "react";
import { Link, Route } from "react-router-dom";
import backButton from "../Registration/Group 4.svg";
import '../Registration/Registration.css'

function Registration() {
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [about,setAbout] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [imageFile, setImageFile] = useState(null);
const [imageUrl, setImageUrl] = useState(null);

const handleFileChange = e => {
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
  return <img src={imageUrl} alt="Preview" />;
};

  return (
    <div className="flex min-h-screen relative">
      <section className="bg-slate-100 w-3/5 gap-10 px-36 py-12">
        <Link to='/'>
        <img src={backButton} alt="backButton" className="absolute left-12"/>
        </Link>
       <header className="mb-20 flex flex-row items-center justify-between w-full border-b-2 border-black">
       <h2 className="mb-3 text-2xl font-bold">პირადი ინფო</h2>
        <h4 className="text-xl font-normal">1/3</h4>
       </header>
        <div className="flex gap-14 justify-between mb-14">
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-base" htmlFor="name">სახელი</label>
            <input onChange={(e)=>setName(e.target.value)} className="textinput w-[370px]" type="text" name="name" />
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-base" htmlFor="surname">გვარი</label>
            <input onChange={(e)=>setSurname(e.target.value)} className="textinput w-[370px] min-w-[200px]" type="text" name="surname" />
            <p className="mt-2">მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className="flex flex-row mb-8">
        <label htmlFor="photo">პირადი ფოტოს ატვირთვა</label>
        <input onChange={(e)=>setImageFile(e.target.files[0])} type="file" name="photo"/>
        </div>
        <div className="flex flex-col mb-8">
            <label htmlFor="about">ჩემ შესახებ (არასავალდებულო)</label>
            <textarea onChange={handleFileChange} className="px-4 py-1 resize-none border border-[#BCBCBC]" name="about" id="" cols="10" rows="4"></textarea>
        </div>
        <div className="flex flex-col mb-8">
            <label className="mb-2 font-medium text-base" htmlFor="email">ელ.ფოსტა</label>
            <input onChange={(e)=>setEmail(e.target.value)} className="textinput" type="email" name="email"/>
            <p className="mt-2">უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </div>
        <div className="flex flex-col  mb-8">
            <label className="mb-2 font-medium text-base" htmlFor="phone">მობილურის ნომერი</label>
            <input onChange={(e)=>setPhone(e.target.value)} className="textinput" type="text" name="phone"/>
            <p className="mt-2">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
        </div>
        <div className="buttons flex flex-row justify-between">
        <button className="invisible">უკან</button>
        <button>შემდეგი</button>
        </div>
      </section>
      <section className="w-2/5">
      {renderImage()}
      </section>
    </div>
  );
}

export default Registration;
