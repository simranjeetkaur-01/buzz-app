import { useState } from 'react'; 
import { Button } from './Button.js'; 
import { ListComponent } from './ListComponent.js';

function App() { 
  
  const [components, setComponents] = useState(["Sample Component"]); 
  
  function addComponent() { 
    
    setComponents([...components, "Sample Component"]) 
    
  } 
  
  return ( 
    
    <div> 
      <Button onClick={addComponent} text="Call Component"/> 
      {components.map((item, i) => ( <ListComponent text={item} /> ))} 
      
    </div> 
    
  ) 
  
} 

export default App;