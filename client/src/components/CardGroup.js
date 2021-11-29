import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from '@mui/material/Skeleton';

const CardGroup = ({ data }) => {
  return (
    <>
      <Box sx={{ margin: 1 }}>
        {data ? (
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={3}>
              <Card
                sx={{ minWidth: 100, backgroundColor: "#264653" }}
                variant="outlined"
              >
                <CardContent>
                <Typography variant="h5" sx={{ mb: 1.5 }} color="#FFFFFF">
                    {data.monitor.mode}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1.5 }} color="#FFFFFF">
                    Fresh Air Temperature
                  </Typography>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      value={data.monitor.freshAirTemp}
                      variant="determinate"
                      color="secondary"
                      size={70}
                      thickness={7}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" component="div" color="#FFFFFF">
                        {`${data.monitor.freshAirTemp}%`}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card
                sx={{ minWidth: 100, backgroundColor: "#2a9d8f" }}
                variant="outlined"
              >
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1.5 }} color="#FFFFFF">
                    {data.monitor.mode}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1.5 }} color="#FFFFFF">
                    Solar Panel Temperature
                  </Typography>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      value={data.monitor.solarTemp}
                      variant="determinate"
                      color="secondary"
                      size={70}
                      thickness={7}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" component="div" color="#FFFFFF">
                        {`${data.monitor.solarTemp}%`}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card
                sx={{ minWidth: 100, backgroundColor: "#e9c46a" }}
                variant="outlined"
              >
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1.5 }} color="#FFFFFF">
                    {data.monitor.mode}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1.5 }} color="#FFFFFF">
                    Return Temperature
                  </Typography>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      value={data.monitor.returnTemp}
                      variant="determinate"
                      color="secondary"
                      size={70}
                      thickness={7}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" component="div" color="#FFFFFF">
                        {`${data.monitor.returnTemp}%`}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card
                sx={{ minWidth: 100, backgroundColor: "#f4a261" }}
                variant="outlined"
              >
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1.5 }} color="#FFFFFF">
                    {data.monitor.mode}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 1.5 }} color="#FFFFFF">
                    Supply Duct Air Velocity
                  </Typography>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      value={data.monitor.airVelocity}
                      variant="determinate"
                      color="secondary"
                      size={70}
                      thickness={7}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h6" component="div" color="#FFFFFF">
                        {`${data.monitor.airVelocity}m/s`}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Skeleton variant="rectangular" width={300} height={100} />
        )}
      </Box>
    </>
  );
};

export default CardGroup;
