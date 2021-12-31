import { Button, withStyles } from "@material-ui/core";

const BootstrapButton = ({ style, children }) => {
  const CustomBtn = withStyles({
    root: {
      boxShadow: "none",
      textTransform: "none",
      fontSize: 12,
      color: "red",
      lineHeight: 1.5,
    },
  })(Button);
  return <CustomBtn style={style}>{children}</CustomBtn>;
};

export default BootstrapButton;
