import styled from "styled-components";

const Layout = styled.div`
  padding: 20px;
  background: beige;
`;

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

export default Container;
