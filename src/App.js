import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import MainPage from "./Pages/mainPage/mainPage.jsx";
import Registration from "./Pages/Registration/Registration.jsx";
import Experience from "./Pages/Experience/Experience.jsx";
import Education from "./Pages/Education/Education.jsx";


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
          degree_id: null,
          due_date: "",
          description: ""
        }
      ],
      image: "",
      about_me: ""
    }
  );

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='personal' element={<Registration data={data} setData={setData}/>} />
      <Route path='experience' element={<Experience data={data} setData={setData}/>} />
      <Route path='education' element={<Education data={data} setData={setData}/>} />
    </Routes>
  );
}

export default App;
