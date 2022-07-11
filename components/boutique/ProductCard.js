import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  withStyles,
  IconButton,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useContext } from "react";
import GlobalContext from "../../state/global-context";
import Link from "next/link";

const useStyles = (theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    cursor: "pointer",
  },
  content: {
    width: "100%",
  },
  thumbnailContainer: {
    padding: theme.spacing(2),
    textAlign: "cetner",
  },
  thumbnail: {
    maxHeight: "170px",
    width: "auto",
    margin: "auto",
  },
  name: {
    fontSize: "1rem",
  },
});

const ProductCard = (props) => {
  const {
    classes,
    product,
    product: { id, title, desc, price, image },
    isFromCategory,
  } = props;
  const context = useContext(GlobalContext);

  const handleAddToCart = (e, product) => {
    context.addProductToCart(
      product,
      context.pushObject("open_interstitial", true)
    );
  };

  return (
    <Link href={isFromCategory ? `product/${id}` : `boutique/product/${id}`}>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <div className={classes.thumbnailContainer}>
            <CardMedia
              component="img"
              alt={title}
              image={image}
              className={classes.thumbnail}
              title="Contemplative Reptile"
            />
          </div>
          <Typography gutterBottom component="h2" className={classes.name}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price}$
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={(e) => handleAddToCart(e, product)}>
            <ShoppingBasketIcon color="secondary" />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
};

export default withStyles(useStyles)(ProductCard);
