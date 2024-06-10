import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Card11 = () => {
    const [inputs, setInputs] = useState({
        title: "",
        price: "",
        image: ""
      });
    
      const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const addHandler = () => {
        console.log("button clicked");
        axios.post("http://localhost:3006/card11", inputs)
          .then((response) => {
            console.log(response.data);
            alert(response.data);
          })
          .catch((err) => console.log(err));
      };
  return (
    <div>
      <div style={{  marginTop: "100px", marginLeft:'500px' 
    //   background: 'url("https://c4.wallpaperflare.com/wallpaper/559/564/946/cuisine-food-india-indian-wallpaper-preview.jpg")',
    //   backgroundSize: 'cover',
    //   backdropFilter: 'blur(8px)',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   height: '100vh'
    }}>
      <Box
        height={400}
        width={250}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={5}
        p={9}
        bgcolor="InfoBackground" // Transparent background
        boxShadow={3} // 3D effect
        borderRadius={16} // Rounded corners
      >
        <Typography variant='h5' color="black" borderColor={"InactiveCaptionText"}>
       ADD CARD DETAILS
        </Typography>
        <TextField 
          label='Enter Food Title'
          variant='outlined'
          name='title'
          value={inputs.title}
          onChange={inputHandler}
        />
        <TextField
          label='Enter Food Price'
          variant='outlined'
          name='price'
          value={inputs.price}
          onChange={inputHandler}
        />
        <TextField
          label='Enter Food Image Link'
          variant='outlined'
          name='image'
          value={inputs.image}
          onChange={inputHandler}
        />

        <Button
          variant='contained'
          color="warning"
          onClick={addHandler}
          component={Link}
        //   to={'/Login'}
          style={{ textDecoration:'none', color:'black', fontWeight: 'revert-layer' }}
        >
          Submit
        </Button>

      </Box>
    </div>
    </div>
  )
}

export default Card11