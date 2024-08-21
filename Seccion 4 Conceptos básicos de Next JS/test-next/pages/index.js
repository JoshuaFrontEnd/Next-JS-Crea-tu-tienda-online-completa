import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Estamos en la Home</h1>
        {/* Link normal con recarga de pagina, es util para sacar al usuario del sitio web */}
        <a href="/contact">Contacto, recargando la página</a>

        {/* Link de Next, sin recarga de página, es util para navegaciones dentro de la página  */}
        <Link href="/contact">Contacto, sin recargar la página</Link>
      </main>
    </>
  );
}
