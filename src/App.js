import React, {useContext,useState,useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import studentSign from './student/components/studentland';
import teacherSign from './teacher/components/teacherland';
import {Button} from 'react-bootstrap';
import './App.css';

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
        <Route path="/" render={check?studentSign:teacherSign} />
      </BrowserRouter>
    </div>
    
    
  )
}

const root = document.getElementById('root');
ReactDOM.render( <App />, root)

export default App;

// import studentSign from './student/components/studentland.js';
