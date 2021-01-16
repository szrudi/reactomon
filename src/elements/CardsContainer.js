import styled from "styled-components";

export const CardsContainer = styled.div
    .attrs({className: 'cards'})`
  padding: 2px 16px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 5;
  justify-content: space-evenly;
  &::after {
    content: "";
    flex: 1 0 150px;
  }
`;
