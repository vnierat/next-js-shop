import {
  Container,
  CardMedia,
  Typography,
  withStyles,
  Grid,
  CardActions,
  IconButton,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DefaultLayout from "../../../components/DefaultLayout";
import { useContext } from "react";
import GlobalContext from "../../../state/global-context";

const useStyles = (theme) => ({
  productWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(15),
    padding: theme.spacing(3),
  },
  imageWrapper: {
    boxShadow: "0px 0px 6px 1px #000000",
    marginBottom: theme.spacing(3),
    borderRadius: "0.2rem",
  },
  desc: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  price: {
    marginBottom: theme.spacing(3),
  },
});

const ProductDetails = (props) => {
  const {
    classes,
    product,
    product: { title, image, description, price },
  } = props;

  const context = useContext(GlobalContext);

  const handleAddToCart = (e, product) => {
    context.addProductToCart(
      product,
      context.pushObject("open_interstitial", true)
    );
  };

  return (
    <DefaultLayout>
      <Grid container className={classes.productWrapper}>
        <Grid item xs={12} sm={6}>
          <Container className={classes.imageWrapper}>
            <CardMedia component="img" alt={title} image={image} />
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2" className={classes.desc}>
              {description}
            </Typography>
            <Typography variant="body2" className={classes.price}>
              {price} $
            </Typography>
            <CardActions>
              <IconButton onClick={(e) => handleAddToCart(e, product)}>
                <ShoppingBasketIcon color="secondary" />
              </IconButton>
            </CardActions>
          </Container>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default withStyles(useStyles)(ProductDetails);

export const getServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
};
