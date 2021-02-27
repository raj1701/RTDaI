import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert,Row,CardDeck } from "react-bootstrap"
import { db } from "../../firebase"
import { useAuth } from "../contexts/AuthContext"
import firebase from "firebase"
import { Link, useHistory } from "react-router-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import App from '../example/src/App'
// var data1 = []



  const Bench = () => {
  const [reload_count,setreload] = useState(1)
  const [data1, setData1] = useState([])
  
  // const [loaded, setLoaded] = useState()

  useEffect(async () => {
    const course = localStorage.getItem('course')
    var tempdata1 = [];
    await db.collection("courses").where("name","==",course).get().then((querySnapshot) => {querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data()); 
      tempdata1.push(doc.data());
      //console.log(data1[0]['be']);
    })});

    setData1(tempdata1);
    console.log(data1);
    
 }, [])
 let history =  useHistory();
 const [bench_count,setbenchcount] = useState(0)
 const handleSubmit1 = () =>{
   localStorage.setItem('bench',1)
   setbenchcount(1)
   var path = "/meet"
   history.push(path)
 }
 const handleSubmit2 = () =>{
  localStorage.setItem('bench',2)
  setbenchcount(2)
  var path = "/meet"
  history.push(path)
}
const handleSubmit3 = () =>{
  localStorage.setItem('bench',3)
  setbenchcount(3)
  var path = "/meet"
  history.push(path)
}
const handleSubmit4 = () =>{
  localStorage.setItem('bench',4)
  setbenchcount(4)
  var path = "/meet"
  history.push(path)
}
  return (
    <div>
      {data1.map((item) => {
        return (
          <div>
            {/* <Row> */}
            <CardDeck>
                  <Card style={{ width: '18rem'}}>
                  <Card.Body>
                    <h5 className="card-header">Benches</h5>
                    <div class="card-body">
                      <h5 className="card-title">
                        Course name: {item.name}
                      </h5>
                      <p className="card-text">{item.bench1.student1}</p>
                      <p className="card-text">{item.bench1.student2}</p>
                      <p className="card-text">{item.bench1.student3}</p>
                      <p className="card-text">{item.bench1.student4}</p>
                      
                      <div className="input-group-btn">
                            <Button className="btn btn-default w-100" onClick={handleSubmit1} type="submit">
                            Join bench
                            </Button>
                            
                      </div>
                    </div>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem'}}>
                  <Card.Body>
                    <h5 className="card-header">Benches</h5>
                    <div class="card-body">
                      <h5 className="card-title">
                        Course name: {item.name}
                      </h5>
                      <p className="card-text">{item.bench1.student1}</p>
                      <p className="card-text">{item.bench1.student2}</p>
                      <p className="card-text">{item.bench1.student3}</p>
                      <p className="card-text">{item.bench1.student4}</p>
                      <div className="input-group-btn">
                        <Button className="btn btn-default w-100" onClick={handleSubmit2} type="submit">
                        Join bench
                        </Button>
                        
                      </div>
                    </div>
                    </Card.Body>
                  </Card>
                </CardDeck>
                <CardDeck>
                  <Card style={{ width: '18rem'}}>
                  <Card.Body>
                    <h5 className="card-header">Benches</h5>
                    <div class="card-body">
                      <h5 className="card-title">
                        Course name: {item.name}
                      </h5>
                      <p className="card-text">{item.bench3.student1}</p>
                      <p className="card-text">{item.bench3.student2}</p>
                      <p className="card-text">{item.bench3.student3}</p>
                      <p className="card-text">{item.bench3.student4}</p>
                      
                      <div className="input-group-btn">
                            <Button className="btn btn-default w-100" onClick={handleSubmit3} type="submit">
                            Join bench
                            </Button>
                            
                      </div>
                    </div>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem'}}>
                  <Card.Body>
                    <h5 className="card-header">Benches</h5>
                    <div class="card-body">
                      <h5 className="card-title">
                        Course name: {item.name}
                      </h5>
                      <p className="card-text">{item.bench4.student1}</p>
                      <p className="card-text">{item.bench4.student2}</p>
                      <p className="card-text">{item.bench4.student3}</p>
                      <p className="card-text">{item.bench4.student4}</p>
                      <div className="input-group-btn">
                        <Button className="btn btn-default w-100" onClick={handleSubmit4} type="submit">
                        Join bench
                        </Button>
                        
                      </div>
                    </div>
                    </Card.Body>
                  </Card>
                </CardDeck>
              {/* </Row> */}
          </div>
        )
      })}
      {/* <Router>
        <Route path="/meet">
          <App />
        </Route>
      </Router> */}
    </div>  
  )
}


export default Bench


















  // return
  // <h1>Hello</h1>
  // resolveAfter2Seconds().then(
    // data1.map((item) => {
    //   console.log(item)
    // })
    // console.log(data1)
  //   data1.map((item) => {
  //       return (
  //         <Row>
  //           <Card style={{width: "100%"}}>
  //             <h5 className="card-header">Journey</h5>
  //             <div class="card-body">
  //               {/* <h5 className="card-title">
  //                 Destination: {item.destination}
  //               </h5> */}
  //               <p className="card-text">Source: {item.name}</p>
  //               console.log("hello")
  //               {/* <p className="card-text">Date: {item.batch1}</p>
  //               <p className="card-text">Contact: {item.email}</p>
  //               <p className="card-text">Phone No: {item.Phone}</p> */}
  //               <a href="#" className="btn btn-primary">
  //                 Accept
  //               </a>
  //             </div>
  //           </Card>
  //         </Row>
  //       );
      
  //   }
  // )
  //);
  
// export default function Bench() {
    // var history = useHistory();
    
    //console.log(course)
   
    //console.log("hello");

    // if(data1.length===0)
    // {
    //     // history.goBack();
    // }
//}

// let myPromise = new Promise(function(myResolve, myReject) {
//   // "Producing Code" (May take some time)
  
//     myResolve(); // when successful
//     myReject();  // when error
//   });
  
//   // "Consuming Code" (Must wait for a fulfilled Promise)
//   myPromise.then(
//     function(value) { /* code if successful */ },
//     function(error) { /* code if some error */ }
//   );