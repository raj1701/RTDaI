import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert,Row,CardDeck } from "react-bootstrap"
import { db } from "../../firebase"
import { useAuth } from "../contexts/AuthContext"
import firebase from "firebase"
import { Link, useHistory } from "react-router-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// var data1 = []
const course = localStorage.getItem('course')


const Bench = () => {

  const [data1, setData1] = useState([])
  // const [loaded, setLoaded] = useState()

  useEffect(async () => {
    var tempdata1 = [];
    await db.collection("courses").where("name","==",course).get().then((querySnapshot) => {querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data()); 
      tempdata1.push(doc.data());
      //console.log(data1[0]['be']);
    })});

    setData1(tempdata1);
    console.log(data1);
 }, [])
 

  return (
    <div>
      Hello 
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
                      <a href="#" className="btn btn-primary">
                        Accept
                      </a>
                    </div>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '20rem'}}>
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
                      <a href="#" className="btn btn-primary">
                        Accept
                      </a>
                    </div>
                    </Card.Body>
                  </Card>
                </CardDeck>
              {/* </Row> */}
          </div>
        )
      })}
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