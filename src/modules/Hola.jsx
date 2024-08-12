import React from "react";
import withLocation from "./Hoc"

class Hola extends React.Component {
  render() {
    const { state } = this.props.location;
    const name = state ? state.name : "Nombre no proporcionado";
    const email = state ? state.email : "Email no proporcionado";
    const mensaje = state ? state.mensaje : "Mensaje no proporcionado";

    return (
      <div className="container">
        <h1>Usuario</h1>
        <p>Nombre: {name}</p>
        <p>Email: {email}</p>
        <p>Mensaje: {mensaje}</p>
      </div>
    );
  }
}

export default withLocation(Hola);
