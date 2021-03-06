import React, { Component } from 'react';

class Respuesta extends Component {

  render() {
    if (!this.props.respuestaAEliminar || (this.props.respuestaAEliminar && this.props.respuestaAEliminar._id !== this.props.respuesta._id)) {
      return (
        <div className="col-md-4 boton">
          {(this.props.currentUser && this.props.currentUser.profile.role == 'admin') ?
            <div>
              <div className="col-md-10">
                <a className="btn btn-info btn-lg boton-modo-admin" onClick={() => this.props.cargarRespuesta(this.props.respuesta._id, this.props.pregunta, this.props.idPregunta)}>
                  {this.props.respuesta.contenido}
                </a>
              </div>
              <div className="col-md-1">
                <a className="btn btn-info btn-lg btn-cancelar" href="#eliminacion" aria-label="Eliminar respuesta" onClick={() => this.props.prepararRespuestaAEliminar(this.props.respuesta)}>
                  X
                </a>
              </div>
            </div> :
            <a className="btn btn-info btn-lg"  onClick={() => this.props.cargarRespuesta(this.props.respuesta._id, this.props.pregunta, this.props.idPregunta)}>
              {this.props.respuesta.contenido}
            </a>
          }
        </div>
      )
    }
    else {
      return (
        <div className="col-md-4 boton">
          <a className="btn btn-info btn-lg boton-modo-admin btn-disabled" >
            {this.props.respuesta.contenido}
          </a>
          <a className="btn btn-info btn-lg btn-cancelar btn-disabled" aria-label="Eliminar respuesta" >
            X
            </a>
        </div>
      )
    }
  }
}

export default Respuesta;
