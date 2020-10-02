import React from 'react';
import ContactCard from './ContactCard';

function App() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          name: 'Mr.Woow',
          imgUrl: 'http://placekitten.com/300/200',
          phone: '(212) 555-1234',
          email: 'mr.woow@catnap.meow',
        }}
        /* 
        name="Mr.Woow"
        imgUrl="http://placekitten.com/300/200"
        phone="(212) 555-1234"
        email="mr.woow@catnap.meow" 
        */
      />
      <ContactCard
        contact={{
          name: 'Fllufy Cat',
          imgUrl: 'http://placekitten.com/400/200',
          phone: '(212) 555-1234',
          email: 'fluffy@catnap.meow',
        }}
      />
      <ContactCard
        contact={{
          name: 'Destroyer',
          imgUrl: 'http://placekitten.com/400/300',
          phone: '(212) 555-1234',
          email: 'destroyer@catnap.meow',
        }}
      />
      <ContactCard
        contact={{
          name: 'Mr.Fenix',
          imgUrl: 'http://placekitten.com/200/100',
          phone: '(212) 555-1234',
          email: 'mr.Fenix@catnap.meow',
        }}
      />
    </div>
  );
}

export default App;
