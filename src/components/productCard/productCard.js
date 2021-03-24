import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import config from "../../data/config";

const ProductCard = (props) => (
  <Card className={"productCard"}>
    <CardActionArea component={RouterLink} to={"/dashboard/" + props.Name}>
      <div className={"head"}>
        <Avatar className={"Avatar"} src={props.Icon} />
        <Typography className={"headLabel"} variant={"overline"} gutterBottom>
          {props.price}
        </Typography>
      </div>
      <Divider className={"DividerRoot"} light />
      <CardContent className={"CardContentRoot"}>
        <Typography className={"Overline"} variant={"Overline"} gutterBottom>
          {props.nodeType}
        </Typography>
        <Typography className={"Heading"} variant={"h6"} gutterBottom>
          {props.Name}
        </Typography>
        <Typography className={"Subheading"} gutterBottom>
          {props.description.length > config.productDescriptionLength
            ? props.description.substring(0, config.productDescriptionLength) +
              "..."
            : props.description}
        </Typography>
      </CardContent>
      <CardActions className={"CardActions"}>
        <Button color={"Secondary"}>
          <Icon style={{ fontSize: 30 }}>add_circle</Icon>
        </Button>
      </CardActions>
    </CardActionArea>
  </Card>
);

ProductCard.getTheme = (muiBaseTheme) => ({
  MuiCard: {
    root: {
      "&.productCard": {
        transition: "0.3s",
        maxWidth: 200,
        maxHeight: 250,
        margin: "auto",
        borderRadius: 16,
        padding: muiBaseTheme.spacing.unit * 3,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,120,0.9)",
        },
        "& .head": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "& .Avatar": {
            width: 80,
            height: 80,
            backgroundColor: "#EDEDED",
            transform: "translateY(50%)",
          },
          "& .headLabel": {
            color: muiBaseTheme.palette.grey[900],
          },
        },
        "& .DividerRoot": {
          marginLeft: -muiBaseTheme.spacing.unit * 3,
          marginRight: -muiBaseTheme.spacing.unit * 3,
        },
        "& .CardContentRoot": {
          textAlign: "left",
          padding: 0,
          paddingTop: muiBaseTheme.spacing.unit * 6,
          "& .Overline": {
            fontSize: 16,
            fontWeight: "bold",
            color: muiBaseTheme.palette.grey[500],
          },
          "& .Heading": {
            fontWeight: 900,
          },
          "& .Subheading": {
            lineHeight: 1.8,
            fontSize: 14,
          },
        },
      },
      "& .CardActions": {
        padding: `0 ${muiBaseTheme.spacing.unit * 1}px ${muiBaseTheme.spacing
          .unit * 1}px`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "right",
      },
    },
  },
  MuiButton: {
    root: {
      "& svg, .material-icons": {
        marginLeft: muiBaseTheme.spacing.unit,
      },
    },
    label: {
      textTransform: "initial",
    },
  },
});
ProductCard.displayName = "Card";
ProductCard.metadata = {
  name: "ProductCard",
  description: "used for displaying product info",
};

export default ProductCard;
