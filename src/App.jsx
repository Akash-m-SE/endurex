import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Box m="auto" sx={{ width: { xl: "1488px" } }} width="400px">
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ExerciseDetail />} path="/exercise/:id" />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
