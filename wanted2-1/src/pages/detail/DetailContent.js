import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import styled from "styled-components";

const DetailContent = () => {
  const [car, setCar] = useState([]);
  const { state } = useLocation();
  const getCarDetail = async () => {
    await axios
      .get(`https://preonboarding.platdev.net/api/cars/`)
      .then((result) => {
        setCar(result);
        console.log(result.data.payload);
        console.log(car);
      });
  };

  useEffect(() => {
    getCarDetail();
  }, []);

  // let segmentChange = state.attribute.segment.replace(/(C|D|E)/g, function (v) {
  //   switch (v) {
  //     case "C":
  //       return "소형";
  //     case "D":
  //       return "중형";
  //     case "E":
  //       return "대형";
  //   }
  // });

  // let fuelTypeChange = state.attribute.fuelType.replace(
  //   /(gasoline|ev|hybrid)/g,
  //   function (v) {
  //     switch (v) {
  //       case "gasoline":
  //         return "가솔린";
  //       case "ev":
  //         return "전기";
  //       case "hybrid":
  //         return "하이브리드";
  //     }
  //   }
  // );
  return (
    <div>
      <ListImg>
        <CarImg src={state.attribute.imageUrl} alt="" />
      </ListImg>
      <div>
        <ListItem>
          <CarInfo>
            <div>{state.attribute.brand}</div>
            <div>{state.attribute.name}</div>
          </CarInfo>
        </ListItem>

        <CarAmount>
          월{state.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </CarAmount>
      </div>
      <div>
        <ListHeader>차량정보</ListHeader>
        <ListItem>
          <span>차종</span> <div>{state.attribute.segment}</div>
        </ListItem>
        <ListItem>
          <span>연료</span> <div>{state.attribute.fuelType}</div>
        </ListItem>
        <ListItem>
          <span>이용 가능일</span>{" "}
          <div>{state.startDate.substr(0, 10)} 부터</div>
        </ListItem>
      </div>
      <div>
        <ListHeader>보험</ListHeader>
        <ListItem>
          <span>{state.insurance[0].name}</span>
          {state.insurance[0].description}
        </ListItem>
        <ListItem>
          <span>{state.insurance[1].name}</span>
          {state.insurance[1].description}
        </ListItem>
      </div>
      <div>
        <ListHeader>추가상품</ListHeader>
        <ListItem>
          <span>{state.additionalProducts[0].name}</span>
          {state.additionalProducts[0].amount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </ListItem>
      </div>
    </div>
  );
};

export default DetailContent;

const ListHeader = styled.div`
  width: 390px;
  height: 48px;
  margin: 0 auto;
  background-color: #0094ff;
`;

const ListItem = styled.div`
  width: 390px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const ListImg = styled.div`
  width: 390px;
  height: 205px;
  margin: 0 auto;
  background-color: #d9d9d9;
`;
const CarImg = styled.img`
  width: 100%;
`;

const CarAmount = styled.div`
  width: 390px;
  height: 48px;
  margin: 0 auto;
  text-align: right;
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
