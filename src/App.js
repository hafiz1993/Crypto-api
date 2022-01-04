import react from "react";
import Featured from "./Components/Featured/Featured";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
