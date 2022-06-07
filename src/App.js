import React from "react";
import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";

const CustomizedCardMedia = styled(CardMedia)`
  height: 200px;
  paddingtop: 56.25%;
`;

const CustomizedGrid = styled(Grid)`
  padding: 20px 0;
`;

const CustomizedCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color={"textSecondary"}
              paragraph
            >
              Hello everyone This is a Photo Album and I,m trying to make this
              sentence as long as possible so we can see how does it look like
              on the screen.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <CustomizedGrid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <CustomizedCard>
                  <CustomizedCardMedia image="https://source.unsplash.com/random" />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magnam, numquam!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="sm" color="primary">
                      View
                    </Button>
                    <Button size="sm" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </CustomizedCard>
              </Grid>
            ))}
          </CustomizedGrid>
        </Container>
      </main>

      <footer style={{ padding: "50px 0" }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color={'textSecondary'}>
          Something here to give footer a purpose
        </Typography>
      </footer>
    </>
  );
}

export default App;
