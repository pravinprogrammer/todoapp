
import React,{useEffect } from 'react'

import {Jumbotron,Container,Button} from 'reactstrap'

const Home=()=>{

    var a = ['A','B','C','D'];
    let b = a;
    a.splice(0,1,'E','F');
    b.length = 0;

    console.log(a[0] + " "+ a[1]+ " " +b[0]+ " p length "+ a.length);

    useEffect(()=>{
        document.title = "Home"
},[]);

    return(
        <div>
                <Jumbotron className="text-center">
                    <h1>Welcome to Pravita's World</h1>
                    <p>The app belongs to Different aspects of Pravita's World like beauty tips,Skin care
                        Fashion tips, Hair Styles

                        and My TO-Do List
                    </p>
                    <Container>
                        <Button color="primary" outline>
                            Start Learning
                        </Button>
                    </Container>

                </Jumbotron>
        </div>
    )

}

export default Home