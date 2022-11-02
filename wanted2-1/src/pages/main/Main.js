import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "styled-components";

const Main = () => {
  const [car, setCar] = useState([]);
  const [value, setValue] = React.useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getCar = async () => {
    await axios
      .get("https://preonboarding.platdev.net/api/cars")
      .then((result) => {
        setCar(result.data.payload);
        setIsLoading(false);
        console.log(result.data.payload);
        console.log(car);
      });
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <MainContainer>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <Box
          sx={{
            width: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="전체" value="1" />
                <Tab label="대형" value="2" />
                <Tab label="중형" value="3" />
                <Tab label="소형" value="4" />
                <Tab label="SUV" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {car &&
                car.map((item, i) => (
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
                  />
                ))}
            </TabPanel>
            <TabPanel value="2">
              {car && !car.length && <div>차량이 없습니다.</div>}
              {car &&
                car
                  .filter((item) => item.attribute.segment === "E")
                  .map((item, i) => {
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
                    />;
                  })}
            </TabPanel>
            <TabPanel value="3">
              {" "}
              {car &&
                car
                  .filter((item) => item.attribute.segment === "D")
                  .map((item, i) => (
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
                    />
                  ))}
            </TabPanel>
            <TabPanel value="4">
              {" "}
              {car &&
                car
                  .filter((item) => item.attribute.segment === "C")
                  .map((item, i) => (
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
                    />
                  ))}
            </TabPanel>
            <TabPanel value="5">
              {car &&
                car
                  .filter((item) => item.attribute.segment === "SUV")
                  .map((item, i) => (
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
                    />
                  ))}
            </TabPanel>
          </TabContext>
        </Box>
      )}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div``;
