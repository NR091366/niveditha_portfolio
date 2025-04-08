import React from 'react'
import './Projects.css'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import pokemonImage from '../assets/pokemon.PNG'
import shopeeImage from '../assets/Shopee.PNG'
import portfolioImage from '../assets/portfolioImage.PNG'

function Projects() {
  return (
    <Box style={{marginLeft:'6rem',marginRight:'6rem',marginTop:"2rem",marginBottom:"20rem"}} >
    <Grid container rowSpacing={4.5} columnSpacing={8}>
      <Grid item xs={12} lg={12} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Typography style={{fontSize:'1.5rem', textAlign:'center', marginTop:'0.2rem'}}>Projects</Typography>
      <hr  style={{width:'20%',color: '#F5F5F5',backgroundColor: 'F5F5F5',height: '0.5px',borderColor : 'F5F5F5'}}/>
      </Grid>
      <Grid item xs={6} lg={4} >
        <Card>
          <CardMedia
          component='img'
          height='180'
          image={pokemonImage}
          alt='project2'
          sx={{objectFit: "fill"}}          
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          PokeRealm
        </Typography>
        <Typography fontSize='small' color="text.secondary">
          Hello for all the Pokemon fans out there, this is a Pokemon website that displays all the pokemons and their details. Here I have added small functionality like search and pagination and made it responsive.
        </Typography>
        </CardContent>
          <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
            <Button color="info" sx={{maxHeight: '2rem'}} variant="contained"><GitHubIcon fontSize='small'/>Code</Button>
            <Button color="info" sx={{maxHeight: '2rem'}} variant="contained"><Link href='https://pokerealm.netlify.app' color='inherit' underline="none"><PublicIcon fontSize='small' color='inherit'/>LIVE</Link></Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} lg={4} >
        <Card>
          <CardMedia
          component='img'
          height='180'
          image={shopeeImage}
          alt='project2'
          sx={{objectFit: "fill"}}          
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Shopee
        </Typography>
        <Typography fontSize='small' color="text.secondary">
          Shopee is a small implementation of an e-commerce website where you can add products to cart and all the added products in cart. Used Redux for global state management.
        </Typography>
        </CardContent>
          <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
            <Button color="info" sx={{maxHeight: '2rem'}} variant="contained"><Link href='https://github.com/KatkarSaurabh/Shopee' color='inherit' underline="none"><GitHubIcon fontSize='small'/>Code</Link></Button>
            {/* <Button color="info" sx={{maxHeight: '2rem'}} variant="contained"><Link href='' color='inherit' underline="none"><PublicIcon fontSize='small' color='inherit'/>LIVE</Link></Button> */}
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} lg={4} >
        <Card>
          <CardMedia
          component='img'
          height='180'
          image={portfolioImage}
          alt='project2'
          sx={{objectFit: "fill"}}          
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Portfoilo
        </Typography>
        <Typography fontSize='small' color="text.secondary">
          This is my portfolio website (which you are alredy on) where I have displayed my projects, skills, experience, education and a contact section where you can reach out to me.
        </Typography>
        </CardContent>
          <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
            <Button color="info" sx={{maxHeight: '2rem'}} variant="contained"><Link href='https://github.com/KatkarSaurabh/Portfolio' color='inherit' underline="none"><GitHubIcon fontSize='small'/>Code</Link></Button>
            <Button color="info" sx={{maxHeight: '2rem'}} variant="contained"><Link href='https://portfolioaboutssk.netlify.app' color='inherit' underline="none"><PublicIcon fontSize='small' color='inherit'/>LIVE</Link></Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    <Grid item xs={12} lg={12} sx={{marginTop:'2rem', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Typography style={{fontSize:'1.5rem', textAlign:'center', marginTop:'0.2rem'}}>Stay tuned as more intresting projects are coming up in few days...</Typography>
      </Grid>
    </Box>
  );
}

export default Projects
