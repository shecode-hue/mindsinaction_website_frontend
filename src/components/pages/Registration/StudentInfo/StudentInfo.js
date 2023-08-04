import React, { useEffect, useState } from "react";
import "./StudentInfo.css";
import Axios from "axios";

export default function StudentInfo() {
  const [studentInfo, setStudentInfo] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get-students").then((response) => {
      setStudentInfo(response.data);
    });
  }, []);

  const numberOfStudents = studentInfo.length;

  return (
    <div>
      <div className="student-data-form">
        <div className="number">
          <p>{numberOfStudents} students</p>
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>School</th>
            <th>Grade</th>
            <th>Parent name</th>
            <th>Email</th>
            <th>Cellphone number</th>
            <th>Date</th>
          </tr>
          {studentInfo.map((x, i) => {
            return (
              <tr key={i}>
                <td>
                  {x.firstname} {x.lastname}
                </td>
                <td>{x.age}</td>
                <td>{x.address}</td>
                <td>{x.school}</td>
                <td>{x.grade}</td>
                <td>{x.parent_name}</td>
                <td>{x.email}</td>
                <td>{x.phoneNumber}</td>
                <td>{x.date}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
