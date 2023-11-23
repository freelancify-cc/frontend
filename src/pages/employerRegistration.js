import React, { useState } from "react";
import { api } from "../api/api";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = ({ id }) => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('2004-02-19');

    const [is_submitted, setSubmitted] = useState(false);
    const [is_error, setError] = useState(false);

    var navigate = useNavigate();

    const handleUsername = (e) => {
        console.debug('username changed ' + e.target.value);
        setUsername(e.target.value);
        setSubmitted(false);
    }

    const handleFistName = (e) => {
        console.debug('firstname changed ' + e.target.value);
        setFirstName(e.target.value);
        setSubmitted(false);
    }

    const handleSecondName = (e) => {
        console.debug('second name changed ');
        setSecondName(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = (e) => {
        console.debug('submit clicked');
        e.preventDefault();
        if (username === '' || firstName === '' || secondName === '' || dateOfBirth === '') {
            setError(true);
        } else {
            let data = {
                id: id,
                username: username,
                first_name: firstName,
                second_name: secondName,
                date_of_birth: dateOfBirth,
                profile_picture_url: "https://pcire",
            }
            api.post('/api/user/create_profile',
                data, {
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                withCredentials: true,
            })
                .then(res => {
                    if (res.status === 200) {
                        setSubmitted(true);
                        navigate('/login');
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
                <Alert key="success" variant="success">User {username} successfully registered!!</Alert>
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
                <h3 className="fs-4 mt-4 mb-4 text-center">User Registration</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={handleUsername} type="text" size="md" placeholder=" Your username" className="position-relative" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={handleFistName} type="text" size="md" placeholder="First Name" className="position-relative" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={handleSecondName} type="email" size="md" placeholder="Second Name" className="position-relative" />
                </Form.Group>
                <div className="mb-3">
                    {errorMessage()}
                    {successMessage()}
                </div>
                <div className="d-grid gap-2">
                    <Button onClick={handleSubmit} variant="outline-dark" size="md">Create Profile</Button>
                </div>
            </Form>
        </Container>
    );
}

export default Register;
