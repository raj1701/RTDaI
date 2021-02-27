import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert,Row } from "react-bootstrap"
import { db } from "../../firebase"
import { useAuth } from "../contexts/AuthContext"
import firebase from "firebase"
import { Link, useHistory } from "react-router-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

var data1 = []

// export default function Bench() {
    // var history = useHistory();
    const course = localStorage.getItem('course')
    //console.log(course)
    
    db.collection("courses").where("name", "==", course).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data()); 
            data1.push(doc.data());
        });
    })
    data1.map((item) =>{
        console.log(item);
    })
    console.log(data1[0])
    console.log(data1.length)
    // if(data1.length===0)
    // {
    //     // history.goBack();
    // }
//}