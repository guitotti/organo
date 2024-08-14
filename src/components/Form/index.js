import "./Form.css";
import Input from "../Input";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";

const Form = ({ teams, toRegisterEmployee, createTeam }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState(teams[0]);

  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    toRegisterEmployee({
      name,
      position,
      image,
      team,
    });
    setName("");
    setPosition("");
    setImage("");
    setTeam(teams[0]);
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card:</h2>
        <Input
          required
          label="Nome"
          placeholder="Digite o seu nome"
          value={name}
          onChange={(value) => setName(value)}
        />
        <Input
          required
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={position}
          onChange={(value) => setPosition(value)}
        />
        <Input
          label="Imagem"
          placeholder="Digite o endereço de imagem"
          value={image}
          onChange={(value) => setImage(value)}
        />
        <DropdownList
          required
          label="Times"
          items={teams}
          value={team}
          onChange={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createTeam({ name: teamName, color: teamColor });
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <Input
          required
          label="Nome"
          placeholder="Digite o nome do time"
          value={teamName}
          onChange={(value) => setTeamName(value)}
        />
        <Input
          required
          type="color"
          label="Cor"
          value={teamColor}
          onChange={(value) => setTeamColor(value)}
        />
        <Button>Criar novo time</Button>
      </form>
    </section>
  );
};

export default Form;
