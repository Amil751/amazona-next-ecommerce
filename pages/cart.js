import { Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";

export default function CartScreen() {
  return (
    <div>
      <Layout>
        <Grid conatiner spacing={3}>
                  <Grid item md={6} color='purple'>
                     <Typography>amil</Typography>
                  </Grid>
                  <Grid item md={6}>
                      <Typography>amilo</Typography>
                  </Grid>
        </Grid>
      </Layout>
    </div>
  );
}
