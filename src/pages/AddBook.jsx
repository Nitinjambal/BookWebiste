import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Box,
} from "@chakra-ui/react";
import "../App.css";
import axios from "axios";

const inetialValue = {
  isbn: "",
  title: "",
  author: "",
  published: "",
};

function AddBook() {
  const [formData, setFormData] = useState(inetialValue);
  const toast = useToast();

  const handleOnChange = (e) => {
    let { value } = e.target;

    setFormData((prev) => {
      return { ...prev, [e.target.name]: value };
    });
  };

  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/books`, formData)
      .then((res) => {
        toast({
          title: "Book added successfully.",
          description: "We've added your book ",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((error) => {
        console.log(error);
      });

    setFormData(inetialValue);
  };

  return (
    <Box width={{ base: "90%", sm: "90%", md: "36%", lg: "40%" }} margin="auto">
      <FormControl
        onSubmit={handleSubmit}
        margin={"auto"}
        padding={"1rem"}
        border={"1px solid gray"}
      >
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => handleOnChange(e)}
        />

        <FormLabel>Author</FormLabel>
        <Input
          type="text"
          name="author"
          value={formData.author}
          onChange={(e) => handleOnChange(e)}
        />

        <FormLabel>Published Year</FormLabel>
        <Input
          type="number"
          name="published"
          value={formData.published}
          onChange={(e) => handleOnChange(e)}
        />

        <FormLabel>ISBN</FormLabel>
        <Input
          type="number"
          name="isbn"
          value={formData.isbn}
          onChange={(e) => handleOnChange(e)}
        />

        <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}

export default AddBook;
