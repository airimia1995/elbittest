import { useMemo } from "react";
import styled from "styled-components";
import { isConditionVerified } from "../../utils";

const List = ({ numbOfElements }) => {
  const list = useMemo(() => {
    return Array.from(Array(numbOfElements + 1).keys()).map((item) => {
      const color = isConditionVerified(item) ? "red" : "";
      return <ContainerItem key={item} color={color}>{item}</ContainerItem>;
    });
  }, [numbOfElements]);

  return <ContainerList>{list}</ContainerList>;
};

const ContainerList = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ContainerItem = styled.div`
  color: ${(props) => props.color};
  margin-right: 5px;
`;
export default List;
