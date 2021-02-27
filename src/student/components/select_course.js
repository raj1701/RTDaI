
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert,Row } from "react-bootstrap"
import { db } from "../../firebase"
import { useAuth } from "../contexts/AuthContext"
import firebase from "firebase"
import { Link, useHistory } from "react-router-dom"
import Bench from './select_bench'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default function Courseid(){
    // const courseref = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [course,setcourse]=useState('');
    const [check, setCheck] = useState(true)
    
    const userobj = {
        student1: " ",
        student2: " ",
        student3: " ",
        student4: " "
    }
    let history =  useHistory();
    async function handleSubmit() {
            await localStorage.setItem('course',course)
            var path = "/select_bench"
            history.push(path)
        setLoading(false)
    }
    return(
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Select course id</h2>
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
                <Button className="btn btn-default w-100" onClick={handleSubmit} type="submit">
                Go to Course
                </Button>
                </div>
                </Row>
            </Card.Body>
        </Card>
        </>
    )
}