
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert,Row } from "react-bootstrap"
import { db } from "../../firebase"
import { useAuth } from "../contexts/AuthContext"
import firebase from "firebase"
import { Link, useHistory } from "react-router-dom"



export default function Courseid(){
    // const courseref = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [course,setcourse]=useState('');
    const userobj = {
        student1: " ",
        student2: " ",
        student3: " ",
        student4: " "
        
    }
    async function handleSubmit() {

        try {
        console.log("1")
        setError("")
        console.log("2")
        setLoading(true)
        console.log("3")
        db.collection("courses").doc(course).set({
            name:course,
            bench1:userobj,
            bench2:userobj,
            bench3:userobj,
            bench4:userobj
        })
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
                {/* { <Form onSubmit={handleSubmit}>

                    <Form.Group id="course">
                        <Form.Label>Course</Form.Label>
                        <Form.Control type="text" ref={courseref} required/>
                    </Form.Group>

                    <Button disabled={loading} className="w-100" type="submit">
                    Register
                    </Button>

                </Form> } */}
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
                <Button className="btn btn-default w-100" onClick={handleSubmit} type="submit">
                Register
                </Button>
                </div>
                </Row>
            </Card.Body>
        </Card>
        </>
    )
}