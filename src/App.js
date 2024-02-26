import { Container, Grid, Paper,Item } from "@mui/material";
import TopBar from "./components/Nav/TopBar"
import LinearStepper from "./components/process/LinearStepper";

const appInfo = {name:"Reflecture 2"};
export default function App(){
    return( 
    <>
    <Grid container spacing={1}>
        <Grid item xs={12}>
            <TopBar appName={appInfo.name}></TopBar>
        </Grid>
        <Grid item xs={4} p={2}>
            <Paper>xs=4</Paper>
        </Grid>
        <Grid item xs={8} p={2}>
            <Paper>xs=8</Paper>
        </Grid>
        <Grid item xs={12} p={2}>
            <Paper>Content</Paper>
        </Grid>
        
    </Grid>
    </>
    );
}
