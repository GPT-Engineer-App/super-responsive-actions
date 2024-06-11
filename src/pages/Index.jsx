import { useState } from "react";
import { Container, VStack, Text, Box, Input, useToast } from "@chakra-ui/react";
import { Command } from "cmdk";

const actions = [
  { name: "Mark as done", shortcut: "cmd+k" },
  { name: "Create new task", shortcut: "cmd+n" },
  { name: "Delete task", shortcut: "cmd+d" },
  { name: "Edit task", shortcut: "cmd+e" },
];

const Index = () => {
  const [search, setSearch] = useState("");
  const toast = useToast();

  const handleAction = (action) => {
    toast({
      title: `Action: ${action.name}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Linear.app Clone</Text>
        <Box width="100%">
          <Input
            placeholder="Type '?' to see available actions"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Command>
            <Command.Input placeholder="Search actions..." />
            <Command.List>
              {actions.map((action, index) => (
                <Command.Item key={index} onSelect={() => handleAction(action)}>
                  {action.name}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;