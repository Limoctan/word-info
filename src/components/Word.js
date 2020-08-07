import React from 'react';

const Word = (props) => {
  console.log(props);
  const { word } = props;
  if(!word || word.length === 0) return <p>Word not found.</p>;

  return (
    <div>
      <h3>{ word.word }</h3>
      <p>{ word.definitions[0].definition }</p>
    </div>
  );
}

export default Word;
