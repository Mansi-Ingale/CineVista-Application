import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
//import StarRatings from "./Components/StarRatings";

// export default function Test(){
//   const [movieRatings, setMovieRatings] = useState(0);

//   return(
//     <>
//         <StarRatings color="blue" maxRatings={10} onSetRatings={setMovieRatings} />
//         <p>ratings are {movieRatings}</p>
//     </> 
//   )
// }





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRatings  messages = {["Excellent", "very good" , "Good" ,"Average", "Bad"]} defaultRatings={1}/>
    <StarRatings size = {24} color="purple" defaultRatings = {3}/> */}
    {/* <Test /> */}
  </React.StrictMode>
);
