import computer from "../assets/desktop-icons/computer.png";
import explorer from "../assets/desktop-icons/explorer.png";
import info from "../assets/desktop-icons/info.png";

const menuItems = [
  {
    img: computer,
    name: "MyProfile",
    text: "View and Edit",
    route: "/profile",
  },
  {
    img: explorer,
    name: "Explorer",
    text: "Internet Explorer",
    route: "/explorer",
  },
];

export const menuSideItems = [
  {
    img: info,
    name: "Info",
  },
];

export default menuItems;
