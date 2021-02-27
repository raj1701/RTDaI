
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { db } from "../../firebase"
import { useAuth } from "../contexts/AuthContext"
import firebase from "firebase"
import { Link, useHistory } from "react-router-dom"



export default function Courseid(){
    // const courseref = useRef()
    const courseref = "CS-201"
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
        console.log("1")
        setError("")
        console.log("2")
        setLoading(true)
        console.log("3")
        const [course,setcourse]=useState('');
        const handleSubmitcourse=()=>{
            const userobj = {
                student1: " ",
                student2: " ",
                student3: " ",
                student4: " "
            }
            db.collection(courseref).doc("bench1").set(userobj)
            console.log(db.collection(courseref).doc("bench1").set(userobj))
            console.log("4")
            db.collection(courseref).doc("bench2").set(userobj)
            console.log("5")
            db.collection(courseref).doc("bench3").set(userobj)
            db.collection(courseref).doc("bench4").set(userobj)
        }
        
        console.log("6")
        history.push("/")
        console.log("7")
        } catch {
        setError("Failed to add course")
        }

        setLoading(false)
    }
    return(
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Add course id</h2>
            {error && <Alert variant="danger">{error}</Alert>}
                <Row>
                    <input
                type="text"
                className="form-control"
                placeholder="Course ID"
                name="srch-term"
                value={course}
                onChange={(e) => setcourse(e.target.value)}
                />
                <div className="input-group-btn">
                <button className="btn btn-default"  onClick={handleSubmitcourse}></button></div></Row>
            </Card.Body>
        </Card>
        </>
    )
}