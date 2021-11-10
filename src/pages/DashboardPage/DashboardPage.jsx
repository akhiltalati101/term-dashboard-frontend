import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Grid } from "@material-ui/core";
import ProgressCard from "../../common/DashboardComponents/ProgressCard";
import DeadlineList from "../../common/DashboardComponents/DeadlineList";
import TotalDeadlinesCard from "../../common/DashboardComponents/TotalDeadlinesCard";
import NextDeadline from "../../common/DashboardComponents/NextDeadline";
import DeadlineByType from "../../common/DashboardComponents/DeadlineByTypeCard";
import { getDeadlines } from "../../store/deadlines";

const Dashboard = () => {
  const dispatch = useDispatch();
  // const deadlines = useSelector((state) => state.deadlines);
  // const {token} = useSelector((state) => state.token);
  React.useEffect(() => {
    dispatch(getDeadlines());
  }, [dispatch]);
  // console.log("dashboard page :: ", deadlines)
  // console.log("dashboard page :: ", token)
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalDeadlinesCard sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <ProgressCard sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <NextDeadline sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalDeadlinesCard sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <TotalDeadlinesCard sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <DeadlineByType sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TotalDeadlinesCard sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <DeadlineList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Dashboard;
