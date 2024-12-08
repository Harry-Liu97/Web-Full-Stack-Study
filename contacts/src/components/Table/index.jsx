import { getContacts } from "../../APIcalls";
import React, { useState, useEffect } from "react";
import TableDisplay from "./components/TableDisplay";

import styled from '@emotion/styled';
import { devices } from "../../styles/variables";

const Container = styled.div`
  @media ${devices.miniMobile} {
    width: 100;
  }
  @media ${devices.tablet} {
    width: 95%;
    margin: 50px auto;
  }
`;

const TableComponent = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();
      setContacts(data);
    };

    fetchContacts();

  }, []);

  return contacts.length > 0 ? (
    <Container>
        <TableDisplay rows={contacts} />
    </Container>
  
  ) : (
    <div>Loading...</div>
  );
}

export default TableComponent;
