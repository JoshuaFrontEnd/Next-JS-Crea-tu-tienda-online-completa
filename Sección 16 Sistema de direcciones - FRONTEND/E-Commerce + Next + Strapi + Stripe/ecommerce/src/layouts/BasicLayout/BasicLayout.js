import { Container } from 'semantic-ui-react'
import styles from './BasicLayout.module.scss'
import classNames from 'classnames'
import { Footer, TopBar } from '@/components/Auth/Layout'

export function BasicLayout({
  children,
  isOpenSearch = false,
  isContainer = false,
  relative = false,
}) {
  return (
    <>
      {/* TopBar */}
      <TopBar isOpenSearch={ isOpenSearch }/>

      {/*
        La logica acá es que si a "BasicLayout" le paso "isContainer", "children" se renderizara en un contenedor con ancho limite, si no, el ancho del contenedor abarcará toda la ventana
      */}
      <Container fluid>
        <div className={ classNames({ [ styles.relative ]: relative }) }>
          { isContainer ? <Container>{ children }</Container> : children }
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  )
}
