import React, { memo, useRef } from "react";
import { Form, Button } from "react-bootstrap";

import './FormInput.css'

const FormInput = props => {

    const nameRef = useRef('')
    const emailRef = useRef('')
    const phoneNumberRef = useRef('')

    const formHandler = async (event) => {
        event.preventDefault()

        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phoneNumber: phoneNumberRef.current.value
        }

        nameRef.current.value = ""
        emailRef.current.value = ''
        phoneNumberRef.current.value = ''

        const response = await fetch(`https://react-http-8fcff-default-rtdb.firebaseio.com/user.json`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })

        const data = response.json()


        console.log('user' + data)
    }

    return <>
        <h3>Contact Us</h3>
        <div className="formContainer">

            <div className="formDiv">
                <Form onSubmit={formHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 xs-12" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="text" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control ref={phoneNumberRef} type="number" placeholder="Enter Phone Number" />
                    </Form.Group>
                    <Button variant="info" type="submit">Submit</Button>{' '}

                </Form>
            </div>
        </div>
    </>
}

export default memo(FormInput)