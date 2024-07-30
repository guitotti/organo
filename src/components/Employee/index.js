import "./Employee.css";

const Employee = ({ image, name, position, bgColor, onDelete }) => {
  return (
    <div className="employee">
      <div className="onDelete" onClick={onDelete}>deletar</div>
      <div className="header" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default Employee;
