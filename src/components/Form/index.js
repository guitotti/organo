import "./Form.css";
import TextInput from "../TextInput";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados dos times de eSports da organização:</h2>
        <TextInput label="Nome" placeholder="Digite o seu nome" />
        <TextInput label="Cargo" placeholder="Digite o seu cargo" />
        <TextInput label="Imagem" placeholder="Digite o endereço de imagem" />
      </form>
    </section>
  );
};

export default Form;
