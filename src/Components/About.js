import React , {useEffect} from 'react'


const About =() =>{
    useEffect(()=>{
        document.title = "About"
},[]);

    return(
        <h2>
            We are here to help you all.....stay tune with us.
        </h2>
    )
}

export default About;