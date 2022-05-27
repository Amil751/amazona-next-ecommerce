import { Grid, Typography, Card } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";

export default function CartScreen() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={8} color="purple">
          <Card>
            <Typography>amil</Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Typography>amil</Typography>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
