import { v4 as uuid } from "uuid";

const NavbarDefault = [
  {
    id: uuid(),
    menuitem: "Home",
    link: "/",
  },
  {
    id: uuid(),
    menuitem: "Blog",
    link: "/blog/blog-posts",
  },
  {
    id: uuid(),
    menuitem: "About Me",
    link: "/about",
  },
  {
    id: uuid(),
    menuitem: "Contact",
    link: "/contact",
  },
];

export default NavbarDefault;
