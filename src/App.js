import React, { useState, useEffect} from "react";
import "./App.css";
import CardHeader from "./components/CardHeader";
import axios from 'axios';
import Card from "./components/Card";
import CardDescription from "./components/CardDescription";

function App() {
  const [today, setToday] = useState([])
  const fetchData = () => axios.get('https://api.nasa.gov/planetary/apod?api_key=13v9MPyawr5NcaamjiQLIhVWCap8VrZIGkA7CLda').then(res =>
  setToday(res.data));

  useEffect( () => fetchData(), []);
  //console.log(today);
  return (
    // <div className="App">
    //   <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    //   </p>
      
    // </div>
    <div className="container">
      <CardHeader today={today}/>
      <Card today={today}/>
      <CardDescription today={today} />
      {console.log(today)}
    </div>
  )
}

export default App;

