import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Professor Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        
           {props.courses.map(course => {
                 
          return (
       
            <tr key={course.id}>
      
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                 
                    if(window.confirm("¿Está seguro (a) de eliminar el regisro seleccionado?")) {
                      props.deleteCourse(course.id);
                      toast.info("Curso eliminado con éxito.");
                    }
                   
                  }}
                >
                  Eliminar
                </button>
              </td>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
                 <td>{course.name}</td>
             <td>{course.category}</td>
            </tr>
          );
        })}

        
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      professorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired

 

};

CourseList.defaultProps = {

    courses: []
  
};

export default CourseList;