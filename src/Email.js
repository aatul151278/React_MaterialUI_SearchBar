import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

function EmailSubscribe(props) {
    const { closePopup } = props;
    return (
        <div>

            <div className='close-button'>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={closePopup}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
            </div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '90vh', textAlign: 'center' }}
            >

                <Grid item>

                    <Typography gutterBottom variant="h3" component="div">
                        Main Label
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Sub Title will come Here
                    </Typography>


                    <Typography gutterBottom variant="h7" component="div">
                        Thank you for visiting Epaku Co. We are currently setting up for a re-launch.<br />
                        SO we have some tinkering to do behind the scenes. In the meantime, <br />
                        please follow us on Instagram @epakuco and sign up for our newsletter to stay in the know. <br />
                        Our subscribers are ALWAYS the first to be updated. ;)
                    </Typography>

                    <TextField
                        fullWidth
                        sx={{ mt: 5, border: 1, borderColor: "white" }}
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="Enter your email."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        variant="contained"
                                    >
                                        SubScribe Now
                                    </Button>
                                </InputAdornment>
                            )
                        }}
                    />

                </Grid>

            </Grid>
        </div>
    );
}

export default EmailSubscribe;