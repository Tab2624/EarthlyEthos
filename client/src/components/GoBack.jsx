import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBack = (props) => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1); // This will take you back to the previous component in the history stack
  };

  return <button className="btn btn-outline-danger" onClick={goBackHandler}>
      Go Back
    </button>;
};

export default GoBack;
