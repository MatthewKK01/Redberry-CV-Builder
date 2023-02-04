import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/mainPage/mainPage.jsx";
import Registration from "./Pages/Registration/Registration.jsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='registration' element={<Registration/>} />
    </Routes>
  );
}

export default App;
