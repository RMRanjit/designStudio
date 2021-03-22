import React from "react";
import Faker from "faker";
import HomeIcon from "@material-ui/icons/Home";

const data = {
  menus: [{ text: "Home", icon: <HomeIcon />, link: "/dashboard" }],
  user: {
    userName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    avatar: "https://randomuser.me/api/",
  },
  tablePage: {
    items: Array.from({ length: 105 }, (item, index) => ({
      id: index,
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      category: Faker.commerce.productMaterial(),
    })),
  },
  dashBoardPage: {
    browserUsage: [
      { name: "Chrome", value: 800 },
      { name: "Firefox", value: 300 },
      { name: "Safari", value: 300 },
    ],
  },
};

export default data;
