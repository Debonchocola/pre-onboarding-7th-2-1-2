import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "styled-components";
import Nothing from "../../components/Nothing";
import Button from "../../components/Button";

const Main = () => {
  const [car, setCar] = useState([]);
  const [value, setValue] = React.useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCar, setFilteredCar] = useState([]);
  const getCar = async () => {
    await axios
      .get("https://preonboarding.platdev.net/api/cars")
      .then((result) => {
        setCar(result.data.payload);
        setFilteredCar(result.data.payload);
        setIsLoading(false);
        console.log(result.data.payload);
        console.log(car);
      });
  };

  useEffect(() => {
    getCar();
  }, []);

  useEffect(() => {
    console.log(filteredCar);
  }, [filteredCar]);

  const dayday1 = new Date(car.startDate);
  const dayday2 = new Date(car.createDate);
  const dayday3 = (dayday2 - dayday1) / (60 * 60 * 24 * 1000);

  return (
    <MainContainer>
      <Button car={car} setFilteredCar={setFilteredCar} />
      <CarItemBox>
        {!isLoading ? (
          filteredCar && filteredCar.length > 0 ? (
            filteredCar.map((item, i) => (
              <ItemList
                key={i}
                item={item}
                name={item.attribute.name}
                brand={item.attribute.brand}
                segment={item.attribute.segment}
                fuelType={item.attribute.fuelType}
                amount={item.amount}
                img={item.attribute.imageUrl}
                id={item.id}
                calDate={dayday3}
                isLoading={isLoading}
              />
            ))
          ) : (
            <Nothing />
          )
        ) : (
          <p>...로딩중</p>
        )}
      </CarItemBox>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div``;

const CarItemBox = styled.div`
  width: 390px;
  margin: 0 auto;
`;
