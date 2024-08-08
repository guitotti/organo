import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#57C278",
    },
    {
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      name: "Data Sciense",
      color: "#A6D157",
    },
    {
      name: "Devops",
      color: "#E06B69",
    },
    {
      name: "UX e Design",
      color: "#D86EBF",
    },
    {
      name: "Mobile",
      color: "#FEBA05",
    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      name: "JULIANA AMOASEI",
      position: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "DANIEL ARTINE",
      position: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "GUILHERME LIMA",
      position: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "PAULO SILVEIRA",
      position: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "JULIANA AMOASEI",
      position: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "DANIEL ARTINE",
      position: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "GUILHERME LIMA",
      position: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "PAULO SILVEIRA",
      position: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "JULIANA AMOASEI",
      position: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "DANIEL ARTINE",
      position: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "GUILHERME LIMA",
      position: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "PAULO SILVEIRA",
      position: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "JULIANA AMOASEI",
      position: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "DANIEL ARTINE",
      position: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "GUILHERME LIMA",
      position: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "PAULO SILVEIRA",
      position: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "JULIANA AMOASEI",
      position: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "DANIEL ARTINE",
      position: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "GUILHERME LIMA",
      position: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "PAULO SILVEIRA",
      position: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "JULIANA AMOASEI",
      position: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      name: "DANIEL ARTINE",
      position: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      name: "GUILHERME LIMA",
      position: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      name: "PAULO SILVEIRA",
      position: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].name,
    },
  ];

  const [employees, setEmployees] = useState(inicial);

  const handleRegisterNewEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = () => {};

  function changeTeamColor(color, name) {
    setTeams(
      teams.map((team) => {
        if (team.name === name) {
          team.color = color;
        }
        return team;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        toRegisterEmployee={(employee) => handleRegisterNewEmployee(employee)}
      />

      {teams.map((team) => (
        // <Team
        //   key={team.name}
        //   name={team.name}
        //   primaryColor={team.primaryColor}
        //   color={team.secondaryColor}
        //   employees={employees.filter(
        //     (employee) => employee.team === team.name
        //   )}
        //   onDelete={deleteEmployee}
        // />
        <Team
          key={team.name}
          name={team.name}
          changeColor={changeTeamColor}
          color={team.color}
          employees={employees.filter(
            (employee) => employee.team === team.name
          )}
        />
        // console.log(team)
      ))}
    </div>
  );
}

export default App;
