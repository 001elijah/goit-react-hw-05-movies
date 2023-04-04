import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<AppBar />}></Route>
      </Routes>
    </>
  );
};
