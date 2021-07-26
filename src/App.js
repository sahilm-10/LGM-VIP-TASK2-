// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
 import { Navbar,Nav,Container,Spinner } from "react-bootstrap";


class App extends Component{
  constructor(props) {
    super(props);
    this.state ={
      clicked:false,
      firstfetched:false,
    
      url:'https://reqres.in/api/users?page=',
      userData1:null,
      userData2:null,
    };
      

  // this.apiData = this.apiData.bind(this)
  }
  async fetchFunction(){
    this.setState({clicked:true});
    let response1 = await fetch(this.state.url+1);
    let data1 = await response1.json();
    setTimeout(() => {
      this.setState({userData1:data1.data,loading1:false,firstfetched:true});
      console.log('helllo1')
      
    }, 5000);

    // let response2 = await fetch(this.state.url+2);
    // let data2 = await response2.json();
    // setTimeout(() => {
    //   this.setState({userData2:data2.data,loading2:false});
    //   console.log('helllo2')

    // }, 10000);
  }

  show(){
   if(this.state.clicked){
     if(this.state.userData1 != null){
      <Spinner animation="border" />
      return(
        
        <Data usrData={this.state.userData1}/>);
      
    }
  }
     }
  

  // if(this.state.userData1 === null){
  //   alert('data not recieved yet')
  // }else{
  //   return(
  //   <Data usrData={this.state.userData1}/>);
  // }
 


  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light">
  <Container>
<Navbar.Brand href="#home">LETSGROWMORE</Navbar.Brand>
<Nav className="me-auto">

  <div>
      <button class="btn btn-secondary main-button " onClick={()=>this.fetchFunction()} >Fetch Users </button>
      </div>
</Nav>
</Container>
</Navbar>
      

      
      {this.show()}
      </React.Fragment>
  )
      }

}
export default App;