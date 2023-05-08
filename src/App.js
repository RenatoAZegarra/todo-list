import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Display from './components/display.jsx';
import Form from './components/form.jsx';

function App() {
  const [thing, setThing] = useState([
    {
      id: 1,
      message: "Learn Mern",
      completed: false,
    }
  ]);

  const updateThing = (newThing) => {
    setThing([...thing, newThing]);
  };

  const deleteThing = (thingId) => {
    setThing(thing.filter((eachOneThing, idx) => idx !== thingId));
  };

  const updateThingCompletion = (thingId) => 
    setThing(
      thing.map((thing) => {
        if (thing.id === thingId){
          return {...thing, completed: !thing.completed};
        }
        return thing;
      })
    );

  return (
    <div className="App">
      <div>
        <Form updateThing={updateThing} />
      </div>
      <div>
        <Display thing={thing} deleteThing={deleteThing} updateThingCompletion={updateThingCompletion} />
      </div>
    </div>
  );
}

export default App;

