import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import MainPage from "./Pages/mainPage/mainPage.jsx";
import Registration from "./Pages/Registration/Registration.jsx";
import Experience from "./Pages/Experience/Experience.jsx";
import Education from "./Pages/Education/Education.jsx";
import Result from "./Pages/Result/Result.jsx";
import { clear } from "@testing-library/user-event/dist/clear.js";


function App() {
  const [data, setData] = useState(
    {
      name: "",
      surname: "",
      email : "",
      phone_number: "",
      experiences : [
        {
          position: "",
          employer: "",
          start_date: "",
          due_date: "",
          description: ""
        }
      ],
      educations: [
        {
          institute: "",
          degree_id: 0,
          due_date: "",
          description: ""
        }
      ],
      image: "",
      about_me: ""
    }
  );

  const clearState = () =>{
    setData({
      name: "",
      surname: "",
      email : "",
      phone_number: "",
      experiences : [
        {
          position: "",
          employer: "",
          start_date: "",
          due_date: "",
          description: ""
        }
      ],
      educations: [
        {
          institute: "",
          degree_id: 0,
          due_date: "",
          description: ""
        }
      ],
      image: "",
      about_me: ""
    })
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
     setData(data);
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='personal' element={<Registration data={data} setData={setData} clearState={clearState}/>} />
      <Route path='experience' element={<Experience data={data} setData={setData} clearState={clearState}/>} />
      <Route path='education' element={<Education data={data} setData={setData} clearState={clearState}/>} />
      <Route path='result' element={<Result data={data} setData={setData} clearState={clearState}/>} />
    </Routes>
  );
}

export default App;
