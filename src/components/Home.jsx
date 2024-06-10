import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <backgroundfootter >

<div   class="footer-layout" style={{backgroundColor:'black' ,width:'2000px' ,  height:'180px',marginTop:"580px"}} >
<Box>

  <div  variant='h2'
    style={{color:'white',paddingTop:'20px' ,marginRight:'1000px'}} >
       <Button type="text" variant='text'style={{color:'white'}} >About Us</Button> 
  </div>
  <div  variant='h2'
    style={{color:'white',marginTop:'-36px' ,marginLeft:'-500px'}}>
        <Button type="text" variant='text'style={{color:'white'}} ><Link to='/Dash'style={{textDecoration:"none",color:"white"}}>Contact Us
</Link></Button> 
  </div>

  <div  variant='h2'
    style={{color:'white',marginTop:'-37px' ,marginLeft:'50px'}}>
      <Button type="text" variant='text'style={{color:'white'}} >Help</Button>
  </div>
<div  variant='h2'
    style={{color:'white',marginTop:'50px' ,marginRight:'1400px'}}>
      <Button type="text" variant='contained'style={{color:'white',width:'180px',letterSpacing:'8px'}} ><Link to='/Feedbackview'style={{textDecoration:"none",color:'black'}}>Feedback
</Link></Button>
</div>
</Box>
  </div>
</backgroundfootter>
   
  )
}

export default Home