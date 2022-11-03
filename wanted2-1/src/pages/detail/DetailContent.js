import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const DetailContent = () => {
  const [car, setCar] = useState([]);
  // const { id } = useParams(0);

  const getCar = async () => {
    await axios
      .get("https://preonboarding.platdev.net/api/cars")
      .then((result) => {
        setCar(result);
        console.log(result.data.payload);
        console.log(car);
      });
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <div>
      <ListImg>img</ListImg>
      <div>
        <ListItem>car.attribute.brand</ListItem>
        <ListItem>car.attribute.name</ListItem>
        <ListItem>월car.amount원</ListItem>
      </div>
      <div>
        <ListHeader>차량정보</ListHeader>
        <ListItem>
          <span>차종</span> <div>car.attribute.segment</div>
        </ListItem>
        <ListItem>
          <span>연료</span> <div>car.attribute.fuelType</div>
        </ListItem>
        <ListItem>
          <span>이용 가능일</span> <div>ar.startDate부터</div>
        </ListItem>
      </div>
      <div>
        <ListHeader>보험</ListHeader>
        <ListItem>
          <span>대인</span>car.insurance[0]
        </ListItem>
        <ListItem>
          <span>대물</span>car.insurance[1]
        </ListItem>
      </div>
      <div>
        <ListHeader>추가상품</ListHeader>
        <ListItem>
          <span>히이파크주차권</span>additionalProducts.amout원
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
