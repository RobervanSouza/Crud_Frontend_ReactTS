import logo from "assets/logo/logo.jpg"
import * as S from "./style";
import{ReactComponent as Logout } from "assets/icons/logout.svg"; 

const Menu = () => {
        return (
         <S.Menu>
            <nav>
                <S.MenuLogo>
                   <img src={ logo } alt="logo" />
                </S.MenuLogo>
                <S.MenuItem>
                    <S.MenuItemButton> </S.MenuItemButton>
                </S.MenuItem>
            </nav>
            <S.MenuItemLogout>
                <Logout/>
            </S.MenuItemLogout>
         </S.Menu>
    );
}
export default Menu;