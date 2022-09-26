
import Badge from "react-bootstrap/esm/Badge";
import { Link, Outlet } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "react-bootstrap/esm/Button";



const NavBar = ()=>{
    // if (user)=>  logout 
    // if (!user)=>  login/register 

    const auth = useContext(AuthContext)
    
    const renderLeftNav = ()=>{

      if(auth.user){
        return  (
          <>
          <Badge onClick={auth.handleLogout }>Logout</Badge>







            </>  
            )
         }
        return (
          <>




          {/* <Badge style={{color: 'white'}} href="/register">Register</Badge> */}
          <Badge><Link to ='/register' style={{color: 'white'}}>Register </Link></Badge>

        
                      
           </>

        )
  }

  const renderProfile = ()=>{

    if(auth.user){
      return  (
        <>
        <Badge><Link to ='/profile' style={{color: 'white'}}> Profile </Link></Badge>

          </>  
          )
       }
      return (
        <>
            <Badge><Link to ='/login' style={{color: 'white'}}>Login </Link></Badge>

         </>

      )
}


const renderPayment= ()=>{

  {
    return  (
      <>
      <Badge><Link to ='/payment' style={{color: 'white'}}> Payment </Link></Badge>

        </>  
        )
     }
    return (
      <>
       </>

    )
}

    // const renderLeft = ()=>{
    //     if( auth.user) {
    //         return (
    //             <NavDropdown.Item style={{color: 'white'}} href="/"><Badge>Home</Badge></NavDropdown.Item>123
    //         )
    //     }
    // }
    return (

        <div>
             <Navbar sticky="top" variant="dark" bg="dark"  expand='lg'>
  <Container fluid>
    <Navbar.Brand href="/">dinda</Navbar.Brand>

        <NavDropdown 
          id="nav-dropdown-dark-example"
          align={{ sm: 'end' }}
          title="Menu"
          menuVariant="dark"
        >


          <NavDropdown.Item>{renderProfile()}</NavDropdown.Item>
          <NavDropdown.Item style={{color: 'white'}} href="/"><Badge>Home</Badge></NavDropdown.Item>
          <NavDropdown.Item>{renderPayment()}</NavDropdown.Item>
          <NavDropdown.Item>{renderLeftNav()}</NavDropdown.Item>




          {/* <NavDropdown.Item><Badge onClick={auth.handleLogout } >Logout</Badge></NavDropdown.Item>

          <NavDropdown.Item style={{color: 'white'}} href="/"><Badge>Home</Badge></NavDropdown.Item> */}
              
          
         
        </NavDropdown>


  </Container>
</Navbar>

        </div>
    )
} 
export default NavBar