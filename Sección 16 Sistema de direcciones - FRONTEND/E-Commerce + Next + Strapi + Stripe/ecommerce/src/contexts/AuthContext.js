import { createContext, useEffect, useState } from 'react'
import { Token, User } from '@/api'

const tokenCtrl = new Token()
const userCtrl = new User()

export const AuthContext = createContext()

export function AuthProvider({ children }) {

  // - Estado del contexto, en este caso el estado seran los datos de autenticacion inicializados en null
  const [ user, setUser ] = useState( null )
  const [ token, setToken ] = useState( null )
  const [ loading, setLoading ] = useState( true )

  useEffect(() => {

    ( async () => {

      const token = tokenCtrl.getToken()

      if ( !token ) {
        logout()
        setLoading( false )
        return
      }

      if ( tokenCtrl.hasExpired( token ) ){
        logout()
      } else {
        await login( token )
      }

    })()

  }, [])

  const login = async ( token ) => {

    try {

      // 1. Setear el token en el localStorage
      tokenCtrl.setToken( token )

      // 2. Obtener los datos del usuario
      const response = await userCtrl.getMe()

      // 3. Setear los datos del usuario en el state user
      setUser( response )

      // 4. Setear el valor del token en el state token
      setToken( token )

      // 5. Hacer un setLoading false
      setLoading( false )

    } catch ( error ) {

      console.log( error )

    }

  }

  const logout = () => {
    // Cerrar Sesion se considera borrar el token del localstorage y reiniciar los valores de los estados
    console.log('Log Out')
    tokenCtrl.removeToken()
    setToken( null )
    setUser( null )
  }

  const updateUser = ( key, value ) => {
    setUser({
      ...user,
      [ key ]: value
    })
   }

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser
  }

  if ( loading ) return null

  return (
    <AuthContext.Provider value={ data }>
      { children }
    </AuthContext.Provider>
  )

}