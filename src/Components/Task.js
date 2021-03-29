import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button,CardFooter,Container, CardText
} from 'reactstrap'; 
import base_url from '../api/taskapi';
import Addtask from './Addtask';
import Updatetask from './Updatetask';
import { useHistory } from "react-router-dom";


const Task = ({task,update}) => {

    const history = useHistory()

    const updateTask = (id) => {
       console.log(id);
       history.push("/update-task",id);
    }

        const deleteTask =()=>{
           console.log(task.id);
           axios.delete(`${base_url}/delete/${task.id}`).then(
               (response)=>{
                    console.log(response);
                    toast.success("Task deleted successfully....");
                    update(task.id);
               },
               (error)=>{
                    console.log(error);
               }
           )
        }

       

        return(
            <Card className="text-center"> 
                <CardBody>
                    <CardSubtitle className="font-weight-bold">{task.title}</CardSubtitle>
                    <CardText>{task.description}</CardText>
                    <Container>
                        <Button onClick={()=>deleteTask()} color="danger">Delete</Button>
                        {/* <Button onClick={()=>updateTask()} color="warning ml-3">Update</Button> */}
                        <Button onClick={()=>updateTask(task.id)} color="warning ml-3" >Update</Button>
                    </Container>
                </CardBody>
            </Card>

        )

}

export default Task;