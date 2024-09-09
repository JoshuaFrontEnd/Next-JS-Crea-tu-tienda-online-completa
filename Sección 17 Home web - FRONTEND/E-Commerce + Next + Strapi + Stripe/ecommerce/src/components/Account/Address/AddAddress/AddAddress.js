import { useState } from "react";
import { AddressForm } from "../AddressForm";
import { BasicModal } from "@/components/Shared";
import { Button } from "semantic-ui-react";
import styles from "./AddAddress.module.scss";

export function AddAddress({ onReload }) {
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  console.log(show);

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Crear
      </Button>
      <BasicModal show={show} onClose={onOpenClose} title="Nueva dirección">
        <AddressForm onClose={onOpenClose} onReload={onReload} />
      </BasicModal>
    </>
  );
}
