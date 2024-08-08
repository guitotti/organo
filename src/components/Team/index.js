import Employee from "../Employee";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

const Team = ({ employees, onDelete, changeColor, ...props }) => {
  return (
    employees.length > 0 && (
      <section className="team" style={{ backgroundColor: hexToRgba(props.color, '0.4')}}>
        <input
          onChange={(event) => changeColor(event.target.value, props.name)}
          value={props.color}
          type="color"
          className="input-color"
        />
        <h3 style={{ borderColor: props.color }}>{props.name}</h3>
        <div className="employees">
          {employees.map((employee) => {
            return (
              <Employee
                bgColor={props.color}
                key={employee.name}
                name={employee.name}
                position={employee.position}
                image={employee.image}
                onDelete={onDelete}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
