import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {
  blue,
  grey,
  pink,
  red,
  deepOrange,
  orange,
  teal,
  green,
  amber,
  lime,
  purple,
} from "@material-ui/core/colors";

export const availableThemes = [
  {
    title: "Default",
    primary: { main: "#757575" },
    secondary: { main: "#6ab7ff" },
  },
  {
    title: "Sunset",
    primary: deepOrange,
    secondary: orange,
  },
  {
    title: "Greeny",
    primary: teal,
    secondary: green,
  },
  {
    title: "Beach",
    primary: grey,
    secondary: amber,
  },
  {
    title: "Tech",
    primary: blue,
    secondary: lime,
  },
  {
    title: "Deep Ocean",
    primary: purple,
    secondary: pink,
  },
];

const defaultTheme = {
  palette: {
    primary: { main: "#757575" },
    secondary: { main: "#6ab7ff" },
  },
  error: red,
  appBar: {
    height: 57,
    color: grey[600],
    backgroundColor: grey[900],
  },
  drawer: {
    width: 240,
    color: grey[900],
    backgroundColor: grey[900],
    miniWidth: 56,
  },
  raisedButton: {
    primaryColor: blue[600],
  },
  typography: {
    // useNextVariants: true
  },
};

const theme = createMuiTheme(defaultTheme);

export const customTheme = (option) => {
  return createMuiTheme({ ...defaultTheme, ...option });
};

export default theme;
