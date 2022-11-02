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
        <div>
          <div>{brand}</div>
          <div>{name}</div>
          <div>
            {segmentChange} / {feulTypeChange}
          </div>
          <div>
            월 {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 부터
          </div>
        </div>
        <div>
          <ItemImage src={img} alt="" />
        </div>
      </ItemContainer>
    </Link>
  );
};
export default ItemList;

const ItemContainer = styled.div`
  border-bottom: 2px solid black;
  text-align: center;
  width: 60%;
  margin: 0 auto;
  display: grid;
  justify-content: space-between;
`;

const ItemImage = styled.img`
  width: 20%;
`;
