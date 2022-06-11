import logo from './logo.svg';
import './App.css';
import React from "react";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {api: "", input: "", output: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({api: event.target.value});
  }

  handleChangeTwo(event) {
    this.setState({code: event.target.value});
  }

  handleSubmit = async (event) =>{
    console.log("test");
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: this.state.api,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: this.state.input,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    event.preventDefault();
  }


  render(){
  return (
    <div className="App">
      <header className="App-header">
      <div className="Input" style={{display: 'flex'}}>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
        <label>
          Code: 
          <input type="text" value={this.state.api} onChange={this.handleChange} />
        </label>
        </div>
        <div>
        <label>
          Input:
          <input type="text" value={this.state.code} onChange={this.handleChangeTwo} />
        </label>
        </div>

        <input type="submit" value="Submit" />
        </form>

          </div>

          {/* <h1>{code}</h1> */}
      </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
