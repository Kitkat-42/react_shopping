/* eslint-disable*/
import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import "./App.css";
import data from "./data";

function Item(props) {
  return (
    <div className="col-md-4">
      ;
      <img src="" />
      <h4>{props.shoes[0].title} </h4>
      <p>
        {" "}
        {props.shoes[0].content} & {shoes[0].price}
      </p>
    </div>
  );
}

function App() {
  let [shoes, shoes변경] = useState(data);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div class="wallpaper">
        {/* <img src="./jidong.jpeg" alt="main"></img> */}
        <img src="./jidong.jpeg" alt="jidong" />
      </div>
      <Item shoes={shoes}></Item>
    </div>
  );
}

export default App;
