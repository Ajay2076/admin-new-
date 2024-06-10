import { BorderColor } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Change import to useNavigate

export const Login = () => {
  const [oname, setOname] = useState("");
  const [opass, setOpass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Change useHistory to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3006/login', {
        oname,
        opass
      });
      if (response.data === "success") {
        setMessage("Login successful");
        navigate('/Home'); // Change history.push to navigate
      } else {
        setMessage("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{marginTop:"80px" ,backgroundImage: 'url("https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM=")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw', // Make the component width full viewport width
    height: '100vh', 
    position: 'fixed',}}>
    


      
      
 
      <Box
        style={{ marginTop: "100px", marginLeft: '600px', }}
       
        height={430}
        width={350}
        my={4}
        display="drop"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '10px solid black',  backgroundColor: '  rgba(300, 300, 355, 0.9)', }}

      >
        <br></br><br></br>
        <Typography variant="h4"> Login Page</Typography><br></br>
        <form onSubmit={handleSubmit} style={{ color:'#000000'}}>
          <TextField
            label="Username"
            variant='outlined'
           
            value={oname}
           
            onChange={(e) => setOname(e.target.value)}
           
          /><br></br><br></br>
          <TextField
            label="Enter password"
            type='password'
            variant='outlined'
            value={opass}
            onChange={(e) => setOpass(e.target.value)}
          /><br></br><br></br>
          <Button type="submit" variant='contained' color='success'>Login
            {/* <Link to='/Cards' style={{ textDecoration: "none", color: "black" }}>Login</Link> */}
          </Button><br></br><br></br>
          Not a Member ? <Link to='/Signup'style={{textDecoration:"none",color:"sandybrown"}}>Sign Up</Link> 
        </form>
        {message && <Typography>{message}</Typography>}
        <br></br><br></br>
      </Box>
    </div>
  );
}

export default Login;
