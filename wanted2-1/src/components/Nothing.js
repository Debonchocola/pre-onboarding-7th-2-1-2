import React from "react";
import styled from "styled-components";

const Nothing = () => {
  return <NoData>차량이 없습니다.</NoData>;
};

export default Nothing;

const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
`;
