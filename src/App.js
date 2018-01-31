import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #1d1d1d;
  color: white;
  font: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    padding: 1em;
  }
  & header {
    font-size: 2em;
  }
`;

const Pre = styled.pre`
  font-size: 1.5em;
  color: white;
  background: #587291;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <header>React boilerplate based on CRA</header>
        <div>
          This React boilerplate includes the support for firebase, redux,
          react-router-dom, styled-components etc
        </div>
        <Pre>
          {JSON.stringify(require("../package.json").dependencies, null, 2)}
        </Pre>
        <div>./components/Main is the entry/home page of application</div>
      </Container>
    );
  }
}

export default App;
