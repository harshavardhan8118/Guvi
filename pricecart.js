import React from 'react';
import './pricecart.css';
import img from './image.png';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box, Typography, Grid, Stack, Rating, Badge, InputLabel,FormControl} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

export default function App() {
  return (
    <div style={{ padding: '2px', width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ padding: '50px', minWidth: 100 }}>Start Bootstrap</Typography>
        <Typography sx={{ minWidth: 100 }}>Home</Typography>
        <Typography sx={{ minWidth: 100 }}>About</Typography>
        <MenuItem >
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Shop</InputLabel>
        <Select label="Shop">
            <MenuItem>All Products</MenuItem>
            <MenuItem>Popular Items</MenuItem>
            <MenuItem>New Arrivals</MenuItem>
        </Select>
        </FormControl>
        </MenuItem>

        <MenuItem><button style={{ marginLeft: '600px', padding: '5px', width: '100px',alignContent:'center'}}><ShoppingCartIcon /> 
        <Badge color="secondary" badgeContent="0" anchorOrigin={{vertical:'bottom',horizontal: 'right'}}>Cart 0</Badge>
        </button></MenuItem>
        <br />
      </Box>

      <div style={{ backgroundColor: 'rgb(38, 39, 39)', padding: '75px', textAlign: 'center', margin: '0' }}>
        <span style={{ color: 'white', fontSize: '60px', fontWeight: 'bold' }}>Shop in style</span> <br />
        <span style={{ color: 'Grey', fontSize: '20px' }}>With this shop hompeage template</span> <br />
      </div>
      {/* Grid */}
      <Grid container spacing={2} style={{ margin: '10px', paddingLeft: '50px', textAlign: 'center', display: 'flex', alignContent: 'space-around', justifyContent: 'center', width: '100%' }}>
        <Grid item xs={3}>
          <div style={{ border: 'solid 1px lightGrey', borderRadius: '5px', margin: '20px', height: '300px', width: '200px' }}>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px', margin: '0px' }}>Fancy Product</span> <br /> $40.00 - $80.00 <br /><br />
              <button>View Options</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div style={{ border: 'solid 1px lightGrey', borderRadius: '5px', margin: '20px', height: '300px', width: '200px',position:'relative' }}>
            <div style={{ border: 'solid 1px black', borderRadius: '5px',backgroundColor:'rgb(38, 39, 39)',color:'white',top:'0.5rem',right: '0.5rem',width:'50px',position:'absolute',textAlign:'center'}}><Badge>Sale</Badge></div>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Special Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              <strike>$20.00</strike> $18.00 <br /><br />
              <button>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div style={{ border: 'solid 1px lightGrey', borderRadius: '5px', margin: '20px', height: '300px', width: '200px',position:'relative' }}>
          <div style={{ border: 'solid 1px black', borderRadius: '5px',backgroundColor:'rgb(38, 39, 39)',color:'white',top:'0.5rem',right: '0.5rem',width:'50px',position:'absolute',textAlign:'center'}}><Badge>Sale</Badge></div>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Sale Item</span> <br /><strike>$50.00 </strike>$25.00 <br /><br /><br />
              <button>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div style={{ border: 'solid 1px lightGrey', borderRadius: '5px', margin: '20px', height: '300px', width: '200px' }}>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Popular Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              $40.00 <br /><br />
              <button>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <br />
        <Grid item xs={3}>
          <div style={{ border: 'solid 1px lightGrey', borderRadius: '5px', margin: '20px', height: '300px', width: '200px',position:'relative' }}>
          <div style={{ border: 'solid 1px black', borderRadius: '5px',backgroundColor:'rgb(38, 39, 39)',color:'white',top:'0.5rem',right: '0.5rem',width:'50px',position:'absolute',textAlign:'center'}}><Badge>Sale</Badge></div>            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Sale Item</span> <br /> <strike>$50.00</strike> $25.00 <br /><br /><br />
              <button>Add to cart</button>
            </Grid>
          </div>
        </Grid>


        <Grid item xs={3}>
          <div style={{ border: 'solid 1px lightGrey', borderRadius: '5px', margin: '20px', height: '300px', width: '200px' }}>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px', margin: '20px' }}>Fancy Product</span> <br /> $40.00 - $80.00 <br /><br /><br />
              <button>Add to cart</button>
            </Grid>
          </div>

        </Grid>


        <Grid item xs={3}>
          <div style={{ border: 'solid 1px lightGrey', borderRadius: '5px', margin: '20px', height: '300px', width: '200px',position:'relative' }}>
          <div style={{ border: 'solid 1px black', borderRadius: '5px',backgroundColor:'rgb(38, 39, 39)',color:'white',top:'0.5rem',right: '0.5rem',width:'50px',position:'absolute',textAlign:'center'}}><Badge>Sale</Badge></div>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Special Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              <strike>$20.00</strike> $18.00 <br /><br />
              <button>Add to cart</button>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={3}>
          <div style={{ border: 'solid 1px lightGrey', borderRadius: '5px', margin: '20px', height: '300px', width: '200px' }}>
            <img src={img} style={{ width: '200px', height: '150px', padding: '0', margin: '0' }}></img>
            <Grid>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Popular Item</span> <br />
              <Stack style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="full-rating" defaultValue={5} />
              </Stack>
              $40.00 <br /><br />
              <button>Add to cart</button>
            </Grid>
          </div>
        </Grid>


      </Grid>
    </div>


  );
}