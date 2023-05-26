import { File, FilePlus, Home, ShoppingBag } from "react-feather";

export default [  
  {
    id: "type",
    title: "Type",
    icon: <Home size={20} />,
    isAccess: true,
    navLink: "/type",
  },
  {
    id: "letter",
    title: "Letter",
    icon: <FilePlus size={20} />,
    isAccess: true,
    navLink: "/letter",
  },

  {
    id: "letter-list",
    title: "Letter List",
    icon: <File size={20} />,
    isAccess: true,
    navLink: "/list-letter",
  },
  {
    id: "bag",
    title: "Bag",
    icon: <ShoppingBag size={20} />,
    isAccess: true,
    navLink: "/bag",
  },
];
