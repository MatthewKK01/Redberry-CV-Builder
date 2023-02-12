import { Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import MainPage from "./Pages/mainPage/mainPage.jsx";
import Registration from "./Pages/Registration/Registration.jsx";
import Experience from "./Pages/Experience/Experience.jsx";
import Education from "./Pages/Education/Education.jsx";
import Result from "./Pages/Result/Result.jsx";
import axios from "axios";


function App() {
  const [data, setData] = useState(
    {
      name:"",
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
    const storedData = JSON.parse(sessionStorage.getItem("formData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  const sendDataToBackend = () => {
    axios.post("https://resume.redberryinternship.ge/api/cvs", data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleImageChange = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      setData({ ...data, image: e.target.result });
      sessionStorage.setItem("imageData", e.target.result);
    };
  };

  const renderImage = () => {
    if(data.image){
      return(
        <img
        value={data.image}
          className="absolute top-[75px] object-cover right-[48px] rounded-full w-64 h-64"
          src={data.image}
          alt="Preview"
        />
      )
    }else{
      return null
    }
  };


  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='personal' element={<Registration data={data} handleImageChange={handleImageChange} renderImage={renderImage} setData={setData} clearState={clearState}/>} />
      <Route path='experience' element={<Experience data={data} handleImageChange={handleImageChange} renderImage={renderImage} setData={setData} clearState={clearState}/>} />
      <Route path='education' element={<Education data={data} sendDataToBackend={sendDataToBackend} handleImageChange={handleImageChange} renderImage={renderImage} setData={setData} clearState={clearState}/>} />
      <Route path='result' element={<Result data={data} handleImageChange={handleImageChange} renderImage={renderImage} setData={setData} clearState={clearState}/>} />
    </Routes>
  );
}

export default App;
