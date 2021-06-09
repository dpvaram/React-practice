import React from "react"

function Header(){

    const firstName ="Durga"
    const lastName = " Praveen"

    const styles = {
            color:"greenyellow",
            
    
    }
    return(

   <header className="navbar" style={styles}>Hello my name is {`${firstName} ${lastName}`} . This is my TO DO LIST!</header> 
       
    )
}
export default Header


