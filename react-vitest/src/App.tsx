import React from 'react';
import Accordion from './components/Accordion';

function App (){
  return (
    <div className="App">
      <h1>React + TypeScript</h1>
      <Accordion title="Mas info ">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sunt ducimus consequatur praesentium minus, labore quia asperiores, nihil ullam quibusdam quis voluptatum! Vero, blanditiis. Vitae cupiditate accusantium delectus autem illum.</p>
      </Accordion>
    </div>
  );
}

export default App;
