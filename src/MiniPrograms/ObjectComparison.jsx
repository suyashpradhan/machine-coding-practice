import { useState } from "react";

const Ram = {
  name: "Ram",
  age: 25,
  yuga: "Treta",
};

const Krishna = {
  name: "Krishna",
  age: 31,
  yuga: "Dwapar",
};

export const ObjectComparison = () => {
  const [age, setAge] = useState({});

  const moreAge = (obj, obj2) => {
    if (obj.age > obj2.age) {
      return setAge(obj);
    } else {
      return setAge(obj2);
    }
  };

  return (
    <div>
      <h1>More Age</h1>
      <button onClick={() => moreAge(Ram, Krishna)}>Check Age</button>

      <h1>{age.name}</h1>
      <h3>{age.age}</h3>
      <h4>{age.yuga}</h4>
    </div>
  );
};

/*
 */
