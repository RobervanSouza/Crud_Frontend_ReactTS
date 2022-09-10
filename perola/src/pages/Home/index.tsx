import Menu from "components/menu";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { navagationItens } from "data/navigation";
import { ProductItemList } from "components/ProductItemList/style";
import ProductItem from "components/ProductItem";
import OrderDetails from "components/OrdeDetails";

const Home = () => {
  const dateDestination = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday: 'long' });
  return (
    <S.Home>
        <Menu
        active={RoutePath.HOME}
        navItens={navagationItens}
        />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
                <S.HomeHeaderDetailsLogo> Perola Negra Convites </S.HomeHeaderDetailsLogo>
                <S.HomeHeaderDetailsDate> {dateDestination} </S.HomeHeaderDetailsDate> 
            </div>
            <S.HomeHeaderDetailsSearch>
                <Search />
                <input type="text" placeholder="Pesquise seu Convite" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
            <S.HomeProductTitle> <b>Convite Perola Negra </b> </S.HomeProductTitle>
            <S.HomeProductList>
              <ProductItemList>
               <ProductItem/> 
              </ProductItemList>
            </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside> 
        <OrderDetails/>
      </aside>
    </S.Home>
  );
};
export default Home;
