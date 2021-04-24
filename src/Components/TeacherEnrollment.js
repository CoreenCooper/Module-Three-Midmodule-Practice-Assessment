import { Component } from "react";

const includesLetters = (string) => {
  const digits = "0123456789";
  for (const char of string) {
    if (!digits.includes(char)) return true;
  }
};

class TeacherEnrollment extends Component {
  state = { name: "", subject: "", email: "", zipCode: "", phoneNumber: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { averageGPA, studentCount } = this.props;
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    if (!name || !subject || !email) {
      window.alert(`Input is invalid`);
    } else if (phoneNumber.length != 10 || includesLetters(phoneNumber)) {
      window.alert(`Phone number is not valid`);
    } else if (zipCode.length !== 5 || includesLetters(zipCode)) {
      window.alert(`Zip code is not valid`);
    } else {
      window.alert(`You are now the teacher
      You have ${studentCount} students
      The average GPA is ${averageGPA.toFixed(2)}`);
    }
  };

  render() {
    const { name, subject, email, zipCode, phoneNumber } = this.state;
    return (
      <section>
        <h2>Teacher Enrollment</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            onChange={this.handleChange}
            value={name}
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            onChange={this.handleChange}
            value={subject}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            name="zipCode"
            onChange={this.handleChange}
            value={zipCode}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            onChange={this.handleChange}
            value={phoneNumber}
          />
          <button>Teach Class</button>
        </form>
      </section>
    );
  }
}

export default TeacherEnrollment;
