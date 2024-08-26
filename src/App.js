import React from 'react';

import './index.css';

import TextControlsExample from './newwebform'
import TableWithData from './bootstraptable';

function Mybird(){
const user={
name:'Adithya',
Age:31

}
return user;
}






function App() {
  let v=Mybird()
  let a=1
 console.log(v);
 let x=v.name;
  return (
    <div className='App'>
    <div className='App-header'>
  
    <TextControlsExample /  >
</div>
<div className='App-header'>

</div>



    </div>
  );
}

export default App;

