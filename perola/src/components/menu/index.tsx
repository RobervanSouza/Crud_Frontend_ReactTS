import logo from "assets/logo/logo.jpg"
import * as S from "./style";
import{ReactComponent as Logout } from "assets/icons/logout.svg"; 
import { RoutePath } from "types/routes";
import { NavItem } from "./types";

interface MenuProps {
    active: RoutePath;
    navItens: NavItem[];
}
const Menu = ({active, navItens} : MenuProps) => {
        return (
          <S.Menu>
            <nav>
              <S.MenuLogo>
                <img src={logo} alt="logo" />
              </S.MenuLogo>
              {navItens.map((item, index) => (
                <S.MenuItem
                  key={`MenuItem-${index}`}
                  active={item.path === active}
                >
                  <S.MenuItemButton active={item.path === active}>
                    {item.icon}
                  </S.MenuItemButton>
                </S.MenuItem>
              ))}
            </nav>
            <S.MenuItemLogout>
              <Logout />
            </S.MenuItemLogout>
          </S.Menu>
        );
}
export default Menu;