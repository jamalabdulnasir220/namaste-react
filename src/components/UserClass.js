import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
          userInfo: {
            name: "",
            login: "",
            avatar_url: ""
          }
        }
        
    }

   async componentDidMount() {
    const data = await fetch("https://api.github.com/users/jamalabdulnasir220");
    const json = await data.json();
    console.log(json)
    this.setState({
      userInfo: json
    })   
    }

  render() {

    const {name, login, avatar_url} = this.state.userInfo
    
    return (
      <div className="user-card">
        <img src={avatar_url} width={"50px"} style={{borderRadius: "50%"}}/>
        <h2>Name: {name}</h2>
        <h3>Login: {login}</h3>
        <h4>Contact: @jamalabdulnasir220</h4>
      </div>
    );
  }
}

export default UserClass
