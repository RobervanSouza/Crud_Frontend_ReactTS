import * as S from "./style";

const ProductItem = () =>{
  return(
    <S.ProductItem>
        <S.ProductItemImage src="" alt=""/>
        <div>
            <S.ProductItemName> nome do convite</S.ProductItemName>
            <S.ProductItemPrice>R$ 1</S.ProductItemPrice>
            <S.ProductItemDescription> Descrição do convite</S.ProductItemDescription>
        </div>
    </S.ProductItem>
  )
}

export default ProductItem;