import Link from "next/link";
import { useAuth } from "../auth";
import Container from "../components/Container";
import styled from "styled-components";

const Text = styled.div`
  color: red;
`;

export default function Home() {
  const { user }: any = useAuth();
  return (
    <>
      <Container>
        <Text>{`User ID: ${user ? user.uid : "No user signed it"}`}</Text>
        <button>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </button>
      </Container>
    </>
  );
}
