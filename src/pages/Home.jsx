import React, { useEffect, useState } from "react";
import "../App.css";

import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  useToast,
  Box,
} from "@chakra-ui/react";
import axios from "axios";

import { Grid, GridItem } from "@chakra-ui/react";

function Home() {
  const [bookData, setBookData] = useState([]);
  const toast = useToast();

  const getData = () => {
    axios
      .get(`http://localhost:8080/books`)
      .then((res) => {
        setBookData(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:8080/books/${id}`)
      .then((res) => {
        toast({
          title: "Product Deleted Successful.",
          description: "We have updated the repository",
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
        getData();
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
    // style={{
    //   display: "grid",
    //   gridTemplateColumns: "repeat(3,1fr)",
    //   gap: "1rem",
    //   width: "70%",
    //   marginLeft: "20%",
    //   h: "100px",
    // }}
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        marginLeft={{
          base: "1rem",
          sm: "_",
          md: "32%",
          lg: "20%",
        }}
      >
        {bookData?.map((book) => {
          return (
            <Card
              key={book.id}
              maxW="sm"
              className="mainPage"
              border={"1px solid gray"}
            >
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading size="md" color="blue.600" fontSize="2xl">
                    {`Title: ${book.title}`}
                  </Heading>
                  <Text color="black.600" fontSize="2xl">
                    {`Author: ${book.author}`}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {`Published Year: ${book.published}`}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {`ISBN: ${book.isbn}`}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="5">
                  <RouterLink to={`/editProduct/${book.id}`}>
                    {" "}
                    <Button variant="solid" colorScheme="blue">
                      Edit Details
                    </Button>
                  </RouterLink>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Home;
