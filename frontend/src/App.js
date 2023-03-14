import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes ,
  Route, Link } from "react-router-dom";

import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
 
function App() {


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} 
                  className="nav-link text-white">
                  React MERN CRUD App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/Add"} 
                    className="nav-link">
                    Create User
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/UserList"} 
                    className="nav-link">
                    User List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
       <Routes>
         <Route path="/" element={<UserList/>}/>
         <Route path="userlist" element={<UserList/>}/>
      <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
     
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );






}
 
export default App;