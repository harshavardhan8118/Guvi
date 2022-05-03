import React from 'react';

import { Box, Typography, Button, Grid, Stack, Rating, Badge, InputLabel, FormControl } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Close';

export default function price() {
  return (
    <div style={{backgroundColor: 'blue',  width: '78%',paddingLeft:'50px' }}>

      <Grid container spacing={1} sx={{ margin: '10px', width: '90%', padding: '10px', alignContent: 'center',display: 'flex', flexDirection: 'row',alignContent:'space-around',textAlign:'center'}}>

        <Grid item xs={3.6} sx={{ background: 'white', border: '1px solid white', borderRadius: '5px', margin: '15px',padding:'10px',textAlign: 'center' }}>

          <h4 style={{ color: 'darkGrey' }}>FREE</h4>
          <b><span style={{ fontSize: '50px' }}>$0</span><span style={{ fontSize: '20px' }}>/month</span></b>
          <hr />
          <div style={{ textAlign: 'left', padding: '10px' }}>
            <div><CheckIcon fontSize="small" />Single User</div><br />
            <div><CheckIcon fontSize="small" />5GB Storage</div><br />
            <div><CheckIcon fontSize="small" />Unlimited Public Projects</div><br />
            <div><CheckIcon fontSize="small" />Community Access</div><br />
            <div style={{ color: 'grey' }}>
              <div><ClearIcon fontSize="small" />Unlimited Private Projects</div><br />
              <div><ClearIcon fontSize="small" />Dedicated Phone Support</div><br />
              <div><ClearIcon fontSize="small" />Free Subdomain</div><br />
              <div><ClearIcon fontSize="small" />Monthly Status Reports</div><br />
            </div>
          </div>
          <Button variant="contained" style={{ borderRadius: '25px', width: "80%" }} size="large">
            BUTTON</Button><br/><br/>
        </Grid>


        <Grid item xs={3.6} sx={{ background: 'white', border: '1px solid white', borderRadius: '5px', margin: '15px',padding:'10px',textAlign: 'center' }}>
          <h4 style={{ color: 'darkGrey' }}>PLUS</h4>
          <b><span style={{ fontSize: '50px' }}>$9</span><span style={{ fontSize: '20px' }}>/month</span></b>
          <hr />
          <div style={{ textAlign: 'left', padding: '10px' }}>
            <div><CheckIcon fontSize="small" /><b>5 Users</b></div><br />
            <div><CheckIcon fontSize="small" />5GB Storage</div><br />
            <div><CheckIcon fontSize="small" />Unlimited Public Projects</div><br />
            <div><CheckIcon fontSize="small" />Community Access</div><br />
            <div><CheckIcon fontSize="small" />Unlimited Private Projects</div><br />
              <div><CheckIcon fontSize="small" />Dedicated Phone Support</div><br />
              <div><CheckIcon fontSize="small" />Free Subdomain</div><br />
            <div style={{ color: 'grey' }}>
             
              <div><ClearIcon fontSize="small" />Monthly Status Reports</div><br />
            </div>
          </div>
          <Button variant="contained" style={{ borderRadius: '25px', width: "80%" }} size="large">
            BUTTON</Button><br/>
        </Grid>

        <Grid item xs={3.6} sx={{ background: 'white', border: '1px solid white', borderRadius: '5px', margin: '15px',padding:'10px',textAlign: 'center' }}>
          <h4 style={{ color: 'darkGrey' }}>PRO</h4>
          <b><span style={{ fontSize: '50px' }}>$49</span><span style={{ fontSize: '20px' }}>/month</span></b>
          <hr />
          <div style={{ textAlign: 'left', padding: '10px' }}>
            <div><CheckIcon fontSize="small" /><b>Unlimited Users</b></div><br />
            <div><CheckIcon fontSize="small" />5GB Storage</div><br />
            <div><CheckIcon fontSize="small" />Unlimited Public Projects</div><br />
            <div><CheckIcon fontSize="small" />Community Access</div><br />
            <div><CheckIcon fontSize="small" />Unlimited Private Projects</div><br />
              <div><CheckIcon fontSize="small" />Dedicated Phone Support</div><br />
              <div><CheckIcon fontSize="small" /><b>Unlimited</b> Free Subdomain</div><br />
              <div><CheckIcon fontSize="small" />Monthly Status Reports</div><br />
            
          </div>
          <Button variant="contained" style={{ borderRadius: '25px', width: "80%" }} size="large">
            BUTTON</Button><br/>
        </Grid>




      </Grid>
    </div>

  );
}