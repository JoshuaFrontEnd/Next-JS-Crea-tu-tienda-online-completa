import Link from 'next/link'
import { Account } from '../Account'
import Menu from '../Menu/Menu'
import { Image } from 'semantic-ui-react'
import styles from './TopBar.module.scss'

export function TopBar({ isOpenSearch }) {
  return (
    <div className={ styles.topBar }>

      <div className={ styles.left }>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming" />
        </Link>
      </div>

      <div className={ styles.center }>
        <Menu isOpenSearch={ isOpenSearch } />
      </div>

      <div className={ styles.right }>
        <Account />
      </div>

    </div>
  )
}
