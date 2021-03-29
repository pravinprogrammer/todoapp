import React, { useState,useEffect } from 'react'
import Task from './Task'
import base_url from '../api/taskapi'
import axios from 'axios'
import { toast } from 'react-toastify'

const Alltasks=()=>{
        useEffect(()=>{
                document.title = "All tasks"
        },[]);

        // function to get all tasks from server
        const getAllTasksFromServer = ()=>{
            axios.get(`${base_url}/tasks`).then(
                (response) =>{
                        //success
                        console.log(response);
                        setTask(response.data);
                        toast.success("Tasks has been loaded...",{
                            position:"bottom-left"
                        });
                },
                (error)=>{
                        //error
                    console.log(error)
                }
            )
        }
       

        //calling loading task function

        useEffect(()=>{
            getAllTasksFromServer();
        }, []);

        const updateTasks = (id) =>{
            setTask(tasks.filter((c)=> c.id != id));
        }

    const [tasks,setTask] = useState([])

    return(
        <div>
            <h1>All Tasks</h1>
            <p1>List Of Tasks </p1>
            {

               tasks.length > 0 ? tasks.map ((item) => (
                   <Task task={item} update={updateTasks} />
               )) : "No Tasks Available"
            }
        </div>
    )

}
export default Alltasks;