import React from "react";

class LoginFrom extends React.Component {
constructor (props) {
    super(props)
        this.state={
          title: "",
          pas: "",
        }
}
onChangText(event){
    if(event.target.value === "Elyorbek"){
        this.setState({title: "ismingiz to'g'ri"})
    }else this.setState({title: "ismingiz xato"})
}

onChangPas(event){
    if(event.target.value == "900271606"){
        this.setState({pas: "parolingiz to'g'ri"})
    }else this.setState({pas: "parolingiz xato"})
}

    render(){
        return(
            <div>
            <center>
            <div className="main">
            <h2>Login: {this.state.title}</h2>
            <input onChange={(event)=>{this.onChangText(event)}} type="text" id="username" name="username" required />
            <h2>Parol: {this.state.pas}</h2>
            <input onChange={(event)=>{this.onChangPas(event)}} type="password" id="password" name="password" required />
            <button>Login</button>
            </div>
            </center>
            </div>  
            )
        }
    }
    
export default LoginFrom;