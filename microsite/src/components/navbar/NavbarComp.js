import React, { Component } from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import "./NavbarComp.css";

import logoDown from "../../assets/images/logo.png";
import logoTop from "../../assets/images/logo@2x.png";

export default class NavbarComp extends Component {
  componentDidMount() {
    var topDiv = document.getElementById("topDiv");
    var downDiv = document.getElementById("downDiv");
    var blueBar = document.getElementById("blueBar");
    var blueBarButton1 = document.getElementById("blueBarButton1");
    var blueBarButton2 = document.getElementById("blueBarButton2");

    window.addEventListener("scroll", function(event) {
      event.preventDefault();

      if (window.scrollY <= 450) {
        topDiv.style.display = "block";
        downDiv.style.display = "none";
        blueBar.style.display = "none";
      } else {
        topDiv.style.display = "none";
        downDiv.style.display = "block";
        blueBar.style.display = "block";
      }
      if (window.scrollY <= 1802) {
        blueBarButton1.style.background='#11A749'
        blueBarButton2.style.background='transparent'
      }
      else{
        blueBarButton1.style.background='transparent'
        blueBarButton2.style.background='#11A749'
      }
    });
  }

  render() {
    return (
      <div>
        <div id="downDiv" style={{ display: "none" }}>
          <Navbar
            fixed="top"
            expand="md"
            style={{
              background: " white"
            }}
          >
                        <div className="topBarPad">

            <NavbarBrand href="/">
              <img id = "img" src={logoDown} alt="" />
            </NavbarBrand>

            <div className="nav">
              <NavItem>
                <NavLink style={{ color: "#707070" }} href="/home">
                  HOME
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink style={{ color: "#707070" }} href="#/capabilities">
                  CAPABILITIES
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink style={{ color: "#707070" }} href="/">
                  CUSTOMERS
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink style={{ color: "#707070" }} href="/">
                  MEET OUR TEAM
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  style={{
                    color: "#25387D",
                    fontFamily: "Bold 12px/15px TT Norms"
                  }}
                  href="/"
                >
                  INSIGHTS
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink style={{ color: "#707070" }} href="/">
                  ASSETS
                </NavLink>
              </NavItem>
            </div>
            </div>
          </Navbar>

          {/* <Navbar expand="md" className="blueBar">
            <div className="nav">
              <NavItem>
                <NavLink style={{ color: "white" }} href="/">
                  OUR INSIGHTS
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink style={{ color: "white" }} href="/">
                  BLOGS
                </NavLink>
              </NavItem>
            </div>
          </Navbar> */}
        </div>

        <div id="topDiv">
          <Navbar
            fixed="top"
            expand="md"
            style={{
              backgroundImage:
                "linear-gradient( rgba(0,51,160,1), rgba(0,51,160,0))"
            }}
          >
                        <div className=" topBarPad">

            <NavbarBrand href="/">
              <img id = "img" src={logoTop} alt="" />
            </NavbarBrand>

            <div className="nav">
              <NavItem>
                <NavLink href="/home">HOME</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#/capabilities">CAPABILITIES</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">CUSTOMERS</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">MEET OUR TEAM</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">INSIGHTS</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">ASSETS</NavLink>
              </NavItem>
            </div>
            </div>
          </Navbar>
        </div>

        <div id="blueBar" style={{ display: "none" }}>
          <Navbar fixed="top" expand="md" className="blueBar">
            <div className="nav blueBarNav">
              <NavItem id="blueBarButton1" >
                <NavLink style={{ color: "white" }} href="/">
                  OUR INSIGHTS
                </NavLink>
              </NavItem>

              <NavItem id="blueBarButton2" >
                <NavLink style={{ color: "white" }} href="/">
                  BLOGS
                </NavLink>
              </NavItem>
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}
