import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailContent = () => {
  const [car, setCar] = useState([]);
  const { id } = useParams(0);

  const getCar = async () => {
    await axios
      .get(`https://preonboarding.platdev.net/api/cars/${id}`)
      .then((result) => {
        console.log(result.data.payload);
        console.log(car);
      });
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <>
      {/* {car.amount && <div>{car.id}</div>} */}
      {/* <div>
        <img src={car.attribute.imageUrl} alt="" />
        <div>{car.attribute.brand}</div>
        <div>{car.attribute.name}</div>
        <div>월{car.amount}원</div>
        <div>
          <h1>차량정보</h1>
          <div>차종 {car.attribute.segment}</div>
          <div>연료 {car.attribute.fuelType}</div>
          <div>이용 가능일 {car.startDate}부터</div>
        </div>
        <div>
          <div>{car.insurance[0]}</div>
          <div>{car.insurance[1]}</div>
        </div>
      </div> */}
    </>
  );
};

export default DetailContent;
