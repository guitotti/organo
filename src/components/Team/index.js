import Employee from "../Employee";
import "./Team.css";

const Team = ({ employees, onDelete, ...props}) => {
  const css = {
    backgroundColor: props.secondaryColor,
  };

  return (
    employees.length > 0 && (
      <section className="team" style={css}>
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="employees">
          {employees.map((employee) => {
            return (
              <Employee
                bgColor={props.primaryColor}
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
