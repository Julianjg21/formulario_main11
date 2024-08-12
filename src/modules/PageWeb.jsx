import React from "react";
import { Navigate } from "react-router-dom";

class PageWeb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sdsd",
      email: "",
      mensaje: "",
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const datos = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.mensaje
    };

    fetch("http://localhost:5000/page2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          this.setState({
            redirect: true
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Navigate to="/page2/hola" state={{ 
          name: this.state.name, 
          email: this.state.email, 
          mensaje: this.state.mensaje 
        }} />
      );
    }

    return (
      <div className="container">
        <h2>Formulario de Contacto</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={this.state.mensaje}
              onChange={(event) => this.setState({ mensaje: event.target.value })}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PageWeb;
