import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import SearchIcon from '@mui/icons-material/Search';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Search from './search';
import SignUp from './Signup';
import EmailSubscribe from './Email';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(0);

  const handleClickOpen = (val) => {
    setOpen(val);
  };

  const handleClose = () => {
    setOpen(0);
  };
  
  return (
    <div className="content-right">
      <ButtonGroup variant="outlined" aria-label="text button group">
        <Button
          onClick={() => handleClickOpen(3)}>
          Email SubScribe
        </Button>
        <Button
          onClick={() => handleClickOpen(2)}>
          Signup
        </Button>
        <Button
          onClick={() => handleClickOpen(1)}>
          Filter <SearchIcon />
        </Button>
      </ButtonGroup>

      {/* Email Subscribe Window */}
      <Dialog
        fullScreen
        open={open == 3}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <EmailSubscribe closePopup={handleClose} />
      </Dialog>


      {/* Signup Window */}
      <Dialog
        fullScreen
        open={open == 2}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <SignUp closePopup={handleClose} />
      </Dialog>

      {/* Searchbar Window */}
      <Dialog
        fullScreen
        open={open == 1}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Search closePopup={handleClose} />
      </Dialog>

    </div>
  );
}