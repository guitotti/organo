import { AiFillCloseCircle } from "react-icons/ai"; 

import "./Employee.css";

const Employee = ({ image, name, position, bgColor, onDelete }) => {
  return (
    <div className="employee">
      <AiFillCloseCircle size={25} className="onDelete" onClick={onDelete} />
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
