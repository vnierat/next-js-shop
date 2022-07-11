import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles,
} from "@material-ui/core";
import Link from "next/link";

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
    paddingLeft: 0,
    cursor: "pointer",
  },
});

const CategoriesList = (props) => {
  const { productCategories, classes, isFromCategory } = props;

  console.log(isFromCategory);

  return (
    <Grid item xs={12} md={3}>
      <Typography variant="h6" className={classes.filterTitle}>
        Catégories
      </Typography>
      {productCategories.map((category, index) => {
        const categString =
          category.charAt(0).toUpperCase() + category.slice(1);
        return (
          <List key={index}>
            <Link href={`/boutique/${category}`} replace>
              <ListItem className={classes.filterListItem}>
                <ListItemText primary={categString} />
              </ListItem>
            </Link>
          </List>
        );
      })}
    </Grid>
  );
};

export default withStyles(useStyles)(CategoriesList);
