import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

export default function TopBar({appName}){
    return (    
        <AppBar position="static">
        <Container maxWidth="x1">
            <Toolbar disableGutters>
                <Button key={"metadata.metadata.title"} sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Typography textAlign="center">{appName}</Typography>
                </Button>
            </Toolbar>

        </Container>
        </AppBar>
    )
}