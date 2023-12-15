import { Box, CircularProgress } from "@mui/material";

export default function Loading(){
    return(
        <Box sx={{ display: 'flex' ,alignItems : 'center'}}>
        <CircularProgress />
      </Box>
    )
}