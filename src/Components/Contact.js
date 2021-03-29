import React, {useEffect} from 'react'

const Contact =()=>{
    useEffect(()=>{
        document.title = "Contact"
},[]);
    return(
        <h2>
           <p>
           Cell : 9096126167/9370886186            
            </p> 
            <p>
            Address: pravita's world
            </p>
        </h2>
    )
}

export default Contact;