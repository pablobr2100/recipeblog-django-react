import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const PostsCard = ({ myDirection, title, excerpt, image, postLink }) => {
  return (
    <Box mt={3}>
      <Link href={postLink} sx={{ textDecoration: "none" }}>
        <Card>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: `${myDirection}`,
                md: `${myDirection}`,
              },
              flexDirection: "row",
            }}
          >
            <CardMedia
              component={"img"}
              height="300px"
              image={image}
              alt="burger_image"
              sx={{
                width: "400px",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.8,
                  boxSizing: "border-box",
                  zIndex: 1,
                  transition: `all 0.5s ease`,
                },
              }}
            />
            <CardContent sx={{ minHeight: "260px" }}>
              <Typography gutterBottom variant="h4" align="center">
                {title}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {excerpt}
              </Typography>
              <CardActions>
                <Button sx={{ color: "tomato" }} size="large">
                  Share
                </Button>
                <Button sx={{ color: "tomato" }} size="large">
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default PostsCard;
