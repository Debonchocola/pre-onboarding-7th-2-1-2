/* eslint-disable default-case */
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemList = ({ id, name, brand, segment, fuelType, amount, img }) => {
  let segmentChange = segment.replace(/(C|D|E)/g, function (v) {
    switch (v) {
      case "C":
        return "소형";
      case "D":
        return "중형";
      case "E":
        return "대형";
    }
  });

  let feulTypeChange = fuelType.replace(/(gasoline|ev|hybrid)/g, function (v) {
    switch (v) {
      case "gasoline":
        return "가솔린";
      case "ev":
        return "전기";
      case "hybrid":
        return "하이브리드";
    }
  });
  return (
    <Link to={`/${id}`}>
      <ItemContainer>
        <CarInfo>
          <div>{brand}</div>
          <div>{name}</div>
          {segmentChange} / {feulTypeChange}
          <div>
            {" "}
            월 {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 부터
          </div>
        </CarInfo>
        <CarImg>
          <ItemImage src={img} alt="" />
        </CarImg>
      </ItemContainer>
    </Link>
  );
};
export default ItemList;

const ItemContainer = styled.div`
  display: flex;
  width: 390px;
  height: 120px;
  justify-content: space-between;
`;

const CarInfo = styled.div`
  width: 136px;
  height: 72px;
  font-size: 15px;
`;

const CarImg = styled.div`
  width: 152px;
  height: 80px;
  background-color: D9D9D9;
`;
// margin-top: 20px;
// margin-left: 0px;
// text-align: left;
const ItemImage = styled.img`
  width: 152px;
  height: 80px;
`;
