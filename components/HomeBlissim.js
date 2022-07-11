import {
  withStyles,
  CardMedia,
  Button,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const useStyles = (theme) => ({
  title: { fontFamily: "Garamond, serif", marginBottom: theme.spacing(1) },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  textContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #dedede",
    borderLeft: "none",
    borderRadius: "0 0.5rem 0.5rem 0",
  },
  imageContainer: {
    borderRadius: "0.5rem 0 0 0.5rem",
  },
  itemContainer: { display: "flex", alignItems: "center" },
  heart: { color: theme.palette.favorite },
  itemTitle: {
    fontFamily: "Trebuchet MS",
    fontWeight: "bold",
    fontSize: "0.7rem",
  },
  itemContent: {
    fontFamily: "Trebuchet MS",
    fontWeight: "bold",
    fontSize: "0.4rem",
  },
});

const data = [
  {
    title: "La meilleur box beauté",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "La flexibilité",
    content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit",
  },
  {
    title: "Le bon plan beauté",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed",
  },
  {
    title: "La crème de la crème",
    content: "Ut enim ad minima veniam, quis nostrum exercitationem",
  },
];

const HomeBlissim = ({ classes }) => {
  return (
    <Container className={classes.container}>
      <Typography variant="body2" className={classes.title}>
        Pourquoi Blissim ?
      </Typography>
      <Grid container className={classes.boxContainer}>
        <Grid item xs={6}>
          <CardMedia
            className={classes.imageContainer}
            component="img"
            alt="blissim"
            image="https://www.cdiscount.com/pdt2/9/2/2/1/1200x1200/sma3608110181922/rw/smartbox-3-box-beaute-blissim-coffret-cadeau.jpg"
          />
        </Grid>
        <Grid item xs={6} className={classes.textContainer}>
          {data.map(({ title, content }) => (
            <Container className={classes.itemContainer}>
              <FavoriteBorderOutlinedIcon className={classes.heart} />
              <Container className={classes.text}>
                <Typography className={classes.itemTitle}>{title}</Typography>
                <Typography className={classes.itemContent}>
                  {content}
                </Typography>
              </Container>
            </Container>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(useStyles)(HomeBlissim);
