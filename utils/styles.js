import { makeStyles } from "@mui/material/styles";


const useStyles = makeStyles({
  navbar: {
    backgroundColor: "red",
    "& :a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
});
export default useStyles;
