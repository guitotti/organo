import "./Form.css";
import TextInput from "../TextInput";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const teams = [
    "Programação",
    "Front-end",
    "Data Science",
    "DevOps",
    "Ux & Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.toRegisterEmployee({
      name, 
      position,
      image,
      team
    })
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados dos times de eSports da organização:</h2>
        <TextInput
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextInput
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={position}
          onChange={(value) => setPosition(value)}
        />
        <TextInput
          label="Imagem"
          placeholder="Digite o endereço de imagem"
          value={image}
          onChange={(value) => setImage(value)}
        />
        <DropdownList
          required={true}
          label="Times"
          items={props.teams}
          value={team}
          onChange={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
