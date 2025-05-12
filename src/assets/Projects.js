import React from "react";
import "./Projects.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import portfolioImage from "../assets/portfolioImage.PNG";
import digitImage from "../assets/digit.png";

function Projects() {
  return (
    <Box
      style={{
        marginLeft: "6rem",
        marginRight: "6rem",
        marginTop: "2rem",
        marginBottom: "10rem",
      }}
    >
      <Grid container rowSpacing={4.5} columnSpacing={8}>
        <Grid
          item
          xs={12}
          lg={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              marginTop: "0.2rem",
            }}
          >
            Projects
          </Typography>
          <hr
            style={{
              width: "20%",
              color: "#F5F5F5",
              backgroundColor: "F5F5F5",
              height: "0.5px",
              borderColor: "F5F5F5",
            }}
          />
        </Grid>

        {/* Portfolio Project */}
        <Grid item xs={12} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={portfolioImage}
              alt="Portfolio Project"
              sx={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Portfolio
              </Typography>
              <Typography fontSize="small" color="text.secondary">
                This is my personal portfolio website where I showcase my
                projects, technical skills, work experience, and education. It
                also includes a chatbot-style introduction and resume download.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                color="info"
                sx={{ maxHeight: "2rem" }}
                variant="contained"
              >
                <Link
                  href="https://github.com/NR091366/niveditha_portfolio"
                  color="inherit"
                  underline="none"
                >
                  <GitHubIcon fontSize="small" /> Code
                </Link>
              </Button>
              <Button
                color="info"
                sx={{ maxHeight: "2rem" }}
                variant="contained"
              >
                <Link
                  href="https://niveditha-portfolio.vercel.app"
                  color="inherit"
                  underline="none"
                >
                  <PublicIcon fontSize="small" color="inherit" /> LIVE
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Dight Recognition */}
        <Grid item xs={6} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={digitImage}
              alt="project2"
              sx={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Dight Recognition
              </Typography>
              <Typography fontSize="small" color="text.secondary">
                This project uses TensorFlow.js to create a digit recognition
                application. It allows users to draw digits on a canvas and
                predicts the digit using a pre-trained model.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                color="info"
                sx={{ maxHeight: "2rem" }}
                variant="contained"
              >
                <Link
                  href="https://github.com/NR091366/Dight_recognition.git"
                  color="inherit"
                  underline="none"
                >
                  <GitHubIcon fontSize="small" />
                  Code
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
