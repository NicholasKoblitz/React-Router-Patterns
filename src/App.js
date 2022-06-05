// import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';

import DogsList from './DogsList'
import DogDetails from './DogDetails';
import Colors from './Colors';
import Color from './Color';
import ColorForm from './ColorForm';



function App({ defaultProps }) {

  const [colors, setColors] = useState(
    [
      {
    id: uuid(),
    color: "red"
    },
    {
      id: uuid(),
      color: "blue"
    },
    {
      id: uuid(),
      color: "yellow"
    }
  ]
  )

  function addColor  (color) {
    const newColors = [...colors, {color:color, id:uuid()}];
    setColors(newColors);
  }
  console.log(colors)
  
  return (
    <div className="App">
      {/* Dog Finder App */}

      <Switch>
        <Route exact path="/dogs">
          <DogsList dogs={defaultProps.dogs}/>
        </Route>
        <Route exact path="/dogs/:name">
          <DogDetails dogs={defaultProps.dogs}/>
        </Route>

        {/*Color Factory App*/}

        <Route exact path='/colors'>
          <Colors colors={colors}/>
        </Route>
        <Route exact path='/colors/new'>
          <ColorForm addColor={addColor}/>
        </Route>
        <Route exact path='/colors/:color'>
          <Color/>
        </Route>
        
      </Switch>

      
      
    </div>
  );
}

export default App;
