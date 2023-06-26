import React, {useState} from 'react';
import styles from './components.module.css';

const RegisterForm = (props) => {
    // Register State
    const [item, getItem] = useState({
        name: '',
        phone: '',
        email: '',
        genre: '',
        age: '',
        dosis: '',
        date: ''
    })

    const [error, getError] = useState(false);

    const updateState = e => {
        getItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    const {name, phone, email, genre, age, dosis, date} = item;

    const itemSubmit = e => {
        e.preventDefault();

        if (name.trim() === '' ||  phone.trim() === '' ||  email.trim() === '' || genre.trim() === '' || age.trim() === '' || dosis.trim() === '' || date.trim() === '') {
            getError(true);
            return;
        }

        getError(false);

        item.id = (Math.random()) * 10;

        props.createRegister(item);

        getItem({
            name: '',
            phone: '',
            email: '',
            genre: '',
            age: '',
            dosis: '',
            date: ''
        })
    }

    return (
        <div className={styles.mainForm}>
            <h2>Registrar Paciente</h2>
            { error ? <p>Todos los campos son obligatiorios</p> : null }
            <form onSubmit={itemSubmit}>
                <label>Nompre Completo</label>
                <input type='text' name='name' placeholder='Nombre Completo' onChange={updateState} value={name} />
                <label>Teléfono</label>
                <input type='text' name='phone' placeholder='Teléfono' onChange={updateState} value={phone} />
                <label>Correo Electrónico</label>
                <input type='email' name='email' placeholder='correo@mail.com' onChange={updateState} value={email} />
                <label>Sexo</label>
                <input type='text' name='genre' placeholder='Hombre/Mujer' onChange={updateState} value={genre} />
                <label>Edad</label>
                <input type='number' name='age' placeholder='Edad' onChange={updateState} value={age} />
                <label>Número de Dósis</label>
                <input type='text' name='dosis' placeholder='Primera/Segunda' onChange={updateState} value={dosis} />
                <label>Fecha de Registro</label>
                <input type='date' name='date' onChange={updateState} value={date} />
                <button type='submit'>Agregar Registro</button>
            </form>
        </div>
    )
}

export default RegisterForm;