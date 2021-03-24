import React from "react";
import Faker from "faker";
import HomeIcon from "@material-ui/icons/Home";
import Storefront from "@material-ui/icons/StorefrontOutlined";
import Build from "@material-ui/icons/BuildOutlined";
import BorderOuter from "@material-ui/icons/BorderOuter";

const menuItems = {
  menus: [
    {
      text: "Products",
      icon: <HomeIcon />,
      link: "/dashboard",
      subMenus: [
        { 
          text: "Compute",
          icon: <BorderOuter />,
          link: "/dashboard",
        },
        {
          text: "Storage",
          icon: <BorderOuter />,
          link: "/dashboard",
        },
        {
          text: "Database",
          icon: <BorderOuter />,
          link: "/dashboard",
        },
        {
          text: "Message Queue",
          icon: <BorderOuter />,
          link: "/dashboard",
        },
        {
          text: "Container",
          icon: <BorderOuter />,
          link: "/dashboard",
        },
        {
          text: "AppFunction",
          icon: <BorderOuter />,
          link: "/dashboard",
        },
      ],
    },
    { text: "Products", icon: <Storefront />, link: "/dashboard" },
    { text: "Design Studio", icon: <Build />, link: "/dashboard" },
  ],
};

export default menuItems;
