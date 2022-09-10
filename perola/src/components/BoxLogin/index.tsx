import * as S from "./style";
import logo from "assets/logo/logo.jpg";
import ButtonLarge from "components/ButtonLarge";
const BoxLogin = () => {
    return(
        <S.BoxLogin>
            <S.BoxLoginLogo>
                <S.BoxLoginLogoText>
                    <span>Convite</span>
                    <span>Perola Negra</span>
                </S.BoxLoginLogoText>
                <S.BoxLoginLogoImage src={logo} alt ="logo"/>
            </S.BoxLoginLogo>
            <S.BoxLoginForm>
              <input type="text" placeholder= "Email"/>
              <input type="password" placeholder= "Senha"/>
              <ButtonLarge value="Entrar" type = "button" />
            </S.BoxLoginForm>
        </S.BoxLogin>
    );
}

export default BoxLogin;