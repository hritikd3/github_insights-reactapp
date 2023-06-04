import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <><Wrapper>
      <div>
        <h1>404</h1>
        <h3>Oops! You weren't supposed to see this </h3>

    <Link to='/' className="btn">
      Take me to Homem Page
    </Link>
      </div>
    </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 12rem;
  }
  h3 {
  font-size: 2rem;
    color: var(--clr-grey-3);
    margin-bottom: 2.5rem;
  }
`;
export default Error;
