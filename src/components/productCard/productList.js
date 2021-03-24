import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./productCard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const muiBaseTheme = createMuiTheme();

const ProductList = (props) => (
  <MuiThemeProvider
    theme={createMuiTheme({
      typography: {
        useNextVariants: true,
      },
      overrides: ProductCard.getTheme(muiBaseTheme),
    })}
  >
    <h3>{props.header}</h3>

    <Grid container xs={12} direction="rows" spacing={3}>
      {props.payLoad.map((catalog) => (
        <Grid item>
          <ProductCard
            price={"$" + catalog.price}
            description={catalog.configuration}
            nodeType={catalog.nodeType}
            Name={catalog.name}
            Icon={catalog.icon}
          />
        </Grid>
      ))}
    </Grid>
  </MuiThemeProvider>
);

export default ProductList;
