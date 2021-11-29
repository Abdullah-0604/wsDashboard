import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState,useEffect } from "react";
import Paper from "@mui/material/Paper";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const URL = "ws://127.0.0.1:8080";

const Bottom = ({ data }) => {
  const [formValues, setFormValues] = useState();
  const [blowerControlMode, setBlowerControlMode] = useState('');
  const [startTime, setStartTime] = useState();
  const [stopTime, setStopTime] = useState(null);
  const [blowerStatus, setBlowerStatus] = useState(true);
  const [returnDamperStatus, setReturnDamperStatus] = useState(true);
  const [freshAirStatus, setFreshAirStatus] = useState(true);
  const [tempHyst, setTempHyst] = useState();
  const [timeHyst, setTimeHyst] = useState();
  const [errorSnoozeTime, setErrorSnoozeTime] = useState();

  const [ws, setWs] = useState(new WebSocket(URL));

  useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };
    ws.onmessage = (e) => {
      const response = JSON.parse(e.data);
      setBlowerControlMode(response.config.blower.mode)
    };
    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
      }
    }
  }, [blowerControlMode,ws]);
  console.log(startTime)

  const handleFormSubmit = () => {
    // console.log(
    //   blowerControlMode,
    //   startTime,
    //   stopTime,
    //   blowerStatus,
    //   returnDamperStatus,
    //   freshAirStatus,
    //   tempHyst,
    //   timeHyst,
    //   errorSnoozeTime
    // );
  };
  return (
    <Box sx={{ margin: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <FormControl required size="small">
              <InputLabel id="bcm">Blower Control Mode</InputLabel>
              <Select
                labelId="bcm"
                id="bcm"
                value={blowerControlMode}
                label="Blower Control Mode *"
                onChange={(event) => setBlowerControlMode(event.target.value)}
              >
                <MenuItem value="timer">Time Based</MenuItem>
                <MenuItem value="manual">Manual</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Basic example"
                value={startTime}
                onChange={(newValue) => {
                  setStartTime(newValue);
                }}
                renderInput={(params) => <TextField {...params} size="small"/>}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Stop Time"
                value={stopTime}
                onChange={(newValue) => {
                  setStopTime(newValue);
                }}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </LocalizationProvider>
            <Stack direction="row" spacing={2}>
              <Typography>Blower Status</Typography>
              <IOSSwitch
                checked={blowerStatus}
                onChange={() => setBlowerStatus(!blowerStatus)}
                size="small"
              />
              <Typography>Return Damper</Typography>
              <IOSSwitch
                checked={returnDamperStatus}
                onChange={() => setReturnDamperStatus(!returnDamperStatus)}
                size="small"
              />
              <Typography>Fresh Air Damper</Typography>
              <IOSSwitch
                checked={freshAirStatus}
                onChange={() => setFreshAirStatus(!freshAirStatus)}
                size="small"
              />
            </Stack>
            <TextField
              fullWidth
              label="Temperature Hysteresis (°C)"
              value={tempHyst ? tempHyst : 0}
              onChange={(event) => setTempHyst(event.target.value)}
              id="temp hyst"
              size="small"
              type="number"
            />
            <TextField
              fullWidth
              label="Time Hysteresis (seconds)"
              value={timeHyst ? timeHyst : 0}
              onChange={(event) => setTimeHyst(event.target.value)}
              id="time hyst"
              size="small"
              type="number"
            />
            <TextField
              fullWidth
              label="Error Snooze Time (minutes)"
              value={errorSnoozeTime ? errorSnoozeTime : 0}
              onChange={(event) => setErrorSnoozeTime(event.target.value)}
              id="err snz time"
              size="small"
              type="number"
            />
            <Button
              type="submit"
              variant="contained"
              onClick={handleFormSubmit}
            >
              Send
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead sx={{ backgroundColor: "#add8e6" }}>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="center">Target</TableCell>
                  <TableCell align="center">Feedback</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data ? (
                  data.monitor.damper.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="left">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.target + "%"}</TableCell>
                      <TableCell align="center">{row.feedback + "%"}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                  </Box>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bottom;
