import React from "react";

// Display to show the list of tasks
const Display = (props) => {
  // Function to handle checkbox toggle
  const handleToggle = (thingIdx) => {
    props.updateThingCompletion(thingIdx);
  }
  // Function to handle button click for deleting a task
  const buttonClicked = (thingIdx) => {
    props.deleteThing(thingIdx);
  };

  return (
    <div>
      {props.thing.map((eachOneThing, idx) => {
        return (
          <div key={eachOneThing.id}>
            <p>
              <span  style={{ textDecoration: eachOneThing.completed ? 'line-through' : 'none' }}>{eachOneThing.message}</span>
            <input type="checkbox" checked={eachOneThing.completed} onChange={() => handleToggle(eachOneThing.id)}
                    />
            </p>
            <button onClick={() => buttonClicked(idx)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Display;