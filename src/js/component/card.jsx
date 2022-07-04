import React from "react";

function MyCard(){
    return (
      <div className="container d-flex justify-content-center col col-sm-6 col-lg-3 mb-5">
        <div className="card" style={{width: "17rem"}}> 
          <img className="card-img-top" src="http://via.placeholder.com/500x325/%22" alt="500 x 325" /> 
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
            );
        }
        export default MyCard;