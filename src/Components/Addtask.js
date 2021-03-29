
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'
import base_url from '../api/taskapi';

const Addtask = () => {

    useEffect(() => {
        document.title = "Add Task"
    }, []);

    const [task, setTasks] = useState({});

    // function to add task 
    const submitHandler = (e) => {
        console.log(task);
        postTasksToServer(task);        
        e.preventDefault();
    }

    const postTasksToServer = (data) => {
        axios.post(`${base_url}/tasks`,data).then(
            (response) => { 
                    console.log(response);
                    toast.success("Task Saved Successfully...");
                    setTasks({id:"",title:"",description:""});
            },
            (error) => {
                    console.log(error);
            }
        );
    }

    // useEffect(()=>{
    //     submitHandler();
    // },[])

    return (
        <Fragment>
            <h1 className="text-center my-3"> Fill Task Details</h1>
            <Form onSubmit={submitHandler}>
                <FormGroup>
                    <label for="userId">Task Id</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                        onChange={(e) => {
                            setTasks({ ...task, id: e.target.value })
                        }}
                    />

                </FormGroup>

                <FormGroup>
                    <label for="title">Task Title</label>
                    <Input
                        type="text"
                        placeholder="Enter Title here"
                        name="title"
                        id="title"
                        onChange={(e) => {
                            setTasks({ ...task, title: e.target.value })
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="description">Task Description</label>
                    <Input
                        type="textarea"
                        placeholder="Enter Description here"
                        name="description"
                        id="description"
                        style={{ height: 150 }}
                        onChange={(e) => {
                            setTasks({ ...task, description: e.target.value })
                        }}
                    />
                </FormGroup>
                <Container className="text-center ">
                    <Button type="submit" color="success">Add Task</Button>
                    <Button type="reset" color="warning ml-3 ">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default Addtask;