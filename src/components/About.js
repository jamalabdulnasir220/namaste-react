import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount() {

  }

  render() {


    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is namaste React web series</h2>
        <UserClass name="Abdul Nasir Jamal" location="Kumasi in Ghana" />
      </div>
    );
  }
}

export default About;
