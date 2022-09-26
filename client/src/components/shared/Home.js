import { useContext } from "react"
import Badge from "react-bootstrap/esm/Badge"
import { Link } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import Card from "../Card"

const Home = ()=>{
    
    let auth = useContext(AuthContext)
    if(auth.user){
        return (
            <Card>
                <Badge bg='dark'><h3>Welcome to dinda!</h3></Badge>
                <br></br>
                <br></br>

                <h5>
                A place to quickly find meals that you love.
                </h5>
            </Card>
        )
    }

    else{

        return (
            <Card>
            <div>
                <h1>Welcome to dinda! Login or Register to access more features!</h1>
               
               
                <Link to="/login"><Badge style={{color: 'white'}}><h4>Login</h4></Badge></Link>
                <br/>
                <br/>
    
    
                <Link to="/register"><Badge style={{color: 'white'}} ><h4>Register</h4></Badge></Link>
              
            </div>
            </Card>
        )
    }
} 
export default Home