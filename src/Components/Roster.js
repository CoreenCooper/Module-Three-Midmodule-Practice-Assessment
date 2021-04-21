import React from "react";

const Roster = ({ roster, averageGPA }) => {
  return (
    <section>
      <h2>Enrolled</h2>
      <ul className="EnrolledList">
        {roster.map((student) => {
          const { name, GPA, id } = student;
          return (
            <li key={id}>
              {name}: {GPA.toFixed(2)}
            </li>
          );
        })}
      </ul>
      <h3>Total Student Count: {roster.length}</h3>
      <h3>Average GPA: {averageGPA.toFixed(2)}</h3>
    </section>
  );
};

export default Roster;
