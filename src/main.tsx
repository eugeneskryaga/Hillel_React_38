import { createRoot } from "react-dom/client";
import { students } from "./data";
import "./index.css";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <ul>
    {students.map(student => (
      <li key={student.id}>
        <img
          src={student.avatar}
          alt="avatar"
        />
        <p><span>Name:</span> {student.name}</p>
        <p><span>Age:</span>  {student.age}</p>
        <p><span>Course:</span>  {student.course}</p>
        <p><span>Status:</span>  {student.isOnline ? "Online \u{1F7E2}": "Offline \u{1F534}"}</p>
      </li>
    ))}
  </ul>,
);
