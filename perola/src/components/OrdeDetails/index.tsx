import ButtonLarge from "components/ButtonLarge";
import ButtonToggle from "components/ButtonToggle";
import OrderItemList from "components/OrderItemList";
import * as S from "./style";

const OrderDetails = () => {
  return (
    <S.OrderDetails>
      <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
      <S.OrderDetailsButtonGroup>
        <ButtonToggle active={true} value="teste " />
        <ButtonToggle active={false} value=" teste 2" />
        <ButtonToggle active={true} value="teste 3  " />
      </S.OrderDetailsButtonGroup>
      <S.OrderDetailsList>
        <OrderItemList
          header={
            <S.OrderDetailsListTitle>
              <h4>Item</h4>
              <h4>Qtd</h4>
              <h4> Preço </h4>
            </S.OrderDetailsListTitle>
          }
          list={"lista de itens"}
          footer= {
            <S.OrderDetailsListFooter>
                <S.OrderDetailsListFooterRow>
                    <span> total</span>
                    <span> R$ 10.00 </span>
                </S.OrderDetailsListFooterRow>
                <ButtonLarge value="Fazer o Pagamento" />
            </S.OrderDetailsListFooter>
          }
        />
      </S.OrderDetailsList>
    </S.OrderDetails>
  );
};

export default OrderDetails;
