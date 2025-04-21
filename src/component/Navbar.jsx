
import React, { useState } from 'react';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Tab, Tabs, Toolbar} from '@mui/material';
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [openNav, setOpenNav] = useState(false)

  const loginUser = JSON.parse(localStorage.getItem("UserLogin"));
  const navigate = useNavigate()

  const handleLogout = () => {
    if(loginUser){
      localStorage.removeItem("UserLogin")
      alert("logout Successfully")
    }
   navigate("/signin")
  }

  const handleNabBar = (open) => {
    setOpenNav(open)
  }
  return (
    <AppBar style={{height:"80px", display:"flex", justifyContent:"center",position:"sticky",top:"0px"}} className='bg-[#000000e5]'>
      <Toolbar className='flex justify-between'>
        <div className="title">
          <Link to="/">
            <img src="https://elektrix.wpengine.com/wp-content/themes/elektrix/assets/images/light-logo.svg" alt="" className='w-[150px]'/>
          </Link>
        </div>

        <IconButton className='ml-auto' color='inherit' onClick={() => handleNabBar(true)} sx={{display:{xs:'block', md:'none'}}}>
          <FaBars/>
        </IconButton> 

       <Tabs sx={{display:{xs:"none", md:"block"}}} >
        <div style={{color:"white",marginRight:"330px",display:"flex",gap:"20px", marginTop:"8px"}}>
          <Tab label="Home" to="/" component={Link}  textColor='white'/>
          <Tab label="About Us" to="/about" component={Link}  textColor='white'/>
          <Tab label="Contact Us" to="/contact" component={Link}  textColor='white'/>
        </div>
        <div>
        {
            loginUser ? (
              <div className='flex items-center gap-2 mt-2'> 
                <button onClick={handleLogout} ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oYa9BljpcyhfIwVizBrEuo4HjsWq1mNzw&s" alt="" className='w-12 rounded-full bg-black'/></button>
              <span className='text-[18px]'>{loginUser.userName}</span>
            </div>
            ):(
              <div className='mt-2'>
               <Button variant='contained' onClick={() => navigate("signin")} className='me-3'>Sign In</Button>
               {/* <Button variant='contained' onClick={() => navigate("signup")}>Sign Up</Button> */}
              </div>
            )
          } 
        </div>
      </Tabs>

      <Drawer open={openNav} onClose={() => setOpenNav(false)}>
        <Box sx={{ width: 250 }} fontSize="20px" >
        <List>
          <ListItemButton onClick={() => setOpenNav(false)} to="/" component={Link}>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton onClick={() => setOpenNav(false)} to="/about" component={Link}>
            <ListItemText primary="About Us" />
          </ListItemButton>


          <ListItemButton onClick={() => setOpenNav(false)} to="/contact" component={Link}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>
          <div style={{marginTop:"10px"}}>
          {
            loginUser ? (
              <div style={{display:"flex",alignItems:"center",gap:"10px"}}> 
                <button onClick={handleLogout} style={{width:"60px",marginLeft:"10px"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oYa9BljpcyhfIwVizBrEuo4HjsWq1mNzw&s" alt="" /></button>
              <span className='text-[20px] '>{loginUser.userName}</span>
            </div>
            ):(
              <div style={{display:"flex", gap:"10px", marginLeft:"13px"}} onClick={() => setOpenNav(false)}>
               <Button variant='contained' onClick={() => navigate("signin")}>Sign In</Button>
               <Button variant='contained' onClick={() => navigate("signup")}>Sign Up</Button>
              </div>
             
            )
          } 
          </div>
        </Box>
      </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
