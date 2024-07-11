import "./Form.css";
import TextInput from "../TextInput";
import DropdownList from "../DropdownList";

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

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados dos times de eSports da organização:</h2>
        <TextInput label="Nome" placeholder="Digite o seu nome" />
        <TextInput label="Cargo" placeholder="Digite o seu cargo" />
        <TextInput label="Imagem" placeholder="Digite o endereço de imagem" />
        <DropdownList label="Times" items={teams} />
      </form>
    </section>
  );
};

export default Form;
