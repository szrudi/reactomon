import styled, {css} from "styled-components";

export const Card = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 200px;
  text-align: left;

  ${props => props.small && css`
    height: 60px;
    width: 110px;
    transition: 0.1s;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `}
  ${props => props.centered && css`
    text-align: center;
  `}
`;