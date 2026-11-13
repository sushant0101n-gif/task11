
import StudentProfileCard from './StudentProfileCard';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Student Directory</h1>
      <p className="subtitle">
        Gachon University | Computer Engineering
      </p>

      <div className="student-list">

        <StudentProfileCard
          name="Neupane Sushant"
          studentId="202537254"
          major="Computer Engineering"
          year={2}
          gpa={4.39}
        />

        <StudentProfileCard
          name="Silwal Saiman"
          studentId="202537200"
          major="Computer Engineering"
          year={2}
          gpa={3.75}
        />

        <StudentProfileCard
          name="Khanal Aswin"
          studentId="202537244"
          major="Computer Engineering"
          year={2}
          gpa={3.80}
        />

      </div>
    </div>
  );
}

export default App;
