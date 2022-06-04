// import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import DogsList from './DogsList'
import DogDetails from './DogDetails';



function App({ defaultProps }) {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/dogs">
          <DogsList dogs={defaultProps.dogs}/>
        </Route>
        <Route exact path="/dogs/:name">
          <DogDetails dogs={defaultProps.dogs}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
