import React from "react";
import { mainLogo } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


const TrailerHeader = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleHome = () => {
    navigate("/browse");
  };
  
  const handleSignOut = () => {
    handleClose();
    signOut(auth)
      .then(() => {
        toast.warning("Logged out !");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  

  const temp = useSelector((state) => state.userDetails);
  return (
    <div>
      <div className="absolute flex justify-between bg-black flex-row w-[100%] px-4 py-1 z-10">
        <img
          className="md:w-40 w-32 cursor-pointer"
          onClick={handleHome}
          src={mainLogo}
        />
      </div>
      <Dialog
        sx={{
          color: "white",
          "& .MuiPaper-root": {
            background: "#363636",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{ textDecorationColor: "white", color: "white" }}
          id="alert-dialog-title"
        >
          Do you want to Logout?
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            No
          </Button>
          <Button onClick={handleSignOut} variant="contained" color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TrailerHeader;