import styled from "styled-components";

const Button = ({ car, setFilteredCar }) => {
  const onClickBtn = (e) => {
    if (e.target.value === "all") {
      setFilteredCar(car);
    } else {
      console.log(e.target);
      setFilteredCar(
        car.filter((item) => {
          console.log(item);
          return item.attribute.segment === e.target.value;
        })
      );
    }
  };
  return (
    <ButtonBox>
      <ButtonItem value={"all"} onClick={onClickBtn}>
        전체
      </ButtonItem>
      <ButtonItem value={"E"} onClick={onClickBtn}>
        대형
      </ButtonItem>
      <ButtonItem value={"D"} onClick={onClickBtn}>
        중형
      </ButtonItem>
      <ButtonItem value={"C"} onClick={onClickBtn}>
        소형
      </ButtonItem>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
  margin: 0 auto;
  width: 390px;
  height: 40px;
`;

const ButtonItem = styled.button`
  width: 62px;
  height: 27px;
  border: none;
  border-radius: 1rem;
`;

export default Button;
