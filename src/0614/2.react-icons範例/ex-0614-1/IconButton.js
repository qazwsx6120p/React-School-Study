import React from 'react';
import { FaReact } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const IconButton = (props) => (
  <>
    <Button variant="primary" {...props}>
      <FaReact color="white" size="2em" /> React
    </Button>
  </>
);

export default IconButton;
