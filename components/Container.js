import styled from "styled-components";

const Box = styled.div`
  padding: 20px;
  background: beige;
`;

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Container;
