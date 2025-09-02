import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Email = () => {

    let [email,setEmail]=useState()
    let [check,setCheck]=useState('')
    let [pass,setPass]=useState()
    let [passcheck,setPassCheck]=useState('')


    function emailCheck(e){
        setEmail(e.target.value)
        setCheck('')
    }

    
function arr(cf){
    setPass(cf.target.value)
    setCheck('')
}




      function enterYourEmail(e){
        let pattern=/[a-z0-9_]+@(?<domain>[a-z]+)\.[a-z]{2,6}(\.[a-z]{2,6})?/ig
        let passPattern=/([a-zA-Z]@[0-9]+)/
        if(pattern.test(email) && passPattern.test(pass)){
             setCheck("valid login");
            
            
            
        }else{
         setCheck("InValid login");
                  

        
     }
}

    


  return (
    <div className='di1'>


<form>
        <input type='text' placeholder='Enter your Email' onChange={emailCheck} value={email}></input><br></br> <br></br>
        
        
       


        <input type='password' placeholder='Enter your Password' onChange={arr} value={pass}></input><br></br><br></br>
         <Button varient="info" onClick={enterYourEmail}>Submit</Button> 
         <p className='text-danger'>{check}</p>
        <p className='text-danger'>{passcheck}</p>


        </form>
        
 </div>
  )
}

export default Email