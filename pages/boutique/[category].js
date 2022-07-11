import ProductsList from "../../components/boutique/ProductsList";
import DefaultLayout from "../../components/DefaultLayout";
import { withStyles, Container, Grid, Typography } from "@material-ui/core";
import CategoriesList from "../../components/boutique/CategoriesList";

const useStyles = (theme) => ({
  root: { marginBottom: theme.spacing(3) },
  h1: {
    margin: theme.spacing(5, 0),
  },
  h5: {
    margin: theme.spacing(5, 0),
    display: "flex",
    justifyContent: "center",
    color: theme.palette.favorite,
  },
});

const Category = (props) => {
  const { filteredProducts, productsDatas, classes, category } = props;

  const productCategories = Array.from(
    new Set(productsDatas.map(({ category }) => category))
  );

  const isFromCategory = true;

  const categString = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <DefaultLayout>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h3" component="h1" className={classes.h1}>
              SuperShop
            </Typography>
            <Typography variant="h4" component="h4" className={classes.h5}>
              {categString}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <CategoriesList {...{ productCategories, isFromCategory }} />
          <Grid item xs={12} md={9}>
            <ProductsList products={filteredProducts} isFromCategory />
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default withStyles(useStyles)(Category);

export const getServerSideProps = async (context) => {
  const {
    query: { category },
  } = context;
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const productsDatas = await res.json();

  if (!productsDatas) {
    return {
      notFound: true,
    };
  }

  const filteredProducts = productsDatas.filter(
    (el) => el.category === category
  );

  return {
    props: { filteredProducts, productsDatas, category },
  };
};
