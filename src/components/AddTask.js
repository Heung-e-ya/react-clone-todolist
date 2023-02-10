import { useState } from "react";
import { Button, HStack, Input, position, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const AddTask = ({ addTask }) => {
  const toast = useToast();
  const [content, setContent] = useState("");
  const [statusInput, setStatusinput] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const taskText = content.trim();

    if (!taskText) {
      toast({
        title: "enter u r task",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      setStatusinput(false);

      return setContent("");
    }

    const task = {
      id: nanoid(),
      body: taskText,
      check: false,
    };

    addTask(task);
    setContent("");
  }

  if (content && !statusInput) {
    setStatusinput(true);
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="4" mb="4">
        <Input
          h="46"
          borderColor={!statusInput ? "red.300" : "transparent"}
          variant="filled"
          placeholder="Enter your task"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          colorScheme="twitter"
          px="8"
          pl="10"
          pr="10"
          h="46"
          type="submit"
        >
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default AddTask;
