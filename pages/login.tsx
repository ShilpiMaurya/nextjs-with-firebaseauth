import { useState } from "react";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Heading
} from "@chakra-ui/react";

export default function Login() {
  firebaseClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Flex>
        <Box>
          <Heading as="h2">Login</Heading>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              onChange={e => setEmail(e.target.value)}
              type="email"
              id="email address"
              value={email}
            ></Input>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input
              onChange={e => setPassword(e.target.value)}
              type="password"
              id="password"
              value={password}
            ></Input>
          </FormControl>
          <Stack justify="center" isInline spacing={10}>
            <Button
              isDisabled={email === "" || password === ""}
              onClick={async () => {
                console.log(email, "email");
                console.log(password, "password");
                await firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, password)
                  .then(function() {
                    window.location.href = "/";
                  })
                  .catch(function(error) {
                    error.message;
                  });
              }}
            >
              Create Account
            </Button>
            <Button
              isDisabled={email === "" || password === ""}
              onClick={async () => {
                await firebase
                  .auth()
                  .signInWithEmailAndPassword(email, password)
                  .then(function() {
                    window.location.href = "/";
                  })
                  .catch(function(error) {
                    error.message;
                  });
              }}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
