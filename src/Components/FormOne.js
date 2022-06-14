import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../Styles/index.scss';
import Table from 'react-bootstrap/Table'

let FormOne = ()=>{

  const [user,setUser] = useState({
    email:"",
    password:"",
    address:"",
    state:"",
    pincode:""
  })
  
const[record,setRecords]=useState([]);
  
 
let handler=(e)=>{
let name=e.target.name;
let value=e.target.value;

  console.log(name,value);

  setUser({...user,[name]:value})
}

let submitHundle=(e)=>{
e.preventDefault();



let newRecord = {...user,id:new Date().getTime().toString()}

let {email,password,address,state,pincode} = user;

email !== "" && password!=="" && address !=="" && state!=="" && pincode !=="" ? setRecords([...record,newRecord]):alert("please fill the value");

setUser({ email:"",
password:"",
address:"",
state:"",
pincode:""})


}

  return(




<>
<div id="form">


    <Form onSubmit={submitHundle}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handler}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handler}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" name="address" value={user.address} onChange={handler}/>
      </Form.Group>

    
      <Row className="mb-3">
  

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." name="state" value={user.state} onChange={handler}>
            <option>Choose...</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Goa</option>
            <option>UP</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="number" placeholder="Zip" name="pincode" value={user.pincode} onChange={handler}/>
        </Form.Group>
      </Row>

    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


</div>



    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Password</th>
          <th>Address</th>
          <th>State</th>
          <th>Pincode</th>
        </tr>
      </thead>
      <tbody>
        

        {

          record.map((data)=>{
            let {id,email,password,address,state,pincode}=data;

            return(

              <>
                 <tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{address}</td>
            <td>{state}</td>
            <td>{pincode}</td>
          </tr>
              </>
            )
         
          })
        }
        
      
      </tbody>
    </Table>




</>

);

}


export default FormOne;