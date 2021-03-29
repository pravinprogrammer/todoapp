import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Menu =()=>{
    return(

        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-task" action>Add Task</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-task" action>View Tasks</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>About US</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact US</Link>
        </ListGroup>
    )


}

export default Menu;