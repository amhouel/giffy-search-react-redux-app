import React, { Component } from 'react';
import styled from 'styled-components';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       giphies:[],
       search: ''
    }
  }
  
  handleChange = event => {
    event.preventDefault();
    this.setState({
      search: event.target.value
    })
  }

  render() {

    const Wrapper = styled.div`
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 30px;
        background-color: black
        text-align: center;
    `;
    
    const Title = styled.h1`
        font-size: 50px;
        text-align: center;
        color: palevioletred;    
    `;

    const Input = styled.input`
        width: 50%;
        margin: 10px;
        padding: 5px;
        font-size: 20px;
        outline: none;
        color: palevioletred;
    `;

    return (
      <Wrapper className="App">
        <Title>Search Giphies here 🧐</Title>
        <Input type='text' value={this.state.search} placeholder='Type here...' onChange={this.handleChange}/>
      </Wrapper>
    );
  }
}

export default App;
