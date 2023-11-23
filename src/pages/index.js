import { React, useEffect, useState } from 'react';
import { ListGroup, Button, CardGroup, Container, Card, Row, Col, Form, FormControl } from 'react-bootstrap';
import { api } from '../api/api';
import card from '../assets/img/homecard.png'
import cart from '../assets/img/favicon-32x32.png';
import { Link } from 'react-router-dom';
import "./index.css";

const Landing = () => {
  return (
    <Container>
      <div class="nav">
        <img src="src\assets\nobg-logo.png" alt="logo" />
        <div class="navContent">
          <a href="./login" class="login">Login</a>
          <a href="./choose_registration" class="register">Register</a>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <h1>Unlock your potential, find your passion and join us in the freelancing adventure !</h1>
      <h2>Welcome to freelancify</h2>
      <br /><br /><br />
      <div class="slider">
        <h3>Popular services</h3>
        <div class="sliderContent">
          <div class="item">
            <div class="head">
              <img src="src/assets/one.svg" alt="" />
              <label>Front-end</label>
            </div>
            <p>
              Front-end developers shape user-friendly digital interfaces, merging design with HTML, CSS, and JavaScript for seamless, engaging web experiences.
            </p>
          </div>
          <div class="item">
            <div class="head">
              <img src="src/assets/two.svg" alt="" />
              <label>Back-end</label>
            </div>
            <p>

              Back-end manages server-side operations, databases, and logic, ensuring data storage, retrieval, and processing for efficient functionality in web applications.        </p>
          </div>
          <div class="item">
            <div class="head">
              <img src="src/assets/three.svg" alt="" />
              <label>Deployment</label>
            </div>
            <p>
              Development transforms ideas into code, integration unifies components, back-end manages data, and deployment brings the final product to users efficiently.        </p>
          </div>
          <div class="item">
            <div class="head">
              <img src="src/assets/four.svg" alt="" />
              <label>Integration</label>
            </div>
            <p>

              Integration connects diverse components into a unified system, enhancing efficiency and collaboration for seamless interactions and optimized performance.        </p>
          </div>
          <div class="item">
            <div class="head">
              <img src="src/assets/five.svg" alt="" />
              <label>UI / UX</label>
            </div>
            <p>
              UI/UX focuses on creating intuitive, visually appealing interfaces, emphasizing user satisfaction through seamless interactions, effective navigation, and aesthetic design elements.</p>
          </div>
        </div>
      </div>


    </Container>
  );
};

export default Landing;
