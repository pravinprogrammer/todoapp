import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from 'reactstrap'
import {ToastContainer,toast} from 'react-toastify'
import Home from './Components/Home'
import Task from './Components/Task'
import Alltasks from './Components/Alltasks'
import Addtask from './Components/Addtask';
import Header from './Components/Header';
import Menu from './Components/Menu';

import {BrowserRouter, BrowserRouter as Router , Route} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Updatetask from './Components/Updatetask';
function App() {

const buttonHandle = ()=>{
  toast.success("done",{
    position:'top-center'
  });
}


  return (
    <div>
      <Router>
      <ToastContainer/>      
      <Container>
      <Header />
        <Row>
          <Col md={4}> 
            <Menu/>
           </Col>
          <Col md={8}> 
                <Route path="/" component={Home} exact/>
                <Route path="/add-task" component={Addtask} exact/>
                <Route path="/view-task" component={Alltasks} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/update-task" component={Updatetask}/>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
    
   
  );
}

export default App;
