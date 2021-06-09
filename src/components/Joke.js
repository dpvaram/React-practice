import React from "react"

class Joke extends React.Component{
  constructor(){
    super()

    this.state= {

      Brand: "Audi",
      Model: "A5",
      color: "Red"
    }
  }

  changeColor = () => {
    this.setState({color: "blue",})
  }

  changeModel = () => {
    this.setState({Model: "A4 Sports"})
  }

  componentDidMount(){
    setTimeout(() => {this.setState({color : "Dark Green"})},3000)
  }

  shouldComponentUpdate(){
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    document.getElementById("div1").innerHTML = "Note1:before the update, the color was" + " " + prevState.color
  }

  componentDidUpdate(){
    document.getElementById("div2").innerHTML = " Note2: update color is" + " " + this.state.color
  }
  render(){

    return(
      <div>
        <h1 style = {{backgroundColor : "lightblue"}}>My favourite car brand is {this.state.Brand} and model {this.state.Model}</h1>
        <h2> my second color option would be {this.state.color}</h2>
        <button type = "button" onClick={this.changeColor}> Change Color </button>
        <button type = "button" onClick={this.changeModel}> Change Model </button>
        <hr></hr>
        
        <div id= "div1" ></div>
        <div id= "div2"></div>
        <hr></hr>
        <form>
            <div>
                <h1> LOGIN PAGE</h1>
                <p>Username:</p>< input type = "text"/>
                
            </div>
        </form>
    

      </div>
    )
    
  }
}

export default Joke