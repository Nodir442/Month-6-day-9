import { nanoid } from "nanoid";
import { Home } from "../pages/home/home";
import { Contact } from "../pages/contact/contact";
import { About } from "../pages/about/about";
//User Routung
import { Profile } from "../pages/user/profile/profile";
import { OrderList } from "../pages/user/order-list/order-list";
import { ChangeAccount } from "../pages/user/change-account/change-account";
import { ProductDetails } from "../pages/product-details/product-details";

export const routes = [
  {
    component: Home,
    id: nanoid(),
  },
  {
    component: ProductDetails,
    path: "/products/products-datail/:id",
    id: nanoid(),
  },
  {
    component: Contact,
    path: "contact",
    id: nanoid(),
  },
  {
    component: About,
    path: "about",
    id: nanoid(),
  },
];

export const userRoutes = [
  {
    component: Profile,
    id: nanoid(),
  },
  {
    component: OrderList,
    path: "order-list",
    id: nanoid(),
  },
  {
    component: ChangeAccount,
    path: "change-account",
    id: nanoid(),
  },
];
