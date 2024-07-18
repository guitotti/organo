import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [employees, setEmployees] = useState([])

  const handleRegisterNewEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form toRegisterEmployee={employee => handleRegisterNewEmployee(employee)}/>
      <Team name="Programação" />
    </div>
  );
}

export default App;
