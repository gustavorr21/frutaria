import React from "react";
import { Formik, useField } from "formik";
import * as yup from "yup";

const Campo = props => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input {...field} {...props}
            className={meta.error && meta.touched ? 'is-invalid' : ''}
            />
            {meta.error && meta.touched ? (<div className="invalid-feedback">{meta.error}</div>) : null}
        </div>
    )
}


const AdicionarCliente = () =>{
    const esquemaValidacao = yup.object({
        nome:yup.string().required('O Nome é obrigatorio')
        .min(5, 'O nome deve ter no minimo 5 caracteres')
        .max(40, 'O nome deve ter no maximo 40 caracteres'),
        email: yup.string().required('O Email é obrigatorio')
        .email('O email é invalido'),
        nascimento: yup.date().required('A Data de Nascimento é obrigatorio').max(new Date(),'Voce nao ter nascido no futuro')
    });
return (<>
    <h1>Cadastro de Cliente</h1>

    <Formik initialValues={{nome: '', email: '', nascimento: ''}}
    validationSchema={esquemaValidacao}
    onSubmit={(values) =>{
        alert(JSON.stringify(values));
    }}>
        {(props) =>(
        <form onSubmit={props.handleSubmit}>
                <Campo type="text" id="nome" name="nome" placeholder="Nome" label="Nome"/>
                <Campo type="email" id="email" name="email" placeholder="email" label="Email"/>
                <Campo type="date" id="nascimento" name="nascimento" placeholder="Data de Nascimento" label="Data de Nascimento"/>

            <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>
        )}
    </Formik>
</>)
}

export default AdicionarCliente