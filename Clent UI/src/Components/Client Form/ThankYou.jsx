import React from "react";
import tick from '../Client Form/tick.gif'

const ThankYou =()=>{
    return(
        <>
        <div style={{marginTop:'5%',marginLeft:'25%'}}>
           <img src={tick} width={'35%'} style={{marginLeft:'14%'}}/>
           <p style={{fontSize:18}}>The form has been submitted to the upper officers and is currently under review</p>
        </div>
        </>
    )
}

export default ThankYou;