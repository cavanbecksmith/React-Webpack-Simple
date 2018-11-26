import React, {Component} from "react";
import ReactDOM from "react-dom";
import Form from './components/Form.jsx';
import Banner from './components/Banner.jsx';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
      	<Banner text="React Form API Test"/>
        <Form/>
      </div>
    );
  }
}


ReactDOM.render(     
  <App />,
  document.getElementById('root')        
);