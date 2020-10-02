import React from 'react';

function Joke(props) {
  return (
    <div>
      <p>Question: {props.info.question} </p>
      <p style={{ fontWeight: 'bold' }}>Answer: {props.info.punchLine} </p>
    </div>
  );
}

export default Joke;
