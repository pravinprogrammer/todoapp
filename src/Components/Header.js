import React from 'react'
import { Card, CardBody } from 'reactstrap';

const Header = () =>{
    return (
        <Card className="my-2 bg-warning" style={{height:60}}>
            <CardBody>
            <h4 className="text-center">Welcome To Pravita's World</h4>
            </CardBody>
        </Card>
       
    )
}
 export default Header;