import React, {useState, useRef} from 'react'
import './form.css';
import { Modal } from '@material-ui/core';
//import { Formik, Form } from 'formik';
//import { TextField } from './textField';
//import * as Yup from 'yup';

//this destructurin receives a status to know if it should show the form or not
const FormAir = ({showForm, setShowForm}) => {


/* This fragment of code is validation through formik, it is functional but I wanted to leave the validation by html active

    const validate = Yup.object({
        nombre: Yup.string()
          .max(50, 'Debe tener maximo 50 caracteres')
          .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, "Solo se admiten letras")
          .required('Debes ingresar tu nombre'),
        email: Yup.string()
          .email('Email Invalido')
          .required('Email es obligatorio'),
        celular: Yup.string()
          .matches(/^\d{10}/, 'Solo se admiten 10 numeros')
          .max(10, 'deben ser 10 digitos')
          .min(10, "deben ser 10 digitos")
          .required('Celular es obligatorio')
      })

      return (
        <>
        <Formik
          initialValues={{
            nombre: '',
            email: '',
            celular: '',
            edad: ed
          }}
          validationSchema={validate}
          onSubmit={values => {
            console.log(values)       
          }}
          
        >
          {formik => (
            <div className="form-one">
              <h1>Formulario</h1>
              <Form>
                <TextField label="Nombre" name="nombre" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Celular" name="celular" type="tel" maxLength="10"/>
                <TextField label="Edad" name="edad" min="18" max="100" type="range" />
                <span id="ed">{ values.edad + " años"}</span>
                <button className="btn" type="submit">Enviar</button>
              </Form>
            </div>
          )}
        </Formik>
        </>
      )
*/

    const [showModal, setShowModal] = useState(false);

    const [ values, setValues] = useState({
        nombre: "",
        email: "",
        celular: "",
        edad: ""
    });

    const formulario = React.createRef()

    //This is the body of the modal
    const bodyModal = (
        <div className="modal">
            <div align="center">
                <h1>Muy Bien</h1>
                <hr></hr>
                <p>Tu información fue enviada con éxito, estaremos en contacto
                contigo</p>
            </div>
        </div>
    )

    // this function check the changes in the form inputs
    const handleInputChange = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })
    }

    //this function receives the values ​​of the inputs sends them to the console and warns the modal that it should appear for 5 seconds
    const sendValues = (event) => {
        event.preventDefault()
        console.log(values)
        setShowModal(true);
        setTimeout(function(){ setShowModal(false) }, 5000);
        //document.getElementById("formulario").reset();
        formulario.current.reset();
        setShowForm(false)

    }

    //this is the structure of the Form
    return (
        <>
          { showForm &&  
            <form id="formulario" className="form-one" onSubmit={sendValues} ref={formulario}>
                <h1 className="title">Formulario</h1>
                <div className="inp">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre" pattern="[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]{2,254}" title="Solo se permiten letras de la A a la Z" className="fields" minLength="2" onChange={handleInputChange} name="nombre" required></input>
                </div>
                <div className="inp">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" className="fields" onChange={handleInputChange} name="email" required></input>
                </div>
                <div className="inp">
                    <label htmlFor="celular">Celular</label>
                    <input type="tel" id="celular" placeholder="Celular" pattern="[0-9]{10}" maxLength="10"title="Un numero valido contiene 10 digitos [0-9] consecutivos" className="fields" onChange={handleInputChange} name="celular" required></input>
                </div>
                <div className="inp">
                    <label htmlFor="edad">Edad</label>
                    <input type="range" id="edad "min="18" max="100" placeholder="Edad" className="fields-range" onChange={handleInputChange} name="edad" required></input>
                    <span id="ed">{values.edad + " años"}</span>
                </div>
                <button type="submit" className="btn-submit">Enviar</button>
            </form>
            }
            <Modal
            open={showModal}>
                {bodyModal}
            </Modal>
            
        </>
    );
}


export default FormAir;