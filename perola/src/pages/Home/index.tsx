import Menu from "components/menu";
import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";

const Home = () => {
  return (
    <S.Home>
        <Menu/>
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
                <S.HomeHeaderDetailsLogo> Perola Negra Convites </S.HomeHeaderDetailsLogo>
                <S.HomeHeaderDetailsDate> Aqui ficara a data </S.HomeHeaderDetailsDate> 
            </div>
            <S.HomeHeaderDetailsSearch>
                <Search />
                <input type="text" placeholder="Pesquise seu Convite" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
            <S.HomeProductTitle> <b>Convite Perola Negra </b> </S.HomeProductTitle>
            <S.HomeProductList> <p> Lista de produtos aqui</p> </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside> <p>detalhes do pedido aqui </p></aside>
    </S.Home>
  );
};
export default Home;
