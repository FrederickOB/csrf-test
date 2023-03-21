import {
  ContactsIcon,
  CardIcon,
  GiftIcon,
  HomeIcon,
  CalendarIcon,
} from "../icons";
export const sidebarNavItemsAdmin = [
  { id: 1, display: "Home", icon: HomeIcon, to: "/", section: "" },
  {
    id: 2,
    display: "Calender",
    icon: CalendarIcon,
    to: "/calendar",
    section: "calendar",
  },
  {
    id: 3,
    display: "Contacts",
    icon: ContactsIcon,
    to: "/contacts",
    section: "contacts",
  },
  {
    id: 4,
    display: "Cards",
    icon: CardIcon,
    to: "/cards",
    section: "cards",
  },
  {
    id: 5,
    display: "Gifts (Beta)",
    icon: GiftIcon,
    to: "/gift",
    section: "gift",
  },
];
