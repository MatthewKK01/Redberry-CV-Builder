import React from "react";
import emailIcon from "../../assets/images/material-symbols_alternate-email.svg";
import phoneIcon from "../../assets/images/phone.svg";
import logoRedberry from "../../assets/images/logo-redberry.svg";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Result({ data }) {
  toast('რეზიუმე წარმატებით გაიგზავნა  🎉', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  return (
    <div className="w-scren h-screen flex justify-center items-center">

<ToastContainer  />
      <section className="w-2/5 p-20 relative border border-black">
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
        <hr className="mt-5 mb-6" />
        {data.experiences.map(
          ({ position, employer, start_date, due_date, description }) => {
            return (
              <div>
                {data.experiences && (
                  <h2 className=" font-bold text-lg text-[#F93B1D]">
                    გამოცდილება
                  </h2>
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
            );
          }
        )}

        <hr className="mt-5 mb-6" />
        {data.educations.map(
          ({ institute, degree_id, due_date, description }) => {
            return (
              <div>
                {data.educations && (
                  <h2 className=" font-bold text-lg text-[#F93B1D]">
                    განათლება
                  </h2>
                )}
                <div className="flex mt-4">
                  {institute && (
                    <h1 className="text-[#1A1A1A] font-medium text-base leading-5">
                      {institute},&nbsp;
                    </h1>
                  )}
                  {degree_id && (
                    <span className="text-[#1A1A1A] font-medium text-base leading-5">
                      {degree_id}
                    </span>
                  )}
                </div>
                <div className="dates flex mb-4">
                  {due_date && (
                    <p className="text-[#909090] text-base font-normal italic">
                      {due_date}
                    </p>
                  )}
                </div>
                {description && (
                  <p className="font-normal text-base capitalize leading-6 text-black">
                    {description}
                  </p>
                )}
              </div>
            );
          }
        )}

        <img
          src={logoRedberry}
          className="mt-52 w-10 h-10"
          alt="smallIcon"
        />
      </section>
    </div>
  );
}

export default Result;
