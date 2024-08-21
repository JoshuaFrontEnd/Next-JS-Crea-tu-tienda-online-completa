export default function Saludar( props ) {

  const { saludarFn } = props

  return (
    // <div>Hola { props.name }, tiene { props.edad } años</div>
    // <p>Hola { props.userInfo.nombre }, tiene { props.userInfo.edad } años, su color favorito es el { props.userInfo.color } </p>
    <button onClick={ saludarFn } >
      Saludar por consola
    </button>
  )
}
