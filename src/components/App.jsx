import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}></Route>
      </Routes>
    </>
  );
};
