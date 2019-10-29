import React from "react";
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Administración del sistema</h1>
      <p>React, Flux y React Router para aplicaciones web ultra sensibles.</p>
      <p style={{color: 'blue'}}>Práctica modificado por: Waldo Trebejo</p>
      <Link to="about" className="btn btn-primary">Acerca de</Link>
    </div>
  );
}

export default HomePage;