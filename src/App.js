import React from "react";
import Roster from "./Components/Roster";
import StudentList from "./Components/StudentList";
import TeacherEnrollment from "./Components/TeacherEnrollment";

class App extends React.Component {
  state = { roster: [] };

  addStudent = (student) => {
    this.setState((prevState) => {
      return { roster: [student, ...prevState.roster] };
    });
  };

  // method instead of in render
  // calculateAverage = () => {
  //   const { roster } = this.state;
  //   let averageGPA = 0;
  //   this.state.roster.forEach(student => averageGPA += student.GPA);
  //   averageGPA /= roster.length;
  //   return averageGPA || 0;
  // }

  render() {
    const { roster } = this.state;
    let averageGPA = 0;
    this.state.roster.forEach((student) => (averageGPA += student.GPA));
    averageGPA /= roster.length;

    // using reduce
    // const averageGPA = roster.reduce((sum, student) => sum + student.GPA, 0) / roster.length

    return (
      <div className="App">
        <StudentList addStudent={this.addStudent} />
        <TeacherEnrollment
          averageGPA={averageGPA || 0}
          studentCount={roster.length}
        />
        <Roster roster={this.state.roster} averageGPA={averageGPA || 0} />
      </div>
    );
  }
}

export default App;
