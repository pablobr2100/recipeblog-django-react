import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import PostsCard from "./PostsCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/posts/`
        );
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Typography variant="h4" align="center">
        {" "}
        Latest Recipes{" "}
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        {posts.map((post) => (
          <Grid item xs>
            <PostsCard
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              myDirection={"flex"}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h4"
        bgcolor={"black"}
        color={"white"}
        align="center"
        mt={4}
        mb={4}
      >
        Most Popular
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={"row"}>
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
        <Grid item md={6} sm={6}>
          <PostsCard myDirection={"block"} />
        </Grid>
      </Grid>
      <Stack
        spacing={2}
        mt={3}
        mb={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Pagination count={10} color="warning" />
      </Stack>
    </Box>
  );
};

export default Posts;
