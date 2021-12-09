import React, { useState, useEffect} from "react";
import "./App.css";
import CardHeader from "./components/CardHeader";
import axios from 'axios';
import Card from "./components/Card";
import CardDescription from "./components/CardDescription";
import Icon from "./components/Icon";
import theme from './components/Theme';
import styled from "styled-components";


const Container = styled.div`
width: 80%;
margin: 3% auto;
padding: 2% 2%;
background-color: #FAF9F6;
border: 3px solid #121212;
border-radius: 20px;
`

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
    <Container theme={theme}>
      <Icon class="Icon"/>
      <CardHeader today={today}/>
      <Card today={today}/>
      <CardDescription today={today} />
      {console.log(today)}
    </Container>
  )
}

export default App;
