import React from "react";
import faker from "faker";
import HomeIcon from "@material-ui/icons/Home";

const data = {
  user: {
    userName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: "https://i.pravatar.cc/200",
  },
  catalog: [
    {
      ports: "default",
      nodeType: "Compute",
      price: "2.82",
      icon: "../../Images/Compute.png",
      configuration: "1 vCPU, 1 GiB RAM",
      name: "Small Compute",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Compute",
      price: "25.45",
      icon: "../../Images/Compute.png",
      configuration: "2 vCPU, 4 GiB RAM",
      name: "Medium Compute",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Compute",
      price: "30.43",
      icon: "../../Images/Compute.png",
      configuration: "4 vCPU, 16 GiB RAM",
      name: "Large Compute",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Storage",
      price: "34.54",
      icon: "../../Images/Storage.png",
      configuration: "DiskSize S30 Capacity 1024",
      name: "Regular Storage",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Storage",
      price: "119.82",
      icon: "../../Images/Storage.png",
      configuration: "DiskSize P30 Capacity 8192",
      name: "Premium Storage",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Database",
      price: "100.82",
      icon: "../../Images/Database.png",
      configuration: "DiskSize P30 Capacity 8192",
      name: "Cassandra",
      ecentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Database",
      price: "201.64",
      icon: "../../Images/Database.png",
      configuration: "DiskSize P30 Capacity 8192",
      name: "Cassandra HA",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Database",
      price: "239.99",
      icon: "../../Images/Database.png",
      configuration: "Gen5 Series 2 vCore 10.2 GB RAM. Storage: 5 GB-4 TB",
      name: "MS SQL Server",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Database",
      price: "201.64",
      icon: "../../Images/Database.png",
      configuration: "DiskSize P30 Capacity 8192",
      name: "MySQL",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Database",
      price: "201.64",
      icon: "../../Images/Database.png",
      configuration: "DiskSize P30 Capacity 8192",
      name: "Oracle",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Kafka Topic",
      price: "21.64",
      icon: "../../Images/Queue.png",
      configuration: "Throughput unit (1 MB/s ingress, 2 MB/s egress)",
      name: "Kafka Topic",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Dedicated Event Hub",
      price: "5560.41",
      icon: "../../Images/Queue.png",
      configuration: "1.05 GB/sec - Ingress 250 TUs",
      name: "Premium Event Hub",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "RabbitMQ Topic",
      price: "21.64",
      icon: "../../Images/Queue.png",
      configuration: "Throughput unit (1 MB/s ingress, 2 MB/s egress)",
      name: "RabbitMQ Topic",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "AppFunction",
      price: "17.60",
      icon: "../../Images/AppFunctions.png",
      configuration: "3 million sec, 1.5 million GB-s, ",
      name: "AppFunction",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Container",
      price: "201.64",
      icon: "../../Images/Queue.png",
      configuration: "DiskSize P30 Capacity 8192",
      name: "Container",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
    {
      ports: "default",
      nodeType: "Kafka Topic",
      price: "201.64",
      icon: "../../Images/Queue.png",
      configuration: "DiskSize P30 Capacity 8192",
      name: "Kafka Topic",
      recentlyUsed: faker.random.number({
        min: 1,
        max: 50,
      }),
    },
  ],
};

export default data;
