import React from "react";
import styled from "styled-components";

const Nothing = () => {
  return <NoData>차량이 없습니다.</NoData>;
};

export default Nothing;

const NoData = styled.div`
  width: 390px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
