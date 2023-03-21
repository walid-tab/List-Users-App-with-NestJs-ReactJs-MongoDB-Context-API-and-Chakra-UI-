import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineUserAdd } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/GlobalWrapper';
import Row from './components/Row';
import DrawerExample from './components/DrawerExample';

function App() {
  const { FetchUsers, Search, users, onOpen } = useContext(GlobalContext);
  const [query, setQuery] = useState('');
  useEffect(() => {
    FetchUsers();
  }, []);
  const SearchHandler = () => {
    Search(query);
  };
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="App">
      {/* Title App */}
      <Heading align="center" border="1px" borderColor="gray.200" bg="#F0EEED">
        CRUD List Users App
      </Heading>
      {/* Search Bar */}
      <Container maxW={'full'} p="4" fontSize={'18px'}>
        <Box rounded="lg" boxShadow="base" p="4">
          <Box mt="2" gap={'2'} mb="4" display={'flex'}>
            <FormControl>
              <Input type="text" onChange={onchangeHandler} />
            </FormControl>
            <Button
              leftIcon={<AiOutlineSearch />}
              colorScheme="teal"
              variant="outline"
              maxW="300px"
              minW="150px"
              onClick={() => SearchHandler()}
            >
              Search
            </Button>
          </Box>
        </Box>
        {/* List of users section */}
        <Box mt="5" rounded={'lg'} boxShadow="base">
          <Box p="4" display={'flex'} justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold">
              List Users
            </Text>
            {/* Add of user option */}
            <Button
              colorScheme="teal"
              variant="outline"
              maxW={'300px'}
              minW="150px"
              leftIcon={<AiOutlineUserAdd fontSize={'20px'} />}
              onClick={onOpen}
            >
              Add User
            </Button>
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Avatar</Th>
                  <Th>Fullname</Th>
                  <Th>Email</Th>
                  <Th>Age</Th>
                  <Th>Country</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users?.map(({ _id, fullname, email, age, country }) => {
                  return (
                    <Row
                      id={_id}
                      fullname={fullname}
                      email={email}
                      age={age}
                      country={country}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <DrawerExample />
      </Container>
    </div>
  );
}

export default App;
