import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu, Button } from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useSelector } from "react-redux";

export default function NavBar({ setFormOpen }) {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/hazap.png" alt="logo" style={{ marginRight: 13 }} />
          Hazap
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Event" />
        {/* <Menu.Item as={NavLink} to="/sandbox" name="Test" /> */}
        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}
