import React from "react";
import MyCard from "./component/card.jsx";
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Footer from "./component/footer.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
      </div>
      <div className="container d-flex flex-wrap">
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
