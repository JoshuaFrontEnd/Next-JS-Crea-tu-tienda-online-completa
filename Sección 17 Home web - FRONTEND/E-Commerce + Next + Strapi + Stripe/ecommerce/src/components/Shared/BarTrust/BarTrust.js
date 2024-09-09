import { Container, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { data } from "./BarTrust.data";
import styles from "./BarTrust.module.scss";

export function BarTrust() {
  return (
    <div className={styles.barTrust}>
      <Container className={styles.content}>
        {map(data, ({ icon, title, description }) => (
          <div className={styles.block}>
            <Icon name={icon} />
            <div>
              <h5>{title}</h5>
              <span>{description}</span>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
