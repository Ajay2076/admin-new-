import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Tdsp = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the server endpoint
    axios.get('http://localhost:3006/view1')
      .then(response => {
        setData(response.data); // Set fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [updateId, setUpdateId] = useState(null);
  const [updateData, setUpdateData] = useState({});

  const updateValues = (val) => {
    setUpdateId(val._id);
    setUpdateData({ fname: val.fname, fprice: val.fprice, imageUrl: val.imageUrl });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3006/edit1/${updateId}`, updateData)
      .then((response) => {
        alert(response.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3006/remove1/${id}`)
      .then((response) => {
        alert(response.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ margin: '4%' }}>
      <Typography color='CaptionText'variant= 'h3'>Food Update Delete Items</Typography><br />

      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {data.map((val, i) => (
          <Card key={i} sx={{ width: 345, height: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={val.image || val.imageUrl} // Check if image exists in data
                alt={val.title || val.fname} // Check if title exists in data
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {val.title || val.fname} {/* Check if title exists in data */}
                </Typography>
                <Typography  variant="h5" color="WindowText">
                  Price: {val.price || val.fprice} {/* Check if price exists in data */}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => updateValues(val)} size="large" variant='contained' color='primary'>
              Update
            </Button>
            <Button onClick={() => handleDelete(val._id || val._id)} size="large" variant='contained' color='warning'>
              Delete
            </Button>
          </Card>
        ))}
      </Box>

      {/* Update Form */}
      {updateId && (
        <div>
          <Typography variant='h3'color={'dodgerblue'}>Update Item</Typography>
          <form style={{ backgroundColor: 'white' }}>
            <TextField
              label="FOOD NAME"
              name="title"
              value={updateData.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="FOOD PRICE"
              name="price"
              value={updateData.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="FOOD IMAGE"
              name="image"
              value={updateData.image}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleUpdate} variant='contained' color='success'>
              Update
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Tdsp ;