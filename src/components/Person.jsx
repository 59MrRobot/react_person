import React from 'react';
import './Person.scss';

const Person = ({
  name, age, sex, isMarried, partnerName,
}) => {
  const partner = sex === 'f' ? 'husband' : 'wife';
  const isMarriedOrNot = isMarried
    ? `My ${partner}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{isMarriedOrNot}</p>
    </section>
  );
};

export default Person;
