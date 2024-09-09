import { Token } from '@/api'

export async function authFetch( url, params ){
  const tokenCtrl = new Token()
  const token = tokenCtrl.getToken()

  const logout = () => {
    tokenCtrl.removeToken()
    // window.location.replace("/")
  }

  if ( !token ) {

    // LogOut
    logout()

  } else {

    if ( tokenCtrl.hasExpired( token ) ) {

      // LogOut
      logout()

    } else {

      // LogIn
      const paramsTemp = {
        ...params,
        headers: {
         ...params?.headers,
          Authorization: `Bearer ${ token }`
        }
      }

      try {
        return await fetch( url, paramsTemp )
      } catch ( error ) {
        return error
      }

    }

  }

}