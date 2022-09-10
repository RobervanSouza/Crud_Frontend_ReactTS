import { NavItem } from "components/menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Settings } from "assets/icons/settings.svg";
import { RoutePath } from "types/routes";

export const navagationItens: NavItem[] = [
  {
    icon: <Home />,
    path: RoutePath.HOME,
  },
  {
    icon: <Settings />,
    path: RoutePath.SETTINGS,
  },
];