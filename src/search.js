import news_image from './news.jpg';

import './search.css';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Grow from '@mui/material/Grow';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@mui/material/Zoom';
import CloseIcon from '@mui/icons-material/Close';

function Search(props) {
    const { closePopup } = props;
    return (
        <div className="App">
            <div className="main-container">
                <Grid item xs={12}>
                    <TextField fullWidth
                        placeholder="What you are looking for?"
                        className="card-font-color"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" className="card-font-color">
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={closePopup}
                                        aria-label="close"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <div className="trending-bar">
                        <Typography className="card-font-color" gutterBottom variant="h7" component="div">
                            Trending
                        </Typography>
                    </div>
                    <Grid className="cards" container justifyContent="space-between" spacing={2}>
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
                            <Grid key={value} item>
                                <Grow
                                    in={true}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(true ? { timeout: 1000 * value } : {})}
                                >
                                    <Card
                                        className="card"
                                        sx={{ maxWidth: 280 }}>

                                        <Zoom in={true} style={{ transitionDelay: '500ms', }}>

                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="170"
                                                image={news_image}

                                            />
                                        </Zoom>
                                        <CardContent className="card-font-color App">
                                            <Typography gutterBottom variant="h8" component="div">
                                                MTV PUSH : INTERVIEW
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions className="card-font-color App" >
                                            <Button size="small">10/01/2022</Button>
                                        </CardActions>
                                    </Card>
                                </Grow>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default Search;
