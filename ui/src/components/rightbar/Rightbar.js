import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import chef from "../../static/chef.jpg";
import { Send as SendIcon } from "@mui/icons-material";

const Rightbar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" align="center" mt={5}>
        This is an AD.
      </Typography>
      <CardMedia
        component={"img"}
        height="300"
        image={chef}
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
      <Typography align="left" variant="body1">
        {" "}
        Advertising is the practice and techniques employed to bring attention
        to a product or service.{" "}
      </Typography>
      <Typography align="left" variant="body1">
        {" "}
        Click to learn more! <br />{" "}
        <a href="https://en.wikipedia.org/wiki/Advertising">Read More</a>
      </Typography>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          Ads Here
        </Typography>
      </Card>
      <Typography align="center" color="white" bgcolor="tomato" mt={2}>
        Subscribe Via Email
      </Typography>
      <Box sx={{ pl: 10 }}>
        <TextField
          label="Your Email here!"
          variant="standard"
          color="warning"
        />
        <IconButton>
          <SendIcon sx={{ color: "tomato" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Rightbar;
