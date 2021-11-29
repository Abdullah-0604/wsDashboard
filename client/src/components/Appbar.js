import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

const Appbar = ({data}) => {
  const currentDateTime = new Date().toLocaleString();
  return (
    <Paper elevation={0}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Drala BMS v3.1.4 || Diplay Panel
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Device Date and Time
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color="red"
              sx={{ display: { xs: "none", md: "block",marginLeft:10 } }}
            >
              {currentDateTime}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Paper>
  );
};

export default Appbar;
