import React, {useContext,useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import studentSign from './student/components/studentland';
import teacherSign from './teacher/components/teacherland';
import Bench from './student/components/select_bench';
import {Button} from 'react-bootstrap';
import './App.css';
import App2 from './student/example/src/App'
import App3 from './teacher/components/Teacher_App'
//import App2 from './student/example/src/App'
const App = () => {
  const [check,setcheck] = useState(true);
const handleShow = () => setcheck(false);
const handleShow1 = () => setcheck(true);
  return (
    
    <div>
      <Button variant="dark" onClick={handleShow} className="mr-sm-5">
            teacher
      </Button>
      <Button variant="dark" onClick={handleShow1} className="mr-sm-5">
            student
      </Button>
      <BrowserRouter>
        <Route exact path="/" render={check?studentSign:teacherSign} />
        <Route path="/select_bench">
          <Bench/>
        </Route>
         <Route path="/meet">
          <App2 />
        </Route> 
         <Route path="/teachermeet">
          <App3 />
        </Route> 
      </BrowserRouter>
    </div>
    
    
  )
}

const root = document.getElementById('root');
ReactDOM.render( <App />, root)

export default App;

// import studentSign from './student/components/studentland.js';
