import React from "react";
import { Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div>
      <Nav className="justify-content-center background-dark" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="font" href="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="font" href="/NFTseries">
            NFT Series
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="font" eventKey="link-2">
            News
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="font" eventKey="link-2">
            Story
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="font" eventKey="link-2">
            Claim
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="font" eventKey="link-2">
            About{" "}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
