import React from 'react';
import styles from './components.module.css';

const Register = (props) => (
    <div className={styles.item}>
        <p>ID: <span>{props.register.id}</span></p>
        <p>Nombre Completo: <span>{props.register.name}</span></p>
        <p>Teléfono: <span>{props.register.phone}</span></p>
        <p>Correo: <span>{props.register.email}</span></p>
        <p>Sexo: <span>{props.register.genre}</span></p>
        <p>Edad: <span>{props.register.age}</span></p>
        <p>No. Dósis: <span>{props.register.dosis}</span></p>
        <p>Fecha: <span>{props.register.date}</span></p>

        <button onClick={() => props.deleteRegister(props.register.id)}>Eliminar &times;</button>
    </div>
)

export default Register;