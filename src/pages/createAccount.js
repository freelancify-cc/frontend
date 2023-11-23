import React, { createElement, useState } from "react";
import { api } from "../api/api";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateAccount = ({ role }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [is_submitted, setSubmitted] = useState(false);
    const [is_error, setError] = useState(false);

    var navigate = useNavigate();

    const handleEmail = (e) => {
        console.debug('email changed ' + e.target.value);
        setEmail(e.target.value);
        setSubmitted(false);
    }

    const handlePassword = (e) => {
        console.debug('password changed ' + e.target.value);
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = (e) => {
        console.debug('submit clicked');
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        } else {
            api.post('api/user/register', {
                email: email,
                password: password,
                role: role
            },
                {
                    headers: {
                        'Access-Control-Allow-Origin': "*",
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    withCredentials: true,
                })
                .then(res => {
                    if (res.status === 200) {
                        setSubmitted(true);
                        localStorage.setItem(res.data?.user?.id)
                        role === 1 ? navigate("freelancer_create_profile") : navigate("employer_crcdeate_profile")
                    }
                })
            setError(false);
        }
    }

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: is_submitted ? '' : 'none',
                }}>
                <Alert key="success" variant="success">User {email} successfully registered!!</Alert>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: is_error ? '' : 'none',
                }}>
                <Alert key="danger" variant="danger">Please enter all the fields</Alert>
            </div>
        );
    };

    return (
        <Container style={{ width: '30%' }}>
            <Form className="text-left">
                <h3 className="fs-4 mt-4 mb-4 text-center fst-normal">User Registration</h3>
                <Form.Group className="mb-3">
                    <Form.Label class="text-white">Email Address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" size="md" placeholder="Email address" autoComplete="email" className="position-relative" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label class="text-white">Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" size="md" placeholder="Password" autoComplete="Current-password" className="position-relative" />
                </Form.Group>
                <div className="mb-3">
                    {errorMessage()}
                    {successMessage()}
                </div>
                <div className="d-grid gap-2">
                    <Button onClick={handleSubmit} variant="outline-dark" class="" size="md">Next</Button>
                </div>
            </Form>
        </Container>
    );
}

export default CreateAccount;
