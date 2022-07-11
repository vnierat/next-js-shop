import DefaultLayaout from "../../components/DefaultLayout";
import { withStyles, Container, Grid, Typography } from "@material-ui/core";
import ProductsList from "../../components/boutique/ProductsList";
import CategoriesList from "../../components/boutique/CategoriesList";

const useStyles = (theme) => ({
  root: { marginBottom: theme.spacing(3) },
  h1: {
    margin: theme.spacing(5, 0),
  },
  filterTitle: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.primary.main,
  },
  filterListItem: {
    cursor: "pointer",
    paddingLeft: 0,
  },
});

const Boutique = (props) => {
  const { classes, productsDatas } = props;

  const productCategories = Array.from(
    new Set(productsDatas.map(({ category }) => category))
  );

  return (
    <DefaultLayaout>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h3" component="h1" className={classes.h1}>
              SuperShop
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <CategoriesList {...{ productCategories, classes }} />

          <Grid item xs={12} md={9} className={classes.productsListContainer}>
            <ProductsList products={productsDatas} isFromCategory={false} />
          </Grid>
        </Grid>
      </Container>
    </DefaultLayaout>
  );
};

export default withStyles(useStyles)(Boutique);

export const getStaticProps = async (context) => {
  console.log(context);
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const productsDatas = await res.json();

  if (!productsDatas) {
    return {
      notFound: true,
    };
  }

  return {
    props: { productsDatas },
  };
};
