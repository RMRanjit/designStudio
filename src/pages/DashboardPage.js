import React from "react";
import globalStyles from "../styles";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Data from "../data/data";
import ProductList from "../components/productCard/productList";
import data from "../data/data";
import config from "../data/config";

const DashboardPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Home</h3>

      <ProductList
        payLoad={data.catalog
          .sort((a, b) => (a.recentlyUsed > b.recentlyUsed ? 1 : -1))
          .slice(0, config.recentCount)}
        header="Recently used"
      />
    </div>
  );
};

export default DashboardPage;
