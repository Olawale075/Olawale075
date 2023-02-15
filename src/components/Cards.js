import React, { Component } from 'react'

import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import background from "../assets/img1.png";
import M from "../assets/img4.png";
import Card from "react-bootstrap/Card";
export class Cards extends Component {
    constructor() {
        super();
    this.state =  {
          sport: ''
        };
        }
        myArrany = [ 'Programer','WebDeveloper','SoftwearDeveloper']
        componentDidMount(){
          setInterval(() =>{ this.setState({sport: this.myArrany[Math.floor(Math.random()*this.myArrany.length)]});},3000)}
  render() {
    
    return (
      <div> <div>
      
      <div
        class="p-4  mb-0 mt-1 style={{ backgroundImage: `url(${background}) rounded-5"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          
          width:"100%",
          justifyContent:"cover"
          
          
        }}
      >
        <div class="container-fluid py-9 pl-0 text-light text-aline-center">
          <h1 class="display-5 fw-bold text-dark">Hello!!!</h1>
          <h3 class="display-5 fw-bold text-dark">
            <em>
              <p>I'm Ola</p>A <span>{this.state.sport}</span>
            </em>
          </h3><></>
          <p class="color-dark text-dark">
          <strong>Working to make a great change </strong>
          </p>
          <Button href="contact" className="btn btn-light-info md-3">Contact Us</Button> 
        </div>
      </div>
    </div></div>
    )
  }
}

export default Cards