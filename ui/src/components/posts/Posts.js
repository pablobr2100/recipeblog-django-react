import { Box, Grid, Typography } from "@mui/material";
import PostsCard from "./PostsCard";


const Posts = () => {
  return (
    <Box>
      <Typography variant="h4" align="center"> Latest Recipes </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        <Grid item xs>
          <PostsCard/>
        </Grid>
        <Grid item xs>
          <PostsCard/>
        </Grid>
        <Grid item xs>
          <PostsCard/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Posts;