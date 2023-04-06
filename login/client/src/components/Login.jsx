import LoginDialog from "./LoginDialog";
import LoginImage from "./LoginImage";
import {Stack, Box, Paper, Divider, TextField, Button} from "@mui/material";




function Login(){
    return (
        <Stack style={{backgroundColor: "rgb(71, 153, 242)"}} margin="10%" justifyContent="center" direction={{ xs: 'column', sm: 'row' }} alignItems="center"
        spacing={3}>
            <Paper sx={{padding: 5}} elevation={12}><Stack spacing={3}>
                <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                <TextField id="outlined-basic" label="Outlined" variant="standard" />
                <TextField id="outlined-basic" label="Outlined" variant="standard" />
                </Stack>
                <TextField id="outlined-basic" label="Outlined" variant="standard" />
                <TextField id="outlined-basic" label="Outlined" variant="standard" />
                <TextField id="outlined-basic" label="Outlined" variant="standard" />
                <Stack direction="row" spacing={2} justifyContent="center">
                <Button style={{fontFamily: "'Roboto Slab', serif"}}variant="contained">Sign In</Button>
                <Button style={{fontFamily: "'Roboto Slab', serif"}} variant="outlined">Register</Button>
                </Stack>
                
                    </Stack>
            </Paper>
            <Box alignItems=""><p>Help us find <br/> better reviews. </p></Box>
        </Stack>
    );
}

export default Login;