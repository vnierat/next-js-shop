import ProductCard from "./ProductCard";
import { Grid, withStyles } from "@material-ui/core";

const useStyles = (theme) => ({
  productsWrapper: {
    marginBottom: theme.spacing(15),
  },
});

const ProductList = (props) => {
  const { classes, products, isFromCategory } = props;

  return (
    <Grid container spacing={2} className={classes.productsWrapper}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard product={product} isFromCategory={isFromCategory} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(useStyles)(ProductList);
