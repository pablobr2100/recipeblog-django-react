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
import burger from "../../static/burger1.jpg";

const PostsCard = () => {
  return (
    <Box mt={3}>
      <Link href="#" sx={{ textDecoration: "none" }}>
        <Card>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              component={"img"}
              height="300"
              image={burger}
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
            <CardContent>
              <Typography gutterBottom variant="h4" align="center">
                Best Burger
              </Typography>
              <Typography variant="h5" color="text.secondary">
                O hambúrguer (do inglês hamburger), é um preparado de carne
                temperada (principalmente de carne bovina, ocasionalmente de
                frango moído, carne suína moída ou com misturas de carnes) e
                moldada em formato circular.
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
