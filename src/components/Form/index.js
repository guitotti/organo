import "./Form.css";
import TextInput from "../TextInput";
import DropdownList from "../DropdownList";
import Button from "../Button";

const Form = () => {
  const teams = [
    "Programação",
    "Front-end",
    "Data Science",
    "DevOps",
    "Ux & Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados dos times de eSports da organização:</h2>
        <TextInput required={true} label="Nome" placeholder="Digite o seu nome" />
        <TextInput required={true} label="Cargo" placeholder="Digite o seu cargo" />
        <TextInput label="Imagem" placeholder="Digite o endereço de imagem" />
        <DropdownList required={true} label="Times" items={teams} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
