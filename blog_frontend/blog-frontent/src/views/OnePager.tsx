import * as React from "react";
import { Grid, Paper } from "@material-ui/core";

const Header = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={2}>Yesssssss</Paper>
      </Grid>
    </Grid>
  );
};

class OnePager extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>OnePager</h1>
      </div>
    );
  }
}
export default OnePager;
