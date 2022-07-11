import Header from "./header/Header";
import Footer from "./Footer/Footer";
import { withStyles } from "@material-ui/core";

// ===== Basic Layout ===== //
const useStyles = (theme) => ({
  root: {
    minHeight: "100vh",
  },
});

const DefaultLayout = (props) => {
  const {
    classes: { root },
  } = props;
  return (
    <div className={root}>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default withStyles(useStyles)(DefaultLayout);
