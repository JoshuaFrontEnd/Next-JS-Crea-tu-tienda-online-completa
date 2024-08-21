import { useRouter } from 'next/router'

export default function Game() {

  const router = useRouter()
  const { platform, game } = router.query


  return (
    <>
      <h1>Estamos en la plataforma: { platform }</h1>
      <h2>Estamos en el juego: { game }</h2>
    </>
  )
}
