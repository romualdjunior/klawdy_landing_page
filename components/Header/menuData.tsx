import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Platfom",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Solutions",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 31,
        title: "AWS users",
        newTab: false,
        path: "/",
      },
      {
        id: 34,
        title: "Azure users",
        newTab: false,
        path: "/",
      },
      {
        id: 35,
        title: "GCP users",
        newTab: false,
        path: "/",
      },
    ],
  },
  {
    id: 2.3,
    title: "Resources",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Customers",
    newTab: false,
    path: "/",
    /* submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],*/
  },

  {
    id: 4,
    title: "Pricing",
    newTab: false,
    path: "/",
  },
];

export default menuData;
