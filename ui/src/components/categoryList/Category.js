import { Box, Stack, Typography, styled } from "@mui/material";
import drinks from '../../static/drinks.jpg';
import salad from '../../static/salad.jpg';
import dessert from '../../static/dessert.jpg';
import breakfast from '../../static/breakfast.jpg';
import instant from '../../static/instant.jpg';
import appetizer from '../../static/appetizer.jpg';
import healthy from '../../static/healthy.jpg';
import dinner from '../../static/dinner.jpg';
import vegan from '../../static/vegan.jpg';

const Category = () => {
  const CardBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  });

  const StyledCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '100%',
    overflow: 'hidden',
    width: '100px',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      height: 100
    },
    [theme.breakpoints.down('md')]: {
      height: 100
    },
    '&:hover': {
      opacity: 0.8,
      boxSizing: 'borderBox',
      zIndex: 1,
      transition: `all 0.45s ease`
    }
  }));

  const StyledTypography = styled(Typography)({
    textAlign: 'center',
    color: '#000',
    fontSize: 20
  });

  return (
    <Stack
      Container
      direction={'row'}
      mt={4}
      spacing={3}
      ml={3}
      sx={{ overflow: 'auto' }}
    >
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${drinks})` }} />
        <StyledTypography>Drinks</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${salad})` }} />
        <StyledTypography>Salad</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${dessert})` }} />
        <StyledTypography>Dessert</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${breakfast})` }} />
        <StyledTypography>Breakfast</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${instant})` }} />
        <StyledTypography>Instant</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${appetizer})` }} />
        <StyledTypography>Appetizer</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${healthy})` }} />
        <StyledTypography>Healthy</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${dinner})` }} />
        <StyledTypography>Dinner</StyledTypography>
      </CardBox>
      <CardBox>
        <StyledCard sx={{ backgroundImage: `url(${vegan})` }} />
        <StyledTypography>Vegan</StyledTypography>
      </CardBox>
    </Stack>
  );
}

export default Category;