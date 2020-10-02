import React from 'react';

function MyApp() {
  const firstName = 'Lucas';
  const lastName = 'Amado';

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }

  const styles = {
    color: '#FF8C00',
  };

  return (
    <h1 style={/* { color: '#FF8C00' } */ styles}>
      Hello {firstName + ' ' + lastName}!
    </h1>
  );
  // Hello {`$firstName $lastName`}
}

export default MyApp;
