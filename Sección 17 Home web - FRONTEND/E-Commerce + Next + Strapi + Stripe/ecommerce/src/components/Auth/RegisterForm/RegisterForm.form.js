import * as Yup from 'yup'

// Al usar "Yup" creamos una funcion que retorna los campos con los valores iniciales de un formulario, en este caso del formulario de "SignUp"
export function initialValues(){
  return {
    email: '',
    username: '',
    name: '',
    password: ''
  }
}

// Luego para validar los datos se utiliza el siguiente formato por cada campo
export function validationSchema(){
  return Yup.object({
    email: Yup.string().email( true ).required( true ),
    username: Yup.string().required( true ),
    name: Yup.string().required( true ),
    password: Yup.string().required( true ),
  })
}