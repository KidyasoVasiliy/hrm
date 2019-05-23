import React from "react";
import Container from "rsuite/lib/Container";
import Header from "rsuite/lib/Header";
import Navbar from "rsuite/lib/Navbar";
import Content from "rsuite/lib/Content";
import FlexboxGrid from "rsuite/lib/FlexboxGrid";
import Panel from "rsuite/lib/Panel";
import Form from "rsuite/lib/Form";
import FormGroup from "rsuite/lib/FormGroup";
import FormControl from "rsuite/lib/FormControl";
import ControlLabel from "rsuite/lib/ControlLabel";
import ButtonToolbar from "rsuite/lib/ButtonToolbar";
import Button from "rsuite/lib/Button";
import Footer from "rsuite/lib/Footer";

const Login = () => {
  return (
    <div className="show-fake-browser login-page">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
              <a className="navbar-brand logo">Brand</a>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form fluid>
                  <FormGroup>
                    <ControlLabel>Username or email address</ControlLabel>
                    <FormControl name="name" />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl name="password" type="password" />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button appearance="primary">Sign in</Button>
                      <Button appearance="link">Forgot password?</Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
        <Footer>Footer</Footer>
      </Container>
    </div>
  );
};

export default Login;
